"use client";

import styles from './EcoRetreatSection.module.css';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";

function EcoCard({ retreat }) {
  return (
    <div className={styles.item}>
      <div className={`${styles.imageWrapper} shineEffect`}>
        <img src={retreat.image} alt={retreat.name} className={styles.image} />
        <div className={styles.imageOverlay}></div>
        <span className={styles.tag}>{retreat.location}</span>
      </div>
      <div className={styles.content}>
        <h3 className={styles.title}>{retreat.name}</h3>
        <span className={styles.bookBtn}>
          Book Now 
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
  const sliderSettings = {
    dots: true,
    arrows: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3500,
  };

  return (
    <>
      {/* Desktop / Tablet Grid */}
      <div className={styles.desktopGrid}>
        {retreatsData.map((retreat, index) => (
          <EcoCard key={index} retreat={retreat} />
        ))}
      </div>

      {/* Mobile Slider */}
      <div className={styles.mobileSlider}>
        <Slider {...sliderSettings}>
          {retreatsData.map((retreat, index) => (
            <div key={index} className={styles.slideWrapper}>
              <EcoCard retreat={retreat} />
            </div>
          ))}
        </Slider>
      </div>
    </>
  );
}
