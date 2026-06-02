import { useState, useRef } from 'react';
import { EASTER_EGGS } from '../data/easter-eggs';
import MatrixRain from './MatrixRain';
import styles from './EasterEggInput.module.css';

const COMPLETIONS = Object.keys(EASTER_EGGS);

export default function EasterEggInput({ glitchRef }) {
  const [value, setValue] = useState('');
  const [history, setHistory] = useState([]);
  const [showMatrix, setShowMatrix] = useState(false);
  const inputRef = useRef(null);

  function handleKey(e) {
    if (e.key === 'Enter') {
      submit();
    } else if (e.key === 'Tab') {
      e.preventDefault();
      const match = COMPLETIONS.find(c => c.startsWith(value) && c !== value);
      if (match) setValue(match);
    }
  }

  function submit() {
    const cmd = value.trim().toLowerCase();
    if (!cmd) return;

    const egg = EASTER_EGGS[cmd];
    if (egg) {
      if (egg.type === 'clear') {
        setHistory([]);
        setValue('');
        return;
      }
      if (egg.type === 'matrix') {
        setShowMatrix(true);
      }
      if (egg.type === 'glitch' && glitchRef?.current) {
        glitchRef.current.classList.add('glitch');
        setTimeout(() => glitchRef.current?.classList.remove('glitch'), 700);
      }
      if (egg.type === 'scroll' && egg.section) {
        document.getElementById(egg.section)?.scrollIntoView({ behavior: 'smooth' });
      }
      setHistory(h => [...h, { cmd, output: egg.output }]);
    } else {
      setHistory(h => [...h, {
        cmd,
        output: `bash: ${cmd}: command not found\nType 'help' for available commands.`,
      }]);
    }
    setValue('');
  }

  return (
    <>
      {showMatrix && <MatrixRain onDone={() => setShowMatrix(false)} />}

      <div className={styles.container} onClick={() => inputRef.current?.focus()}>
        <div className={styles.label}>
          <span className="text-comment"># secret terminal — try: </span>
          <span className="text-purple">help</span>
          <span className="text-comment">, </span>
          <span className="text-purple">hack</span>
          <span className="text-comment">, </span>
          <span className="text-purple">42</span>
        </div>

        {history.length > 0 && (
          <div className={styles.history}>
            {history.map((entry, i) => (
              <div key={i} className={styles.entry}>
                <div className={styles.histCmd}>
                  <span className="text-green">$ </span>
                  <span className="text-fg">{entry.cmd}</span>
                </div>
                <pre className={styles.output}>{entry.output}</pre>
              </div>
            ))}
          </div>
        )}

        <div className={styles.inputRow}>
          <span className="text-green">$ </span>
          <input
            ref={inputRef}
            className={styles.input}
            value={value}
            onChange={e => setValue(e.target.value)}
            onKeyDown={handleKey}
            spellCheck={false}
            autoComplete="off"
            autoCapitalize="off"
            placeholder="type a command..."
          />
          <span className="cursor" aria-hidden="true" />
        </div>
      </div>
    </>
  );
}
