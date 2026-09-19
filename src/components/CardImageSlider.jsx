"use client";

import { useState, useEffect, useRef } from "react";
import { FiChevronLeft, FiChevronRight, FiMaximize2, FiImage } from "react-icons/fi";
import styles from "./CardImageSlider.module.css";

export default function CardImageSlider({
  images = [],
  alt = "Image",
  className = "",
  autoSlideInterval = 3500,
  onImageClick,
  children
}) {
  const normalizedImages = Array.isArray(images)
    ? images.filter(Boolean)
    : images
    ? [images]
    : [];

  const [currentIndex, setCurrentIndex] = useState(0);
  const [isHovered, setIsHovered] = useState(false);
  const timerRef = useRef(null);

  const hasMultiple = normalizedImages.length > 1;

  // Auto slide effect: pauses when isHovered is true
  useEffect(() => {
    if (!hasMultiple || isHovered) {
      if (timerRef.current) {
        clearInterval(timerRef.current);
        timerRef.current = null;
      }
      return;
    }

    timerRef.current = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % normalizedImages.length);
    }, autoSlideInterval);

    return () => {
      if (timerRef.current) {
        clearInterval(timerRef.current);
        timerRef.current = null;
      }
    };
  }, [hasMultiple, isHovered, normalizedImages.length, autoSlideInterval]);

  const handlePrev = (e) => {
    e.stopPropagation();
    setCurrentIndex((prev) => (prev === 0 ? normalizedImages.length - 1 : prev - 1));
  };

  const handleNext = (e) => {
    e.stopPropagation();
    setCurrentIndex((prev) => (prev + 1) % normalizedImages.length);
  };

  const handleDotClick = (e, index) => {
    e.stopPropagation();
    setCurrentIndex(index);
  };

  const handleContainerClick = () => {
    if (onImageClick) {
      onImageClick(currentIndex);
    }
  };

  if (normalizedImages.length === 0) {
    return (
      <div className={`${styles.sliderContainer} ${className}`}>
        <img
          src="/jaganath-banner.webp"
          alt={alt}
          className={styles.sliderImg}
        />
        {children}
      </div>
    );
  }

  return (
    <div
      className={`${styles.sliderContainer} ${className}`}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      onClick={handleContainerClick}
      title="Click to view full image gallery"
    >
      {/* Images with cross-fade */}
      {normalizedImages.map((src, index) => (
        <div
          key={`${src}-${index}`}
          className={`${styles.imageLayer} ${
            index === currentIndex ? styles.imageActive : ""
          }`}
        >
          <img
            src={src}
            alt={`${alt} - ${index + 1}`}
            className={styles.sliderImg}
            loading={index === 0 ? "eager" : "lazy"}
            onError={(e) => {
              e.currentTarget.src = "/jaganath-banner.webp";
            }}
          />
        </div>
      ))}

      {/* Hover preview indicator overlay */}
      <div className={styles.hoverOverlay}>
        <span className={styles.expandBadge}>
          <FiMaximize2 /> View Photos
        </span>
      </div>

      {/* Prev / Next controls on hover */}
      {hasMultiple && (
        <>
          <button
            type="button"
            className={`${styles.cardNavBtn} ${styles.cardPrevBtn}`}
            onClick={handlePrev}
            aria-label="Previous photo"
          >
            <FiChevronLeft />
          </button>
          <button
            type="button"
            className={`${styles.cardNavBtn} ${styles.cardNextBtn}`}
            onClick={handleNext}
            aria-label="Next photo"
          >
            <FiChevronRight />
          </button>
        </>
      )}

      {/* Dots navigation */}
      {hasMultiple && (
        <div className={styles.dotsWrapper}>
          {normalizedImages.map((_, i) => (
            <button
              key={i}
              type="button"
              className={`${styles.dot} ${i === currentIndex ? styles.dotActive : ""}`}
              onClick={(e) => handleDotClick(e, i)}
              aria-label={`Go to photo ${i + 1}`}
            />
          ))}
        </div>
      )}

      {/* Photo count indicator when multiple */}
      {hasMultiple && !isHovered && (
        <div className={styles.photoCountBadge}>
          <FiImage size={11} />
          <span>{currentIndex + 1}/{normalizedImages.length}</span>
        </div>
      )}

      {/* Badges / Tags passed as children (e.g. location tag, vehicle capacity) */}
      {children}
    </div>
  );
}
