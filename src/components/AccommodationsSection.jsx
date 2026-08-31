import styles from './AccommodationsSection.module.css';

/* ── Data ── */
const accommodationsData = [
  { name: 'Taj Puri Resort & Spa', location: 'Puri - Bhubaneswar', image: 'https://picsum.photos/400/500?random=70' },
  { name: 'MAYFAIR Heritage', location: 'Puri - Bhubaneswar', image: 'https://picsum.photos/400/500?random=71' },
  { name: 'Sterling Puri', location: 'Puri - Bhubaneswar', image: 'https://picsum.photos/400/500?random=72' },
  { name: 'Pride Ananya Resort', location: 'Puri - Bhubaneswar', image: 'https://picsum.photos/400/500?random=73' },
];

/* ── Sub-components ── */
function AccommodationHeader() {
  return (
    <div className={styles.headingArea}>
      <h4 className={styles.subheading}>RELAX IN TOP-RATED HOTELS</h4>
      <h2 className={styles.heading}>Accommodations With Star Hotels</h2>
    </div>
  );
}

function AccommodationCard({ name, location, image }) {
  return (
    <div className={styles.card}>
      <img src={image} alt={name} className={styles.cardImage} />
      <div className={styles.cardOverlay}>
        <h3 className={styles.cardTitle}>{name}</h3>
        <p className={styles.cardLocation}>{location}</p>
      </div>
    </div>
  );
}

/* ── Main Component ── */
export default function AccommodationsSection() {
  return (
    <section className={styles.accommodationsSection}>
      <div className={styles.container}>
        <AccommodationHeader />
        <div className={styles.cardsGrid}>
          {accommodationsData.map((hotel, index) => (
            <AccommodationCard key={index} {...hotel} />
          ))}
        </div>
      </div>
    </section>
  );
}
