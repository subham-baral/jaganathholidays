import Image from 'next/image';
import Link from 'next/link';
import { FiMapPin, FiPhone, FiMail, FiChevronDown } from 'react-icons/fi';
import styles from './Header.module.css';
import AnimatedButton from './AnimatedButton';

export default function Header() {
  return (
    <>
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
      <header className={styles.mainNav}>
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
          <div className={styles.dropdown}>
            <Link href="/packages" className={`${styles.navLink} ${styles.dropdownTrigger}`}>
              Tour Packages <FiChevronDown className={styles.dropdownArrow} />
            </Link>
            <div className={styles.dropdownContent}>
              <Link href="/packages/details" className={styles.dropdownLink}>Package Details</Link>
            </div>
          </div>
          <div className={styles.dropdown}>
            <Link href="/destinations" className={`${styles.navLink} ${styles.dropdownTrigger}`}>
              Destinations <FiChevronDown className={styles.dropdownArrow} />
            </Link>
            <div className={styles.dropdownContent}>
              <Link href="/destinations/details" className={styles.dropdownLink}>Destinations Details</Link>
            </div>
          </div>
          <Link href="/gallery" className={styles.navLink}>Gallery</Link>
          <Link href="/blogs" className={styles.navLink}>Blogs</Link>
          <Link href="/contact" className={styles.navLink}>Contact Us</Link>
        </nav>

        <AnimatedButton>
          BOOK NOW
        </AnimatedButton>
      </header>
    </>
  );
}
