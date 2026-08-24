"use client";

import { useState, useEffect } from 'react';
import { FiMapPin, FiClock, FiUsers } from 'react-icons/fi';
import { FaStar } from 'react-icons/fa';
import styles from './DestinationDetailsBanner.module.css';

export default function DestinationDetailsBanner({
  title = "Puri Gangasagar Tour Packages",
  coverImage = "/jaganath-banner.webp",
  rating = 4.8,
  duration = "05 Nights 06 Days",
  destinations = "Bhubaneswar, Chilika, Gopalpur, Konark, Puri",
  startPoint = "",
  endPoint = "",
  reviewsCount = "2K+ Happy Travelers"
}) {
  const tabs = [
    { name: "Introduction", id: "introduction" },
    { name: "What to Expect", id: "what-to-expect" },
    { name: "Tour Itinerary", id: "tour-itinerary" },
    { name: "Tour Gallery", id: "tour-gallery" }
  ];

  const [activeTab, setActiveTab] = useState("introduction");
  const [isSticky, setIsSticky] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      // 1. Scroll Spy: Detect which section is in view
      const spyThreshold = 180;
      for (let i = tabs.length - 1; i >= 0; i--) {
        const element = document.getElementById(tabs[i].id);
        if (element) {
          const rect = element.getBoundingClientRect();
          if (rect.top <= spyThreshold) {
            setActiveTab(tabs[i].id);
            break;
          }
        }
      }

      // 2. Sticky Tab: Make tabs sticky when scroll position reaches the threshold
      const isMobile = window.innerWidth <= 768;
      const stickyThreshold = isMobile ? 350 : 300;

      if (currentScrollY >= stickyThreshold) {
        setIsSticky(true);
      } else {
        setIsSticky(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const locationDisplay = destinations || (startPoint && endPoint ? `${startPoint} - ${endPoint}` : startPoint || "Odisha");

  return (
    <div className={styles.bannerContainer}>
      <div className={styles.imageWrapper}>
        <img 
          src={coverImage || "/jaganath-banner.webp"} 
          alt={title} 
          className={styles.bgImage}
          onError={(e) => {
            e.currentTarget.src = "/jaganath-banner.webp";
          }}
        />
        <div className={styles.overlay}></div>
      </div>

      <div className={styles.content}>
        <div className={styles.reviews}>
          <div className={styles.stars}>
            {[...Array(5)].map((_, i) => (
              <FaStar 
                key={i} 
                className={styles.starIcon} 
                style={{ opacity: i < Math.floor(rating || 5) ? 1 : 0.6 }} 
              />
            ))}
          </div>
          <span className={styles.reviewText}>{rating ? `${rating} ★ • ` : ''}{reviewsCount}</span>
        </div>

        <h1 className={styles.title}>
          {title}
        </h1>

        <div className={styles.infoList}>
          {locationDisplay && (
            <div className={styles.infoItem}>
              <FiMapPin className={styles.icon} />
              <span>{locationDisplay}</span>
            </div>
          )}
          {duration && (
            <div className={styles.infoItem}>
              <FiClock className={styles.icon} />
              <span>{duration}</span>
            </div>
          )}
          <div className={styles.infoItem}>
            <FiUsers className={styles.icon} />
            <span>Best Seller</span>
          </div>
        </div>
      </div>

      {/* Floating/Sticky Tab Box */}
      <div className={`${styles.tabsContainer} ${isSticky ? styles.sticky : ''}`}>
        <div className={styles.tabsBox}>
          {tabs.map((tab, index) => (
            <a 
              key={index}
              href={`#${tab.id}`}
              className={`${styles.tabBtn} ${activeTab === tab.id ? styles.activeTab : ''}`}
            >
              {tab.name}
            </a>
          ))}
        </div>
      </div>
    </div>
  );
}
