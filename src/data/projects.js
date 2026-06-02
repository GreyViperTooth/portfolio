export const projects = [
  {
    id: 'f1tenth-drl',
    name: 'DRL Controller — F1TENTH Racing',
    description:
      'Designed and trained a Deep Reinforcement Learning policy for high-speed, collision-free navigation on a 1/10th-scale autonomous racing platform. Applied formal neural network verification under adversarial perturbations, achieving an 18% reduction in lap time over baseline PID controllers.',
    tech: ['Python', 'PyTorch', 'TensorFlow', 'ROS2', 'MuJoCo', 'Reinforcement Learning'],
    type: 'Research',
    github: 'https://github.com/GreyViperTooth',
    demo: null,
  },
  {
    id: 'slam-dashboard',
    name: '3D SLAM & Telemetry Control Dashboard',
    description:
      'Built a modular 3D SLAM pipeline in ROS2 and RTAB-Map fusing LiDAR, IMU, and RGB-D data for centimeter-level mapping on Segway RMP220 and Unitree G1 platforms. Developed a full-stack control dashboard with Flask, ROSBridge, and WebSockets for point cloud visualization and motion command dispatch at sub-200 ms latency; integrated a fine-tuned LLM for natural language command parsing.',
    tech: ['ROS2', 'RTAB-Map', 'Flask', 'WebSockets', 'Redis', 'Docker', 'AWS EC2', 'LLM'],
    type: 'Research',
    github: 'https://github.com/GreyViperTooth',
    demo: null,
  },
  {
    id: 'cursorpilot',
    name: 'CursorPilot — Vision-Based HCI',
    description:
      'Developed a real-time head tracking and gesture-based cursor control system using OpenCV and Tobii SDK, enabling natural human–computer interaction for accessibility applications with over 92% tracking accuracy across variable lighting conditions. Achieved sub-45 ms per-frame latency via multithreading, Kalman filtering, and efficient neural inference.',
    tech: ['Python', 'OpenCV', 'Tobii SDK', 'Kalman Filter', 'Multithreading'],
    type: 'Course',
    github: 'https://github.com/GreyViperTooth',
    demo: null,
  },
];
