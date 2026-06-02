import styles from './Prompt.module.css';

export default function Prompt({ command, children, dim = false }) {
  return (
    <div className={`${styles.block} ${dim ? styles.dim : ''}`}>
      <div className={styles.command}>
        <span className={styles.user}>maanav@portfolio</span>
        <span className={styles.colon}>:</span>
        <span className={styles.path}>~</span>
        <span className={styles.dollar}>$</span>
        <span className={styles.cmd}>{command}</span>
      </div>
      {children && <div className={styles.output}>{children}</div>}
    </div>
  );
}
