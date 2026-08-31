"use client";

import { useState, useEffect } from 'react';
import { FiUsers, FiBriefcase, FiWind, FiTag, FiSend } from 'react-icons/fi';
import styles from './VehiclesSection.module.css';
import AnimatedButton from './AnimatedButton';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import EnquiryModal from './EnquiryModal';

/* ── Data ── */
const vehiclesData = [
  {
    title: "Tempo Traveller",
    capacity: "13+1 Seater",
    specs: {
      seats: "13+1 Seats",
      luggage: "6 Bags",
      ac: "Dual AC",
      drive: "Manual"
    },
    image: "https://picsum.photos/400/250?random=60"
  },
  {
    title: "Force Urbania",
    capacity: "10 Seater",
    specs: {
      seats: "10 Seats",
      luggage: "5 Bags",
      ac: "Roof AC",
      drive: "Manual"
    },
    image: "https://picsum.photos/400/250?random=61"
  },
  {
    title: "SML Coach Bus",
    capacity: "17 Seater",
    specs: {
      seats: "17 Seats",
      luggage: "10 Bags",
      ac: "Cabin AC",
      drive: "Manual"
    },
    image: "https://picsum.photos/400/250?random=62"
  },
  {
    title: "Innova Crysta",
    capacity: "7 Seater",
    specs: {
      seats: "7 Seats",
      luggage: "3 Bags",
      ac: "Auto AC",
      drive: "Auto/Manual"
    },
    image: "https://picsum.photos/400/250?random=63"
  },
  {
    title: "Toyota Fortuner",
    capacity: "7 Seater",
    specs: {
      seats: "7 Seats",
      luggage: "3 Bags",
      ac: "All-Row AC",
      drive: "4x4 Auto"
    },
    image: "https://picsum.photos/400/250?random=64"
  }
];

function getSlidesToShow(width) {
  if (width < 640) return 1;
  if (width < 992) return 2;
  if (width < 1300) return 3;
  return 4;
}

/* ── Sub-components ── */
function VehicleHeader() {
  return (
    <div className={styles.header}>
      <span className={styles.pretitle}>Premium Fleet</span>
      <h2 className={styles.heading}>Our Vehicles to Travel</h2>
    </div>
  );
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
          <img src={vehicle.image} alt={vehicle.title} className={styles.cardImage} />
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

/* ── Main Component ── */
export default function VehiclesSection() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedVehicle, setSelectedVehicle] = useState('');
  const [slidesToShow, setSlidesToShow] = useState(4);

  useEffect(() => {
    const update = () => setSlidesToShow(getSlidesToShow(window.innerWidth));
    update();
    window.addEventListener('resize', update);
    return () => window.removeEventListener('resize', update);
  }, []);

  const settings = {
    dots: true,
    arrows: false,
    infinite: true,
    speed: 500,
    slidesToShow: slidesToShow,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 4000,
  };

  const handleOpenEnquiry = (vehicleName) => {
    setSelectedVehicle(vehicleName);
    setIsModalOpen(true);
  };

  return (
    <section className={styles.vehicleSection}>
      <div className={styles.container}>
        <VehicleHeader />
        <div className={styles.sliderContainer}>
          <Slider key={slidesToShow} {...settings}>
            {vehiclesData.map((vehicle, index) => (
              <VehicleCard
                key={index}
                vehicle={vehicle}
                onEnquire={handleOpenEnquiry}
              />
            ))}
          </Slider>
        </div>
      </div>

      <EnquiryModal
        show={isModalOpen}
        handleClose={() => setIsModalOpen(false)}
        itemName={selectedVehicle}
        itemType="vehicle"
      />
    </section>
  );
}
