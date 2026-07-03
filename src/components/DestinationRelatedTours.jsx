import { FiClock } from 'react-icons/fi';
import styles from './DestinationRelatedTours.module.css';
import AnimatedButton from './AnimatedButton';

export default function DestinationRelatedTours() {
  const tours = [
    {
      image: "/destination-window-1.png", // Using placeholder
      title: "Golden Triangle Tour Packages of Odisha",
      description: "Odisha is known as the Golden Triangle and is been very much celebrated among travelers and includes the three most picturesque and prime cities of the state Bhubaneswar...",
      duration: "2 Nights 3 Days"
    },
    {
      image: "/destination-window-3.png", // Forest placeholder
      title: "", // Empty title as per screenshot
      description: "The adventure tour package is a visual treat to the eyes and that could pump to visit it again and again. Are you an adventure lover and always desire to go for adventure tour packages to explore different places.",
      duration: "8 Nights 10 Days"
    },
    {
      image: "/destination-window-2.png", // Temple placeholder
      title: "Puri Jagannath Rath Yatra Tour Packages of Odisha",
      description: "Odisha is known as the Golden Triangle and is been very much celebrated among travelers and includes the three most picturesque and prime cities of the state Bhubaneswar...",
      duration: "3 Nights 4 Days"
    }
  ];

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
                <img src={tour.image} alt={tour.title || "Tour Package"} className={styles.image} />
              </div>
              <div className={styles.cardContent}>
                {tour.title && <h3 className={styles.cardTitle}>{tour.title}</h3>}
                <p className={styles.cardDescription}>{tour.description}</p>
                
                <div className={styles.cardFooter}>
                  <div className={styles.duration}>
                    <FiClock className={styles.clockIcon} /> {tour.duration}
                  </div>
                  <AnimatedButton className={styles.bookBtn}>
                    Book Now
                  </AnimatedButton>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
