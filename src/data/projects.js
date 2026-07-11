export const projects = [
  {
    id: 'draftcraft',
    name: 'draftcraft',
    description:
      'Python CLI tool that generates draft snapcraft.yaml files by inspecting a project directory — "docker init for Snapcraft". Reads language manifests (pyproject.toml, package.json, go.mod, Cargo.toml) and maps dependencies to snap interfaces and Ubuntu packages. Core design uses a typed IR with confidence levels (CERTAIN / INFERRED / GUESS): certain facts render as clean YAML, inferences as # verify: comments, guesses as # TODO comments — the tool never presents a guess as a fact. Ships as a strictly confined snap auto-published to the Snap Store edge channel via GitHub Actions CI (lint + tests on Python 3.10/3.12, snapcraft pack, smoke test). 84 pytest tests including golden-file tests validated against real snapcraft schema.',
    tech: ['Python', 'snapcraft', 'craft-cli', 'ruamel.yaml', 'pytest', 'GitHub Actions', 'Snap Store', 'mypy', 'ruff'],
    type: 'Personal',
    github: 'https://github.com/GreyViperTooth/draftcraft',
    store: 'https://snapcraft.io/draftcraft',
    demo: null,
  },
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
    id: 'minicraft-cli',
    name: 'minicraft-CLI',
    description:
      'A lightweight Python CLI reimplementation of Canonical\'s craft-parts — the open-source packaging and build lifecycle orchestration engine powering Snapcraft and Charmcraft. Parses YAML project definitions to manage and execute multi-step build pipelines, replicating core lifecycle semantics of the upstream library in a minimal, dependency-light package.',
    tech: ['Python', 'YAML', 'CLI', 'Build Systems'],
    type: 'Personal',
    github: 'https://github.com/GreyViperTooth/minicraft-CLI',
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
