"use client";

import { useState } from 'react';
import styles from './FaqSection.module.css';

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
        </div>
      )}
    </div>
  );
}

export default function FaqSectionClient({ faqsData = [] }) {
  const [activeIndex, setActiveIndex] = useState(0);

  if (!faqsData || faqsData.length === 0) {
    return <div className={styles.noResult}>No result available</div>;
  }

  return (
    <div className={styles.faqList}>
      {faqsData.map((faq, index) => (
        <FaqItem
          key={faq.id || index}
          faq={faq}
          isActive={activeIndex === index}
          onToggle={() => setActiveIndex(activeIndex === index ? null : index)}
        />
      ))}
    </div>
  );
}
