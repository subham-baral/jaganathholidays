import styles from './PopularTourPackages.module.css';

export default function PopularTourPackages() {
  const packages = [
    {
      title: 'Golden Triangle Tour Packages of Odisha',
      description: 'Odisha is known as the Golden Triangle and is been very much celebrated among travelers and includes the three most picturesque and prime cities of the state Bhubaneswar...',
      duration: '2 Nights 3 Days',
      image: 'https://picsum.photos/400/300?random=40'
    },
    {
      title: 'Odisha Adventure Tour Packages',
      description: 'The adventure tour package is a visual treat to the eyes and that could pump to visit it again and again. Are you an adventure lover and always desire to go for adventure tour packages to explore different places.',
      duration: '8 Nights 10 Days',
      image: 'https://picsum.photos/400/300?random=41'
    },
    {
      title: 'Puri Jagannath Rath Yatra Tour Packages of Odisha',
      description: 'Odisha is known as the Golden Triangle and is been very much celebrated among travelers and includes the three most picturesque and prime cities of the state Bhubaneswar...',
      duration: '3 Nights 4 Days',
      image: 'https://picsum.photos/400/300?random=42'
    },
    {
      title: 'Authentic Tribal Tour Packages in Odisha',
      description: 'The state Odisha is been assessed as a country of in excess of 60 sorts of tribes and more than 29% of the tribal populace. There isn\'t anything more gutsy, learned, and shrewd than to know a greater amount.',
      duration: '2 Nights 3 Days',
      image: 'https://picsum.photos/400/300?random=43'
    },
    {
      title: 'Satkosia Wildlife Adventure & Nature Tour Packages',
      description: 'Might it be said that you are the person who essentially loves natural life and is consistently prepared to look at the uncommon assortments in fauna and flora?',
      duration: '8 Nights 10 Days',
      image: 'https://picsum.photos/400/300?random=44'
    },
    {
      title: 'Romantic Odisha Honeymoon Tour Packages',
      description: 'Odisha is for sure an optimal spot for honeymooners and young couples. Odisha is known for its religious festivals, that really charm countless newlywed couples from every corner of the nation.',
      duration: '3 Nights 4 Days',
      image: 'https://picsum.photos/400/300?random=45'
    }
  ];

  return (
    <section className={styles.tourSection}>
      <div className={styles.container}>
        <div className={styles.header}>
          <h2 className={styles.heading}>Popular Tour Packages</h2>
          <button className={styles.viewAllBtn}>View All</button>
        </div>

        <div className={styles.grid}>
          {packages.map((pkg, index) => (
            <div key={index} className={styles.card}>
              <div className={styles.imageWrapper}>
                <img src={pkg.image} alt={pkg.title} className={styles.cardImage} />
              </div>
              <div className={styles.cardContent}>
                <h3 className={styles.cardTitle}>{pkg.title}</h3>
                <p className={styles.cardDescription}>{pkg.description}</p>
                <div className={styles.cardFooter}>
                  <span className={styles.duration}>{pkg.duration}</span>
                  <button className={styles.bookNowBtn}>Book Now</button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
