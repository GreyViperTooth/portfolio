import { useState, useCallback, useEffect } from 'react';
import { useIdleTimer } from '../hooks/useIdleTimer';
import styles from './Mascot.module.css';

const QUIPS = [
  "psst… type 'help'",
  '404: sleep not found',
  '*borks in Python*',
  'I see you lurking 👁️',
  '¯\\_(ツ)_/¯.exe',
];

/* ── Coffee cup (shown for 5 s after the coffee easter egg) ── */
function CoffeeIcon() {
  return (
    <svg className={styles.sprite} viewBox="0 0 70 75" fill="none" aria-hidden="true">
      {/* steam */}
      <path d="M21 25 Q24 18 21 11" stroke="#8be9fd" strokeWidth="2.5" strokeLinecap="round" opacity="0.8"/>
      <path d="M33 22 Q36 15 33  8" stroke="#8be9fd" strokeWidth="2.5" strokeLinecap="round" opacity="0.8"/>
      <path d="M45 25 Q48 18 45 11" stroke="#8be9fd" strokeWidth="2.5" strokeLinecap="round" opacity="0.8"/>
      {/* rim */}
      <rect x="12" y="27" width="42" height="7" rx="3" fill="#e8954a"/>
      {/* body */}
      <path d="M14 34 L17 62 Q18 66 22 66 L48 66 Q52 66 53 62 L56 34 Z" fill="#ffb86c"/>
      {/* handle */}
      <path d="M56 40 Q68 40 68 52 Q68 63 56 63" stroke="#e8954a" strokeWidth="5" strokeLinecap="round" fill="none"/>
      {/* coffee surface */}
      <ellipse cx="35" cy="30.5" rx="19" ry="4" fill="#6b3a2a"/>
      {/* highlight on cup */}
      <rect x="18" y="38" width="5" height="18" rx="2.5" fill="white" opacity="0.15"/>
    </svg>
  );
}

/* ── Dog (default sprite) ── */
function DogIcon({ excited }) {
  return (
    <svg className={styles.sprite} viewBox="0 0 70 72" fill="none" aria-hidden="true">
      {/* floppy left ear */}
      <ellipse cx="15" cy="27" rx="9.5" ry="14" fill="#c8813a" transform="rotate(-12 15 27)"/>
      {/* floppy right ear */}
      <ellipse cx="55" cy="27" rx="9.5" ry="14" fill="#c8813a" transform="rotate(12 55 27)"/>
      {/* head */}
      <circle cx="35" cy="36" r="22" fill="#e8a040"/>
      {/* inner ear shading */}
      <ellipse cx="15" cy="27" rx="5" ry="9" fill="#e8954a" transform="rotate(-12 15 27)" opacity="0.6"/>
      <ellipse cx="55" cy="27" rx="5" ry="9" fill="#e8954a" transform="rotate(12 55 27)" opacity="0.6"/>
      {/* left eye */}
      <circle cx="26" cy="32" r="5" fill="#282a36"/>
      <circle cx="27.8" cy="30.2" r="1.8" fill="white"/>
      {/* right eye */}
      <circle cx="44" cy="32" r="5" fill="#282a36"/>
      <circle cx="45.8" cy="30.2" r="1.8" fill="white"/>
      {/* nose */}
      <ellipse cx="35" cy="40" rx="4.5" ry="3.5" fill="#282a36"/>
      <circle cx="33.2" cy="40.2" r="1.2" fill="#5a3010"/>
      <circle cx="36.8" cy="40.2" r="1.2" fill="#5a3010"/>
      {/* mouth + tongue */}
      {excited ? (
        <>
          <path d="M27 45 Q35 52 43 45" stroke="#282a36" strokeWidth="1.5" fill="none" strokeLinecap="round"/>
          <ellipse cx="35" cy="51" rx="5.5" ry="4.5" fill="#ff79c6"/>
          <line x1="35" y1="46.5" x2="35" y2="55" stroke="#e660a8" strokeWidth="1"/>
        </>
      ) : (
        <path d="M29 44 Q35 49 41 44" stroke="#282a36" strokeWidth="1.5" fill="none" strokeLinecap="round"/>
      )}
      {/* blush */}
      <ellipse cx="17" cy="42" rx="5.5" ry="3" fill="#ffb86c" opacity="0.4"/>
      <ellipse cx="53" cy="42" rx="5.5" ry="3" fill="#ffb86c" opacity="0.4"/>
      {/* excited sparkles */}
      {excited && (
        <>
          <text x="1"  y="15" fontSize="10" fill="#f1fa8c" opacity="0.9">✦</text>
          <text x="58" y="12" fontSize="8"  fill="#ff79c6" opacity="0.9">✦</text>
          <text x="61" y="30" fontSize="7"  fill="#8be9fd" opacity="0.9">✦</text>
        </>
      )}
    </svg>
  );
}

export default function Mascot() {
  const [idleExcited, setIdleExcited] = useState(false);
  const [showQuip,    setShowQuip]    = useState(false);
  const [hovered,     setHovered]     = useState(false);
  const [coffeeMode,  setCoffeeMode]  = useState(false);
  const [quipIdx]                     = useState(() => Math.floor(Math.random() * QUIPS.length));

  // shared reset: any activity hides quip + calms dog
  const onActive = useCallback(() => {
    setIdleExcited(false);
    setShowQuip(false);
  }, []);

  // 5 s idle → show speech bubble automatically
  const onQuipIdle    = useCallback(() => setShowQuip(true),    []);
  // 18 s idle → excited dog
  const onExcitedIdle = useCallback(() => setIdleExcited(true), []);

  useIdleTimer(onQuipIdle,    onActive,  5000);
  useIdleTimer(onExcitedIdle, onActive, 18000);

  // listen for the coffee easter egg
  useEffect(() => {
    function handleCoffee() {
      setCoffeeMode(true);
      setTimeout(() => setCoffeeMode(false), 5000);
    }
    window.addEventListener('portfolio:coffee', handleCoffee);
    return () => window.removeEventListener('portfolio:coffee', handleCoffee);
  }, []);

  const bubbleVisible = hovered || showQuip;

  return (
    <div
      className={`${styles.wrapper} ${idleExcited && !coffeeMode ? styles.excited : styles.float}`}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      {bubbleVisible && !coffeeMode && (
        <div className={styles.bubble}>
          {QUIPS[quipIdx]}
        </div>
      )}
      {coffeeMode ? <CoffeeIcon /> : <DogIcon excited={idleExcited} />}
    </div>
  );
}
