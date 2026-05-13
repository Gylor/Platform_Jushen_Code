import os
import sys
import json
import socket
import numpy as np
import torch

MODEL_DIR = os.path.dirname(os.path.dirname(__file__))
sys.path.insert(0, MODEL_DIR)

from train.train_base import SimpleMLP
from action_mapper import NUM_ACTIONS, ACTION_ID_MAP

MODEL_PATH = os.path.join(MODEL_DIR, "robot_base.pth")
HOST = "0.0.0.0"
PORT = 8888


class ModelServer:
    def __init__(self, host=HOST, port=PORT):
        self.model = self.load_model()
        self.host = host
        self.port = port

    def load_model(self):
        model = SimpleMLP(input_dim=8, hidden_dim=128, output_dim=NUM_ACTIONS)
        model.load_state_dict(torch.load(MODEL_PATH, weights_only=True))
        model.eval()
        return model

    def predict(self, sensor_vec):
        x = torch.tensor(sensor_vec, dtype=torch.float32).unsqueeze(0)
        with torch.no_grad():
            logits = self.model(x)
            action_id = torch.argmax(logits, dim=1).item()
        return int(action_id)

    def run(self):
        sock = socket.socket(socket.AF_INET, socket.SOCK_STREAM)
        sock.setsockopt(socket.SOL_SOCKET, socket.SO_REUSEADDR, 1)
        sock.bind((self.host, self.port))
        sock.listen(1)
        print(f"模型服务已启动: {self.host}:{self.port}  (动作数={NUM_ACTIONS})")
        while True:
            conn, addr = sock.accept()
            self.handle(conn)

    def handle(self, conn):
        buf = b""
        while True:
            data = conn.recv(1024)
            if not data:
                break
            buf += data
            while b"\n" in buf:
                line, buf = buf.split(b"\n", 1)
                response = self.process(line.decode())
                conn.sendall((json.dumps(response) + "\n").encode())

    def process(self, raw):
        try:
            msg = json.loads(raw)
            if msg.get("type") == "sensor":
                action_id = self.predict(msg["data"])
                action_key = ACTION_ID_MAP.get(action_id, ("stand", 0, "未知"))[0]
                return {
                    "type": "action",
                    "action_id": action_id,
                    "action_key": action_key,
                }
        except Exception:
            pass
        return {"type": "error", "msg": "invalid request"}


if __name__ == "__main__":
    if not os.path.exists(MODEL_PATH):
        print(f"模型文件不存在: {MODEL_PATH}")
        print("请先运行 train_base.py 训练模型")
        sys.exit(1)
    server = ModelServer()
    server.run()
