import { useState, useEffect, useRef } from 'react';

const PAUSE_MAP = { ',': 60, '.': 80, '!': 100, '?': 100, ':': 60 };

export function useTypewriter(text, speed = 22, enabled = true) {
  const [displayed, setDisplayed] = useState('');
  const [done, setDone] = useState(false);
  const indexRef = useRef(0);
  const timerRef = useRef(null);

  useEffect(() => {
    if (!enabled) {
      setDisplayed(text);
      setDone(true);
      return;
    }
    setDisplayed('');
    setDone(false);
    indexRef.current = 0;

    function tick() {
      const i = indexRef.current;
      if (i >= text.length) {
        setDone(true);
        return;
      }
      const char = text[i];
      setDisplayed(text.slice(0, i + 1));
      indexRef.current = i + 1;
      const delay = PAUSE_MAP[char] ?? speed;
      timerRef.current = setTimeout(tick, delay);
    }

    timerRef.current = setTimeout(tick, 80);
    return () => clearTimeout(timerRef.current);
  }, [text, speed, enabled]);

  return { displayed, done };
}
