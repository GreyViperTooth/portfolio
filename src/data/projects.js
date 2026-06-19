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
    id: 'go-monitor',
    name: 'Production HTTP Service Monitor — Go',
    description:
      'Built and deployed a production-grade service monitoring agent in Go. Implements concurrent health checks across registered targets using goroutines and buffered channels, a thread-safe in-memory store backed by sync.Mutex, and a background worker on a 30-second ticker that maintains a rolling 100-result history per service. Exposes a /report endpoint with live uptime percentage and average response latency. Deployed on AWS EC2 (Ubuntu 24.04) with a systemd daemon for auto-restart, Nginx reverse proxy on port 80, and cross-compiled for Linux from Windows.',
    tech: ['Go', 'goroutines', 'AWS EC2', 'Nginx', 'systemd', 'Linux', 'REST API'],
    type: 'Personal',
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
