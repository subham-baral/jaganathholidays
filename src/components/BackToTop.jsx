"use client";

import { useState, useEffect } from 'react';
import { FiArrowUp } from 'react-icons/fi';
import styles from './BackToTop.module.css';

export default function BackToTop() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => {
      if (window.scrollY > 300) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener('scroll', toggleVisibility, { passive: true });
    return () => window.removeEventListener('scroll', toggleVisibility);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  return (
    <button
      type="button"
      aria-label="Back to top"
      onClick={scrollToTop}
      className={`${styles.backToTop} ${isVisible ? styles.visible : ''}`}
    >
      <span className={styles.iconWrapper}>
        <FiArrowUp className={styles.arrowIcon} />
      </span>
      <span className={styles.ripple}></span>
    </button>
  );
}
