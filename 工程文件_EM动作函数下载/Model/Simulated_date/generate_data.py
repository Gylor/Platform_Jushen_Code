import os
import numpy as np

MODEL_DIR = os.path.dirname(os.path.dirname(__file__))

def generate_by_rules(num_per_rule=1000):
    X, Y = [], []

    def add_samples(tag_x_range, tag_y_range, tag_theta_range,
                    tag_id, block_x_range, block_y_range, block_area_range,
                    hand_state, label):
        for _ in range(num_per_rule):
            x = [
                np.random.uniform(*tag_x_range),
                np.random.uniform(*tag_y_range),
                np.random.uniform(*tag_theta_range),
                tag_id,
                np.random.uniform(*block_x_range),
                np.random.uniform(*block_y_range),
                np.random.uniform(*block_area_range),
                hand_state,
            ]
            X.append(x)
            Y.append(label)

    # 空手状态规则 (hand_state = 0)
    add_samples((-2.0, -0.27), (-0.5, 0.5), (-30, 30), 1, (0, 640), (0, 480), (0, 5000), 0, 4)
    add_samples((-0.27, -0.10), (-0.3, 0.3), (-20, 20), 1, (0, 640), (0, 480), (0, 5000), 0, 4)
    add_samples((-0.10, -0.02), (-0.15, 0.15), (-10, 10), 1, (0, 640), (0, 480), (0, 5000), 0, 5)
    add_samples((-0.5, 1.5), (-0.5, 0.5), (13, 90), 1, (0, 640), (0, 480), (0, 5000), 0, 10)
    add_samples((-0.5, 1.5), (-0.5, 0.5), (-90, -13), 1, (0, 640), (0, 480), (0, 5000), 0, 12)
    add_samples((-0.2, 1.0), (0.05, 0.5), (-15, 15), 1, (0, 640), (0, 480), (0, 5000), 0, 6)
    add_samples((-0.2, 1.0), (-0.5, -0.05), (-15, 15), 1, (0, 640), (0, 480), (0, 5000), 0, 8)
    add_samples((0.14, 2.0), (-0.3, 0.3), (-15, 15), 1, (0, 640), (0, 480), (0, 5000), 0, 1)
    add_samples((-0.2, 1.0), (-0.3, 0.3), (3, 13), 1, (0, 640), (0, 480), (0, 5000), 0, 11)
    add_samples((-0.2, 1.0), (-0.3, 0.3), (-13, -3), 1, (0, 640), (0, 480), (0, 5000), 0, 13)
    add_samples((-0.2, 0.5), (0.02, 0.05), (-8, 8), 1, (0, 640), (0, 480), (0, 5000), 0, 7)
    add_samples((-0.2, 0.5), (-0.05, -0.02), (-8, 8), 1, (0, 640), (0, 480), (0, 5000), 0, 9)
    add_samples((0.08, 0.14), (-0.15, 0.15), (-8, 8), 1, (0, 640), (0, 480), (0, 5000), 0, 2)
    add_samples((0.02, 0.08), (-0.10, 0.10), (-5, 5), 1, (0, 640), (0, 480), (0, 5000), 0, 3)
    add_samples((-0.02, 0.02), (-0.02, 0.02), (-3, 3), 1, (0, 640), (0, 480), (0, 5000), 0, 0)

    # 抱箱状态规则 (hand_state = 1)
    add_samples((-2.0, -0.27), (-0.5, 0.5), (-30, 30), 1, (0, 640), (0, 480), (0, 5000), 1, 17)
    add_samples((-0.27, -0.10), (-0.3, 0.3), (-20, 20), 1, (0, 640), (0, 480), (0, 5000), 1, 17)
    add_samples((-0.10, -0.02), (-0.15, 0.15), (-10, 10), 1, (0, 640), (0, 480), (0, 5000), 1, 18)
    add_samples((-0.5, 1.5), (-0.5, 0.5), (13, 90), 1, (0, 640), (0, 480), (0, 5000), 1, 23)
    add_samples((-0.5, 1.5), (-0.5, 0.5), (-90, -13), 1, (0, 640), (0, 480), (0, 5000), 1, 24)
    add_samples((-0.2, 1.0), (0.05, 0.5), (-15, 15), 1, (0, 640), (0, 480), (0, 5000), 1, 19)
    add_samples((-0.2, 1.0), (-0.5, -0.05), (-15, 15), 1, (0, 640), (0, 480), (0, 5000), 1, 21)
    add_samples((0.14, 2.0), (-0.3, 0.3), (-15, 15), 1, (0, 640), (0, 480), (0, 5000), 1, 14)
    add_samples((-0.2, 1.0), (-0.3, 0.3), (3, 13), 1, (0, 640), (0, 480), (0, 5000), 1, 23)
    add_samples((-0.2, 1.0), (-0.3, 0.3), (-13, -3), 1, (0, 640), (0, 480), (0, 5000), 1, 24)
    add_samples((-0.2, 0.5), (0.02, 0.05), (-8, 8), 1, (0, 640), (0, 480), (0, 5000), 1, 20)
    add_samples((-0.2, 0.5), (-0.05, -0.02), (-8, 8), 1, (0, 640), (0, 480), (0, 5000), 1, 22)
    add_samples((0.08, 0.14), (-0.15, 0.15), (-8, 8), 1, (0, 640), (0, 480), (0, 5000), 1, 15)
    add_samples((0.02, 0.08), (-0.10, 0.10), (-5, 5), 1, (0, 640), (0, 480), (0, 5000), 1, 16)
    add_samples((-0.02, 0.02), (-0.02, 0.02), (-3, 3), 1, (0, 640), (0, 480), (0, 5000), 1, 0)

    # 无 Tag 码时的颜色趋近规则
    add_samples((-1.0, 1.0), (-0.5, 0.5), (-30, 30), -1, (270, 370), (200, 280), (500, 5000), 0, 2)
    add_samples((-1.0, 1.0), (-0.5, 0.5), (-30, 30), -1, (0, 200), (0, 480), (200, 5000), 0, 10)
    add_samples((-1.0, 1.0), (-0.5, 0.5), (-30, 30), -1, (440, 640), (0, 480), (200, 5000), 0, 12)
    add_samples((-0.5, 0.5), (-0.3, 0.3), (-15, 15), -1, (220, 420), (160, 320), (5000, 10000), 0, 0)

    X = np.array(X, dtype=np.float32)
    Y = np.array(Y, dtype=np.int64)

    indices = np.random.permutation(len(X))
    return X[indices], Y[indices]


if __name__ == "__main__":
    DATA_DIR = os.path.join(MODEL_DIR, "training_data")
    X_FILE = os.path.join(DATA_DIR, "robot_X.npy")
    Y_FILE = os.path.join(DATA_DIR, "robot_Y.npy")
    os.makedirs(DATA_DIR, exist_ok=True)
    X, Y = generate_by_rules(num_per_rule=1000)
    np.save(X_FILE, X)
    np.save(Y_FILE, Y)
    print(f"生成 {len(X)} 条训练数据")
    print(f"X shape: {X.shape}, Y shape: {Y.shape}")
    print(f"动作分布: {np.bincount(Y)}")
