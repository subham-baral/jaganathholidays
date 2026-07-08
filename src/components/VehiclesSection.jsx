"use client";

import { useState } from 'react';
import { FiUsers, FiBriefcase, FiWind, FiCheck, FiSend, FiTag } from 'react-icons/fi';
import styles from './VehiclesSection.module.css';
import AnimatedButton from './AnimatedButton';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import EnquiryModal from './EnquiryModal';

export default function VehiclesSection() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedVehicle, setSelectedVehicle] = useState('');

  const settings = {
    dots: true,
    arrows: false,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 4000,
    responsive: [
      {
        breakpoint: 1300,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
        }
      },
      {
        breakpoint: 992,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        }
      },
      {
        breakpoint: 640,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  };

  const vehicles = [
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

  const handleOpenEnquiry = (vehicleName) => {
    setSelectedVehicle(vehicleName);
    setIsModalOpen(true);
  };

  return (
    <section className={styles.vehicleSection}>
      <div className={styles.container}>
        <div className={styles.header}>
          <span className={styles.pretitle}>Premium Fleet</span>
          <h2 className={styles.heading}>Our Vehicles to Travel</h2>
        </div>
        
        <div className={styles.sliderContainer}>
          <Slider {...settings}>
            {vehicles.map((vehicle, index) => (
              <div key={index} className={styles.slideWrapper}>
                <div className={styles.card}>
                  <div className={styles.imageWrapper}>
                    <img src={vehicle.image} alt={vehicle.title} className={styles.cardImage} />
                    <span className={styles.capacityBadge}>{vehicle.capacity}</span>
                  </div>
                  <div className={styles.cardContent}>
                    <h3 className={styles.cardTitle}>{vehicle.title}</h3>
                    
                    {/* Specifications Grid */}
                    <div className={styles.specsGrid}>
                      <div className={styles.specItem}>
                        <FiUsers className={styles.specIcon} />
                        <span>{vehicle.specs.seats}</span>
                      </div>
                      <div className={styles.specItem}>
                        <FiBriefcase className={styles.specIcon} />
                        <span>{vehicle.specs.luggage}</span>
                      </div>
                      <div className={styles.specItem}>
                        <FiWind className={styles.specIcon} />
                        <span>{vehicle.specs.ac}</span>
                      </div>
                      <div className={styles.specItem}>
                        <FiTag className={styles.specIcon} />
                        <span>{vehicle.specs.drive}</span>
                      </div>
                    </div>

                    <div className={styles.footer}>
                      <AnimatedButton 
                        className={styles.bookBtn}
                        onClick={() => handleOpenEnquiry(vehicle.title)}
                      >
                        <FiSend className={styles.sendIcon} /> Enquire Now
                      </AnimatedButton>
                    </div>
                  </div>
                </div>
              </div>
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
