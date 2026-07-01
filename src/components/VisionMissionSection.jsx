import { FiEye, FiTarget } from 'react-icons/fi';
import styles from './VisionMissionSection.module.css';

export default function VisionMissionSection() {
  return (
    <section className={styles.vmSection}>
      <div className={styles.container}>
        <div className={styles.card}>
          <div className={styles.iconWrapper}>
            <FiEye className={styles.icon} />
          </div>
          <h2 className={styles.title}>Our Vision</h2>
          <p className={styles.description}>
            To be the most trusted and innovative travel companion, inspiring people to explore the world deeply, connect across cultures, and create lifelong memories while preserving the beauty of our planet for future generations.
          </p>
        </div>

        <div className={styles.card}>
          <div className={styles.iconWrapper}>
            <FiTarget className={styles.icon} />
          </div>
          <h2 className={styles.title}>Our Mission</h2>
          <p className={styles.description}>
            To curate exceptional, personalized travel experiences that exceed our clients' expectations. We strive to provide unparalleled service, expert guidance, and seamless journeys, all while promoting responsible and sustainable tourism practices.
          </p>
        </div>
      </div>
    </section>
  );
}
