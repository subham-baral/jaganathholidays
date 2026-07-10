"use client";

import { useState } from 'react';
import styles from './FullGallery.module.css';
import { FiZoomIn, FiX } from 'react-icons/fi';

export default function FullGallery() {
  const [selectedImage, setSelectedImage] = useState(null);

  // Generate 16 images for a full gallery layout
  const galleryImages = [
    "/loved-destination-1.png",
    "/loved-destination-2.png",
    "/loved-destination-3.png",
    "/loved-destination-4.jpg",
    "/loved-destination-2.png",
    "/loved-destination-1.png",
    "/loved-destination-3.png",
    "/loved-destination-4.jpg",
    "/loved-destination-3.png",
    "/loved-destination-4.jpg",
    "/loved-destination-1.png",
    "/loved-destination-2.png",
    "/loved-destination-1.png",
    "/loved-destination-3.png",
    "/loved-destination-4.jpg",
    "/loved-destination-2.png"
  ];

  return (
    <>
      <section className={styles.gallerySection}>
        <div className={styles.container}>
          <div className={styles.header}>
            <span className={styles.subtitle}>Moments of Joy</span>
            <h2 className={styles.title}>Our Memory Wall</h2>
          </div>
          
          <div className={styles.grid}>
            {galleryImages.map((src, index) => (
              <div 
                key={index} 
                className={styles.imageWrapper}
                onClick={() => setSelectedImage(src)}
              >
                <img src={src} alt={`Gallery Image ${index + 1}`} className={styles.image} />
                <div className={styles.overlay}>
                  <FiZoomIn className={styles.zoomIcon} />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Lightbox Popup */}
      {selectedImage && (
        <div className={styles.lightbox} onClick={() => setSelectedImage(null)}>
          <button className={styles.closeBtn} onClick={() => setSelectedImage(null)}>
            <FiX />
          </button>
          <img 
            src={selectedImage} 
            alt="Expanded Gallery" 
            className={styles.lightboxImage} 
            onClick={(e) => e.stopPropagation()} 
          />
        </div>
      )}
    </>
  );
}
