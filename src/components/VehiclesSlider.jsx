"use client";

import { useState, useEffect } from 'react';
import { FiUsers, FiBriefcase, FiWind, FiTag, FiSend } from 'react-icons/fi';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import styles from './VehiclesSection.module.css';
import AnimatedButton from './AnimatedButton';
import EnquiryModal from './EnquiryModal';

function getSlidesToShow(width) {
  if (width < 640) return 1;
  if (width < 992) return 2;
  if (width < 1300) return 3;
  return 4;
}

function VehicleSpecs({ specs }) {
  return (
    <div className={styles.specsGrid}>
      <div className={styles.specItem}>
        <FiUsers className={styles.specIcon} />
        <span>{specs.seats}</span>
      </div>
      <div className={styles.specItem}>
        <FiBriefcase className={styles.specIcon} />
        <span>{specs.luggage}</span>
      </div>
      <div className={styles.specItem}>
        <FiWind className={styles.specIcon} />
        <span>{specs.ac}</span>
      </div>
      <div className={styles.specItem}>
        <FiTag className={styles.specIcon} />
        <span>{specs.drive}</span>
      </div>
    </div>
  );
}

function VehicleCard({ vehicle, onEnquire }) {
  return (
    <div className={styles.slideWrapper}>
      <div className={styles.card}>
        <div className={styles.imageWrapper}>
          <img
            src={vehicle.image}
            alt={vehicle.title}
            className={styles.cardImage}
            loading="lazy"
            onError={(e) => {
              e.currentTarget.src = "https://picsum.photos/400/250?random=60";
            }}
          />
          <span className={styles.capacityBadge}>{vehicle.capacity}</span>
        </div>
        <div className={styles.cardContent}>
          <h3 className={styles.cardTitle}>{vehicle.title}</h3>
          <VehicleSpecs specs={vehicle.specs} />
          <div className={styles.footer}>
            <AnimatedButton
              className={styles.bookBtn}
              onClick={() => onEnquire(vehicle.title)}
            >
              <FiSend className={styles.sendIcon} /> Enquire Now
            </AnimatedButton>
          </div>
        </div>
      </div>
    </div>
  );
}

export default function VehiclesSlider({ vehicles = [] }) {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedVehicle, setSelectedVehicle] = useState('');
  const [slidesToShow, setSlidesToShow] = useState(4);

  useEffect(() => {
    const update = () => setSlidesToShow(getSlidesToShow(window.innerWidth));
    update();
    window.addEventListener('resize', update);
    return () => window.removeEventListener('resize', update);
  }, []);

  const totalSlides = vehicles.length;
  const effectiveSlidesToShow = Math.min(slidesToShow, totalSlides || 1);

  const settings = {
    dots: true,
    arrows: false,
    infinite: totalSlides > effectiveSlidesToShow,
    speed: 500,
    slidesToShow: effectiveSlidesToShow,
    slidesToScroll: 1,
    autoplay: totalSlides > effectiveSlidesToShow,
    autoplaySpeed: 4000,
    responsive: [
      {
        breakpoint: 1300,
        settings: {
          slidesToShow: Math.min(3, totalSlides),
          infinite: totalSlides > 3,
        }
      },
      {
        breakpoint: 992,
        settings: {
          slidesToShow: Math.min(2, totalSlides),
          infinite: totalSlides > 2,
        }
      },
      {
        breakpoint: 640,
        settings: {
          slidesToShow: 1,
          infinite: totalSlides > 1,
        }
      }
    ]
  };

  const handleOpenEnquiry = (vehicleName) => {
    setSelectedVehicle(vehicleName);
    setIsModalOpen(true);
  };

  if (!vehicles || vehicles.length === 0) {
    return null;
  }

  return (
    <>
      <div className={styles.sliderContainer}>
        <Slider key={`${slidesToShow}-${totalSlides}`} {...settings}>
          {vehicles.map((vehicle, index) => (
            <VehicleCard
              key={vehicle.id || index}
              vehicle={vehicle}
              onEnquire={handleOpenEnquiry}
            />
          ))}
        </Slider>
      </div>

      <EnquiryModal
        show={isModalOpen}
        handleClose={() => setIsModalOpen(false)}
        itemName={selectedVehicle}
        itemType="vehicle"
      />
    </>
  );
}
