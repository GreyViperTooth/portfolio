# Terminal Guide & Easter Eggs

The portfolio has a hidden interactive terminal bar fixed to the bottom of the screen. Click anywhere on it to focus, then start typing.

---

## Using the Terminal

### Basic usage
- **Type a command** and press `Enter` to run it
- **Tab** autocompletes a command from the known list
- History of your commands appears above the input as you run them
- The terminal accepts lowercase input only

### Navigation commands
These scroll the page to the matching section:

| Command | Goes to |
|---|---|
| `about` | About / bio section |
| `projects` | Projects section |
| `experience` | Experience & education section |
| `contact` | Contact section |

### Utility commands
| Command | What it does |
|---|---|
| `help` | Lists all available commands |
| `clear` | Clears the terminal output history |

### Idle behaviour
If you leave the page idle for **15 seconds**, the terminal starts typing fake commands on its own — a little recruiting pitch running in the background. Move the mouse or press any key to dismiss it.

---

## Easter Eggs

### Standard ones (hinted in `help`)

| Command | What happens |
|---|---|
| `whoami` | Tells you who you are |
| `ls` | Lists "files" in the current directory |
| `pwd` | Prints the working directory |
| `exit` | You can't leave that easily |

### Hidden commands (not listed anywhere)

| Command | What happens |
|---|---|
| `hack` | Triggers the **Matrix rain** animation |
| `matrix` | Also triggers Matrix rain + a hint |
| `sudo` | Password prompt. Nope. |
| `sudo rm -rf /` | **Glitch effect** — the whole screen shakes and distorts |
| `rm -rf /` | Same glitch effect |
| `42` | The answer to life, the universe, and everything |
| `coffee` | A stack trace from `CoffeeMachine.java` |
| `uname -a` | Prints the OS info for `MaanavOS` |
| `git log` | Shows the latest commit |
| `ping recruiter` | Pings a very important host |
| `ls /secrets` | Finds some classified files. Try reading them. |
| `echo hello` | Echoes back `hello` |
| `echo "hire me"` | You know what to do |

### Effects explained

- **Matrix rain** (`hack`, `matrix`) — a full-screen canvas animation of falling katakana and hex characters, runs for ~3 seconds then clears
- **Glitch** (`sudo rm -rf /`, `rm -rf /`) — the entire page shakes, skews, and hue-rotates for ~700 ms
- **Idle gags** — after 15 s of inactivity, the terminal types one of these on its own:
  - `ls -la /dreams`
  - `git push origin dream-job`
  - `ping recruiter`
  - `echo "please hire me"`
  - `cat /etc/motivation`
  - `curl -s https://maanav.dev/hire`

---

## Tips

- Use **Tab** to autocomplete — works for all registered commands
- Commands are case-insensitive (`HACK` = `hack`)
- Unknown commands return a friendly `command not found` with a nudge to run `help`
