import { FiClock, FiMapPin, FiStar, FiCheck } from 'react-icons/fi';
import styles from './PackageDetailsBanner.module.css';
import AnimatedButton from './AnimatedButton';

export default function PackageDetailsBanner() {
  return (
    <section className={styles.bannerSection}>
      <div className={styles.container}>
        {/* Left Side: Massive Image */}
        <div className={styles.imageCol}>
          <img 
            src="/jaganath-banner.webp" 
            alt="Puri Gangasagar Tour" 
            className={styles.mainImage}
          />
          <div className={styles.imageOverlay}>
            <span className={styles.badge}>Best Seller</span>
          </div>
        </div>

        {/* Right Side: Title and Quick Info */}
        <div className={styles.contentCol}>
          <div className={styles.ratingBox}>
            <div className={styles.stars}>
              {[...Array(5)].map((_, i) => <FiStar key={i} className={styles.starIcon} fill="#fbbf24" color="#fbbf24" />)}
            </div>
            <span className={styles.ratingText}>4.9/5 (2.5k Reviews)</span>
          </div>

          <h1 className={styles.title}>
            Premium Puri Gangasagar Tour Package
          </h1>
          
          <p className={styles.subtitle}>
            Experience the divine spirituality and breathtaking landscapes of Odisha and West Bengal on this handcrafted 6-day journey.
          </p>

          <div className={styles.infoPills}>
            <div className={styles.pill}>
              <FiClock className={styles.pillIcon} />
              <span>5 Nights / 6 Days</span>
            </div>
            <div className={styles.pill}>
              <FiMapPin className={styles.pillIcon} />
              <span>Bhubaneswar, Puri, Gangasagar</span>
            </div>
          </div>

          <div className={styles.highlights}>
            <h4 className={styles.highlightsTitle}>Tour Highlights:</h4>
            <ul className={styles.highlightsList}>
              <li><FiCheck className={styles.checkIcon} /> VIP Jagannath Darshan</li>
              <li><FiCheck className={styles.checkIcon} /> Chilika Lake Dolphin Cruise</li>
              <li><FiCheck className={styles.checkIcon} /> Premium 4-Star Accommodations</li>
            </ul>
          </div>

          <div className={styles.pricingAction}>
            <div className={styles.priceBox}>
              <span className={styles.priceLabel}>Starting From</span>
              <span className={styles.priceValue}>₹ 18,500</span>
              <span className={styles.priceUnit}>per person</span>
            </div>
            
            <AnimatedButton className={styles.bookBtn}>
              Book This Package
            </AnimatedButton>
          </div>
        </div>
      </div>
    </section>
  );
}
