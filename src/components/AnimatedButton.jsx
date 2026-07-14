"use client"
import styles from './AnimatedButton.module.css';

export default function AnimatedButton({ children, className = '', onClick, type = 'button' }) {
  return (
    <button 
      type={type} 
      onClick={onClick} 
      className={`${styles.bookNowBtn} ${className}`}
    >
      <span className={styles.bookNowHoverCircle}></span>
      <span className={styles.bookNowSvgLeft}>
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 487 487">
          <path fillOpacity=".1" fillRule="nonzero" fill="#FFF" d="M0 .3c67 2.1 134.1 4.3 186.3 37 52.2 32.7 89.6 95.8 112.8 150.6 23.2 54.8 32.3 101.4 61.2 149.9 28.9 48.4 77.7 98.8 126.4 149.2H0V.3z"></path>
        </svg>
      </span>
      <span className={styles.bookNowSvgRight}>
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 487 487">
          <path fillOpacity=".1" fillRule="nonzero" fill="#FFF" d="M487 486.7c-66.1-3.6-132.3-7.3-186.3-37s-95.9-85.3-126.2-137.2c-30.4-51.8-49.3-99.9-76.5-151.4C70.9 109.6 35.6 54.8.3 0H487v486.7z"></path>
        </svg>
      </span>
      <span className={styles.bookNowOverlay}></span>
      <span className={styles.bookNowText}>{children}</span>
    </button>
  );
}
