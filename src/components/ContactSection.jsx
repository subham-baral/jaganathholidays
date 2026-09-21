import { 
  FiMapPin, 
  FiPhone, 
  FiMail, 
  FiClock, 
  FiCheckCircle, 
  FiShield, 
  FiCompass, 
  FiHeadphones, 
  FiAward 
} from 'react-icons/fi';
import { FaWhatsapp } from 'react-icons/fa';
import ContactForm from '@/app/contact/ContactForm';
import styles from './ContactSection.module.css';

/* ── Left Column: Travel Agency Info Banner ── */
function ContactInfoBanner() {
  return (
    <div className={styles.infoColumn}>
      <div className={styles.heroCard}>
        <div className={styles.imageWrapper}>
          <img 
            src="/loved-destination-1.png" 
            alt="Jagannath Holidays Odisha Tours" 
            className={styles.bgImage} 
          />
          <div className={styles.imageOverlay}>
            <div>
              <span className={styles.overlayBadge}>Jagannath Holidays</span>
              <h3 className={styles.overlayTitle}>Your Gateway to Holy Odisha</h3>
            </div>
          </div>
        </div>

        <div className={styles.heroContent}>
          <span className={styles.tagline}>GET IN TOUCH WITH OUR EXPERTS</span>
          <h2 className={styles.mainTitle}>Let's Plan Your Unforgettable Journey Together</h2>
          <p className={styles.description}>
            Whether you are planning a sacred Puri Jagannath Dham Yatra, a scenic Chilika Lake adventure, an Eco-Retreat experience, or an Odisha cultural heritage tour, our local specialists are ready to tailor the ideal itinerary for you.
          </p>

          <div className={styles.quickActions}>
            <a href="tel:+911234567890" className={styles.callActionBtn}>
              <FiPhone className={styles.actionIcon} /> Call Now
            </a>
            <a 
              href="https://wa.me/911234567890?text=Hello%20Jagannath%20Holidays%2C%20I%20would%20like%20to%20inquire%20about%20a%20tour%20package." 
              target="_blank" 
              rel="noopener noreferrer" 
              className={styles.whatsappActionBtn}
            >
              <FaWhatsapp className={styles.actionIcon} /> WhatsApp
            </a>
          </div>

          <div className={styles.featureList}>
            <div className={styles.featureItem}>
              <span className={styles.featureBullet}>✓</span>
              <span>Instant Response & Custom Quote within 2 Hours</span>
            </div>
            <div className={styles.featureItem}>
              <span className={styles.featureBullet}>✓</span>
              <span>100% Customized Itineraries for Families & Groups</span>
            </div>
            <div className={styles.featureItem}>
              <span className={styles.featureBullet}>✓</span>
              <span>Govt. Approved Local Tour Guides & Clean Vehicles</span>
            </div>
          </div>
        </div>
      </div>

      <div className={styles.hoursCard}>
        <div className={styles.hoursIconBox}>
          <FiClock />
        </div>
        <div className={styles.hoursText}>
          <h4>Office & Support Hours</h4>
          <p>Monday – Sunday: 8:00 AM – 9:00 PM (Emergency 24/7 Helpline available for active travelers)</p>
        </div>
      </div>
    </div>
  );
}

/* ── Contact Channel Cards ── */
function ContactCards() {
  return (
    <div className={styles.cardsRow}>
      <div className={styles.contactCard}>
        <div className={styles.iconBox}>
          <FiMapPin className={styles.cardIcon} />
        </div>
        <h3 className={styles.cardTitle}>Head Office</h3>
        <p className={styles.cardText}>
          Rasulgarh, Bhubaneswar, 751010, Odisha, India. Close to NH-16.
        </p>
        <a 
          href="https://maps.google.com/?q=Rasulgarh+Bhubaneswar+Odisha" 
          target="_blank" 
          rel="noopener noreferrer" 
          className={styles.cardLink}
        >
          View On Google Maps →
        </a>
      </div>

      <div className={styles.contactCard}>
        <div className={styles.iconBox}>
          <FiPhone className={styles.cardIcon} />
        </div>
        <h3 className={styles.cardTitle}>Call Us</h3>
        <p className={styles.cardText}>
          Speak directly with our senior travel consultant for instantaneous assistance and tour booking.
        </p>
        <a href="tel:+911234567890" className={styles.cardLink}>
          +91 1234567890 →
        </a>
      </div>

      <div className={styles.contactCard}>
        <div className={`${styles.iconBox} ${styles.whatsappIconBox}`}>
          <FaWhatsapp className={styles.cardIcon} />
        </div>
        <h3 className={styles.cardTitle}>WhatsApp Chat</h3>
        <p className={styles.cardText}>
          Prefer texting? Send us a quick WhatsApp message to receive instant itineraries and quotes.
        </p>
        <a 
          href="https://wa.me/911234567890?text=Hello%20Jagannath%20Holidays%2C%20I%20would%20like%20to%20inquire%20about%20a%20tour%20package." 
          target="_blank" 
          rel="noopener noreferrer" 
          className={styles.cardLink}
        >
          Chat on WhatsApp →
        </a>
      </div>

      <div className={styles.contactCard}>
        <div className={styles.iconBox}>
          <FiMail className={styles.cardIcon} />
        </div>
        <h3 className={styles.cardTitle}>Email Us</h3>
        <p className={styles.cardText}>
          Send us your detailed inquiry or corporate / group package requirements anytime.
        </p>
        <a href="mailto:info@jagannathholidays.com" className={styles.cardLink}>
          info@jagannathholidays.com →
        </a>
      </div>
    </div>
  );
}

