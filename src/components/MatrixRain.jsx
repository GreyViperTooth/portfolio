import { useEffect, useRef } from 'react';
import styles from './MatrixRain.module.css';

const CHARS = 'アイウエオカキクケコサシスセソタチツテトナニヌネノ0123456789ABCDEF<>{}[]';

export default function MatrixRain({ onDone }) {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');
    const W = canvas.width  = window.innerWidth;
    const H = canvas.height = window.innerHeight;
    const fontSize = 14;
    const cols = Math.floor(W / fontSize);
    const drops = Array(cols).fill(1);

    function draw() {
      ctx.fillStyle = 'rgba(40, 42, 54, 0.05)';
      ctx.fillRect(0, 0, W, H);
      ctx.fillStyle = '#50fa7b';
      ctx.font = `${fontSize}px IBM Plex Mono, monospace`;

      for (let i = 0; i < drops.length; i++) {
        const char = CHARS[Math.floor(Math.random() * CHARS.length)];
        ctx.fillText(char, i * fontSize, drops[i] * fontSize);
        if (drops[i] * fontSize > H && Math.random() > 0.975) drops[i] = 0;
        drops[i]++;
      }
    }

    const interval = setInterval(draw, 40);
    const timeout = setTimeout(() => {
      clearInterval(interval);
      onDone?.();
    }, 3000);

    return () => { clearInterval(interval); clearTimeout(timeout); };
  }, []);

  return <canvas ref={canvasRef} className={styles.canvas} />;
}
