import os
import sys
import numpy as np
import torch
import torch.nn as nn
import torch.optim as optim

MODEL_DIR = os.path.dirname(os.path.dirname(__file__))
sys.path.insert(0, MODEL_DIR)

from action_mapper import NUM_ACTIONS

DATA_DIR = os.path.join(MODEL_DIR, "training_data")
MODEL_PATH = os.path.join(MODEL_DIR, "robot_base.pth")
X_FILE = os.path.join(DATA_DIR, "robot_X.npy")
Y_FILE = os.path.join(DATA_DIR, "robot_Y.npy")


class SimpleMLP(nn.Module):
    def __init__(self, input_dim=8, hidden_dim=128, output_dim=NUM_ACTIONS):
        super().__init__()
        self.net = nn.Sequential(
            nn.Linear(input_dim, hidden_dim),
            nn.ReLU(),
            nn.Dropout(0.2),
            nn.Linear(hidden_dim, hidden_dim),
            nn.ReLU(),
            nn.Dropout(0.2),
            nn.Linear(hidden_dim, hidden_dim // 2),
            nn.ReLU(),
            nn.Linear(hidden_dim // 2, output_dim),
        )

    def forward(self, x):
        return self.net(x)


def load_data():
    X = np.load(X_FILE)
    Y = np.load(Y_FILE)
    return X, Y


def train(epochs=50, lr=0.001, batch_size=128):
    X, Y = load_data()

    X_t = torch.tensor(X, dtype=torch.float32)
    Y_t = torch.tensor(Y, dtype=torch.long)

    dataset = torch.utils.data.TensorDataset(X_t, Y_t)
    loader = torch.utils.data.DataLoader(dataset, batch_size=batch_size, shuffle=True)

    model = SimpleMLP()
    optimizer = optim.Adam(model.parameters(), lr=lr)
    criterion = nn.CrossEntropyLoss()

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

        if epoch % 10 == 0:
            acc = correct / total * 100
            print(f"Epoch {epoch:3d}: loss={total_loss/len(loader):.4f}  acc={acc:.1f}%")

    torch.save(model.state_dict(), MODEL_PATH)
    print(f"\n模型已保存: {MODEL_PATH}")

    acc = correct / total * 100
    print(f"最终准确率: {acc:.1f}%")
    return model


if __name__ == "__main__":
    train()
