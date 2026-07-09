import styles from './AboutSection.module.css';
import AnimatedButton from './AnimatedButton';

export default function AboutSection() {
  return (
    <section className={styles.aboutSection}>
      <div className={styles.container}>
        {/* Left Column - Content */}
        <div className={styles.contentColumn}>
          <h4 className={styles.subheading}>Our Story</h4>
          <h2 className={styles.heading}>About Jagannath Holidays</h2>
          
          <p className={styles.paragraph}>
            Jagannath Holidays believes that a refreshing getaway is the perfect way to escape the
            demands of everyday life. Planning a trip can often feel overwhelming, but our experienced
            team is here to make your journey seamless, comfortable, and unforgettable. With carefully
            crafted tour packages, personalized itineraries, reliable reservation services, and
            competitive pricing, we cater to travelers from across the globe who wish to explore the
            beauty and culture of Odisha. As a trusted travel partner, Jagannath Holidays is committed
            to delivering exceptional service and creating memorable travel experiences for every customer.
          </p>

          <p className={styles.paragraph}>
            Since our establishment, Jagannath Holidays has been dedicated to providing reliable
            and professional travel services to travelers across India and around the world. Based in
            Bhubaneswar, Odisha, we specialize in delivering a wide range of B2B and B2C travel
            solutions, offering personalized assistance, seamless travel arrangements, and
            exceptional customer support.
          </p>

          <AnimatedButton className={styles.readMoreBtn}>
            Read More
          </AnimatedButton>
        </div>

        {/* Right Column - Images */}
        <div className={styles.imageColumn}>
          <div className={styles.imageWrapper}>
            <img 
              src="/360-view-new.webp" 
              alt="Jagannath Holidays 360 View" 
              className={styles.collageImage}
            />
          </div>
        </div>
      </div>
    </section>
  );
}
