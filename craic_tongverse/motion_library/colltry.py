# -*- coding: utf-8 -*-
import pr2
import torch
import numpy as np
from pathcfg import DataPath, load_config
from pr2.envs import Env
from pr2.object import UsdObjectConfig,CubeConfig
# from challenge_env import *
from cube_sorting_task import CubeSortingTask
from pr2.motion_generator.keyboardinput import KeyboardCmd
import time

## 配置环境，添加环境物品
def add_objects_to_env(env):
    apple = UsdObjectConfig(
        object_id="apple_01",
        file_path="fruit/apple.usd",
        semantic_label="apple",
        position=(0.34, 0.56, 0.22),
        orient=(0.70241, 0.71177, 0, 0),
        mass=0.01,
    )

    plate = UsdObjectConfig(
        object_id="plate_01",
        file_path="dinner_ware/plate.usd",
        semantic_label="plate",
        position=(0.34, 0.55, 0.2),
        mass=0.01,
    )
    table = UsdObjectConfig(
        object_id="dining_table_01",
        file_path="dining_table/dining_table.usd",
        semantic_label="table",
        position=(0.34, 0.6, 0), 
        mass=0.1,
    )
    red_cube = CubeConfig(
        object_id="red_cube",
        semantic_label="cube",
        position=(0, 0.77, 0),
        orient=(1, 0, 0, 0),
        mass=0.01,
        scale=(0.1, 0.1, 0.1),
        color=torch.tensor([1.0, 0.0, 0.0]),
    )
    green_cube = CubeConfig(
        object_id="green_cube",
        semantic_label="cube",
        position=(0, 0, 0),
        orient=(1, 0, 0, 0),
        mass=0.01,
        scale=(0.1, 0.1, 0.1),
        color=torch.tensor([0.0, 1.0, 0.0]),
    )
    objects = [apple, plate, table]
    for item in objects:
        env.add_obj_from_usd(item)
    env.add_cube(red_cube)
    env.add_cube(green_cube)


## 设置环境参数
def set_env(
    start_position: torch.tensor,
    start_orient: torch.tensor,
):
    # Load the default environment configuration from the YAML file
    default_env_cfg = load_config(f"{DataPath.cfg}/default_env_cfg.yaml")

    # Set up the environment to use the "challenge" scene
    default_env_cfg["scene"]["folder_name"] = "challenge"
    default_env_cfg["scene"]["file_name"] = "challenge_scene.usd"

    env = Env(default_env_cfg)
    add_objects_to_env(env)

    # Load robot with the configuration
    robot_cfg = load_config(f"{DataPath.cfg}/aelos_challenge_cfg.yaml")

    robot_cfg.update({"has_camera": True, "resolution": (640, 480)})
    env.load_robot(robot_cfg)

    # Note: Always call `env.reset()` after initializing the environment
    # and loading the robot or objects.
    env.reset()
    
    # Get the robot and set its initial pose (position and orientation)
    robots = env.get_robot()
    # WARNING: You MUST set the robot's initial position and orientation AFTER calling `env.reset()`.
    # Otherwise, the robot's initial pose will be set according to the root state configuration
    # in `biped_aelos_cfg.yaml`.
    robots.set_root_poses_w(
        positions=start_position,
        orientations=start_orient,
    )

    # Adjust camera parameters for this task
    cameras = robots.get_camera()
    cameras.set_local_pose(
            0, 
            np.array([0.1, 0.0, 0.001]),
            np.array([0.55, 0.444, -0.444, -0.55]),
            "usd",
        )
    cameras.set_focal_length(0, 0.4)
    cameras.set_clipping_range(0, 0.001, 1000000)

    for _ in range(10):  # wait for env initialize, get camera ready
        env.step()
    return env

def main():
    robot_start_position = torch.tensor([-0.5,0.7,0.2])
    robot_start_orient = torch.tensor([1, 0, 0, 0])
    env = set_env(robot_start_position,robot_start_orient)
    

    task = CubeSortingTask(env)


    print("Step 1: Robot_0 identifies the cube's color.")
    classified_colors = task.get_cube_color(0, "cube")
    print(f"The target cube's color is {classified_colors}.")

    print("Robot_0 moves to the cube.")
    if not task.move_robot_to_cube(0, 10, 20,"red_cube"):
        return print("Robot_0 failed to move to the cube.")

    # Step 2: Robot_0 moves to the transfer area with the cube
    print("Step 2: Robot_0 transfers the cube to the transfer area.")
    if not task.move_robot_to_target_section(0, 50, 35, "green_cube"):
        return print("Robot_0 failed to move to the transfer area.")

    # Step 3: Robot_0 moves backwards
    print("Step 3: Robot_0 moves backward.")
    if not task.move_robot_backward(0):
        return print("Robot_0 failed to move backward.")

    
    # # Load the default environment configuration from the YAML file
    # default_env_cfg = load_config(f"{DataPath.cfg}/default_env_cfg.yaml")

    # # Set up the environment to use the "kitchen" scene
    # default_env_cfg["scene"]["folder_name"] = "challenge"
    # default_env_cfg["scene"]["file_name"] = "challenge_scene.usd"

    # env = Env(default_env_cfg)
    # add_objects_to_env(env)

    # # Load robot with the configuration
    # robot_cfg = load_config(f"{DataPath.cfg}/aelos_challenge_cfg.yaml")

    # robot_cfg.update({"has_camera": True, "resolution": (640, 480)})
    # env.load_robot(robot_cfg)

    # # Note: Always call `env.reset()` after initializing the environment
    # # and loading the robot or objects.
    # env.reset()
    # robots = env.get_robot()
    # robots.set_root_poses_w(robot_start_position,robot_start_orient)
    # # # initialize the keyboard input
    # kb_input = KeyboardCmd(env, (-0.5,0.7,0), (1,0,0,0))
    # kb_input.initialize()
    # action = np.zeros((env.num_robots, env.num_actions))
    # while pr2.app.is_running:
        # If simulation is stopped, then exit.
        # Important: Please do not remove this line.
        # if env.is_stopped:
        #     break

        # press up/down/left/right to control the robot
        # press 'r' to reset the robot to the initial position
        # kb_input.get_keyboard_cmd()
        # action_cmd = kb_input.action_cmd
        # action_name, robot_id, motion_sequence = (
        #     action_cmd[0],
        #     action_cmd[1],
        #     action_cmd[2],
        # )
        # while motion_sequence:
        #     action[robot_id, :] = motion_sequence.popleft()
        #     env.step(action)
        # env.step()

    # scene = env.get_scene()
    # Save the your custom scene to data/scene/my_challenge/my_challenge.usd
    # scene.save(folder_name="my_challenge", file_name="my_challenge.usd")


if __name__ == "__main__":
    main()
    pr2.app.close()
