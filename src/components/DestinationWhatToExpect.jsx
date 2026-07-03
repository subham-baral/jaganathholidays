import { FiCheck } from 'react-icons/fi';
import styles from './DestinationWhatToExpect.module.css';

export default function DestinationWhatToExpect() {
  const expectations = [
    "Transport and accommodation is already organized",
    "Land of Peace & Spirituality",
    "The Best in Hospitality",
    "Local and knowledgeable guides",
    "Value for Money",
    "The Natural Paradise",
    "Tour the Incredible Wildlife",
    "Easy to Plan and Book",
    "Great Gift and Safety"
  ];

  return (
    <section id="what-to-expect" className={styles.whatToExpectSection}>
      <div className={styles.container}>
        <h2 className={styles.sectionTitle}>What to Expect</h2>
        
        <div className={styles.grid}>
          {expectations.map((text, index) => (
            <div key={index} className={styles.expectationCard}>
              <FiCheck className={styles.checkIcon} />
              <span className={styles.text}>{text}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
