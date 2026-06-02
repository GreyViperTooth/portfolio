import { useEffect, useRef, useState } from 'react';
import Prompt from '../components/Prompt';
import TypewriterText from '../components/TypewriterText';
import styles from './About.module.css';

const SKILLS = {
  Languages:       ['Python', 'C++', 'Java', 'JavaScript', 'C', 'SQL', 'Bash'],
  Frameworks:      ['React.js', 'Node.js', 'Flask', 'Django', 'PyTorch', 'TensorFlow', 'ROS/ROS2', 'OpenCV', 'GraphQL'],
  'Cloud / DB':    ['AWS', 'Docker', 'Kubernetes', 'PostgreSQL', 'MongoDB', 'Redis', 'MySQL'],
  'Robotics / ML': ['SLAM', 'Reinforcement Learning', 'Sensor Fusion', 'MuJoCo', 'Motion Planning', 'Isaac Lab'],
  Tools:           ['Git', 'GitHub Actions', 'CI/CD', 'REST APIs', 'Microservices', 'JIRA'],
};

const BIO = `Hi! I'm Maanav, a Master's student in Computer Science at Stony Brook who enjoys building systems that actually work in the real world. I spend a good chunk of my time working on software that powers embodied AI systems, but when I'm not debugging code or training models, you'll probably find me learning a new sport (it's skiing right now) or exploring new tech ideas.

I'm currently looking for full-time Software Engineering roles where I can learn fast, build meaningful products, and grow alongside strong teams.`;

// SVG icon components — sized to fit inline in terminal text
function GitHubIcon() {
  return (
    <svg className={styles.socialIcon} viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0 1 12 6.844a9.59 9.59 0 0 1 2.504.337c1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.02 10.02 0 0 0 22 12.017C22 6.484 17.522 2 12 2z"/>
    </svg>
  );
}

function LinkedInIcon() {
  return (
    <svg className={styles.socialIcon} viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 0 1-2.063-2.065 2.064 2.064 0 1 1 2.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
    </svg>
  );
}

export default function About() {
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
    <section id="about" ref={sectionRef} className={`${styles.section} reveal ${visible ? 'visible' : ''}`}>
      <Prompt command="cat about.txt">
        <div className={styles.header}>
          <span className="text-comment">{'─'.repeat(48)}</span>
          <div className={styles.info}>
            <InfoRow label="Name"  value="Maanav Anand Kumar" />
            <InfoRow label="Role"  value="M.S. CS @ Stony Brook · Software Engineer" />
            <InfoRow label="Based" value="New York, USA" />
            <InfoRow label="Email" value="maanavanandkumar@gmail.com" link="mailto:maanavanandkumar@gmail.com" />
          </div>
          <div className={styles.socialRow}>
            <a href="https://github.com/GreyViperTooth" target="_blank" rel="noopener noreferrer" className={styles.socialLink}>
              <GitHubIcon />
              <span>github.com/GreyViperTooth</span>
            </a>
            <a href="https://linkedin.com/in/maanavA" target="_blank" rel="noopener noreferrer" className={styles.socialLink}>
              <LinkedInIcon />
              <span>linkedin.com/in/maanavA</span>
            </a>
          </div>
          <span className="text-comment">{'─'.repeat(48)}</span>
        </div>

        <p className={styles.bio}>
          {visible && <TypewriterText text={BIO} speed={10} showCursor={false} />}
        </p>

        <div className={styles.skills}>
          <div className={styles.skillsLabel}>
            <span className="text-yellow">SKILLS</span>
            <br />
            <span className="text-comment">{'─'.repeat(6)}</span>
          </div>
          {Object.entries(SKILLS).map(([cat, tags]) => (
            <div key={cat} className={styles.skillRow}>
              <span className={styles.skillCat}>{cat}</span>
              <span className="text-comment">  ▸  </span>
              <span className={styles.tags}>
                {tags.map(t => <span key={t} className={styles.tag}>{t}</span>)}
              </span>
            </div>
          ))}
        </div>

        <div className={styles.ascii}>
          <span className="text-comment">{`     __
    /  \\
   |[_]|  ← where the magic happens
   |___|`}</span>
        </div>
      </Prompt>
    </section>
  );
}

function InfoRow({ label, value, link }) {
  return (
    <div className={styles.infoRow}>
      <span className="text-cyan">{label}</span>
      <span className="text-comment"> : </span>
      {link
        ? <a href={link} target={link.startsWith('http') ? '_blank' : undefined} rel="noopener noreferrer" className="text-fg">{value}</a>
        : <span className="text-fg">{value}</span>}
    </div>
  );
}
