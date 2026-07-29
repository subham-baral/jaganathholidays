"use client";

import { useState, useEffect } from 'react';
import { usePathname } from 'next/navigation';
import Image from 'next/image';
import Link from 'next/link';
import { FiMapPin, FiPhone, FiMail, FiChevronDown, FiMenu, FiX } from 'react-icons/fi';
import styles from './Header.module.css';
import AnimatedButton from './AnimatedButton';

export default function Header() {
  const pathname = usePathname();
  const isPackageDetailsPage = pathname?.startsWith('/package/');
  
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isDestinationsOpen, setIsDestinationsOpen] = useState(false);
  const [isBlogsOpen, setIsBlogsOpen] = useState(false);

  // Prevent scrolling when mobile menu is open
  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isMenuOpen]);

  const closeMenu = () => setIsMenuOpen(false);
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
      <header className={`${styles.mainNav} ${!isPackageDetailsPage ? styles.stickyNav : ''}`}>
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
          <div className={styles.dropdown}>
            <Link href="/blogs" className={`${styles.navLink} ${styles.dropdownTrigger}`}>
              Blogs <FiChevronDown className={styles.dropdownArrow} />
            </Link>
            <div className={styles.dropdownContent}>
              <Link href="/blogs/details" className={styles.dropdownLink}>Blog Details</Link>
            </div>
          </div>
          <Link href="/contact" className={styles.navLink}>Contact Us</Link>
        </nav>

        <div className={styles.desktopAction}>
          <AnimatedButton>
            BOOK NOW
          </AnimatedButton>
        </div>

        {/* Hamburger Icon for Mobile */}
        <button 
          className={styles.hamburgerBtn}
          onClick={() => setIsMenuOpen(true)}
          aria-label="Open Menu"
        >
          <FiMenu />
        </button>
      </header>

      {/* Mobile Overlay (dims background) */}
      <div className={`${styles.mobileOverlay} ${isMenuOpen ? styles.overlayActive : ''}`} onClick={closeMenu}></div>

      {/* Left Side Menu */}
      <div className={`${styles.sideMenu} ${isMenuOpen ? styles.menuActive : ''}`}>
        <div className={styles.sideMenuHeader}>
          <Image 
            src="/jaganath-holidays-logo.png" 
            alt="Jagannath Holidays Logo" 
            width={180} 
            height={45} 
            className={styles.logoImage}
          />
          <button className={styles.closeBtn} onClick={closeMenu} aria-label="Close Menu">
            <FiX />
          </button>
        </div>

        <nav className={styles.mobileNavLinks}>
          <Link href="/" className={styles.mobileNavLink} onClick={closeMenu}>Home</Link>
          <Link href="/about" className={styles.mobileNavLink} onClick={closeMenu}>About Us</Link>
          
          <Link href="/packages" className={styles.mobileNavLink} onClick={closeMenu}>Tour Packages</Link>

          <Link href="/destinations" className={styles.mobileNavLink} onClick={closeMenu}>Destinations</Link>

          <Link href="/gallery" className={styles.mobileNavLink} onClick={closeMenu}>Gallery</Link>
          
          <div className={styles.mobileDropdown}>
            <div 
              className={styles.mobileDropdownTrigger} 
              onClick={() => setIsBlogsOpen(!isBlogsOpen)}
            >
              Blogs 
              <FiChevronDown className={`${styles.mobileDropdownArrow} ${isBlogsOpen ? styles.arrowUp : ''}`} />
            </div>
            <div className={`${styles.mobileDropdownContent} ${isBlogsOpen ? styles.contentOpen : ''}`}>
              <Link href="/blogs/details" className={styles.mobileSubLink} onClick={closeMenu}>Blog Details</Link>
            </div>
          </div>

          <Link href="/contact" className={styles.mobileNavLink} onClick={closeMenu}>Contact Us</Link>
        </nav>

        <div className={styles.mobileAction}>
          <AnimatedButton className={styles.mobileBookBtn}>
            BOOK NOW
          </AnimatedButton>
        </div>
      </div>
    </>
  );
}
