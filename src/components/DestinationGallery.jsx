"use client";

import { getImageUrl } from '@/lib/api';
import styles from './DestinationGallery.module.css';

export default function DestinationGallery({ gallery = [], title = "Tour Gallery" }) {
  const defaultGalleryImages = [
    "/loved-destination-1.png",
    "/loved-destination-2.png",
    "/loved-destination-3.png",
    "/loved-destination-4.jpg",
    "/loved-destination-3.png",
    "/loved-destination-4.jpg",
    "/loved-destination-1.png",
    "/loved-destination-2.png"
  ];

  const images = Array.isArray(gallery) && gallery.length > 0
    ? gallery.map((item, index) => ({
        src: getImageUrl(item?.file_path || item),
        alt: item?.alt_tag || `${title} Image ${index + 1}`
      }))
    : defaultGalleryImages.map((src, index) => ({
        src,
        alt: `Tour Gallery ${index + 1}`
      }));

  return (
    <section id="tour-gallery" className={styles.gallerySection}>
      <div className={styles.container}>
        <div className={styles.header}>
          <span className={styles.subtitle}>Explore the destinations</span>
          <h2 className={styles.title}>{title}</h2>
        </div>
        
        <div className={styles.grid}>
          {images.map((img, index) => (
            <div key={index} className={styles.imageWrapper}>
              <img 
                src={img.src} 
                alt={img.alt} 
                className={styles.image} 
                onError={(e) => {
                  e.currentTarget.src = defaultGalleryImages[index % defaultGalleryImages.length];
                }}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
