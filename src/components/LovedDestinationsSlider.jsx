"use client";

import Link from 'next/link';
import { FiChevronLeft, FiChevronRight, FiArrowRight } from 'react-icons/fi';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import styles from './LovedDestinations.module.css';

function PrevArrow({ onClick }) {
  return (
    <button
      type="button"
      className={`${styles.navArrow} ${styles.prevArrow}`}
      onClick={onClick}
      aria-label="Previous destination"
    >
      <FiChevronLeft />
    </button>
  );
}

function NextArrow({ onClick }) {
  return (
    <button
      type="button"
      className={`${styles.navArrow} ${styles.nextArrow}`}
      onClick={onClick}
      aria-label="Next destination"
    >
      <FiChevronRight />
    </button>
  );
}

function resolveDestinationImage(dest, index) {
  if (dest.featured_image) {
    if (typeof dest.featured_image === 'string') {
      if (dest.featured_image.startsWith('http') || dest.featured_image.startsWith('/')) {
        return dest.featured_image;
      }
      return `${process.env.NEXT_PUBLIC_CMS_MEDIA_URL || 'https://cdn.one9ty.com/one9ty-travel'}/${dest.featured_image.replace(/^\/+/, '')}`;
    }
    if (dest.featured_image.file_path) {
      return `${process.env.NEXT_PUBLIC_CMS_MEDIA_URL || 'https://cdn.one9ty.com/one9ty-travel'}/${dest.featured_image.file_path.replace(/^\/+/, '')}`;
    }
    if (dest.featured_image.url) {
      return dest.featured_image.url;
    }
  }
  if (dest.image) return dest.image;
  return `/loved-destination-${(index % 4) + 1}.${index % 4 === 3 ? 'jpg' : 'png'}`;
}

export default function LovedDestinationsSlider({ destinations = [] }) {
  if (!destinations || destinations.length === 0) {
    return null;
  }

  const total = destinations.length;

  const sliderSettings = {
    dots: false,
    arrows: true,
    infinite: total > 4,
    speed: 600,
    slidesToShow: 4,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3500,
    pauseOnHover: true,
    prevArrow: <PrevArrow />,
    nextArrow: <NextArrow />,
    responsive: [
      {
        breakpoint: 1200,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          infinite: total > 3,
        }
      },
      {
        breakpoint: 840,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          infinite: total > 2,
        }
      },
      {
        breakpoint: 576,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite: total > 1,
          arrows: false,
        }
      }
    ]
  };

  return (
    <div className={styles.sliderWrapper}>
      <Slider {...sliderSettings}>
        {destinations.map((dest, index) => {
          const name = dest.name || 'Destination';
          const slug = dest.slug || name.toLowerCase().replace(/\s+/g, '-');
          const imageUrl = resolveDestinationImage(dest, index);
          const fallbackImage = `/loved-destination-${(index % 4) + 1}.${index % 4 === 3 ? 'jpg' : 'png'}`;

          return (
            <div key={dest.id || dest.slug || index} className={styles.slideItem}>
              <Link href={`/destination/${slug}`} className={`${styles.card} shineEffect`}>
                <div className={styles.cardImageWrapper}>
                  <img
                    src={imageUrl}
                    alt={name}
                    className={styles.cardImage}
                    loading="lazy"
                    onError={(e) => {
                      e.currentTarget.src = fallbackImage;
                    }}
                  />
                </div>
                <div className={styles.cardOverlay}>
                 
                  <h3 className={styles.cardTitle}>{name}</h3>
                  <span className={styles.bookNow}>
                    <span>View Packages</span>
                    <FiArrowRight className={styles.arrowIcon} />
                  </span>
                </div>
              </Link>
            </div>
          );
        })}
      </Slider>
    </div>
  );
}
