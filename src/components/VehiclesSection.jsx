"use client";

import styles from './VehiclesSection.module.css';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";

export default function VehiclesSection() {
  const settings = {
    dots: true,
    arrows: false,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 4000,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        }
      },
      {
        breakpoint: 768,
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
      capacity: "13 Seater",
      description: "Travel together in comfort with our Tempo Traveller rental services. Ideal for family vacations, group tours, corporate trips, pilgrimages, and weekend getaways, our well-maintained Tempo Travellers.",
      price: "4500",
      hours: "8 Hours",
      image: "https://picsum.photos/400/250?random=60"
    },
    {
      title: "10 Seater Urbania",
      capacity: "13 Seater",
      description: "Travel in style and comfort with our 10 Seater Urbania, perfect for family trips, corporate travel, airport transfers, and group tours. Featuring spacious seating, modern interiors and air conditioning.",
      price: "4500",
      hours: "8 Hours",
      image: "https://picsum.photos/400/250?random=61"
    },
    {
      title: "SML Coach - 13 Seater",
      capacity: "13 Seater",
      description: "Travel comfortably with our 13-seater SML Coach, perfect for family trips, corporate outings, airport transfers, and small group tours. Enjoy spacious seating, air-conditioned comfort, and a smooth ride.",
      price: "4500",
      hours: "8 Hours",
      image: "https://picsum.photos/400/250?random=62"
    },
    {
      title: "Luxury Innova Crysta",
      capacity: "7 Seater",
      description: "Experience premium travel with our Luxury Innova Crysta. Ideal for family trips, corporate executives, and private tours. Offers top-notch comfort, spacious legroom, and excellent suspension for a smooth ride.",
      price: "3500",
      hours: "8 Hours",
      image: "https://picsum.photos/400/250?random=63"
    }
  ];

  return (
    <section className={styles.vehicleSection}>
      <div className={styles.container}>
        <h2 className={styles.heading}>Our Vehicle to Travel</h2>
        
        <div className={styles.sliderContainer}>
          <Slider {...settings}>
            {vehicles.map((vehicle, index) => (
              <div key={index} className={styles.slideWrapper}>
                <div className={styles.card}>
                  <div className={styles.imageWrapper}>
                    <img src={vehicle.image} alt={vehicle.title} className={styles.cardImage} />
                  </div>
                  <div className={styles.cardContent}>
                    <h3 className={styles.cardTitle}>{vehicle.title}</h3>
                    <div className={styles.capacity}>Seating Capacity: {vehicle.capacity}</div>
                    <p className={styles.description}>{vehicle.description}</p>
                    <div className={styles.footer}>
                      <div className={styles.priceContainer}>
                        <span className={styles.currency}>₹</span>
                        <span className={styles.price}>{vehicle.price}</span>
                        <span className={styles.duration}>/{vehicle.hours}</span>
                      </div>
                      <button className={styles.bookBtn}>Book Now</button>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </Slider>
        </div>
      </div>
    </section>
  );
}
