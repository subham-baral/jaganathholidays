"use client";

import styles from './TestimonialsSection.module.css';
import Slider from "react-slick";
import { FaStar } from 'react-icons/fa';
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";

export default function TestimonialsSection() {
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
        breakpoint: 1200,
        settings: {
          slidesToShow: 3,
        }
      },
      {
        breakpoint: 992,
        settings: {
          slidesToShow: 2,
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
        }
      }
    ]
  };

  const testimonials = [
    {
      text: "Our Odisha trip was perfectly organized by Jagannath Holidays. From hotel bookings to local sightseeing, everything was managed smoothly. The team was responsive and ensured we had a comfortable and memorable experience.",
      name: "Amit Sharma"
    },
    {
      text: "Our Odisha trip was perfectly organized by Jagannath Holidays. From hotel bookings to local sightseeing, everything was managed smoothly. The team was responsive and ensured we had a comfortable and memorable experience.",
      name: "Amit Sharma"
    },
    {
      text: "Our Odisha trip was perfectly organized by Jagannath Holidays. From hotel bookings to local sightseeing, everything was managed smoothly. The team was responsive and ensured we had a comfortable and memorable experience.",
      name: "Amit Sharma"
    },
    {
      text: "Our Odisha trip was perfectly organized by Jagannath Holidays. From hotel bookings to local sightseeing, everything was managed smoothly. The team was responsive and ensured we had a comfortable and memorable experience.",
      name: "Amit Sharma"
    },
    {
      text: "Our Odisha trip was perfectly organized by Jagannath Holidays. From hotel bookings to local sightseeing, everything was managed smoothly. The team was responsive and ensured we had a comfortable and memorable experience.",
      name: "Amit Sharma"
    }
  ];

  return (
    <section className={styles.testimonialsSection}>
      <div className={styles.container}>
        <div className={styles.header}>
          <h2 className={styles.heading}>Our Happy Customers</h2>
          <button className={styles.viewAllBtn}>View All Reviews</button>
        </div>
        
        <div className={styles.sliderContainer}>
          <Slider {...settings}>
            {testimonials.map((testimonial, index) => (
              <div key={index} className={styles.slideWrapper}>
                <div className={styles.card}>
                  <div className={styles.stars}>
                    {[...Array(5)].map((_, i) => (
                      <FaStar key={i} className={styles.starIcon} />
                    ))}
                  </div>
                  <p className={styles.reviewText}>{testimonial.text}</p>
                  <div className={styles.reviewerName}>– {testimonial.name}</div>
                </div>
              </div>
            ))}
          </Slider>
        </div>
      </div>
    </section>
  );
}
