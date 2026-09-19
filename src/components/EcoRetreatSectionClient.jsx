"use client";

import { useState } from 'react';
import styles from './EcoRetreatSection.module.css';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import CardImageSlider from './CardImageSlider';
import ImageSliderModal from './ImageSliderModal';

function EcoCard({ retreat, onOpenGallery }) {
  const images = retreat.images && retreat.images.length > 0
    ? retreat.images
    : [retreat.image || '/jaganath-banner.webp'];

  return (
    <div className={styles.item}>
      <div className={`${styles.imageWrapper} shineEffect`}>
        <CardImageSlider
          images={images}
          alt={retreat.name}
          onImageClick={(index) => onOpenGallery(retreat, index)}
        >
          <div className={styles.imageOverlay}></div>
          {retreat.location && <span className={styles.tag}>{retreat.location}</span>}
        </CardImageSlider>
      </div>

      <div className={styles.content}>
        <h3 className={styles.title}>{retreat.name}</h3>
        <span 
          className={styles.bookBtn}
          onClick={() => onOpenGallery(retreat, 0)}
        >
          View Photos
          <svg className={styles.arrowIcon} width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
            <line x1="5" y1="12" x2="19" y2="12"></line>
            <polyline points="12 5 19 12 12 19"></polyline>
          </svg>
        </span>
      </div>
    </div>
  );
}

export default function EcoRetreatSectionClient({ retreatsData }) {
  const [galleryModal, setGalleryModal] = useState({
    isOpen: false,
    images: [],
    initialIndex: 0,
    title: '',
    subtitle: ''
  });

  const handleOpenGallery = (retreat, initialIndex = 0) => {
    const images = retreat.images && retreat.images.length > 0
      ? retreat.images
      : [retreat.image || '/jaganath-banner.webp'];

    setGalleryModal({
      isOpen: true,
      images,
      initialIndex,
      title: retreat.name || 'Eco Retreat',
      subtitle: retreat.location || 'Odisha'
    });
  };

  const handleCloseGallery = () => {
    setGalleryModal((prev) => ({ ...prev, isOpen: false }));
  };

  const sliderSettings = {
    dots: true,
    arrows: false,
    infinite: retreatsData.length > 1,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: retreatsData.length > 1,
    autoplaySpeed: 4000,
  };

  return (
    <>
      {/* Desktop / Tablet Grid */}
      <div className={styles.desktopGrid}>
        {retreatsData.map((retreat, index) => (
          <EcoCard
            key={retreat.id || index}
            retreat={retreat}
            onOpenGallery={handleOpenGallery}
          />
        ))}
      </div>

      {/* Mobile Slider */}
      <div className={styles.mobileSlider}>
        <Slider {...sliderSettings}>
          {retreatsData.map((retreat, index) => (
            <div key={retreat.id || index} className={styles.slideWrapper}>
              <EcoCard
                retreat={retreat}
                onOpenGallery={handleOpenGallery}
              />
            </div>
          ))}
        </Slider>
      </div>

      {/* Fullscreen Image Slider Modal on Click */}
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
