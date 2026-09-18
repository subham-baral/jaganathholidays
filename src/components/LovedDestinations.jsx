import styles from './LovedDestinations.module.css';
import LovedDestinationsSlider from './LovedDestinationsSlider';
import { getDestinationsTaxonomy } from '@/lib/api';

/* ── Fallback Data ── */
const fallbackDestinations = [
  { name: 'Puri',       slug: 'puri',       image: '/loved-destination-1.png' },
  { name: 'Konark',     slug: 'konark',     image: '/loved-destination-2.png' },
  { name: 'Daringbadi', slug: 'daringbadi', image: '/loved-destination-3.png' },
  { name: 'Satapada',   slug: 'satapada',   image: '/loved-destination-4.jpg' },
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

/* ── Main Component ── */
export default async function LovedDestinations({ destinations: initialDestinations = null }) {
  let destinations = initialDestinations;

  if (!destinations || destinations.length === 0) {
    destinations = await getDestinationsTaxonomy();
  }

  if (!destinations || destinations.length === 0) {
    destinations = fallbackDestinations;
  }

  return (
    <section className={styles.destinationsSection}>
      <div className={styles.container}>
        <SectionHeader />
        <LovedDestinationsSlider destinations={destinations} />
      </div>
    </section>
  );
}
