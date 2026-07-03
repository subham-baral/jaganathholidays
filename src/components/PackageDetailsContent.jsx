"use client";

import { FiCheckCircle, FiXCircle, FiSend } from 'react-icons/fi';
import styles from './PackageDetailsContent.module.css';
import AnimatedButton from './AnimatedButton';

export default function PackageDetailsContent() {
  const inclusions = [
    "Accommodation in 4-star hotels",
    "Daily breakfast and dinner",
    "Private AC vehicle for all transfers",
    "VIP Darshan tickets at Jagannath Temple",
    "Boat ride at Chilika Lake",
    "All toll taxes, parking, and driver allowance"
  ];

  const exclusions = [
    "Airfare or Train fare",
    "Lunch and any other meals not mentioned",
    "Personal expenses (laundry, phone calls)",
    "Monument entry fees & camera fees",
    "Travel insurance",
    "Any items not specified in inclusions"
  ];

  return (
    <section className={styles.contentSection}>
      <div className={styles.container}>
        
        {/* Left Column: Main Content */}
        <div className={styles.mainContent}>
          <h2 className={styles.sectionTitle}>Overview</h2>
          <div className={styles.overviewText}>
            <p>
              Embark on a spiritual and scenic journey with our carefully crafted Puri Gangasagar Tour Package. 
              This 5-night, 6-day itinerary is designed to offer you a perfect blend of devotion, heritage, and nature's beauty. 
              Starting from the temple city of Bhubaneswar, you will explore the architectural marvels before moving to the holy city of Puri to seek the blessings of Lord Jagannath.
            </p>
            <p>
              The journey continues to the tranquil waters of Chilika Lake, where you can spot the playful Irrawaddy dolphins. 
              The grand finale of this spiritual sojourn is a visit to Gangasagar, the sacred confluence where the Ganges meets the Bay of Bengal, offering a deeply moving spiritual experience.
            </p>
          </div>

          <h2 className={styles.sectionTitle}>Inclusions & Exclusions</h2>
          <div className={styles.incExcWrapper}>
            <div className={styles.inclusionsBox}>
              <h3 className={styles.boxTitle}><FiCheckCircle className={styles.incIcon} /> What's Included</h3>
              <ul className={styles.list}>
                {inclusions.map((item, index) => (
                  <li key={index}>{item}</li>
                ))}
              </ul>
            </div>
            <div className={styles.exclusionsBox}>
              <h3 className={styles.boxTitle}><FiXCircle className={styles.excIcon} /> What's Not Included</h3>
              <ul className={styles.list}>
                {exclusions.map((item, index) => (
                  <li key={index}>{item}</li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        {/* Right Column: Sticky Sidebar Form */}
        <div className={styles.sidebar}>
          <div className={styles.stickyForm}>
            <div className={styles.formHeader}>
              <h3 className={styles.formTitle}>Book This Tour</h3>
              <p className={styles.formSubtitle}>Get a free quote within 2 hours</p>
            </div>
            
            <form className={styles.form} onSubmit={(e) => e.preventDefault()}>
              <div className={styles.inputGroup}>
                <label>Full Name</label>
                <input type="text" placeholder="John Doe" className={styles.input} />
              </div>
              
              <div className={styles.inputGroup}>
                <label>Email Address</label>
                <input type="email" placeholder="john@example.com" className={styles.input} />
              </div>

              <div className={styles.inputGroup}>
                <label>Phone Number</label>
                <input type="tel" placeholder="+91 XXXXX XXXXX" className={styles.input} />
              </div>

              <div className={styles.rowGroup}>
                <div className={styles.inputGroup}>
                  <label>Travel Date</label>
                  <input type="date" className={styles.input} />
                </div>
                <div className={styles.inputGroup}>
                  <label>Guests</label>
                  <input type="number" min="1" placeholder="2" className={styles.input} />
                </div>
              </div>

              <div className={styles.inputGroup}>
                <label>Special Requests</label>
                <textarea placeholder="Any dietary requirements or special needs?" className={styles.textarea}></textarea>
              </div>

              <AnimatedButton className={styles.submitBtn}>
                Send Inquiry <FiSend />
              </AnimatedButton>
            </form>
          </div>
        </div>

      </div>
    </section>
  );
}
