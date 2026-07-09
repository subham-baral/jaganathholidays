"use client";

import Slider from "react-slick";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import styles from './DestinationsWindows.module.css';

export default function DestinationsWindows() {
  const baseImages = [
    { src: '/destination-window-1.png', name: 'Puri' },
    { src: '/destination-window-2.png', name: 'Daringbadi' },
    { src: '/destination-window-3.png', name: 'Konark' },
    { src: '/destination-window-4.png', name: 'Dhauli' },
    { src: '/destination-window-5.png', name: 'Nandan Kanan' },
    { src: '/destination-window-6.png', name: 'Satapada' },
  ];
  const destinationImages = [...baseImages, ...baseImages, ...baseImages];

  const settings = {
    dots: false,
    arrows: false,
    infinite: true,
    slidesToShow: 7,
    slidesToScroll: 1,
    autoplay: true,
    speed: 3000,
    autoplaySpeed: 0,
    cssEase: "linear",
    pauseOnHover: true,
    responsive: [
      {
        breakpoint: 1400,
        settings: {
          slidesToShow: 6,
        }
      },
      {
        breakpoint: 1200,
        settings: {
          slidesToShow: 5,
        }
      },
      {
        breakpoint: 992,
        settings: {
          slidesToShow: 4,
        }
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 3,
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 2,
        }
      }
    ]
  };

  return (
    <section className={styles.windowsSection}>
      <div className={styles.windowsContainer}>
        <Slider {...settings} className={styles.slider}>
          {destinationImages.map((dest, index) => (
            <div key={index} className={styles.slideWrapper}>
              <div 
                className={styles.windowFrame}
                style={{ animationDelay: `${0.1 + (index * 0.15)}s` }}
              >
                <img 
                  src={dest.src} 
                  alt={dest.name} 
                  className={styles.image} 
                />
                <h4 className={styles.destName}>{dest.name}</h4>
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </section>
  );
}
