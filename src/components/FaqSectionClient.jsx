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

const INITIAL_COUNT = 10;

export default function FaqSectionClient({ faqsData = [] }) {
  const [activeIndex, setActiveIndex] = useState(0);
  const [showAll, setShowAll] = useState(false);

  if (!faqsData || faqsData.length === 0) {
    return <div className={styles.noResult}>No result available</div>;
  }

  const visibleFaqs = showAll ? faqsData : faqsData.slice(0, INITIAL_COUNT);
  const hasMore = faqsData.length > INITIAL_COUNT;

  return (
    <>
      <div className={styles.faqList}>
        {visibleFaqs.map((faq, index) => (
          <FaqItem
            key={faq.id || index}
            faq={faq}
            isActive={activeIndex === index}
            onToggle={() => setActiveIndex(activeIndex === index ? null : index)}
          />
        ))}
      </div>
      {hasMore && (
        <button
          className={styles.showMoreBtn}
          onClick={() => setShowAll(!showAll)}
        >
          {showAll ? 'Show Less' : 'Show More'}
        </button>
      )}
    </>
  );
}

