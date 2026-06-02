import { useState, useEffect } from 'react';
import styles from './BootSequence.module.css';

const ASCII_NAME = `
 ███╗   ███╗ █████╗  █████╗ ███╗   ██╗ █████╗ ██╗   ██╗
 ████╗ ████║██╔══██╗██╔══██╗████╗  ██║██╔══██╗██║   ██║
 ██╔████╔██║███████║███████║██╔██╗ ██║███████║██║   ██║
 ██║╚██╔╝██║██╔══██║██╔══██║██║╚██╗██║██╔══██║╚██╗ ██╔╝
 ██║ ╚═╝ ██║██║  ██║██║  ██║██║ ╚████║██║  ██║ ╚████╔╝
 ╚═╝     ╚═╝╚═╝  ╚═╝╚═╝  ╚═╝╚═╝  ╚═══╝╚═╝  ╚═╝  ╚═══╝`.trim();

const BOOT_LINES = [
  { text: '[    0.001s] BIOS v2.6.1 — Maanav Anand Kumar OS', delay: 0 },
  { text: '[    0.042s] Loading kernel modules...            OK', delay: 300 },
  { text: '[    0.113s] Mounting /home/maanav ...            OK', delay: 600 },
  { text: '[    0.204s] Initializing portfolio service...    OK', delay: 900 },
  { text: '[    0.350s] All systems nominal. Welcome.', delay: 1200 },
];

export default function BootSequence({ onDone }) {
  const [visibleLines, setVisibleLines] = useState([]);
  const [showAscii, setShowAscii] = useState(false);
  const [showSubtitle, setShowSubtitle] = useState(false);
  const [showCursor, setShowCursor] = useState(false);

  useEffect(() => {
    BOOT_LINES.forEach(({ text, delay }) => {
      setTimeout(() => setVisibleLines(v => [...v, text]), delay);
    });

    setTimeout(() => setShowAscii(true), 1700);
    setTimeout(() => setShowSubtitle(true), 2000);
    setTimeout(() => setShowCursor(true), 2300);
    setTimeout(() => onDone?.(), 3200);
  }, []);

  return (
    <div className={styles.boot}>
      <div className={styles.lines}>
        {visibleLines.map((line, i) => (
          <div key={i} className={`${styles.line} boot-line`} style={{ animationDelay: '0ms' }}>
            <span className="text-comment">{line}</span>
          </div>
        ))}
      </div>

      {showAscii && (
        <pre className={styles.ascii}>
          {ASCII_NAME}
        </pre>
      )}

      {showSubtitle && (
        <div className={styles.subtitle}>
          <span className="text-comment">Software Engineer</span>
          {'  '}
          <span className="text-comment">·</span>
          {'  '}
          <span className="text-comment">Stony Brook University</span>
        </div>
      )}

      {showCursor && (
        <div className={styles.prompt}>
          <span className="text-green">maanav@portfolio</span>
          <span className="text-fg">:</span>
          <span className="text-purple">~</span>
          <span className="text-green">$ </span>
          <span className="cursor" />
        </div>
      )}
    </div>
  );
}
