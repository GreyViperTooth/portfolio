import { useState, useEffect } from 'react';
import styles from './Navbar.module.css';

const NAV_ITEMS = [
  { id: 'about',      label: 'cat about.txt' },
  { id: 'projects',   label: 'ls projects/' },
  { id: 'experience', label: 'cat resume.md' },
  { id: 'contact',    label: 'curl contact.json' },
];

export default function Navbar() {
  const [active, setActive] = useState('about');
  const [stuck, setStuck] = useState(false);

  useEffect(() => {
    function onScroll() {
      setStuck(window.scrollY > 80);

      const sections = NAV_ITEMS.map(n => document.getElementById(n.id));
      let current = 'about';
      for (const s of sections) {
        if (s && s.getBoundingClientRect().top < 160) current = s.id;
      }
      setActive(current);
    }
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  function scrollTo(id) {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth', block: 'start' });
  }

  return (
    <nav className={`${styles.nav} ${stuck ? styles.stuck : ''}`}>
      <span className={styles.prefix}>[maanav@portfolio ~]$</span>
      <div className={styles.items}>
        {NAV_ITEMS.map(item => (
          <button
            key={item.id}
            className={`${styles.item} ${active === item.id ? styles.active : ''}`}
            onClick={() => scrollTo(item.id)}
          >
            {item.label}
          </button>
        ))}
      </div>
    </nav>
  );
}
