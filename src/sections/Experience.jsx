import { useEffect, useRef, useState } from 'react';
import Prompt from '../components/Prompt';
import { experience, education, publications, leadership, certifications } from '../data/experience';
import styles from './Experience.module.css';

export default function Experience() {
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
    <section id="experience" ref={sectionRef} className={`${styles.section} reveal ${visible ? 'visible' : ''}`}>
      <Prompt command="cat resume.md">
        <div className={styles.block}>

          {/* Experience */}
          <SectionHead label="EXPERIENCE" />
          {experience.map((item, i) => (
            <TreeItem key={i} item={item} last={i === experience.length - 1} />
          ))}

          {/* Education */}
          <SectionHead label="EDUCATION" top />
          {education.map((item, i) => (
            <TreeItem key={i} item={item} last={i === education.length - 1} />
          ))}

          {/* Publications */}
          <SectionHead label="PUBLICATIONS" top />
          <div className={styles.treeItem}>
            {publications.map((pub, i) => (
              <div key={i} className={styles.pubRow}>
                <span className="text-comment">{i === publications.length - 1 ? '└' : '├'}── </span>
                {pub.url
                  ? <a href={pub.url} target="_blank" rel="noopener noreferrer" className={styles.pubLink}>{pub.title}</a>
                  : <span className="text-cyan">{pub.title}</span>}
                <br />
                <span className={styles.pubMeta}>
                  {'    '}<span className="text-comment">{pub.venue}</span>
                  <span className="text-comment">  ·  </span>
                  <span className="text-yellow">{pub.date}</span>
                </span>
              </div>
            ))}
          </div>

          {/* Certifications */}
          <SectionHead label="CERTIFICATIONS" top />
          <div className={styles.treeItem}>
            {certifications.map((c, i) => (
              <div key={i} className={styles.bullet}>
                <span className="text-comment">{i === certifications.length - 1 ? '└' : '├'}── </span>
                <span className="text-green">{c.title}</span>
                <span className="text-comment"> @ </span>
                <span className="text-fg">{c.issuer}</span>
                {c.date && <span className="text-comment">  [{c.date}]</span>}
                {c.url && <> <a href={c.url} target="_blank" rel="noopener noreferrer" className={styles.certLink}>[verify ↗]</a></>}
              </div>
            ))}
          </div>

          {/* Leadership */}
          <SectionHead label="LEADERSHIP" top />
          <div className={styles.treeItem}>
            {leadership.map((l, i) => (
              <div key={i} className={styles.bullet}>
                <span className="text-comment">{i === leadership.length - 1 ? '└' : '├'}── </span>
                <span className="text-green">{l.title}</span>
                <span className="text-comment"> @ </span>
                <span className="text-fg">{l.org}</span>
                <span className="text-comment">  [{l.period}]</span>
              </div>
            ))}
          </div>

          <div className={styles.download}>
            <a href="/resume.pdf" target="_blank" rel="noopener noreferrer" className={styles.dlBtn}>
              [ download resume.pdf ↓ ]
            </a>
          </div>

        </div>
      </Prompt>
    </section>
  );
}

function SectionHead({ label, top }) {
  return (
    <div className={styles.sectionHead} style={top ? { marginTop: 28 } : {}}>
      <span className="text-yellow">{label}</span>
      <br />
      <span className="text-comment">{'─'.repeat(label.length)}</span>
    </div>
  );
}

function TreeItem({ item, last }) {
  return (
    <div className={styles.treeItem}>
      <div className={styles.period}>
        <span className="text-comment">{item.period}</span>
      </div>
      <div className={styles.tree}>
        <span className="text-comment">{last ? '└' : '├'}── </span>
        <span className="text-cyan">{item.title}</span>
        <span className="text-comment"> @ </span>
        <span className="text-green">{item.org}</span>
      </div>
      {item.bullets.map((b, i) => (
        <div key={i} className={styles.bullet}>
          <span className="text-comment">{'    '}{i === item.bullets.length - 1 ? '└' : '├'}── </span>
          <span className="text-fg">{b}</span>
        </div>
      ))}
    </div>
  );
}
