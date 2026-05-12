import numpy as np
import math
from scipy.spatial.transform import Rotation as R

class CoordTransformer:
    def __init__(self, angle_deg=90, offset_sim=(0.0, 0.0)):
        """
        :param angle_deg: 旋转角度。若仿真X为西，期望X为北，则填90（顺时针旋转90度）
        :param offset_sim: 仿真中的某个点，将其定义为新原点 (raw_x, raw_y)
        """
        rad = math.radians(angle_deg)
        cos_a = math.cos(rad)
        sin_a = math.sin(rad)
        
        # 旋转矩阵 (R)
        self.R = np.array([
            [cos_a, -sin_a],
            [sin_a,  cos_a]
        ])
        # 逆旋转矩阵 (R的转置)
        self.R_inv = self.R.T
        self.angle_offset = angle_deg
        self.offset_sim = np.array(offset_sim)

    def _normalize_angle(self, angle):
        """将角度统一归一化到 [-180, 180) 之间"""
        return (angle + 180) % 360 - 180

    def forward(self, x_sim, y_sim, yaw_sim):
        """
        【正向转换】：用于获取位姿 (仿真 -> 期望)
        逻辑：P_exp = R * (P_sim - Offset_sim)
        """
        # 1. 坐标偏移与旋转
        pos_relative = np.array([x_sim, y_sim]) - self.offset_sim
        pos_exp = self.R @ pos_relative
        
        # 2. 角度补偿与归一化
        new_yaw = self._normalize_angle(yaw_sim + self.angle_offset)
        
        return float(pos_exp[0]), float(pos_exp[1]), new_yaw

    def inverse(self, x_exp, y_exp, yaw_exp):
        """
        【逆向转换】：用于初始化位姿 (期望 -> 仿真)
        逻辑：P_sim = (R_inv * P_exp) + Offset_sim
        """
        # 1. 逆旋转与加回偏移
        pos_exp = np.array([x_exp, y_exp])
        pos_sim_relative = self.R_inv @ pos_exp
        pos_sim = pos_sim_relative + self.offset_sim
        
        # 2. 角度逆向补偿
        sim_yaw = self._normalize_angle(yaw_exp - self.angle_offset)
        
        # 3. 生成 Isaac Sim 需要的 wxyz 四元数
        q = R.from_euler('z', sim_yaw, degrees=True).as_quat()
        quat_wxyz = [float(q[3]), float(q[0]), float(q[1]), float(q[2])]
        
        return [float(pos_sim[0]), float(pos_sim[1])], quat_wxyz

# --- 核心配置区 ---
# 根据你的描述：仿真X正轴是西，你期望X正轴是北。
# 如果你希望仿真里的 (0.5, 0.7) 变成你的 (0, 0)，就改下面这个 offset_sim
transformer = CoordTransformer(angle_deg=90, offset_sim=(0.25, 0.65))