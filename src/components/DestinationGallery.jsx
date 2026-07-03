import styles from './DestinationGallery.module.css';

export default function DestinationGallery() {
  const galleryImages = [
    "/loved-destination-1.png",
    "/loved-destination-2.png",
    "/loved-destination-3.png",
    "/loved-destination-4.jpg",
    "/loved-destination-3.png",
    "/loved-destination-4.jpg",
    "/loved-destination-1.png",
    "/loved-destination-2.png"
  ];

  return (
    <section id="tour-gallery" className={styles.gallerySection}>
      <div className={styles.container}>
        <div className={styles.header}>
          <span className={styles.subtitle}>Explore the destinations</span>
          <h2 className={styles.title}>Tour Gallery</h2>
        </div>
        
        <div className={styles.grid}>
          {galleryImages.map((src, index) => (
            <div key={index} className={styles.imageWrapper}>
              <img src={src} alt={`Tour Gallery ${index + 1}`} className={styles.image} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
