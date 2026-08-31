"use client";

import { useState, useEffect, useCallback } from 'react';
import styles from './FullGallery.module.css';
import { FiZoomIn, FiX, FiChevronLeft, FiChevronRight } from 'react-icons/fi';

const galleryImages = [
  "/loved-destination-1.png",
  "/loved-destination-2.png",
  "/loved-destination-3.png",
  "/loved-destination-4.jpg",
  "/loved-destination-2.png",
  "/loved-destination-1.png",
  "/loved-destination-3.png",
  "/loved-destination-4.jpg",
  "/loved-destination-3.png",
  "/loved-destination-4.jpg",
  "/loved-destination-1.png",
  "/loved-destination-2.png",
  "/loved-destination-1.png",
  "/loved-destination-3.png",
  "/loved-destination-4.jpg",
  "/loved-destination-2.png"
];

/* ── Sub-components ── */

function GalleryHeader() {
  return (
    <div className={styles.header}>
      <span className={styles.subtitle}>Moments of Joy</span>
      <h2 className={styles.title}>Our Memory Wall</h2>
    </div>
  );
}

function GalleryCard({ src, index, onOpen }) {
  return (
    <div className={styles.imageWrapper} onClick={() => onOpen(index)}>
      <img src={src} alt={`Gallery Image ${index + 1}`} className={styles.image} />
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

function GalleryLightbox({ images, currentIndex, onClose, onPrev, onNext }) {
  if (currentIndex === null || currentIndex === undefined) return null;

  const handleKeyDown = useCallback((e) => {
    if (e.key === 'ArrowLeft') onPrev();
    if (e.key === 'ArrowRight') onNext();
    if (e.key === 'Escape') onClose();
  }, [onPrev, onNext, onClose]);

  useEffect(() => {
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [handleKeyDown]);

  const currentSrc = images[currentIndex];

  return (
    <div className={styles.lightbox} onClick={onClose}>
      <button 
        className={styles.closeBtn} 
        onClick={(e) => { e.stopPropagation(); onClose(); }}
        aria-label="Close Lightbox"
      >
        <FiX />
      </button>

      <button 
        className={`${styles.navBtn} ${styles.prevBtn}`} 
        onClick={(e) => { e.stopPropagation(); onPrev(); }}
        aria-label="Previous Image"
      >
        <FiChevronLeft />
      </button>

      <div className={styles.lightboxContent} onClick={(e) => e.stopPropagation()}>
        <img 
          src={currentSrc} 
          alt={`Expanded Gallery ${currentIndex + 1}`} 
          className={styles.lightboxImage} 
        />
        <div className={styles.counterBadge}>
          {currentIndex + 1} / {images.length}
        </div>
      </div>

      <button 
        className={`${styles.navBtn} ${styles.nextBtn}`} 
        onClick={(e) => { e.stopPropagation(); onNext(); }}
        aria-label="Next Image"
      >
        <FiChevronRight />
      </button>
    </div>
  );
}

/* ── Main Component ── */

export default function FullGallery() {
  const [selectedIndex, setSelectedIndex] = useState(null);

  const handlePrev = useCallback(() => {
    setSelectedIndex((prev) => (prev === 0 ? galleryImages.length - 1 : prev - 1));
  }, []);

  const handleNext = useCallback(() => {
    setSelectedIndex((prev) => (prev === galleryImages.length - 1 ? 0 : prev + 1));
  }, []);

  return (
    <>
      <section className={styles.gallerySection}>
        <div className={styles.container}>
          <GalleryHeader />
          
          <div className={styles.grid}>
            {galleryImages.map((src, index) => (
              <GalleryCard 
                key={index} 
                src={src} 
                index={index} 
                onOpen={setSelectedIndex} 
              />
            ))}
          </div>
        </div>
      </section>

      <GalleryLightbox 
        images={galleryImages}
        currentIndex={selectedIndex}
        onClose={() => setSelectedIndex(null)}
        onPrev={handlePrev}
        onNext={handleNext}
      />
    </>
  );
}
