import { useState, useCallback, useEffect, useRef } from 'react';
import { useIdleTimer } from '../hooks/useIdleTimer';
import styles from './Mascot.module.css';

const QUIPS = [
  "psst… type 'help'",
  '404: sleep not found',
  '*borks in Python*',
  'I see you lurking 👁️',
  '¯\\_(ツ)_/¯.exe',
];

const BARKS = [
  'Woof! 🐾',
  'bork.exe',
  '*tail.wag()',
  '> bark --loud',
  'henlo fren!',
  'segfault (bork dumped)',
];

/* ── Coffee cup ── */
function CoffeeIcon() {
  return (
    <svg className={styles.sprite} viewBox="0 0 70 75" fill="none" aria-hidden="true">
      <path d="M21 25 Q24 18 21 11" stroke="#8be9fd" strokeWidth="2.5" strokeLinecap="round" opacity="0.8"/>
      <path d="M33 22 Q36 15 33  8" stroke="#8be9fd" strokeWidth="2.5" strokeLinecap="round" opacity="0.8"/>
      <path d="M45 25 Q48 18 45 11" stroke="#8be9fd" strokeWidth="2.5" strokeLinecap="round" opacity="0.8"/>
      <rect x="12" y="27" width="42" height="7" rx="3" fill="#e8954a"/>
      <path d="M14 34 L17 62 Q18 66 22 66 L48 66 Q52 66 53 62 L56 34 Z" fill="#ffb86c"/>
      <path d="M56 40 Q68 40 68 52 Q68 63 56 63" stroke="#e8954a" strokeWidth="5" strokeLinecap="round" fill="none"/>
      <ellipse cx="35" cy="30.5" rx="19" ry="4" fill="#6b3a2a"/>
      <rect x="18" y="38" width="5" height="18" rx="2.5" fill="white" opacity="0.15"/>
    </svg>
  );
}

/* ── Dog — styled like 🐶 emoji ── */
function DogIcon({ excited }) {
  return (
    <svg className={styles.sprite} viewBox="0 0 70 72" fill="none" aria-hidden="true">
      {/* big floppy ears — behind the head */}
      <ellipse cx="12" cy="32" rx="12" ry="19" fill="#7B4A1E"/>
      <ellipse cx="58" cy="32" rx="12" ry="19" fill="#7B4A1E"/>
      {/* inner ear */}
      <ellipse cx="12" cy="33" rx="7"  ry="13" fill="#A0622A" opacity="0.7"/>
      <ellipse cx="58" cy="33" rx="7"  ry="13" fill="#A0622A" opacity="0.7"/>

      {/* head */}
      <circle cx="35" cy="37" r="24" fill="#D4956A"/>

      {/* snout patch */}
      <ellipse cx="35" cy="46" rx="13" ry="10" fill="#BA7A4E"/>

      {/* left eye */}
      <circle cx="24" cy="33" r="7" fill="#1C1C2E"/>
      <circle cx="26.2" cy="31" r="2.5" fill="white"/>
      {/* right eye */}
      <circle cx="46" cy="33" r="7" fill="#1C1C2E"/>
      <circle cx="48.2" cy="31" r="2.5" fill="white"/>

      {/* nose */}
      <ellipse cx="35" cy="41" rx="6" ry="4.5" fill="#1C1C2E"/>
      <ellipse cx="33" cy="39.5" rx="1.8" ry="1.2" fill="#3a3a5a" opacity="0.6"/>

      {/* mouth / tongue */}
      {excited ? (
        <>
          <path d="M28 48 Q35 54 42 48" stroke="#1C1C2E" strokeWidth="1.5" fill="none" strokeLinecap="round"/>
          <ellipse cx="35" cy="53.5" rx="6" ry="5" fill="#ff79c6"/>
          <line x1="35" y1="48" x2="35" y2="58" stroke="#e660a8" strokeWidth="1.2"/>
        </>
      ) : (
        <path d="M30 47 Q35 51 40 47" stroke="#1C1C2E" strokeWidth="1.5" fill="none" strokeLinecap="round"/>
      )}

      {/* blush */}
      <ellipse cx="15" cy="44" rx="5.5" ry="3" fill="#ffb86c" opacity="0.4"/>
      <ellipse cx="55" cy="44" rx="5.5" ry="3" fill="#ffb86c" opacity="0.4"/>

      {/* excited sparkles */}
      {excited && (
        <>
          <text x="1"  y="14" fontSize="10" fill="#f1fa8c" opacity="0.9">✦</text>
          <text x="58" y="11" fontSize="8"  fill="#ff79c6" opacity="0.9">✦</text>
          <text x="61" y="28" fontSize="7"  fill="#8be9fd" opacity="0.9">✦</text>
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
  const [barking,     setBarking]     = useState(false);
  const [barkMsg,     setBarkMsg]     = useState('');
  const [quipIdx]                     = useState(() => Math.floor(Math.random() * QUIPS.length));
  const barkTimer                     = useRef(null);

  const onActive = useCallback(() => {
    setIdleExcited(false);
    setShowQuip(false);
  }, []);

  const onQuipIdle    = useCallback(() => setShowQuip(true),    []);
  const onExcitedIdle = useCallback(() => setIdleExcited(true), []);

  useIdleTimer(onQuipIdle,    onActive,  5000);
  useIdleTimer(onExcitedIdle, onActive,  7000); // 7 s → excited

  // coffee easter egg
  useEffect(() => {
    function handleCoffee() {
      setCoffeeMode(true);
      setTimeout(() => setCoffeeMode(false), 5000);
    }
    window.addEventListener('portfolio:coffee', handleCoffee);
    return () => window.removeEventListener('portfolio:coffee', handleCoffee);
  }, []);

  // cleanup bark timer on unmount
  useEffect(() => () => clearTimeout(barkTimer.current), []);

  function handleClick(e) {
    e.stopPropagation();
    if (coffeeMode) return;
    clearTimeout(barkTimer.current);
    const msg = BARKS[Math.floor(Math.random() * BARKS.length)];
    setBarkMsg(msg);
    setBarking(true);
    setShowQuip(false);
    barkTimer.current = setTimeout(() => setBarking(false), 650);
  }

  // priority: barking > coffee > excited > float
  const animClass = barking
    ? styles.barking
    : idleExcited && !coffeeMode
      ? styles.excited
      : styles.float;

  const bubbleText    = barking ? barkMsg : QUIPS[quipIdx];
  const bubbleVisible = barking || hovered || showQuip;

  return (
    <div
      className={`${styles.wrapper} ${animClass}`}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      onClick={handleClick}
      style={{ cursor: coffeeMode ? 'default' : 'pointer' }}
    >
      {bubbleVisible && !coffeeMode && (
        <div className={styles.bubble} key={barkMsg || quipIdx}>
          {bubbleText}
        </div>
      )}
      {coffeeMode ? <CoffeeIcon /> : <DogIcon excited={idleExcited} />}
    </div>
  );
}
