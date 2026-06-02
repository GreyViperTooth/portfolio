import { useState, useCallback } from 'react';
import { useIdleTimer } from '../hooks/useIdleTimer';
import styles from './Mascot.module.css';

const QUIPS = [
  "psst… type 'help'",
  '404: sleep not found',
  '*booing in Python*',
  'I see you lurking 👁️',
  '¯\\_(ツ)_/¯.exe',
];

function GhostIcon({ excited }) {
  return (
    <svg
      className={styles.ghost}
      viewBox="0 0 60 72"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
    >
      {/* body */}
      <path
        d="M5 32 C5 15 14 4 30 4 C46 4 55 15 55 32 L55 58
           L47.5 52 L40 58 L32.5 52 L25 58 L17.5 52 L10 58 L5 58 Z"
        fill="#bd93f9"
      />
      {/* left eye */}
      {excited ? (
        <text x="13" y="36" fontSize="13" fill="#282a36" fontFamily="sans-serif" textAnchor="middle">★</text>
      ) : (
        <>
          <ellipse cx="21" cy="30" rx="5" ry="5.5" fill="#282a36" />
          <circle cx="23" cy="28" r="1.8" fill="white" />
        </>
      )}
      {/* right eye */}
      {excited ? (
        <text x="47" y="36" fontSize="13" fill="#282a36" fontFamily="sans-serif" textAnchor="middle">★</text>
      ) : (
        <>
          <ellipse cx="39" cy="30" rx="5" ry="5.5" fill="#282a36" />
          <circle cx="41" cy="28" r="1.8" fill="white" />
        </>
      )}
      {/* blush */}
      <ellipse cx="14" cy="37" rx="4" ry="2.5" fill="#ff79c6" opacity="0.35" />
      <ellipse cx="46" cy="37" rx="4" ry="2.5" fill="#ff79c6" opacity="0.35" />
      {/* little sparkles when excited */}
      {excited && (
        <>
          <text x="4"  y="18" fontSize="10" fill="#f1fa8c" opacity="0.9">✦</text>
          <text x="50" y="14" fontSize="8"  fill="#ff79c6" opacity="0.9">✦</text>
          <text x="52" y="28" fontSize="7"  fill="#8be9fd" opacity="0.9">✦</text>
        </>
      )}
    </svg>
  );
}

export default function Mascot() {
  const [idle, setIdle]       = useState(false);
  const [hovered, setHovered] = useState(false);
  const [quipIdx]             = useState(() => Math.floor(Math.random() * QUIPS.length));

  const onIdle   = useCallback(() => setIdle(true),  []);
  const onActive = useCallback(() => setIdle(false), []);

  // slightly longer delay than CursorGag (15 s) so they don't fire at the same time
  useIdleTimer(onIdle, onActive, 18000);

  return (
    <div
      className={`${styles.wrapper} ${idle ? styles.excited : styles.float}`}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      {hovered && (
        <div className={styles.bubble}>
          {QUIPS[quipIdx]}
        </div>
      )}
      <GhostIcon excited={idle} />
    </div>
  );
}
