import styles from './EcoRetreatSection.module.css';

export default function EcoRetreatSection() {
  const retreats = [
    { 
      name: 'Konark', 
      image: 'https://images.unsplash.com/photo-1548013146-72479768bada?q=80&w=600&auto=format&fit=crop',
      tagline: 'Misty Beach Retreat'
    },
    { 
      name: 'Paradip', 
      image: 'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?q=80&w=600&auto=format&fit=crop',
      tagline: 'Port & Golden Sands'
    },
    { 
      name: 'Bhitarkanika', 
      image: 'https://images.unsplash.com/photo-1471005197911-88e9d4a7834d?q=80&w=600&auto=format&fit=crop',
      tagline: 'Mangroves & Wildlife'
    },
    { 
      name: 'Sambalpur', 
      image: 'https://images.unsplash.com/photo-1706115872892-7bb5e53cb9b3?q=80&w=600&auto=format&fit=crop',
      tagline: 'Mahanadi River Beauty'
    },
  ];

  return (
    <section className={styles.ecoSection}>
      <div className={styles.container}>
        <div className={styles.header}>
          <span className={styles.subtitle}>Nature Getaways</span>
          <h2 className={styles.heading}>Book Eco Retreat Odisha</h2>
          <div className={styles.underline}></div>
        </div>
        
        <div className={styles.grid}>
          {retreats.map((retreat, index) => (
            <div key={index} className={styles.item}>
              <div className={`${styles.imageWrapper} shineEffect`}>
                <img src={retreat.image} alt={retreat.name} className={styles.image} />
                <div className={styles.imageOverlay}></div>
                <span className={styles.tag}>{retreat.tagline}</span>
              </div>
              <div className={styles.content}>
                <h3 className={styles.title}>{retreat.name}</h3>
                <span className={styles.bookBtn}>
                  Book Now 
                  <svg className={styles.arrowIcon} width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                    <line x1="5" y1="12" x2="19" y2="12"></line>
                    <polyline points="12 5 19 12 12 19"></polyline>
                  </svg>
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
