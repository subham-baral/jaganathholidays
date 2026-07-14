"use client";

import { useRouter } from 'next/navigation';
import { FiHeart, FiArrowRight } from 'react-icons/fi';
import styles from './HoneymoonSection.module.css';
import AnimatedButton from './AnimatedButton';

export default function HoneymoonSection() {
  const router = useRouter();

  return (
    <section className={styles.honeymoonSection}>
      <div className={styles.overlay}></div>
      <div className={styles.container}>
        <div className={styles.glassCard}>
          <span className={styles.accentText}>
            <FiHeart className={styles.heartIcon} /> Romantic Getaways
          </span>
          <h2 className={styles.heading}>
            Celebrate Love in <br />
            <span>Romantic Paradise</span>
          </h2>
          <p className={styles.description}>
            Start your forever with unforgettable romantic journeys designed for newlyweds. 
            From serene beachfronts in Puri to misty hill retreats in Daringbadi, we curate 
            magical experiences to cherish for a lifetime.
          </p>
          <div className={styles.actionBlock}>
            <AnimatedButton 
              onClick={() => router.push('/packages')}
              className={styles.ctaBtn}
            >
              Explore Honeymoon Packages <FiArrowRight className={styles.arrowIcon} />
            </AnimatedButton>
          </div>
        </div>
      </div>
    </section>
  );
}
