import Image from 'next/image';
import Link from 'next/link';
import { FiMapPin, FiPhone, FiMail } from 'react-icons/fi';
import styles from './Header.module.css';

export default function Header() {
  return (
    <header className={styles.headerContainer}>
      {/* Top Bar */}
      <div className={styles.topBar}>
        <div className={styles.topBarLeft}>
          <div className={styles.topBarItem}>
            <FiMapPin className={styles.topBarIcon} />
            <span>Rasulgarh, Bhubaneswar, 751010, Odisha, India</span>
          </div>
        </div>
        <div className={styles.topBarRight}>
          <div className={styles.topBarItem}>
            <FiPhone className={styles.topBarIcon} />
            <span>+91 1234567890</span>
          </div>
          <div className={styles.topBarItem}>
            <FiMail className={styles.topBarIcon} />
            <span>info@jagannathholidays.com</span>
          </div>
        </div>
      </div>

      {/* Main Navigation */}
      <div className={styles.mainNav}>
        <div className={styles.logoContainer}>
          <Link href="/">
            <Image 
              src="/jaganath-holidays-logo.png" 
              alt="Jagannath Holidays Logo" 
              width={250} 
              height={60} 
              className={styles.logoImage} 
              priority
            />
          </Link>
        </div>
        
        <nav className={styles.navLinks}>
          <Link href="/" className={styles.navLink}>Home</Link>
          <Link href="/about" className={styles.navLink}>About Us</Link>
          <Link href="/packages" className={styles.navLink}>Tour Packages</Link>
          <Link href="/destinations" className={styles.navLink}>Destinations</Link>
          <Link href="/gallery" className={styles.navLink}>Gallery</Link>
          <Link href="/blogs" className={styles.navLink}>Blogs</Link>
          <Link href="/contact" className={styles.navLink}>Contact Us</Link>
        </nav>

        <button className={styles.bookNowBtn}>
          BOOK NOW
        </button>
      </div>
    </header>
  );
}
