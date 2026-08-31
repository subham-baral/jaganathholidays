"use client";

import Link from 'next/link';
import styles from './DestinationsWindows.module.css';

export default function DestinationsWindows() {
  const baseImages = [
    { src: '/destination-window-1.png', name: 'Puri' },
    { src: '/destination-window-2.png', name: 'Daringbadi' },
    { src: '/destination-window-3.png', name: 'Konark' },
    { src: '/destination-window-4.png', name: 'Dhauli' },
    { src: '/destination-window-5.png', name: 'Nandan Kanan' },
    { src: '/destination-window-6.png', name: 'Satapada' },
  ];

  // Duplicate for seamless CSS marquee loop (animate exactly -50% = one full set)
  const allImages = [...baseImages, ...baseImages];

  return (
    <section className={styles.windowsSection}>
      <div className={styles.windowsContainer}>
        <div className={styles.marqueeTrack}>
          {allImages.map((dest, index) => {
            const slug = dest.name.toLowerCase().replace(/\s+/g, '-');
            return (
              <Link key={index} href={`/package/${slug}`} className={styles.slideItem}>
                <div className={styles.windowFrame} style={{ animationDelay: `${0.1 + ((index % baseImages.length) * 0.15)}s` }}>
                  <img
                    src={dest.src}
                    alt={dest.name}
                    className={styles.image}
                  />
                  <h4 className={styles.destName}>{dest.name}</h4>
                </div>
              </Link>
            );
          })}
        </div>
      </div>
    </section>
  );
}
