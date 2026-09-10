"use client";

import { useState, useEffect, useCallback } from 'react';
import Link from 'next/link';
import styles from './FullGallery.module.css';
import { FiZoomIn, FiX, FiChevronLeft, FiChevronRight } from 'react-icons/fi';

/* ── Sub-components ── */

function GalleryHeader() {
  return (
    <div className={styles.header}>
      <span className={styles.subtitle}>Moments of Joy</span>
      <h2 className={styles.title}>Our Memory Wall</h2>
    </div>
  );
}

function GalleryCard({ src, title, index, onOpen }) {
  return (
    <div className={styles.imageWrapper} onClick={() => onOpen(index)}>
      <img src={src} alt={title || `Gallery Image ${index + 1}`} className={styles.image} />
      <div className={styles.overlay}>
        <FiZoomIn className={styles.zoomIcon} />
      </div>
      {/* Always visible magnifying glass badge on mobile */}
      <div className={styles.mobileZoomBadge}>
        <FiZoomIn className={styles.mobileZoomIcon} />
      </div>
    </div>
  );
}

function GalleryLightbox({ images = [], currentIndex, onClose, onPrev, onNext }) {
  const isOpen = currentIndex !== null && currentIndex !== undefined;

  const handleKeyDown = useCallback((e) => {
    if (e.key === 'ArrowLeft') onPrev();
    if (e.key === 'ArrowRight') onNext();
    if (e.key === 'Escape') onClose();
  }, [onPrev, onNext, onClose]);

  useEffect(() => {
    if (!isOpen) return;
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, handleKeyDown]);

  if (!isOpen || images.length === 0) return null;

  const currentItem = images[currentIndex] || {};
  const currentSrc = typeof currentItem === 'string' ? currentItem : currentItem.src;
  const currentTitle = typeof currentItem === 'string' ? `Expanded Gallery ${currentIndex + 1}` : (currentItem.title || `Expanded Gallery ${currentIndex + 1}`);

  return (
    <div className={styles.lightbox} onClick={onClose}>
      <button 
        className={styles.closeBtn} 
        onClick={(e) => { e.stopPropagation(); onClose(); }}
        aria-label="Close Lightbox"
      >
        <FiX />
      </button>

      {images.length > 1 && (
        <button 
          className={`${styles.navBtn} ${styles.prevBtn}`} 
          onClick={(e) => { e.stopPropagation(); onPrev(); }}
          aria-label="Previous Image"
        >
          <FiChevronLeft />
        </button>
      )}

      <div className={styles.lightboxContent} onClick={(e) => e.stopPropagation()}>
        <img 
          src={currentSrc} 
          alt={currentTitle} 
          className={styles.lightboxImage} 
        />
        <div className={styles.counterBadge}>
          {currentIndex + 1} / {images.length}
        </div>
      </div>

      {images.length > 1 && (
        <button 
          className={`${styles.navBtn} ${styles.nextBtn}`} 
          onClick={(e) => { e.stopPropagation(); onNext(); }}
          aria-label="Next Image"
        >
          <FiChevronRight />
        </button>
      )}
    </div>
  );
}

/* ── Main Component ── */

export default function FullGallery({ 
  images = [], 
  pagination = { currentPage: 1, hasNextPage: false, hasPrevPage: false } 
}) {
  const [selectedIndex, setSelectedIndex] = useState(null);

  const normalizedImages = images.map((img, i) => {
    if (typeof img === 'string') {
      return { id: i, src: img, title: `Gallery Image ${i + 1}` };
    }
    return {
      id: img.id || i,
      src: img.src || img.image || '/loved-destination-1.png',
      title: img.title || `Gallery Image ${i + 1}`,
    };
  });

  const handlePrev = useCallback(() => {
    setSelectedIndex((prev) => (prev === 0 ? normalizedImages.length - 1 : prev - 1));
  }, [normalizedImages.length]);

  const handleNext = useCallback(() => {
    setSelectedIndex((prev) => (prev === normalizedImages.length - 1 ? 0 : prev + 1));
  }, [normalizedImages.length]);

  const currentPage = Number(pagination.currentPage) || 1;
  const hasPrevPage = Boolean(pagination.hasPrevPage) && currentPage > 1;
  const hasNextPage = Boolean(pagination.hasNextPage);

  return (
    <>
      <section className={styles.gallerySection}>
        <div className={styles.container}>
          <GalleryHeader />
          
          <div className={styles.grid}>
            {normalizedImages.map((img, index) => (
              <GalleryCard 
                key={img.id || index} 
                src={img.src} 
                title={img.title}
                index={index} 
                onOpen={setSelectedIndex} 
              />
            ))}
          </div>

          {/* Pagination Controls */}
          <div className={styles.pagination}>
            {hasPrevPage ? (
              <Link href={`/gallery?page=${currentPage - 1}`} className={styles.pageBtn}>
                Prev
              </Link>
            ) : (
              <span className={`${styles.pageBtn} ${styles.disabledPage}`}>
                Prev
              </span>
            )}

            <span className={`${styles.pageBtn} ${styles.activePage}`}>
              {currentPage}
            </span>

            {hasNextPage && (
              <Link href={`/gallery?page=${currentPage + 1}`} className={styles.pageBtn}>
                {currentPage + 1}
              </Link>
            )}

            {hasNextPage ? (
              <Link href={`/gallery?page=${currentPage + 1}`} className={styles.pageBtn}>
                Next
              </Link>
            ) : (
              <span className={`${styles.pageBtn} ${styles.disabledPage}`}>
                Next
              </span>
            )}
          </div>
        </div>
      </section>

      <GalleryLightbox 
        images={normalizedImages}
        currentIndex={selectedIndex}
        onClose={() => setSelectedIndex(null)}
        onPrev={handlePrev}
        onNext={handleNext}
      />
    </>
  );
}
