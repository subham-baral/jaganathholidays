"use client";

import { useState, useEffect } from 'react';
import styles from './TestimonialsSection.module.css';
import AnimatedButton from './AnimatedButton';
import Slider from "react-slick";
import { FaStar } from 'react-icons/fa';
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";

/* ── Data ── */
const testimonialsData = [
  {
    text: "Our Odisha trip was perfectly organized by Jagannath Holidays. From hotel bookings to local sightseeing, everything was managed smoothly. The team was responsive and ensured we had a comfortable and memorable experience.",
    name: "Amit Sharma"
  },
  {
    text: "Our Odisha trip was perfectly organized by Jagannath Holidays. From hotel bookings to local sightseeing, everything was managed smoothly. The team was responsive and ensured we had a comfortable and memorable experience.",
    name: "Priya Patel"
  },
  {
    text: "Our Odisha trip was perfectly organized by Jagannath Holidays. From hotel bookings to local sightseeing, everything was managed smoothly. The team was responsive and ensured we had a comfortable and memorable experience.",
    name: "Rahul Verma"
  },
  {
    text: "Our Odisha trip was perfectly organized by Jagannath Holidays. From hotel bookings to local sightseeing, everything was managed smoothly. The team was responsive and ensured we had a comfortable and memorable experience.",
    name: "Sneha Mohanty"
  },
  {
    text: "Our Odisha trip was perfectly organized by Jagannath Holidays. From hotel bookings to local sightseeing, everything was managed smoothly. The team was responsive and ensured we had a comfortable and memorable experience.",
    name: "Debasish Das"
  }
];

function getSlidesToShow(width) {
  if (width < 640) return 1;
  if (width < 992) return 2;
  if (width < 1200) return 3;
  return 4;
}

/* ── Sub-components ── */
function TestimonialsHeader() {
  return (
    <div className={styles.header}>
      <h2 className={styles.heading}>Our Happy Customers</h2>
      <AnimatedButton className={styles.viewAllBtn}>View All Reviews</AnimatedButton>
    </div>
  );
}

function StarRating({ count = 5 }) {
  return (
    <div className={styles.stars}>
      {[...Array(count)].map((_, i) => (
        <FaStar key={i} className={styles.starIcon} />
      ))}
    </div>
  );
}

function TestimonialCard({ text, name }) {
  return (
    <div className={styles.slideWrapper}>
      <div className={styles.card}>
        <StarRating />
        <p className={styles.reviewText}>{text}</p>
        <div className={styles.reviewerName}>– {name}</div>
      </div>
    </div>
  );
}

/* ── Main Component ── */
export default function TestimonialsSection() {
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

  return (
    <section className={styles.testimonialsSection}>
      <div className={styles.container}>
        <TestimonialsHeader />
        
        <div className={styles.sliderContainer}>
          <Slider key={slidesToShow} {...settings}>
            {testimonialsData.map((testimonial, index) => (
              <TestimonialCard
                key={index}
                text={testimonial.text}
                name={testimonial.name}
              />
            ))}
          </Slider>
        </div>
      </div>
    </section>
  );
}
