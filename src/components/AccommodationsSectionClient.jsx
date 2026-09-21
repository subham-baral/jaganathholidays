"use client";

import { useState } from 'react';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import { FiChevronLeft, FiChevronRight } from 'react-icons/fi';
import { FaStar } from 'react-icons/fa';
import styles from './AccommodationsSection.module.css';
import CardImageSlider from './CardImageSlider';
import ImageSliderModal from './ImageSliderModal';

function formatStarRating(rating) {
  if (!rating) return '';
  const str = String(rating).trim();
  if (/^\d+(\.\d+)?$/.test(str)) {
    return `${str} Star`;
  }
  return str;
}

function PrevArrow({ onClick }) {
  return (
    <button
      type="button"
      className={`${styles.navArrow} ${styles.prevArrow}`}
      onClick={onClick}
      aria-label="Previous Hotel"
    >
      <FiChevronLeft />
    </button>
  );
}

function NextArrow({ onClick }) {
  return (
    <button
      type="button"
      className={`${styles.navArrow} ${styles.nextArrow}`}
      onClick={onClick}
      aria-label="Next Hotel"
    >
      <FiChevronRight />
    </button>
  );
}

function AccommodationCard({ hotel, onOpenGallery }) {
  const images = (Array.isArray(hotel.images) && hotel.images.length > 0)
    ? hotel.images
    : (Array.isArray(hotel.photos) && hotel.photos.length > 0)
    ? hotel.photos
    : [hotel.image || '/jaganath-banner.webp'];

  return (
    <div className={styles.card}>
      <CardImageSlider
        images={images}
        alt={hotel.name}
        onImageClick={(index) => onOpenGallery(hotel, index)}
      >
        {hotel.star_rating && (
          <span className={styles.starBadge}>
            <FaStar className={styles.starIcon} />
            <span>{formatStarRating(hotel.star_rating)}</span>
          </span>
        )}

        <div className={styles.cardOverlay}>
          <h3 className={styles.cardTitle}>{hotel.name}</h3>
          {hotel.location && <p className={styles.cardLocation}>{hotel.location}</p>}
          <span
            className={styles.viewPhotosBtn}
            onClick={(e) => {
              e.stopPropagation();
              onOpenGallery(hotel, 0);
            }}
          >
            View Photos
            <svg className={styles.arrowIcon} width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
              <line x1="5" y1="12" x2="19" y2="12"></line>
              <polyline points="12 5 19 12 12 19"></polyline>
            </svg>
          </span>
        </div>
      </CardImageSlider>
    </div>
  );
}

export default function AccommodationsSectionClient({ accommodationsData = [] }) {
  const [galleryModal, setGalleryModal] = useState({
    isOpen: false,
    images: [],
    initialIndex: 0,
    title: '',
    subtitle: ''
  });

  const handleOpenGallery = (hotel, initialIndex = 0) => {
    const images = (Array.isArray(hotel.images) && hotel.images.length > 0)
      ? hotel.images
      : (Array.isArray(hotel.photos) && hotel.photos.length > 0)
      ? hotel.photos
      : [hotel.image || '/jaganath-banner.webp'];

    setGalleryModal({
      isOpen: true,
      images,
      initialIndex,
      title: hotel.name || 'Accommodation',
      subtitle: hotel.location || 'Odisha'
    });
  };

  const handleCloseGallery = () => {
    setGalleryModal((prev) => ({ ...prev, isOpen: false }));
  };

  if (!accommodationsData || accommodationsData.length === 0) {
    return null;
  }

  const total = accommodationsData.length;

  const sliderSettings = {
    dots: true,
    arrows: true,
    infinite: total > 4,
    speed: 600,
    slidesToShow: 4,
    slidesToScroll: 1,
    autoplay: total > 4,
    autoplaySpeed: 3800,
    pauseOnHover: true,
    prevArrow: <PrevArrow />,
    nextArrow: <NextArrow />,
    responsive: [
      {
        breakpoint: 1200,
        settings: {
          slidesToShow: Math.min(3, total),
          slidesToScroll: 1,
          infinite: total > 3,
        }
      },
      {
        breakpoint: 840,
        settings: {
          slidesToShow: Math.min(2, total),
          slidesToScroll: 1,
          infinite: total > 2,
        }
      },
      {
        breakpoint: 576,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite: total > 1,
          arrows: false,
        }
      }
    ]
  };

  return (
    <>
      <div className={styles.sliderWrapper}>
        <Slider {...sliderSettings}>
          {accommodationsData.map((hotel, index) => (
            <div key={hotel.id || index} className={styles.slideItem}>
              <AccommodationCard
                hotel={hotel}
                onOpenGallery={handleOpenGallery}
              />
            </div>
          ))}
        </Slider>
      </div>

      {/* Fullscreen Image Slider Modal on click */}
      <ImageSliderModal
        isOpen={galleryModal.isOpen}
        images={galleryModal.images}
        initialIndex={galleryModal.initialIndex}
        title={galleryModal.title}
        subtitle={galleryModal.subtitle}
        onClose={handleCloseGallery}
      />
    </>
  );
}
