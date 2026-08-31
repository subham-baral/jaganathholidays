"use client";

import { useState } from 'react';
import styles from './FaqSection.module.css';
import AnimatedButton from './AnimatedButton';

/* ── Data ── */
const faqsData = [
  {
    question: "What destinations do you cover in Odisha?",
    answer: "We offer tour packages covering popular destinations across Odisha, including Puri, Bhubaneswar, Konark, Chilika Lake, Gopalpur, Daringbadi, Simlipal, Satkosia, and many other tourist attractions."
  },
  { 
    question: "Do you provide customized tour packages?", 
    answer: "Yes, we provide fully customized tour packages tailored to your specific preferences, travel dates, and budget." 
  },
  { 
    question: "What is included in your tour packages?", 
    answer: "Our packages typically include accommodation, transportation, sightseeing tours, and breakfast. Specific inclusions vary depending on the chosen package." 
  },
  { 
    question: "Do you offer honeymoon tour packages?", 
    answer: "Absolutely! We have specialized honeymoon packages featuring romantic destinations, premium accommodations, and special arrangements." 
  },
  { 
    question: "Can you arrange hotel bookings separately?", 
    answer: "Yes, we can arrange standalone hotel bookings at competitive rates across all major locations in Odisha." 
  },
  { 
    question: "Is it safe to travel with Jagannath Holidays?", 
    answer: "Safety is our top priority. All our vehicles are well-maintained, drivers are experienced, and we provide 24/7 support during your trip." 
  }
];

/* ── Sub-components ── */
function FaqItem({ faq, isActive, onToggle }) {
  return (
    <div 
      className={`${styles.faqItem} ${isActive ? styles.active : ''}`}
      onClick={onToggle}
    >
      <div className={styles.faqHeader}>
        <h3 className={styles.faqQuestion}>{faq.question}</h3>
        <span className={styles.icon}>
          {isActive ? '×' : '+'}
        </span>
      </div>
      {isActive && (
        <div className={styles.faqContent}>
          <p className={styles.faqAnswer}>{faq.answer}</p>
          <AnimatedButton className={styles.learnMoreBtn}>Learn More</AnimatedButton>
        </div>
      )}
    </div>
  );
}

function FaqImageCollage() {
  return (
    <div className={styles.imageCollage}>
      <img src="https://picsum.photos/600/300?random=110" alt="Temple" className={styles.imgTop} />
      <div className={styles.middleRow}>
        <img src="https://picsum.photos/290/250?random=111" alt="Waterfall" className={styles.imgHalf} />
        <img src="https://picsum.photos/290/250?random=112" alt="Gate" className={styles.imgHalf} />
      </div>
      <img src="https://picsum.photos/600/250?random=113" alt="Mountains" className={styles.imgBottom} />
    </div>
  );
}

function FaqRightContent() {
  return (
    <div className={styles.rightColumn}>
      <p className={styles.description}>
        Have questions about your upcoming trip? Find answers to the most common queries
        about our tour packages, hotel bookings, transportation, customization options, and
        travel services. Our FAQ section is designed to help you plan your Odisha journey with
        confidence and ease.
      </p>
      <FaqImageCollage />
    </div>
  );
}

/* ── Main Component ── */
export default function FaqSection() {
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <section className={styles.faqSection}>
      <div className={styles.container}>
        <div className={styles.leftColumn}>
          <h2 className={styles.heading}>Frequently Asked<br />Questions</h2>
          
          <div className={styles.faqList}>
            {faqsData.map((faq, index) => (
              <FaqItem
                key={index}
                faq={faq}
                isActive={activeIndex === index}
                onToggle={() => setActiveIndex(activeIndex === index ? null : index)}
              />
            ))}
          </div>
        </div>

        <FaqRightContent />
      </div>
    </section>
  );
}
