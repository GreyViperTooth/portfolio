import { useEffect, useRef, useState } from 'react';
import Prompt from '../components/Prompt';
import styles from './Contact.module.css';

const CONTACT = [
  { key: 'email',    value: 'maanavanandkumar@gmail.com',    href: 'mailto:maanavanandkumar@gmail.com' },
  { key: 'linkedin', value: 'linkedin.com/in/maanavA',        href: 'https://linkedin.com/in/maanavA' },
  { key: 'github',   value: 'github.com/GreyViperTooth',      href: 'https://github.com/GreyViperTooth' },
  { key: 'resume',   value: '/resume.pdf',                    href: '/resume.pdf' },
];

export default function Contact() {
  const sectionRef = useRef(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const obs = new IntersectionObserver(
      ([e]) => { if (e.isIntersecting) { setVisible(true); obs.disconnect(); } },
      { threshold: 0.1 }
    );
    if (sectionRef.current) obs.observe(sectionRef.current);
    return () => obs.disconnect();
  }, []);

  return (
    <section id="contact" ref={sectionRef} className={`${styles.section} reveal ${visible ? 'visible' : ''}`}>
      <Prompt command="curl https://maanav.dev/contact.json">
        <div className={styles.json}>
          <div className={styles.brace}><span className="text-fg">{'{'}</span></div>

          {CONTACT.map(({ key, value, href }, i) => (
            <div key={key} className={styles.row}>
              <span className="text-green">  "{key}"</span>
              <span className="text-fg">:{' '.repeat(Math.max(1, 10 - key.length))}</span>
              <span className="text-yellow">"</span>
              <a
                href={href}
                target={href.startsWith('http') ? '_blank' : undefined}
                rel="noopener noreferrer"
                className={styles.val}
              >
                {value}
              </a>
              <span className="text-yellow">"</span>
              {i < CONTACT.length - 1 && <span className="text-comment">,</span>}
            </div>
          ))}

          <div className={styles.brace}><span className="text-fg">{'}'}</span></div>
        </div>

        <div className={styles.ascii}>
          <span className="text-comment">{`
   /\\__/\\
  ( >  < )   ← friendly neighborhood engineer
   \\  ~ /
    \\___/`}</span>
        </div>

        <div className={styles.hint}>
          <span className="text-comment">&gt; Always open to interesting opportunities — don't be a stranger!</span>
        </div>
      </Prompt>
    </section>
  );
}
