"use client";

import { useState, useEffect } from 'react';
import { FiUser, FiSmartphone, FiCalendar, FiUsers, FiMessageSquare, FiSend } from 'react-icons/fi';
import styles from './DestinationDetailsContent.module.css';
import AnimatedButton from './AnimatedButton';

export default function PlanJourneyForm() {
  const [isStickyForm, setIsStickyForm] = useState(false);

  useEffect(() => {
    let lastScrollY = window.scrollY;

    const handleScroll = () => {
      // Only apply on screens wider than 992px (desktop)
      if (window.innerWidth <= 992) {
        setIsStickyForm(false);
        return;
      }

      const currentScrollY = window.scrollY;
      
      // Threshold: Scroll position past the initial info box (approx 600px)
      const threshold = 600;

      if (currentScrollY > threshold) {
        if (currentScrollY < lastScrollY) {
          // Scrolling UP - make it sticky
          setIsStickyForm(true);
        } else {
          // Scrolling DOWN - hide/unstick
          setIsStickyForm(false);
        }
      } else {
        setIsStickyForm(false);
      }

      lastScrollY = currentScrollY;
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className={`${styles.formBox} ${isStickyForm ? styles.stickyForm : ''}`}>
      <h3 className={styles.sidebarTitle}>Plan Your Journey</h3>
      <form className={styles.bookingForm}>
        
        <div className={styles.formGroup}>
          <label><FiUser className={styles.inputIcon} /> Name *</label>
          <input type="text" placeholder="Enter your full name" required />
        </div>

        <div className={styles.formGroup}>
          <label><FiSmartphone className={styles.inputIcon} /> Mobile *</label>
          <div className={styles.phoneInput}>
            <div className={styles.countryCode}>
              <span>🇮🇳</span> +91
            </div>
            <input type="tel" placeholder="Enter mobile number" required />
          </div>
        </div>

        <div className={styles.formRow}>
          <div className={styles.formGroup}>
            <label><FiCalendar className={styles.inputIcon} /> Arrival Date</label>
            <input type="date" />
          </div>
          <div className={styles.formGroup}>
            <label><FiCalendar className={styles.inputIcon} /> Departure Date</label>
            <input type="date" />
          </div>
        </div>

        <div className={styles.formGroup}>
          <label><FiUsers className={styles.inputIcon} /> No. of Persons</label>
          <input type="number" min="1" placeholder="Enter number of persons" />
        </div>

        <div className={styles.formGroup}>
          <label><FiUsers className={styles.inputIcon} /> No. of Children</label>
          <input type="number" min="0" placeholder="Enter number of children" />
        </div>

        <div className={styles.formGroup}>
          <label><FiMessageSquare className={styles.inputIcon} /> Message</label>
          <textarea rows="4" placeholder="Tell us about your travel preferences..."></textarea>
        </div>

        <AnimatedButton className={styles.submitBtn} type="button">
          <FiSend className={styles.sendIcon}/> Submit Inquiry
        </AnimatedButton>
        
      </form>
    </div>
  );
}
