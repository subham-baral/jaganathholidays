import styles from './HoneymoonSection.module.css';

export default function HoneymoonSection() {
  return (
    <section className={styles.honeymoonSection}>
      <div className={styles.overlay}></div>
      <div className={styles.content}>
        <h2 className={styles.heading}>
          Romantic and Honeymoon<br />
          Holiday Destinations
        </h2>
      </div>
      <div className={styles.tornEdge}>
        <svg viewBox="0 0 1000 40" preserveAspectRatio="none" className={styles.edgeSvg}>
          <path d="M0,40 L0,15 Q60,5 120,20 T220,10 T320,25 T420,5 T520,20 T620,10 T720,22 T820,8 T920,20 T1000,5 L1000,40 Z" fill="#ffffff" opacity="0.3" />
          <path d="M0,40 L0,25 Q40,15 90,28 T180,18 T280,32 T380,15 T480,28 T580,18 T680,30 T780,15 T880,28 T1000,15 L1000,40 Z" fill="#ffffff" opacity="0.6" />
          <path d="M0,40 L0,20 Q50,10 100,25 T200,15 T300,30 T400,10 T500,25 T600,15 T700,28 T800,12 T900,25 T1000,10 L1000,40 Z" fill="#ffffff" />
        </svg>
      </div>
    </section>
  );
}
