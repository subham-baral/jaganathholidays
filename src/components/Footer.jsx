import Link from 'next/link';
import styles from './Footer.module.css';
import { FaMapMarkerAlt, FaPhoneAlt, FaEnvelope, FaGlobe, FaFacebookF, FaLinkedinIn, FaYoutube, FaTripadvisor, FaTwitter } from 'react-icons/fa';

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.overlay}></div>
      <div className={styles.container}>
        <div className={styles.topSection}>
          <div className={styles.brandColumn}>
            <div className={styles.logos}>
              <img src="/footer-1.png" alt="Odisha Logo 1" className={styles.logoImage} />
              <img src="/footer-2.png" alt="Odisha Logo 2" className={styles.logoImage} />
            </div>
            
            <ul className={styles.contactList}>
              <li>
                <FaMapMarkerAlt className={styles.contactIcon} />
                <div className={styles.contactText}>
                  <strong>Jagannath Holidays</strong><br />
                  Rasulgarh, Bhubaneswar, 751010, Odisha, India
                </div>
              </li>
              <li>
                <FaPhoneAlt className={styles.contactIcon} />
                <div className={styles.contactText}>+91 1234567890</div>
              </li>
              <li>
                <FaEnvelope className={styles.contactIcon} />
                <div className={styles.contactText}>info@jagannathholidays.com</div>
              </li>
              <li>
                <FaGlobe className={styles.contactIcon} />
                <div className={styles.contactText}>www.jagannathholidays.com</div>
              </li>
            </ul>
          </div>

          <div className={styles.linkColumn}>
            <h3 className={styles.columnTitle}>Quick Links</h3>
            <ul className={styles.linkList}>
              <li><Link href="/about">About Us</Link></li>
              <li><a href="#">Testimonials</a></li>
              <li><a href="#">Terms & Conditions</a></li>
              <li><a href="#">Privacy Policy</a></li>
              <li><a href="#">Reservation Policy</a></li>
              <li><Link href="/contact">Contact Us</Link></li>
            </ul>
          </div>

          <div className={styles.linkColumn}>
            <h3 className={styles.columnTitle}>Popular Destinations</h3>
            <ul className={styles.linkList}>
              <li><a href="#">Konark</a></li>
              <li><a href="#">Puri</a></li>
              <li><a href="#">Chilika</a></li>
              <li><a href="#">Satkosia</a></li>
              <li><a href="#">Varanasi Tour</a></li>
              <li><a href="#">Similipal</a></li>
            </ul>
          </div>

          <div className={styles.linkColumn}>
            <h3 className={styles.columnTitle}>Tour Packages</h3>
            <ul className={styles.linkList}>
              <li><a href="#">Spiritual Tour Odisha</a></li>
              <li><a href="#">Puri Gangasagar Tour</a></li>
              <li><a href="#">Odisha Family Tour Package</a></li>
              <li><a href="#">Satkosia Wildlife Tour</a></li>
              <li><a href="#">Tribal Tour Odisha</a></li>
              <li><a href="#">Bhubaneswar City Tour</a></li>
            </ul>
          </div>
        </div>

        <div className={styles.bottomSection}>
          <p className={styles.copyright}>
            Copyright © 2026, Jagannath Holidays. All rights reserved.
          </p>
          <div className={styles.socialIcons}>
            <a href="#" aria-label="Facebook"><FaFacebookF /></a>
            <a href="#" aria-label="X (Twitter)">
              <svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 512 512" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M389.2 48h70.6L305.6 224.2 487 464H345L233.7 318.6 106.5 464H35.8L200.7 275.5 26.8 48H172.4L272.9 180.9 389.2 48zM364.4 421.8h39.1L151.1 88h-42L364.4 421.8z"></path></svg>
            </a>
            <a href="#" aria-label="LinkedIn"><FaLinkedinIn /></a>
            <a href="#" aria-label="TripAdvisor"><FaTripadvisor /></a>
            <a href="#" aria-label="YouTube"><FaYoutube /></a>
          </div>
        </div>
      </div>
    </footer>
  );
}
