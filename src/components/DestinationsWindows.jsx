import styles from './DestinationsWindows.module.css';

export default function DestinationsWindows() {
  const destinationImages = [
    '/destination-window-1.png',
    '/destination-window-2.png',
    '/destination-window-3.png',
    '/destination-window-4.png',
    '/destination-window-5.png',
    '/destination-window-6.png',
  ];

  return (
    <section className={styles.windowsSection}>
      <div className={styles.windowsContainer}>
        {destinationImages.map((src, index) => (
          <div 
            key={index} 
            className={styles.windowFrame}
            style={{ animationDelay: `${0.1 + (index * 0.15)}s` }}
          >
            <img 
              src={src} 
              alt={`Destination ${index + 1}`} 
              className={styles.image} 
            />
          </div>
        ))}
      </div>
    </section>
  );
}
