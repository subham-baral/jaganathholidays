import { FiMapPin, FiPhone, FiMail } from 'react-icons/fi';
import styles from './ContactSection.module.css';

export default function ContactSection() {
  return (
    <section className={styles.contactSection}>
      <div className={styles.container}>
        
        {/* Top Split Section */}
        <div className={styles.topSplit}>
          
          {/* Left Side: Image with Floating Card */}
          <div className={styles.imageColumn}>
            <div className={styles.imageWrapper}>
              <img src="/loved-destination-1.png" alt="Contact Us" className={styles.bgImage} />
            </div>
            <div className={styles.floatingCard}>
              <span className={styles.tagline}>GET IN TOUCH</span>
              <h2 className={styles.mainTitle}>Get in touch and let us know how we can help</h2>
              <p className={styles.description}>
                Connect with Jagannath Holidays – Your Gateway to Exceptional Service! Contact us through the channels below to get in touch with our dedicated travel experts. We're here to assist you every step of the way.
              </p>
              <div className={styles.buttonGroup}>
                <button className={styles.primaryBtn}>Book a Tour</button>
                <button className={styles.secondaryBtn}>Explore Packages</button>
              </div>
            </div>
          </div>

          {/* Right Side: Contact Form */}
          <div className={styles.formColumn}>
            <form className={styles.contactForm}>
              <div className={styles.row}>
                <div className={styles.inputGroup}>
                  <label>First Name <span className={styles.required}>*</span></label>
                  <input type="text" />
                </div>
                <div className={styles.inputGroup}>
                  <label>Last Name</label>
                  <input type="text" />
                </div>
              </div>

              <div className={styles.inputGroup}>
                <label>Email Address <span className={styles.required}>*</span></label>
                <input type="email" />
              </div>

              <div className={styles.inputGroup}>
                <label>Phone Number <span className={styles.required}>*</span></label>
                <div className={styles.phoneInput}>
                  <span className={styles.countryCode}>🇮🇳 +91</span>
                  <input type="tel" placeholder="12345 67890" />
                </div>
              </div>

              <div className={styles.inputGroup}>
                <div className={styles.textareaHeader}>
                  <label>Message</label>
                  <span className={styles.charCount}>0 / 180</span>
                </div>
                <textarea rows="5"></textarea>
              </div>

              <button type="button" className={styles.submitBtn}>Submit</button>
            </form>
          </div>
        </div>

        {/* Middle Section: Contact Cards */}
        <div className={styles.cardsRow}>
          
          <div className={styles.contactCard}>
            <div className={styles.iconBox}>
              <FiMapPin className={styles.cardIcon} />
            </div>
            <h3 className={styles.cardTitle}>Our Office</h3>
            <p className={styles.cardText}>
              Rasulgarh, Bhubaneswar, 751010, Odisha, India
            </p>
          </div>

          <div className={styles.contactCard}>
            <div className={styles.iconBox}>
              <FiPhone className={styles.cardIcon} />
            </div>
            <h3 className={styles.cardTitle}>Call Us</h3>
            <p className={styles.cardText}>
              Feel free to reach out, and let's see how we can work on this together.
            </p>
            <a href="tel:+911234567890" className={styles.cardLink}>+91 1234567890</a>
          </div>

          <div className={styles.contactCard}>
            <div className={styles.iconBox}>
              <FiMail className={styles.cardIcon} />
            </div>
            <h3 className={styles.cardTitle}>Email Us</h3>
            <p className={styles.cardText}>
              We appreciate your patience. Our response time is usually within 24 hours.
            </p>
            <a href="mailto:info@jagannathholidays.com" className={styles.cardLink}>info@jagannathholidays.com</a>
          </div>

        </div>
      </div>

      {/* Bottom Section: Full Width Map */}
      <div className={styles.mapSection}>
        <iframe 
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d14969.574483758153!2d85.83685984606774!3d20.283995876352934!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a190a07153b3dfb%3A0x6b7724775d0b9806!2sRasulgarh%2C%20Bhubaneswar%2C%20Odisha!5e0!3m2!1sen!2sin!4v1717320000000!5m2!1sen!2sin" 
          width="100%" 
          height="450" 
          style={{ border: 0 }} 
          allowFullScreen="" 
          loading="lazy" 
          referrerPolicy="no-referrer-when-downgrade"
          title="Google Maps Location"
        ></iframe>
      </div>
    </section>
  );
}
