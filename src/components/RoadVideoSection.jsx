'use client';

import { useRef, useEffect } from 'react';
import styles from './RoadVideoSection.module.css';

export default function RoadVideoSection() {
  const videoRef = useRef(null);
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && videoRef.current) {
          videoRef.current.play().catch(() => {});
        }
      },
      { threshold: 0.3 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section ref={sectionRef} className={styles.wrapper}>
      <div className={styles.videoCard}>
        <video
          ref={videoRef}
          className={styles.video}
          src="/videos/road.mp4"
          muted
          loop
          playsInline
          preload="metadata"
        />
      </div>
    </section>
  );
}
