import { useEffect, useRef, useState } from 'react';
import { useTypewriter } from '../hooks/useTypewriter';

export default function TypewriterText({ text, speed = 22, className = '', showCursor = true }) {
  const containerRef = useRef(null);
  const [inView, setInView] = useState(false);

  useEffect(() => {
    const el = containerRef.current;
    if (!el) return;
    const obs = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) { setInView(true); obs.disconnect(); } },
      { threshold: 0.1 }
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, []);

  const { displayed, done } = useTypewriter(text, speed, inView);

  return (
    <span ref={containerRef} className={className}>
      {displayed}
      {showCursor && !done && <span className="cursor" aria-hidden="true" />}
    </span>
  );
}
