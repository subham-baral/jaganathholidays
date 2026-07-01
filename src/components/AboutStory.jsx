import Image from 'next/image';
import styles from './AboutStory.module.css';
import { FiCheckCircle } from 'react-icons/fi';

export default function AboutStory() {
  const points = [
    "Expert Guides with Local Knowledge",
    "Handpicked Premium Accommodations",
    "Tailored Itineraries for Every Need",
    "24/7 Dedicated Customer Support"
  ];

  return (
    <section className={styles.storySection}>
      <div className={styles.container}>
        <div className={styles.imageColumn}>
          <div className={styles.imageWrapperMain}>
            <Image 
              src="/loved-destination-1.png" 
              alt="Beautiful Destination" 
              width={500} 
              height={600} 
              className={styles.mainImage}
            />
          </div>
          <div className={styles.imageWrapperSub}>
            <Image 
              src="/loved-destination-2.png" 
              alt="Cultural Experience" 
              width={300} 
              height={300} 
              className={styles.subImage}
            />
          </div>
          <div className={styles.experienceBadge}>
            <span className={styles.badgeNumber}>15+</span>
            <span className={styles.badgeText}>Years of Experience</span>
          </div>
        </div>
        
        <div className={styles.textColumn}>
          <h4 className={styles.subtitle}>Our Story</h4>
          <h2 className={styles.title}>Creating Unforgettable Memories Since 2011</h2>
          
          <p className={styles.description}>
            Welcome to Jagannath Holidays, your premier gateway to the enchanting landscapes and rich cultural heritage of India and beyond. What started as a small passion project to showcase the hidden gems of Odisha has blossomed into a full-scale travel agency dedicated to curating life-changing journeys.
          </p>
          
          <p className={styles.description}>
            We believe that travel is not just about visiting new places, but about the experiences that shape our worldview. Whether you are looking for a serene honeymoon getaway, an adventurous wildlife safari, or a deeply spiritual pilgrimage, our dedicated team works tirelessly to ensure every detail of your trip is flawless.
          </p>
          
          <ul className={styles.pointsList}>
            {points.map((point, index) => (
              <li key={index} className={styles.pointItem}>
                <FiCheckCircle className={styles.checkIcon} />
                <span>{point}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
