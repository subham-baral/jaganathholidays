"use client";

import { useState, useEffect } from 'react';
import styles from './TestimonialsSection.module.css';
import AnimatedButton from './AnimatedButton';
import Slider from "react-slick";
import { FaStar, FaStarHalfAlt, FaRegStar } from 'react-icons/fa';
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";

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

function StarRating({ rating = 5 }) {
  const fullStars = Math.floor(rating);
  const hasHalf = rating % 1 >= 0.25 && rating % 1 < 0.75;
  const emptyStars = 5 - fullStars - (hasHalf ? 1 : 0) - (rating % 1 >= 0.75 ? 1 : 0);
  const extraFull = rating % 1 >= 0.75 ? 1 : 0;

  return (
    <div className={styles.stars}>
      {[...Array(fullStars + extraFull)].map((_, i) => (
        <FaStar key={`full-${i}`} className={styles.starIcon} />
      ))}
      {hasHalf && <FaStarHalfAlt key="half" className={styles.starIcon} />}
      {[...Array(Math.max(0, emptyStars))].map((_, i) => (
        <FaRegStar key={`empty-${i}`} className={styles.starIcon} />
      ))}
    </div>
  );
}

function TestimonialCard({ text, name, rating }) {
  return (
    <div className={styles.slideWrapper}>
      <div className={styles.card}>
        <StarRating rating={rating} />
        <p className={styles.reviewText}>{text}</p>
        <div className={styles.reviewerName}>– {name}</div>
      </div>
    </div>
  );
}

/* ── Main Component ── */
export default function TestimonialsSection({ reviewsData = [] }) {
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

  if (!reviewsData || reviewsData.length === 0) return null;

  return (
    <section className={styles.testimonialsSection}>
      <div className={styles.container}>
        <TestimonialsHeader />
        
        <div className={styles.sliderContainer}>
          <Slider key={slidesToShow} {...settings}>
            {reviewsData.map((testimonial, index) => (
              <TestimonialCard
                key={index}
                text={testimonial.text}
                name={testimonial.name}
                rating={testimonial.rating}
              />
            ))}
          </Slider>
        </div>
      </div>
    </section>
  );
}