/* ── Trust Pillars Section ── */
function TrustPillars() {
  return (
    <div className={styles.trustPillars}>
      <div className={styles.trustHeader}>
        <span className={styles.trustTag}>WHY CHOOSE JAGANNATH HOLIDAYS</span>
        <h3 className={styles.trustHeading}>Book With Confidence & Peace of Mind</h3>
      </div>

      <div className={styles.pillarsGrid}>
        <div className={styles.pillarItem}>
          <FiAward className={styles.pillarIcon} />
          <h4 className={styles.pillarTitle}>Odisha Tourism Approved</h4>
          <p className={styles.pillarDesc}>Recognized & certified agency ensuring safe, authentic travel experiences.</p>
        </div>

        <div className={styles.pillarItem}>
          <FiCompass className={styles.pillarIcon} />
          <h4 className={styles.pillarTitle}>Tailor-Made Tour Plans</h4>
          <p className={styles.pillarDesc}>Every tour is customized around your preferred pace, budget, and interests.</p>
        </div>

        <div className={styles.pillarItem}>
          <FiShield className={styles.pillarIcon} />
          <h4 className={styles.pillarTitle}>Best Price Guarantee</h4>
          <p className={styles.pillarDesc}>Transparent pricing with no hidden charges, direct vendor partnerships.</p>
        </div>

        <div className={styles.pillarItem}>
          <FiHeadphones className={styles.pillarIcon} />
          <h4 className={styles.pillarTitle}>24/7 On-Tour Care</h4>
          <p className={styles.pillarDesc}>Dedicated trip coordinator available round-the-clock during your holiday.</p>
        </div>
      </div>
    </div>
  );
}

/* ── Interactive Office Location Map ── */
function ContactMap() {
  return (
    <div className={styles.mapSection}>
      <div className={styles.mapHeader}>
        <h3 className={styles.mapTitle}>Find Our Office in Bhubaneswar</h3>
        <p className={styles.mapSubtitle}>Conveniently located near Rasulgarh Square, Bhubaneswar, Odisha</p>
      </div>
      <div className={styles.mapContainer}>
        <iframe 
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d14969.574483758153!2d85.83685984606774!3d20.283995876352934!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a190a07153b3dfb%3A0x6b7724775d0b9806!2sRasulgarh%2C%20Bhubaneswar%2C%20Odisha!5e0!3m2!1sen!2sin!4v1717320000000!5m2!1sen!2sin" 
          width="100%" 
          height="420" 
          style={{ border: 0 }} 
          allowFullScreen="" 
          loading="lazy" 
          referrerPolicy="no-referrer-when-downgrade"
          title="Jagannath Holidays Office Location Map"
          className={styles.mapIframe}
        />
      </div>
    </div>
  );
}

/* ── Main Contact Section Export ── */
export default function ContactSection() {
  return (
    <section className={styles.contactSection}>
      <div className={styles.container}>
        <div className={styles.topSplit}>
          <ContactInfoBanner />
          <div>
            <ContactForm 
              formId={6} 
              slug="contact-us"
              title="Send Us a Message"
              subtitle="Fill out your details below and our travel consultants will craft your customized itinerary within 2 hours."
            />
          </div>
        </div>

        <ContactCards />
        <TrustPillars />
      </div>

      <ContactMap />
    </section>
  );
}
