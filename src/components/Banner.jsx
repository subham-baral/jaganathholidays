import styles from './Banner.module.css';
import { FaStar } from 'react-icons/fa';
import AnimatedButton from './AnimatedButton';

export default function Banner() {
  return (
    <section className={styles.bannerContainer}>
      <div className={styles.bannerOverlay}></div>
      <div className={styles.bannerContent}>
        <div className={styles.reviews}>
          <div className={styles.stars}>
            <FaStar className={styles.starIcon} />
            <FaStar className={styles.starIcon} />
            <FaStar className={styles.starIcon} />
            <FaStar className={styles.starIcon} />
            <FaStar className={styles.starIcon} />
          </div>
          <span>2K+ Happy Travelers</span>
        </div>
        
        <h1 className={styles.title}>
          Jagannath Holidays<br />
          Discover. Experience.<br />
          Celebrate
        </h1>
        
        <p className={styles.subtitle}>
          Your trusted travel partner for unforgettable journeys<br />
          across India and beyond.
        </p>
        
        <AnimatedButton className={styles.btnDestinations}>
          View All Destinations
        </AnimatedButton>
      </div>
    </section>
  );
}
