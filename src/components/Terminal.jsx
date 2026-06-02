import styles from './Terminal.module.css';

export default function Terminal({ children }) {
  return (
    <div className={styles.window}>
      <div className={styles.titlebar}>
        <div className={styles.dots}>
          <span className={styles.red} />
          <span className={styles.yellow} />
          <span className={styles.green} />
        </div>
        <span className={styles.title}>maanav@portfolio: ~</span>
        <div className={styles.spacer} />
      </div>
      <div className={styles.body}>
        {children}
      </div>
    </div>
  );
}
