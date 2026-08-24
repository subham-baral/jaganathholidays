"use client";

import Link from 'next/link';
import { FiClock } from 'react-icons/fi';
import styles from './DestinationRelatedTours.module.css';
import AnimatedButton from './AnimatedButton';
import { getImageUrl } from '@/lib/api';

export default function DestinationRelatedTours({ relatedTours = [] }) {
  const defaultTours = [
    {
      image: "/destination-window-1.png",
      title: "Family Tours in Odisha",
      description: "Odisha is known as the Golden Triangle and is celebrated among travelers with picturesque and prime cities of Bhubaneswar and Puri.",
      duration: "5 Nights 6 Days",
      slug: "family-tours-in-odisha"
    },
    {
      image: "/destination-window-3.png",
      title: "Tribal Tours in Odisha",
      description: "An authentic cultural and heritage tour exploring traditional art, crafts, and heritage of local tribal villages in Odisha.",
      duration: "6 Nights 7 Days",
      slug: "tribal-tours-in-odisha"
    },
    {
      image: "/destination-window-2.png",
      title: "Honeymoon Tours in Odisha",
      description: "Celebrate romantic journeys along scenic beaches and nature getaways crafted for memorable couple experiences.",
      duration: "4 Nights 5 Days",
      slug: "honeymoon-tours-in-odisha"
    }
  ];

  const tours = Array.isArray(relatedTours) && relatedTours.length > 0
    ? relatedTours.map((t, idx) => ({
        image: getImageUrl(t.data?.cover_image || t.cover_image || `/destination-window-${(idx % 3) + 1}.png`),
        title: t.title || t.data?.title || 'Tour Package',
        description: (typeof t.data?.description === 'string' ? t.data.description.replace(/<[^>]+>/g, '').slice(0, 120) + '...' : t.description) || 'Explore amazing destinations with curated sightseeing and hotel stays.',
        duration: t.data?.tour_duration || t.tour_duration || '5 Nights 6 Days',
        slug: t.slug || '#'
      }))
    : defaultTours;

  return (
    <section className={styles.relatedToursSection}>
      <div className={styles.container}>
        <div className={styles.header}>
          <span className={styles.subtitle}>Amazing destinations</span>
          <h2 className={styles.title}>Related Tours</h2>
        </div>
        
        <div className={styles.grid}>
          {tours.map((tour, index) => (
            <div key={index} className={styles.tourCard}>
              <div className={styles.imageWrapper}>
                <img 
                  src={tour.image} 
                  alt={tour.title || "Tour Package"} 
                  className={styles.image}
                  onError={(e) => {
                    e.currentTarget.src = `/destination-window-${(index % 3) + 1}.png`;
                  }}
                />
              </div>
              <div className={styles.cardContent}>
                {tour.title && <h3 className={styles.cardTitle}>{tour.title}</h3>}
                <p className={styles.cardDescription}>{tour.description}</p>
                
                <div className={styles.cardFooter}>
                  <div className={styles.duration}>
                    <FiClock className={styles.clockIcon} /> {tour.duration}
                  </div>
                  <Link href={`/package/${tour.slug}`}>
                    <AnimatedButton className={styles.bookBtn}>
                      View Details
                    </AnimatedButton>
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
