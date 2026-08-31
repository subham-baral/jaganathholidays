import Link from 'next/link';
import styles from './Footer.module.css';
import { 
  FaMapMarkerAlt, 
  FaPhoneAlt, 
  FaEnvelope, 
  FaGlobe, 
  FaFacebookF, 
  FaLinkedinIn, 
  FaYoutube, 
  FaTripadvisor 
} from 'react-icons/fa';

/* ── Footer Data ── */
const quickLinks = [
  { label: 'About Us', href: '/about' },
  { label: 'Testimonials', href: '#' },
  { label: 'Terms & Conditions', href: '#' },
  { label: 'Privacy Policy', href: '#' },
  { label: 'Reservation Policy', href: '#' },
  { label: 'Contact Us', href: '/contact' }
];

const popularDestinations = [
  { label: 'Konark', href: '/destination/konark' },
  { label: 'Puri', href: '/destination/puri' },
  { label: 'Chilika', href: '/destination/satapada' },
  { label: 'Satkosia', href: '/packages' },
  { label: 'Varanasi Tour', href: '/packages' },
  { label: 'Similipal', href: '/packages' }
];

const tourPackagesLinks = [
  { label: 'Spiritual Tour Odisha', href: '/packages' },
  { label: 'Puri Gangasagar Tour', href: '/packages' },
  { label: 'Odisha Family Tour Package', href: '/packages' },
  { label: 'Satkosia Wildlife Tour', href: '/packages' },
  { label: 'Tribal Tour Odisha', href: '/packages' },
  { label: 'Bhubaneswar City Tour', href: '/packages' }
];

/* ── Sub-components ── */
function FooterBrand() {
  return (
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
  );
}

function FooterLinkColumn({ title, links, className = '' }) {
  return (
    <div className={`${styles.linkColumn} ${className}`}>
      <h3 className={styles.columnTitle}>{title}</h3>
      <ul className={styles.linkList}>
        {links.map((link, index) => (
          <li key={index}>
            <Link href={link.href}>{link.label}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

function FooterBottom() {
  return (
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
  );
}

/* ── Main Component ── */
export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.overlay}></div>
      <div className={styles.container}>
        <div className={styles.topSection}>
          <FooterBrand />
          <FooterLinkColumn title="Quick Links" links={quickLinks} className={styles.halfWidth} />
          <FooterLinkColumn title="Popular Destinations" links={popularDestinations} className={styles.halfWidth} />
          <FooterLinkColumn title="Tour Packages" links={tourPackagesLinks} className={styles.fullWidth} />
        </div>

        <FooterBottom />
      </div>
    </footer>
  );
}
