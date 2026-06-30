import styles from './LovedDestinations.module.css';

export default function LovedDestinations() {
  const destinations = [
    { name: 'Puri', image: '/loved-destination-1.png' },
    { name: 'Konark', image: '/loved-destination-2.png' },
    { name: 'Daringbadi', image: '/loved-destination-3.png' },
    { name: 'Satapada', image: '/loved-destination-4.jpg' },
  ];

  return (
    <section className={styles.destinationsSection}>
      <div className={styles.container}>
        <div className={styles.headingArea}>
          <h4 className={styles.subheading}>DESTINATIONS</h4>
          <h2 className={styles.heading}>Our Most Loved Destinations</h2>
        </div>

        <div className={styles.cardsGrid}>
          {destinations.map((dest, index) => (
            <div key={index} className={styles.card}>
              <img src={dest.image} alt={dest.name} className={styles.cardImage} />
              <div className={styles.cardOverlay}>
                <h3 className={styles.cardTitle}>{dest.name}</h3>
                <a href="#" className={styles.bookNow}>Book Now</a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
