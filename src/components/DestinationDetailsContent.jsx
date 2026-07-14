import { FiCheck, FiX, FiMapPin, FiUsers, FiClock, FiGift, FiPhone, FiMail } from 'react-icons/fi';
import styles from './DestinationDetailsContent.module.css';
import PlanJourneyForm from './PlanJourneyForm';

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
              <li><FiCheck className={styles.checkIcon} /> Accommodation on twin sharing basis.</li>
              <li><FiCheck className={styles.checkIcon} /> All transfers & sightseeing by AC vehicle.</li>
              <li><FiCheck className={styles.checkIcon} /> Toll, parking, driver allowance, and night halt charges.</li>
            </ul>
          </div>

          <div className={styles.excludesBlock}>
            <h3 className={styles.boxTitle}><FiX className={styles.titleIcon} /> Price Excludes</h3>
            <ul className={styles.excludesList}>
              <li><FiX className={styles.crossIcon} /> Any meals other than those mentioned in the itinerary.</li>
              <li><FiX className={styles.crossIcon} /> Entry fees, camera charges, and guide services.</li>
              <li><FiX className={styles.crossIcon} /> Personal expenses like laundry, phone calls, tips, etc.</li>
            </ul>
          </div>

          <div className={styles.complementariesBlock}>
            <h3 className={styles.boxTitle}><FiGift className={styles.titleIcon} /> Complementary Gifts</h3>
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
          <PlanJourneyForm />

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
