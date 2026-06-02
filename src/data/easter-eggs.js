export const EASTER_EGGS = {
  help: {
    output: `Available commands:
  about       → cat about.txt
  projects    → ls -la projects/
  experience  → cat resume.md
  contact     → curl contact.json
  whoami      → who are you?
  clear       → clear terminal output

Psst... there are a few hidden commands. 👀`,
    type: 'normal',
  },

  whoami: {
    output: 'You are: a curious human. I like you.',
    type: 'normal',
  },

  sudo: {
    output: '[sudo] password for maanav:\nNope.',
    type: 'normal',
  },

  'sudo rm -rf /': {
    output: 'Permission denied.\nNice try. 😈',
    type: 'glitch',
  },

  'rm -rf /': {
    output: 'Permission denied.\nNice try. 😈',
    type: 'glitch',
  },

  hack: {
    output: 'Initiating hack sequence...',
    type: 'matrix',
  },

  matrix: {
    output: 'Follow the white rabbit. 🐇',
    type: 'matrix',
  },

  coffee: {
    output: `Brewing... ☕
ERROR: FileNotFoundException: coffee.java not found in classpath
  at caffeine.jvm.CoffeeMachine.brew(CoffeeMachine.java:42)
  at maanav.brain.FocusManager.start(FocusManager.java:1)`,
    type: 'normal',
  },

  42: {
    output: 'The answer to life, the universe, and everything. 🌌',
    type: 'normal',
  },

  'ls /secrets': {
    output: `classified.txt   you-found-me.txt   do-not-open.txt

> cat you-found-me.txt
  Congrats! You found a secret. Here's a fun fact:
  The first computer bug was an actual moth found in a relay of the Harvard Mark II.`,
    type: 'normal',
  },

  exit: {
    output: "Nice try. You can't exit the portfolio that easily. 😄",
    type: 'normal',
  },

  'uname -a': {
    output: 'MaanavOS 3.14.159 portfolio-kernel x86_64 GNU/Coffee',
    type: 'normal',
  },

  'git log': {
    output: `commit a1b2c3d (HEAD -> main, origin/main)
Author: Maanav Anand Kumar <maanavanandkumar@gmail.com>
Date:   just now

    feat: shipped another banger 🚀`,
    type: 'normal',
  },

  ls: {
    output: 'about.txt   projects/   resume.md   contact.json   secrets/ (👀)',
    type: 'normal',
  },

  pwd: {
    output: '/home/maanav/portfolio',
    type: 'normal',
  },

  'ping recruiter': {
    output: `PING recruiter (127.0.0.1): 56 data bytes
64 bytes from recruiter: icmp_seq=0 ttl=64 time=0.001 ms
64 bytes from recruiter: icmp_seq=1 ttl=64 time=0.001 ms
--- recruiter ping statistics ---
2 packets transmitted, 2 received, 0% packet loss

Hint: hire-me.txt is in /home/maanav/ 📄`,
    type: 'normal',
  },

  'echo hello': {
    output: 'hello',
    type: 'normal',
  },

  'echo "hire me"': {
    output: 'hire me',
    type: 'normal',
  },
};

export const IDLE_GAG_SEQUENCES = [
  { cmd: 'ls -la /dreams', output: 'total 0\n-rw-r--r--  hire-me.txt\n-rw-r--r--  build-cool-things.txt' },
  { cmd: 'git push origin dream-job', output: 'Everything up-to-date ✓' },
  { cmd: 'ping recruiter', output: '64 bytes from recruiter: icmp_seq=1 ttl=64 time=0.001 ms' },
  { cmd: 'echo "please hire me"', output: 'please hire me' },
  { cmd: 'cat /etc/motivation', output: 'Ship it. Learn it. Repeat.' },
  { cmd: 'curl -s https://maanav.dev/hire', output: '{ "status": "available", "vibe": "great" }' },
];
