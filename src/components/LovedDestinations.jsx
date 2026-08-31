import styles from './LovedDestinations.module.css';
import Link from 'next/link';

/* ── Data ── */
const destinations = [
  { name: 'Puri',       image: '/loved-destination-1.png' },
  { name: 'Konark',     image: '/loved-destination-2.png' },
  { name: 'Daringbadi', image: '/loved-destination-3.png' },
  { name: 'Satapada',   image: '/loved-destination-4.jpg' },
];

/* ── Sub-components ── */
function SectionHeader() {
  return (
    <div className={styles.headingArea}>
      <h4 className={styles.subheading}>Destinations</h4>
      <h2 className={styles.heading}>Our Most Loved Destinations</h2>
    </div>
  );
}

function DestinationCard({ name, image }) {
  const slug = name.toLowerCase().replace(/\s+/g, '-');
  return (
    <Link href={`/destination/${slug}`} className={styles.card}>
      <img src={image} alt={name} className={styles.cardImage} />
      <div className={styles.cardOverlay}>
        <h3 className={styles.cardTitle}>{name}</h3>
        <span className={styles.bookNow}>Book Now</span>
      </div>
    </Link>
  );
}

/* ── Main Component ── */
export default function LovedDestinations() {
  return (
    <section className={styles.destinationsSection}>
      <div className={styles.container}>
        <SectionHeader />
        <div className={styles.cardsGrid}>
          {destinations.map((dest) => (
            <DestinationCard key={dest.name} {...dest} />
          ))}
        </div>
      </div>
    </section>
  );
}
