"use client";

import { useState } from 'react';
import Image from 'next/image';
import { FiMapPin, FiClock } from 'react-icons/fi';
import styles from './DestinationsList.module.css';
import AnimatedButton from './AnimatedButton';

export default function DestinationsList() {
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 12;

  // Generate 18 dummy destinations
  const destinations = Array.from({ length: 18 }).map((_, index) => ({
    id: index + 1,
    title: `Destination ${index + 1}`,
    location: "Odisha, India",
    duration: "3 Days / 2 Nights",
    description: "Experience the vibrant culture, serene temples, and beautiful landscapes of this amazing destination.",
    image: `https://picsum.photos/600/400?random=${index + 10}`,
    price: `₹${(Math.floor(Math.random() * 15) + 5) * 1000}`
  }));

  const totalPages = Math.ceil(destinations.length / itemsPerPage);
  
  // Calculate items for current page
  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = destinations.slice(indexOfFirstItem, indexOfLastItem);

  const handlePageChange = (pageNumber) => {
    setCurrentPage(pageNumber);
    // Scroll to top of the list
    window.scrollTo({ top: 400, behavior: 'smooth' });
  };

  return (
    <section className={styles.destinationsSection}>
      <div className={styles.container}>
        <div className={styles.grid}>
          {currentItems.map((dest) => (
            <div key={dest.id} className={styles.card}>
              <div className={styles.imageWrapper}>
                <Image 
                  src={dest.image} 
                  alt={dest.title}
                  layout="fill"
                  objectFit="cover"
                  className={styles.cardImage}
                />
                <div className={styles.priceTag}>{dest.price}</div>
              </div>
              <div className={styles.cardContent}>
                <div className={styles.locationWrapper}>
                  <FiMapPin className={styles.icon} />
                  <span>{dest.location}</span>
                </div>
                <h3 className={styles.cardTitle}>{dest.title}</h3>
                <p className={styles.cardDescription}>{dest.description}</p>
                <div className={styles.cardFooter}>
                  <div className={styles.durationWrapper}>
                    <FiClock className={styles.icon} />
                    <span>{dest.duration}</span>
                  </div>
                  <AnimatedButton className={styles.bookNowBtn}>Book Now</AnimatedButton>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Pagination Controls */}
        <div className={styles.pagination}>
          <button 
            className={styles.pageBtn} 
            onClick={() => handlePageChange(currentPage - 1)}
            disabled={currentPage === 1}
          >
            Prev
          </button>
          
          {[...Array(totalPages)].map((_, i) => (
            <button 
              key={i + 1}
              className={`${styles.pageBtn} ${currentPage === i + 1 ? styles.activePage : ''}`}
              onClick={() => handlePageChange(i + 1)}
            >
              {i + 1}
            </button>
          ))}

          <button 
            className={styles.pageBtn} 
            onClick={() => handlePageChange(currentPage + 1)}
            disabled={currentPage === totalPages}
          >
            Next
          </button>
        </div>
      </div>
    </section>
  );
}
