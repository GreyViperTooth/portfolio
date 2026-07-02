export const experience = [
  {
    type: 'work',
    title: 'Research Assistant',
    org: 'Interacting Robotic Systems Lab, Stony Brook University',
    period: 'Aug. 2025 — Present',
    bullets: [
      'Trained and evaluated reinforcement learning policies in MuJoCo simulation for a Franka Panda arm performing pick-and-place manipulation, applying domain randomization over object mass and initial pose distributions to improve policy generalization.',
      'Characterized sim-to-real transfer gaps by modeling Franka actuator dynamics and contact latency in simulation, iteratively refining the environment model against real-world rollout data to reduce policy failure rate on physical hardware.',
    ],
  },
  {
    type: 'work',
    title: 'Software Engineer Intern',
    org: 'New York Wealth Planning Group',
    period: 'May 2025 — Aug. 2025',
    bullets: [
      'Deployed full-stack web applications using React.js, Node.js, and MongoDB on AWS EC2, architected to handle 10K+ concurrent sessions; implemented CI/CD pipelines with GitHub Actions and Docker ensuring seamless scalability.',
      'Designed RESTful APIs secured via Auth0 with Redis caching and query optimization, reducing average response time by 22% and supporting 150K+ monthly transactions with 99.9% uptime.',
    ],
  },
  {
    type: 'work',
    title: 'SDE Apprentice — ML Systems',
    org: 'CGI Information Systems',
    period: 'May 2024 — Jul. 2024',
    bullets: [
      'Developed and optimized machine learning models using Python, TensorFlow, and scikit-learn, integrating them into containerized services with Docker and Kubernetes to enhance automation and scalability of predictive analytics modules.',
      'Refactored core components to improve model execution speed and optimize memory allocation, achieving a ~15% reduction in latency and improving reliability of distributed ML deployments.',
    ],
  },
  {
    type: 'work',
    title: 'Software Developer Intern',
    org: 'Timescan Logistics',
    period: 'Jun. 2023 — Dec. 2023',
    bullets: [
      'Engineered automation scripts and data integration pipelines to synchronize multi-branch logistics operations, reducing manual workload by 35% and improving turnaround time for trans-continental shipment processing.',
      'Maintained enterprise-grade web applications for global freight management using Flask, MySQL, and RESTful APIs, improving data access efficiency and system reliability of internal tools.',
    ],
  },
  {
    type: 'work',
    title: 'Research Assistant',
    org: 'Centre for Computational Modeling, CIT',
    period: 'Jun. 2022 — Jun. 2023',
    bullets: [
      'Designed motion planning and control algorithms in ROS for multi-agent robotic systems using LiDAR and IMU datasets, improving positional accuracy by 25% in simulation-based validation studies.',
      'Automated kinematics and sensor-fusion experiment pipelines, reducing analysis time by 40% and enabling systematic comparison across control strategies.',
    ],
  },
];

export const education = [
  {
    type: 'education',
    title: 'M.S. Computer Science',
    org: 'Stony Brook University',
    period: 'Aug. 2024 — May 2026',
    bullets: [
      'GPA: 3.7 / 4.0',
      'Coursework: Mobile Robotics, AI for Robotics, Hybrid Systems, Operating Systems, Computer Graphics, Analysis of Algorithms, HCI, Wireless Networks',
    ],
  },
  {
    type: 'education',
    title: 'B.E. Computer Science',
    org: 'Chennai Institute of Technology',
    period: 'Aug. 2020 — May 2024',
    bullets: [
      'GPA: 8.91 / 10',
      'Coursework: Distributed Systems, Signal Processing & Sensor Fusion, Embedded Systems, Machine Learning, Cloud Computing, Software Engineering',
    ],
  },
];

export const publications = [
  {
    title: 'Investigating the Prediction of Breast Cancer Diagnosis by Use of Support Vector Machines',
    venue: 'International Journal of Healthcare Information Systems and Informatics (IJHISI)',
    date: 'Jun. 2023',
    url: 'https://www.sciencedirect.com/org/science/article/pii/S1555339623000040',
  },
  {
    title: 'Numerical analysis of MHD Jeffrey hybrid nanofluid flow over a solar curved sheet using ANN model',
    venue: 'Nanoscale Research Letters, SpringerOpen',
    date: '2026',
    url: 'https://link.springer.com/article/10.1186/s11671-026-04575-w',
  },
];

export const certifications = [
  {
    title: 'AWS Certified Cloud Practitioner',
    issuer: 'Amazon Web Services',
    date: '2024',
    url: null,
  },
];

export const leadership = [
  {
    title: 'Computer Science Senator',
    org: 'Stony Brook University',
    period: 'Sep. 2024 — May 2025',
  },
  {
    title: 'Section Leader & Mentor',
    org: 'Stanford Code in Place',
    period: 'May 2024 — Jun. 2024',
  },
];
