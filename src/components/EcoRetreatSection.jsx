import styles from './EcoRetreatSection.module.css';

export default function EcoRetreatSection() {
  const retreats = [
    { name: 'Konark', image: 'https://picsum.photos/300/300?random=80' },
    { name: 'Paradip', image: 'https://picsum.photos/300/300?random=81' },
    { name: 'Bhitarkanika', image: 'https://picsum.photos/300/300?random=82' },
    { name: 'Sambalpur', image: 'https://picsum.photos/300/300?random=83' },
  ];

  return (
    <section className={styles.ecoSection}>
      <div className={styles.container}>
        <h2 className={styles.heading}>Book Eco Retreat</h2>
        
        <div className={styles.grid}>
          {retreats.map((retreat, index) => (
            <div key={index} className={styles.item}>
              <div className={styles.imageWrapper}>
                <img src={retreat.image} alt={retreat.name} className={styles.image} />
              </div>
              <h3 className={styles.title}>{retreat.name}</h3>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
