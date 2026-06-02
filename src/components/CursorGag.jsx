import { useState, useCallback, useRef, useEffect } from 'react';
import { useIdleTimer } from '../hooks/useIdleTimer';
import { useTypewriter } from '../hooks/useTypewriter';
import { IDLE_GAG_SEQUENCES } from '../data/easter-eggs';
import styles from './CursorGag.module.css';

export default function CursorGag() {
  const [active, setActive] = useState(false);
  const [seq, setSeq] = useState(null);
  const [phase, setPhase] = useState('cmd');
  const indexRef = useRef(0);
  const phaseTimerRef = useRef(null);

  const onIdle = useCallback(() => {
    const pick = IDLE_GAG_SEQUENCES[indexRef.current % IDLE_GAG_SEQUENCES.length];
    indexRef.current++;
    setSeq(pick);
    setPhase('cmd');
    setActive(true);
  }, []);

  const onActive = useCallback(() => {
    clearTimeout(phaseTimerRef.current);
    setActive(false);
    setSeq(null);
  }, []);

  useIdleTimer(onIdle, onActive, 15000);

  const { displayed: cmdDisplayed, done: cmdDone } = useTypewriter(
    seq?.cmd ?? '', 40, active && phase === 'cmd'
  );
  const { displayed: outDisplayed } = useTypewriter(
    seq?.output ?? '', 20, active && phase === 'output'
  );

  useEffect(() => {
    if (cmdDone && phase === 'cmd') {
      phaseTimerRef.current = setTimeout(() => setPhase('output'), 400);
    }
    return () => clearTimeout(phaseTimerRef.current);
  }, [cmdDone, phase]);

  if (!active || !seq) return null;

  return (
    <div className={styles.gag}>
      <div>
        <span className="text-green">$ </span>
        <span className="text-fg">{cmdDisplayed}</span>
        {phase === 'cmd' && <span className="cursor" />}
      </div>
      {phase === 'output' && (
        <div className={styles.output}>
          <span className="text-comment">{outDisplayed}</span>
        </div>
      )}
    </div>
  );
}
