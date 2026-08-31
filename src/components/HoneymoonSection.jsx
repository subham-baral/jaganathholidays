"use client";

import { useRouter } from 'next/navigation';
import { FiHeart, FiArrowRight } from 'react-icons/fi';
import styles from './HoneymoonSection.module.css';
import AnimatedButton from './AnimatedButton';

/* ── Sub-components ── */

function AccentLabel() {
  return (
    <span className={styles.accentText}>
      <FiHeart className={styles.heartIcon} /> Romantic Getaways
    </span>
  );
}

function HoneymoonHeading() {
  return (
    <h2 className={styles.heading}>
      Celebrate Love in <br />
      <span>Romantic Paradise</span>
    </h2>
  );
}

function HoneymoonDescription() {
  return (
    <p className={styles.description}>
      Start your forever with unforgettable romantic journeys designed for newlyweds.
      From serene beachfronts in Puri to misty hill retreats in Daringbadi, we curate
      magical experiences to cherish for a lifetime.
    </p>
  );
}

function HoneymoonCTA({ onClick }) {
  return (
    <div className={styles.actionBlock}>
      <AnimatedButton onClick={onClick} className={styles.ctaBtn}>
        Explore Honeymoon Packages <FiArrowRight className={styles.arrowIcon} />
      </AnimatedButton>
    </div>
  );
}

/* ── Main Component ── */

export default function HoneymoonSection() {
  const router = useRouter();

  return (
    <section className={styles.honeymoonSection}>
      <div className={styles.overlay} />
      <div className={styles.container}>
        <div className={styles.glassCard}>
          <AccentLabel />
          <HoneymoonHeading />
          <HoneymoonDescription />
          <HoneymoonCTA onClick={() => router.push('/packages')} />
        </div>
      </div>
    </section>
  );
}
