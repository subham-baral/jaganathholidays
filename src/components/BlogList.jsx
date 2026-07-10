"use client";

import { useState } from 'react';
import Link from 'next/link';
import styles from './BlogList.module.css';

export default function BlogList() {
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 9;

  // Generate 24 dummy blogs
  const blogs = Array.from({ length: 24 }).map((_, index) => ({
    id: index + 1,
    title: `Exploring the hidden gems of Odisha ${index + 1}`,
    description: "Discover the heritage and beauty of Puri, Konark, and Bhubaneswar. A complete guide to a memorable journey across the beautiful state of Odisha.",
    date: `Date: ${21 - (index % 15)} Jun 2026`,
    image: `https://picsum.photos/600/400?random=${index + 100}`
  }));

  const totalPages = Math.ceil(blogs.length / itemsPerPage);
  
  // Calculate items for current page
  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = blogs.slice(indexOfFirstItem, indexOfLastItem);

  const handlePageChange = (pageNumber) => {
    setCurrentPage(pageNumber);
    window.scrollTo({ top: 300, behavior: 'smooth' });
  };

  return (
    <section className={styles.blogSection}>
      <div className={styles.container}>
        <div className={styles.grid}>
          {currentItems.map((blog) => (
            <Link href="/blogs/details" key={blog.id} className={styles.card}>
              <img src={blog.image} alt={blog.title} className={styles.cardImage} />
              <div className={styles.cardOverlay}>
                <h3 className={styles.cardTitle}>{blog.title}</h3>
                <p className={styles.cardDescription}>{blog.description}</p>
                <div className={styles.cardFooter}>
                  <div className={styles.cardDate}>{blog.date}</div>
                  <div className={styles.readMore}>Read More &rarr;</div>
                </div>
              </div>
            </Link>
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
