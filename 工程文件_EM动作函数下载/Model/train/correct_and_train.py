import os
import sys
import subprocess
import numpy as np
import torch
import torch.optim as optim

MODEL_DIR = os.path.dirname(os.path.dirname(__file__))
sys.path.insert(0, MODEL_DIR)

from train_base import SimpleMLP
from action_mapper import NUM_ACTIONS, ACTION_NAMES

DATA_DIR = os.path.join(MODEL_DIR, "training_data")
ERROR_FILE = os.path.join(MODEL_DIR, "robot_error.txt")
X_FILE = os.path.join(DATA_DIR, "robot_X.npy")
Y_FILE = os.path.join(DATA_DIR, "robot_Y.npy")
MODEL_PATH = os.path.join(MODEL_DIR, "robot_base.pth")


def load_error_data():
    errors = []
    if not os.path.exists(ERROR_FILE):
        return errors
    with open(ERROR_FILE, "r") as f:
        for line in f:
            line = line.strip()
            if not line:
                continue
            parts = line.split("|")
            sensor = list(map(float, parts[0].split(",")))
            wrong_id = int(parts[1]) if len(parts) > 1 else -1
            errors.append((sensor, wrong_id))
    return errors


def interactive_correct(errors):
    new_X, new_Y = [], []
    for i, (sensor, wrong_id) in enumerate(errors):
        print(f"\n{'='*50}")
        print(f"错误记录 #{i+1}")
        print(f"Tag位姿: X={sensor[0]:.3f}m Y={sensor[1]:.3f}m "
              f"Theta={sensor[2]:.1f}° ID={int(sensor[3])}")
        print(f"方块: X={sensor[4]:.0f}px Y={sensor[5]:.0f}px "
              f"面积={sensor[6]:.0f}  手持={'是' if sensor[7] else '否'}")
        print(f"模型错误输出: {wrong_id} ({ACTION_NAMES.get(wrong_id, '未知')})")
        print("\n请选择正确动作:")
        for aid, name in ACTION_NAMES.items():
            print(f"  {aid:2d} → {name}")
        try:
            correct = int(input("正确动作: ").strip())
            if correct not in ACTION_NAMES:
                correct = 0
        except (ValueError, EOFError):
            correct = 0
        new_X.append(sensor)
        new_Y.append(correct)
        print(f"  已记录: {ACTION_NAMES.get(correct, '停止')}")
    return new_X, new_Y


def append_to_dataset(new_X, new_Y):
    os.makedirs(DATA_DIR, exist_ok=True)
    if os.path.exists(X_FILE):
        X = np.load(X_FILE).tolist()
        Y = np.load(Y_FILE).tolist()
    else:
        X, Y = [], []
    added = 0
    for x, y in zip(new_X, new_Y):
        rounded = [round(v, 3) for v in x]
        if rounded not in X:
            X.append(rounded)
            Y.append(y)
            added += 1
    np.save(X_FILE, np.array(X, dtype=np.float32))
    np.save(Y_FILE, np.array(Y, dtype=np.int64))
    return added


def incremental_train(epochs=10, lr=0.0005):
    X = np.load(X_FILE)
    Y = np.load(Y_FILE)

    model = SimpleMLP()
    model.load_state_dict(torch.load(MODEL_PATH, weights_only=True))
    model.train()

    X_t = torch.tensor(X, dtype=torch.float32)
    Y_t = torch.tensor(Y, dtype=torch.long)
    dataset = torch.utils.data.TensorDataset(X_t, Y_t)
    loader = torch.utils.data.DataLoader(dataset, batch_size=64, shuffle=True)

    optimizer = optim.Adam(model.parameters(), lr=lr)
    criterion = torch.nn.CrossEntropyLoss()

    for epoch in range(epochs):
        total_loss = 0
        correct = 0
        total = 0
        for bx, by in loader:
            optimizer.zero_grad()
            logits = model(bx)
            loss = criterion(logits, by)
            loss.backward()
            optimizer.step()
            total_loss += loss.item()
            correct += (logits.argmax(1) == by).sum().item()
            total += len(by)
        acc = correct / total * 100
        print(f"  增量 epoch {epoch+1}/{epochs}: loss={total_loss/len(loader):.4f} acc={acc:.1f}%")

    torch.save(model.state_dict(), MODEL_PATH)
    return True


def restart_server():
    subprocess.run(["pkill", "-f", "model_server.py"], check=False)
    server_path = os.path.join(MODEL_DIR, "Server", "model_server.py")
    subprocess.Popen(
        ["python3", server_path],
        stdout=subprocess.DEVNULL,
        stderr=subprocess.DEVNULL,
    )
    print("模型服务已自动重启")


if __name__ == "__main__":
    errors = load_error_data()
    if not errors:
        print("没有错误记录，无需纠错。")
        sys.exit(0)

    print(f"发现 {len(errors)} 条错误记录。进入纠错模式...")
    new_X, new_Y = interactive_correct(errors)

    added = append_to_dataset(new_X, new_Y)
    print(f"\n新增 {added} 条数据 (已自动去重)，"
          f"数据集总量: {len(np.load(X_FILE))}")

    print("\n开始增量训练...")
    if incremental_train():
        print(f"训练完成，{len(errors)} 条错误已修正。")
        os.remove(ERROR_FILE)

    restart_server()
