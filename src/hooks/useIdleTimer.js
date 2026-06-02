import { useEffect, useRef } from 'react';

export function useIdleTimer(onIdle, onActive, delay = 15000) {
  const timerRef = useRef(null);
  const idleRef = useRef(false);

  useEffect(() => {
    function reset() {
      if (idleRef.current) {
        idleRef.current = false;
        onActive?.();
      }
      clearTimeout(timerRef.current);
      timerRef.current = setTimeout(() => {
        idleRef.current = true;
        onIdle?.();
      }, delay);
    }

    const events = ['mousemove', 'keydown', 'scroll', 'click', 'touchstart'];
    events.forEach(e => window.addEventListener(e, reset, { passive: true }));
    reset();

    return () => {
      clearTimeout(timerRef.current);
      events.forEach(e => window.removeEventListener(e, reset));
    };
  }, [onIdle, onActive, delay]);
}
