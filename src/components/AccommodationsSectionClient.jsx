"use client";

import { useState } from 'react';
import styles from './AccommodationsSection.module.css';
import CardImageSlider from './CardImageSlider';
import ImageSliderModal from './ImageSliderModal';

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

  return (
    <>
      <div className={styles.cardsGrid}>
        {accommodationsData.map((hotel, index) => (
          <AccommodationCard
            key={hotel.id || index}
            hotel={hotel}
            onOpenGallery={handleOpenGallery}
          />
        ))}
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
