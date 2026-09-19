"use client";

import { useEffect, useCallback, useState, useRef } from "react";
import { FiX, FiChevronLeft, FiChevronRight } from "react-icons/fi";
import styles from "./ImageSliderModal.module.css";

export default function ImageSliderModal({
  isOpen,
  images = [],
  initialIndex = 0,
  title = "",
  subtitle = "",
  onClose,
}) {
  const [currentIndex, setCurrentIndex] = useState(initialIndex);
  const touchStartX = useRef(0);
  const touchEndX = useRef(0);

  // Sync initial index when modal opens
  useEffect(() => {
    if (isOpen) {
      setCurrentIndex(initialIndex);
    }
  }, [isOpen, initialIndex]);

  // Lock body scroll when open
  useEffect(() => {
    if (isOpen) {
      const originalOverflow = document.body.style.overflow;
      document.body.style.overflow = "hidden";
      return () => {
        document.body.style.overflow = originalOverflow;
      };
    }
  }, [isOpen]);

  const handlePrev = useCallback(() => {
    setCurrentIndex((prev) => (prev === 0 ? images.length - 1 : prev - 1));
  }, [images.length]);

  const handleNext = useCallback(() => {
    setCurrentIndex((prev) => (prev === images.length - 1 ? 0 : prev + 1));
  }, [images.length]);

  // Keyboard navigation
  const handleKeyDown = useCallback(
    (e) => {
      if (!isOpen) return;
      if (e.key === "ArrowLeft") handlePrev();
      if (e.key === "ArrowRight") handleNext();
      if (e.key === "Escape") onClose();
    },
    [isOpen, handlePrev, handleNext, onClose]
  );

  useEffect(() => {
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [handleKeyDown]);

  // Touch handlers for mobile swipe
  const handleTouchStart = (e) => {
    touchStartX.current = e.targetTouches[0].clientX;
  };

  const handleTouchMove = (e) => {
    touchEndX.current = e.targetTouches[0].clientX;
  };

  const handleTouchEnd = () => {
    if (!touchStartX.current || !touchEndX.current) return;
    const diff = touchStartX.current - touchEndX.current;
    if (diff > 50) {
      // Swiped left
      handleNext();
    } else if (diff < -50) {
      // Swiped right
      handlePrev();
    }
    touchStartX.current = 0;
    touchEndX.current = 0;
  };

  if (!isOpen || !images || images.length === 0) return null;

  const currentImage = images[currentIndex] || images[0];

  return (
    <div className={styles.modalBackdrop} onClick={onClose}>
      {/* Modal Header */}
      <div className={styles.modalHeader} onClick={(e) => e.stopPropagation()}>
        <div className={styles.titleArea}>
          {subtitle && <span className={styles.modalSubtitle}>{subtitle}</span>}
          <h3 className={styles.modalTitle}>{title}</h3>
        </div>

        <div className={styles.headerActions}>
          <span className={styles.counterBadge}>
            {currentIndex + 1} / {images.length}
          </span>
          <button
            type="button"
            className={styles.closeBtn}
            onClick={onClose}
            aria-label="Close modal"
          >
            <FiX />
          </button>
        </div>
      </div>

      {/* Main Slider Display */}
      <div
        className={styles.sliderBody}
        onClick={(e) => e.stopPropagation()}
        onTouchStart={handleTouchStart}
        onTouchMove={handleTouchMove}
        onTouchEnd={handleTouchEnd}
      >
        {images.length > 1 && (
          <button
            type="button"
            className={`${styles.navBtn} ${styles.prevBtn}`}
            onClick={handlePrev}
            aria-label="Previous photo"
          >
            <FiChevronLeft />
          </button>
        )}

        <div className={styles.imageStage}>
          <img
            key={currentImage}
            src={currentImage}
            alt={`${title} - Photo ${currentIndex + 1}`}
            className={styles.activeImage}
            onError={(e) => {
              e.currentTarget.src = "/jaganath-banner.webp";
            }}
          />
        </div>

        {images.length > 1 && (
          <button
            type="button"
            className={`${styles.navBtn} ${styles.nextBtn}`}
            onClick={handleNext}
            aria-label="Next photo"
          >
            <FiChevronRight />
          </button>
        )}
      </div>

      {/* Thumbnail Strip */}
      {images.length > 1 && (
        <div
          className={styles.thumbnailContainer}
          onClick={(e) => e.stopPropagation()}
        >
          {images.map((src, idx) => (
            <div
              key={`${src}-${idx}`}
              className={`${styles.thumbnailItem} ${
                idx === currentIndex ? styles.thumbnailActive : ""
              }`}
              onClick={() => setCurrentIndex(idx)}
            >
              <img
                src={src}
                alt={`Thumbnail ${idx + 1}`}
                className={styles.thumbnailImg}
                onError={(e) => {
                  e.currentTarget.src = "/jaganath-banner.webp";
                }}
              />
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
