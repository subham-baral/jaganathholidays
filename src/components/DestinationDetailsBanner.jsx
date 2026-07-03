"use client";

import { useState, useEffect } from 'react';
import { FiMapPin, FiClock, FiUsers } from 'react-icons/fi';
import { FaStar } from 'react-icons/fa';
import styles from './DestinationDetailsBanner.module.css';

export default function DestinationDetailsBanner() {
  const tabs = [
    { name: "Introduction", id: "introduction" },
    { name: "What to Expect", id: "what-to-expect" },
    { name: "Tour Itinerary", id: "tour-itinerary" },
    { name: "Tour Gallery", id: "tour-gallery" }
  ];

  const [activeTab, setActiveTab] = useState("introduction");

  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      const y = element.getBoundingClientRect().top + window.scrollY - 100;
      window.scrollTo({ top: y, behavior: 'smooth' });
      setActiveTab(id);
    }
  };

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY + 150;

      for (let i = tabs.length - 1; i >= 0; i--) {
        const element = document.getElementById(tabs[i].id);
        if (element && element.offsetTop <= scrollPosition) {
          setActiveTab(tabs[i].id);
          break;
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className={styles.bannerContainer}>
      <div className={styles.imageWrapper}>
        <img 
          src="/jaganath-banner.webp" 
          alt="Puri Gangasagar Tour" 
          className={styles.bgImage}
        />
        <div className={styles.overlay}></div>
      </div>

      <div className={styles.content}>
        <div className={styles.reviews}>
          <div className={styles.stars}>
            {[...Array(5)].map((_, i) => <FaStar key={i} className={styles.starIcon} />)}
          </div>
          <span className={styles.reviewText}>2K+ Happy Travelers</span>
        </div>

        <h1 className={styles.title}>
          Puri Gangasagar Tour Packages
        </h1>

        <div className={styles.infoList}>
          <div className={styles.infoItem}>
            <FiMapPin className={styles.icon} />
            <span>Bhubaneswar, Chilika, Gangasagar, Gopalpur, Kolkata, Konark, Puri</span>
          </div>
          <div className={styles.infoItem}>
            <FiClock className={styles.icon} />
            <span>05 Nights 06 Days</span>
          </div>
          <div className={styles.infoItem}>
            <FiUsers className={styles.icon} />
            <span>150</span>
          </div>
        </div>
      </div>

      {/* Floating Tab Box */}
      <div className={styles.tabsContainer}>
        <div className={styles.tabsBox}>
          {tabs.map((tab, index) => (
            <button 
              key={index}
              className={`${styles.tabBtn} ${activeTab === tab.id ? styles.activeTab : ''}`}
              onClick={() => scrollToSection(tab.id)}
            >
              {tab.name}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}
