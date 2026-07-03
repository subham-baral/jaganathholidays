"use client";

import { useState } from 'react';
import { FiChevronDown, FiMapPin, FiClock } from 'react-icons/fi';
import styles from './PackageItinerary.module.css';

export default function PackageItinerary() {
  const itinerary = [
    {
      day: "Day 1",
      title: "Arrival at Bhubaneswar & Proceed to Puri",
      description: "Welcome to Odisha! Upon arrival at Bhubaneswar Airport or Railway Station, our representative will receive you. From there, we embark on a scenic drive to the holy city of Puri. After checking into the hotel and resting for a while, we visit the iconic Jagannath Temple in the evening for Darshan. Enjoy a relaxing walk on the Golden Beach at sunset.",
      location: "Bhubaneswar to Puri"
    },
    {
      day: "Day 2",
      title: "Chilika Lake & Sun Temple Exploration",
      description: "After an early breakfast, we drive to Chilika Lake at Satapada to witness the playful Irrawaddy dolphins and visit the Sea Mouth where the lake meets the ocean. In the afternoon, we head to Konark to explore the majestic Sun Temple, a UNESCO World Heritage site known for its exquisite stone carvings. Return to Puri for the night.",
      location: "Chilika & Konark"
    },
    {
      day: "Day 3",
      title: "Puri to Kolkata (Overnight Journey)",
      description: "Spend the morning at leisure in Puri. You can visit the local markets for unique handicrafts or spend more time at the beach. In the afternoon, we transfer you to the railway station for an overnight train journey to Kolkata, the City of Joy.",
      location: "Puri / Train Journey"
    },
    {
      day: "Day 4",
      title: "Arrival in Kolkata & Local Sightseeing",
      description: "Upon arriving in Kolkata in the morning, check into your hotel. After freshening up, we begin our city tour visiting the Victoria Memorial, Howrah Bridge, Dakshineswar Kali Temple, and Belur Math. Enjoy authentic Bengali cuisine in the evening.",
      location: "Kolkata City"
    },
    {
      day: "Day 5",
      title: "Excursion to Gangasagar",
      description: "Today is the spiritual highlight of the trip. Early morning, we depart for Gangasagar, located at the confluence of the River Ganges and the Bay of Bengal. Take a holy dip in the sacred waters and visit the Kapil Muni Ashram. Return to Kolkata in the late evening.",
      location: "Gangasagar Island"
    },
    {
      day: "Day 6",
      title: "Departure from Kolkata",
      description: "After breakfast, pack your bags with wonderful memories. Depending on your flight or train schedule, we will transfer you to the Kolkata Airport or Railway Station for your onward journey back home.",
      location: "Kolkata Departure"
    }
  ];

  const [openDay, setOpenDay] = useState(0); // First day open by default

  const toggleDay = (index) => {
    setOpenDay(openDay === index ? null : index);
  };

  return (
    <section className={styles.itinerarySection}>
      <div className={styles.container}>
        <div className={styles.header}>
          <h2 className={styles.sectionTitle}>Tour Itinerary</h2>
          <p className={styles.subtitle}>A day-by-day breakdown of your journey</p>
        </div>

        <div className={styles.accordionContainer}>
          {itinerary.map((item, index) => {
            const isOpen = openDay === index;
            
            return (
              <div 
                key={index} 
                className={`${styles.accordionItem} ${isOpen ? styles.open : ''}`}
              >
                <div 
                  className={styles.accordionHeader} 
                  onClick={() => toggleDay(index)}
                >
                  <div className={styles.headerLeft}>
                    <div className={styles.dayBadge}>{item.day}</div>
                    <h3 className={styles.dayTitle}>{item.title}</h3>
                  </div>
                  <div className={styles.headerRight}>
                    <FiChevronDown className={styles.chevron} />
                  </div>
                </div>
                
                <div className={styles.accordionContentWrapper} style={{ maxHeight: isOpen ? '500px' : '0px' }}>
                  <div className={styles.accordionContent}>
                    <div className={styles.metaInfo}>
                      <span className={styles.metaItem}><FiMapPin /> {item.location}</span>
                      <span className={styles.metaItem}><FiClock /> Full Day</span>
                    </div>
                    <p className={styles.description}>{item.description}</p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
