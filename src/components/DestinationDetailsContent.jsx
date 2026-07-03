import { FiCheck, FiX, FiMapPin, FiUsers, FiClock, FiUser, FiSmartphone, FiCalendar, FiMessageSquare, FiSend, FiGift, FiPhone, FiMail } from 'react-icons/fi';
import styles from './DestinationDetailsContent.module.css';
import AnimatedButton from './AnimatedButton';

export default function DestinationDetailsContent() {
  return (
    <section id="introduction" className={styles.contentSection}>
      <div className={styles.container}>
        
        {/* Left Column: Information */}
        <div className={styles.leftColumn}>
          <div className={styles.introBlock}>
            <h2 className={styles.sectionTitle}>Introduction</h2>
            <p className={styles.paragraph}>
              Our tour package is one of the ideal choices to explore the most religious and historical places in the country. It will cover the visit to Lord of Universe Jagannath Darshan, Puri, and UNESCO World Heritage Site Konark Sun Temple Known as (Black Pagoda) and Chilika Lake on Satpada – The Largest Ramsar Site in Asia. Cruise to Sea-Mouth viewing Rare Irrawaddy Dolphins and Rajhans Island which are located on the Eastern India coast and as per Vedic literature and mythology.
            </p>
            <p className={styles.paragraph}>
              It is been said that it will be divine to take a holy dip in Sangam then visit Kapil Muni Ashram, Ganga Sagar (Bay Of Bengal), which in turn will help to purify and clean the soul of an individual. It could be one of the best ways to be on a spiritual tour with your family and loved ones, spend some quality time with them on one end, and on the other seek blessings of the divine deities. Puri Ganga Sagar tour package will take travellers to divinity and will cover visits to Gurudwara, Kali Ghat, Victoria Memorial and Sri Santha Samaj.
            </p>
          </div>

          <div className={styles.includesBlock}>
            <h3 className={styles.boxTitle}><FiCheck className={styles.titleIcon} /> Price Includes</h3>
            <ul className={styles.includesList}>
              <li><FiCheck className={styles.checkIcon} /> On Arrival Well Come Kits (Welcome Flower Bouquet, Lord Jagannath Photo, Soft Drinks, Tissue Paper, and Water Bottle).</li>
              <li><FiCheck className={styles.checkIcon} /> Every Paid Night 5 Breakfasts</li>
              <li><FiCheck className={styles.checkIcon} /> Transportation by well-condition AC Vehicle</li>
              <li><FiCheck className={styles.checkIcon} /> Driver allowance, Toll Tax, Parking, and State Govt. Tax</li>
              <li><FiCheck className={styles.checkIcon} /> Railway Station / Airport Pick up and Drop and Hotel Taxes</li>
              <li><FiCheck className={styles.checkIcon} /> Here the vehicle is entirely booked for your family only, so it's not a shared vehicle.</li>
              <li><FiCheck className={styles.checkIcon} /> If require Wheel Chair, Baby Trolley, Ice Box, Walker & Etc.</li>
            </ul>
          </div>

          <div className={styles.excludesBlock}>
            <h3 className={styles.boxTitle}><FiX className={styles.titleIcon} /> Price Excludes</h3>
            <ul className={styles.excludesList}>
              <li><FiX className={styles.crossIcon} /> Any personal expenses Fees for Camera & Video Camera</li>
              <li><FiX className={styles.crossIcon} /> Monument entry fees, Boating & Guide charges</li>
              <li><FiX className={styles.crossIcon} /> Porterage at hotels and airports</li>
              <li><FiX className={styles.crossIcon} /> Birthday Celebrations, tips, insurance & laundry</li>
              <li><FiX className={styles.crossIcon} /> Liquors, wine & telephone charges</li>
              <li><FiX className={styles.crossIcon} /> Air / Train fare and Any other</li>
            </ul>
          </div>

          <div className={styles.complementariesBlock}>
            <h3 className={styles.boxTitle}><FiGift className={styles.titleIcon} /> Complementaries</h3>
            <ul className={styles.complementariesList}>
              <li><FiGift className={styles.giftIcon} /> Jagannath Darshan by our Temple priest</li>
              <li><FiGift className={styles.giftIcon} /> Welcome Flower Bouquet</li>
              <li><FiGift className={styles.giftIcon} /> Lord Jagannath Photo</li>
              <li><FiGift className={styles.giftIcon} /> Tissue Paper</li>
              <li><FiGift className={styles.giftIcon} /> 1 Water Bottle per Person Only on Day 1</li>
            </ul>
          </div>
        </div>

        {/* Right Column: Sidebar */}
        <div className={styles.rightColumn}>
          
          {/* Tour Information Box */}
          <div className={styles.infoBox}>
            <h3 className={styles.sidebarTitle}>Tour Information</h3>
            <div className={styles.infoItemList}>
              <div className={styles.infoItem}>
                <div className={styles.iconWrapper}>
                  <FiMapPin />
                </div>
                <div className={styles.infoText}>
                  <span className={styles.infoLabel}>Start Point-End Point</span>
                  <span className={styles.infoValue}>Kolkata - Puri</span>
                </div>
              </div>
              
              <div className={styles.infoItem}>
                <div className={styles.iconWrapper}>
                  <FiUsers />
                </div>
                <div className={styles.infoText}>
                  <span className={styles.infoLabel}>Max People</span>
                  <span className={styles.infoValue}>150</span>
                </div>
              </div>
              
              <div className={styles.infoItem}>
                <div className={styles.iconWrapper}>
                  <FiClock />
                </div>
                <div className={styles.infoText}>
                  <span className={styles.infoLabel}>Duration</span>
                  <span className={styles.infoValue}>05 Nights 06 Days</span>
                </div>
              </div>
            </div>
          </div>

          {/* Booking Form Box */}
          <div className={styles.formBox}>
            <h3 className={styles.sidebarTitle}>Plan Your Journey</h3>
            <form className={styles.bookingForm}>
              
              <div className={styles.formGroup}>
                <label><FiUser className={styles.inputIcon} /> Name *</label>
                <input type="text" placeholder="Enter your full name" required />
              </div>

              <div className={styles.formGroup}>
                <label><FiSmartphone className={styles.inputIcon} /> Mobile *</label>
                <div className={styles.phoneInput}>
                  <div className={styles.countryCode}>
                    <span>🇮🇳</span> +91
                  </div>
                  <input type="tel" placeholder="Enter mobile number" required />
                </div>
              </div>

              <div className={styles.formRow}>
                <div className={styles.formGroup}>
                  <label><FiCalendar className={styles.inputIcon} /> Arrival Date</label>
                  <input type="date" />
                </div>
                <div className={styles.formGroup}>
                  <label><FiCalendar className={styles.inputIcon} /> Departure Date</label>
                  <input type="date" />
                </div>
              </div>

              <div className={styles.formGroup}>
                <label><FiUsers className={styles.inputIcon} /> No. of Persons</label>
                <input type="number" min="1" placeholder="Enter number of persons" />
              </div>

              <div className={styles.formGroup}>
                <label><FiUsers className={styles.inputIcon} /> No. of Children</label>
                <input type="number" min="0" placeholder="Enter number of children" />
              </div>

              <div className={styles.formGroup}>
                <label><FiMessageSquare className={styles.inputIcon} /> Message</label>
                <textarea rows="4" placeholder="Tell us about your travel preferences..."></textarea>
              </div>

              <AnimatedButton className={styles.submitBtn} type="button">
                <FiSend className={styles.sendIcon}/> Submit Inquiry
              </AnimatedButton>
              
            </form>
          </div>
          {/* Need Help Box */}
          <div className={styles.needHelpBox}>
            <h3 className={styles.needHelpTitle}>Need Help?</h3>
            <p className={styles.needHelpText}>
              Our travel experts are here to help you plan the perfect trip.
            </p>
            <div className={styles.contactItem}>
              <div className={styles.contactIconWrapper}><FiPhone /></div>
              <span>+91 1234567890</span>
            </div>
            <div className={styles.contactItem}>
              <div className={styles.contactIconWrapper}><FiMail /></div>
              <span>info@jagannathholidays.com</span>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
