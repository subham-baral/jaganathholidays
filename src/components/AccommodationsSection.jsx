import styles from './AccommodationsSection.module.css';

export default function AccommodationsSection() {
  const accommodations = [
    { name: 'Taj Puri Resort & Spa', location: 'Puri - Bhubaneswar', image: 'https://picsum.photos/400/500?random=70' },
    { name: 'MAYFAIR Heritage', location: 'Puri - Bhubaneswar', image: 'https://picsum.photos/400/500?random=71' },
    { name: 'Sterling Puri', location: 'Puri - Bhubaneswar', image: 'https://picsum.photos/400/500?random=72' },
    { name: 'Pride Ananya Resort', location: 'Puri - Bhubaneswar', image: 'https://picsum.photos/400/500?random=73' },
  ];

  return (
    <section className={styles.accommodationsSection}>
      <div className={styles.container}>
        <div className={styles.headingArea}>
          <h4 className={styles.subheading}>RELAX IN TOP-RATED HOTELS</h4>
          <h2 className={styles.heading}>Accommodations With Star Hotels</h2>
        </div>

        <div className={styles.cardsGrid}>
          {accommodations.map((hotel, index) => (
            <div key={index} className={styles.card}>
              <img src={hotel.image} alt={hotel.name} className={styles.cardImage} />
              <div className={styles.cardOverlay}>
                <h3 className={styles.cardTitle}>{hotel.name}</h3>
                <p className={styles.cardLocation}>{hotel.location}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
