"use client";

import { useState } from 'react';
import { FiClock, FiChevronLeft, FiChevronRight, FiMapPin, FiStar } from 'react-icons/fi';
import styles from './PackageGrid.module.css';
import AnimatedButton from './AnimatedButton';

export default function PackageGrid({ 
  title = "All Tour Packages", 
  subtitle = "Explore the world",
  limit = null
}) {
  const allPackages = Array.from({ length: 18 }, (_, i) => ({
    id: i + 1,
    title: `Premium Tour Package ${i + 1}`,
    description: "Explore the breathtaking landscapes and rich cultural heritage. Handcrafted for the ultimate experience.",
    duration: i % 2 === 0 ? "3N / 4D" : "5N / 6D",
    price: i % 2 === 0 ? "₹ 12,500" : "₹ 18,900",
    location: i % 3 === 0 ? "Puri, Odisha" : "Bhubaneswar",
    image: `/loved-destination-${(i % 4) + 1}${i % 4 === 3 ? '.jpg' : '.png'}`
  }));

  const ITEMS_PER_PAGE = 12;
  const [currentPage, setCurrentPage] = useState(1);
  
  // If a limit is provided, just use the first 'limit' packages
  const activePackages = limit ? allPackages.slice(0, limit) : allPackages;
  const totalPages = limit ? 1 : Math.ceil(activePackages.length / ITEMS_PER_PAGE);

  const startIndex = (currentPage - 1) * ITEMS_PER_PAGE;
  const currentPackages = limit ? activePackages : activePackages.slice(startIndex, startIndex + ITEMS_PER_PAGE);

  const handlePageChange = (page) => {
    if (page >= 1 && page <= totalPages) {
      setCurrentPage(page);
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  return (
    <section className={styles.gridSection}>
      <div className={styles.container}>
        <div className={styles.header}>
          <span className={styles.subtitle}>{subtitle}</span>
          <h2 className={styles.title}>{title}</h2>
        </div>

        <div className={styles.grid}>
          {currentPackages.map((pkg) => (
            <div key={pkg.id} className={styles.tourCard}>
              <div className={styles.imageWrapper}>
                <img src={pkg.image} alt={pkg.title} className={styles.image} />
                <div className={styles.priceTag}>
                  <span className={styles.startsFrom}>From</span>
                  {pkg.price}
                </div>
                <div className={styles.locationTag}>
                  <FiMapPin /> {pkg.location}
                </div>
              </div>
              <div className={styles.cardContent}>
                <div className={styles.metaRow}>
                  <span className={styles.duration}><FiClock className={styles.metaIcon} /> {pkg.duration}</span>
                  <span className={styles.rating}><FiStar className={styles.starIcon}/> 4.8 (120)</span>
                </div>
                <h3 className={styles.cardTitle}>{pkg.title}</h3>
                <p className={styles.cardDescription}>{pkg.description}</p>
                
                <AnimatedButton className={styles.bookBtn}>
                  View Details
                </AnimatedButton>
              </div>
            </div>
          ))}
        </div>

        {/* Pagination Controls - only show if there's no limit and totalPages > 1 */}
        {!limit && totalPages > 1 && (
          <div className={styles.pagination}>
            <button 
              className={styles.pageBtn} 
              onClick={() => handlePageChange(currentPage - 1)}
              disabled={currentPage === 1}
            >
              <FiChevronLeft /> Prev
            </button>
            
            {[...Array(totalPages)].map((_, i) => (
              <button 
                key={i}
                className={`${styles.pageNumberBtn} ${currentPage === i + 1 ? styles.activePage : ''}`}
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
              Next <FiChevronRight />
            </button>
          </div>
        )}
      </div>
    </section>
  );
}
