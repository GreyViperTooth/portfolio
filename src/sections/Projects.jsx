import { useEffect, useRef, useState } from 'react';
import Prompt from '../components/Prompt';
import { projects } from '../data/projects';
import styles from './Projects.module.css';

const TYPE_COLOR = {
  Research: 'text-purple',
  Course:   'text-cyan',
  Personal: 'text-green',
};

export default function Projects() {
  const sectionRef = useRef(null);
  const [visible, setVisible] = useState(false);
  const [expanded, setExpanded] = useState(null);

  useEffect(() => {
    const obs = new IntersectionObserver(
      ([e]) => { if (e.isIntersecting) { setVisible(true); obs.disconnect(); } },
      { threshold: 0.1 }
    );
    if (sectionRef.current) obs.observe(sectionRef.current);
    return () => obs.disconnect();
  }, []);

  function toggle(id) {
    setExpanded(prev => prev === id ? null : id);
  }

  return (
    <section id="projects" ref={sectionRef} className={`${styles.section} reveal ${visible ? 'visible' : ''}`}>
      <Prompt command="ls -la projects/">
        <div className={styles.header}>
          <span className="text-comment">total {projects.length}</span>
        </div>

        <div className={styles.list}>
          {projects.map((p, i) => (
            <div key={p.id} className={styles.entry}>
              <button
                className={`${styles.row} ${expanded === p.id ? styles.open : ''}`}
                onClick={() => toggle(p.id)}
                style={{ animationDelay: `${i * 80}ms` }}
              >
                <span className="text-comment">drwxr-xr-x</span>
                <span className={styles.name}>{p.id}</span>
                <span className={styles.techList}>[{p.tech.slice(0, 3).join(', ')}{p.tech.length > 3 ? ', …' : ''}]</span>
                <span className={`${styles.badge} ${TYPE_COLOR[p.type] || 'text-comment'}`}>{p.type}</span>
                <span className={`${styles.arrow} ${expanded === p.id ? styles.down : ''}`}>▶</span>
              </button>

              {expanded === p.id && (
                <div className={styles.detail}>
                  <Prompt command={`cat projects/${p.id}/README.md`} dim>
                    <div className={styles.card}>
                      <div className={styles.cardTop}>
                        <span className="text-comment">┌─ </span>
                        <span className="text-cyan">{p.name}</span>
                        <span className="text-comment"> {'─'.repeat(Math.max(0, 36 - p.name.length))}┐</span>
                      </div>
                      <div className={styles.cardBody}>
                        <div className={styles.cardDesc}>
                          <span className="text-comment">│ </span>
                          <span className="text-fg">{p.description}</span>
                        </div>
                        <div className={styles.cardStack}>
                          <span className="text-comment">│ Stack: </span>
                          {p.tech.map((t, i) => (
                            <span key={t}>
                              <span className={styles.techTag}>{t}</span>
                              {i < p.tech.length - 1 && <span className="text-comment"> • </span>}
                            </span>
                          ))}
                        </div>
                        <div className={styles.links}>
                          <span className="text-comment">│ </span>
                          <a href={p.github} target="_blank" rel="noopener noreferrer" className={styles.link}>
                            [GitHub ↗]
                          </a>
                          {p.demo && (
                            <>
                              {'  '}
                              <a href={p.demo} target="_blank" rel="noopener noreferrer" className={styles.link}>
                                [Live Demo ↗]
                              </a>
                            </>
                          )}
                        </div>
                      </div>
                      <div className={styles.cardBottom}>
                        <span className="text-comment">└{'─'.repeat(42)}┘</span>
                      </div>
                    </div>
                  </Prompt>
                </div>
              )}
            </div>
          ))}
        </div>

        <div className={styles.hint}>
          <span className="text-comment"># click a row to expand details</span>
        </div>
      </Prompt>
    </section>
  );
}
