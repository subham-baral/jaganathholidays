import { FiMap, FiAward, FiShield, FiHeart } from 'react-icons/fi';
import styles from './WhyChooseUs.module.css';

export default function WhyChooseUs() {
  const reasons = [
    {
      icon: <FiMap className={styles.icon} />,
      title: "Extensive Destinations",
      description: "From hidden coastal gems to the most revered spiritual sites, our curated destinations cover every aspect of your travel desires."
    },
    {
      icon: <FiAward className={styles.icon} />,
      title: "Award-Winning Service",
      description: "Recognized by industry leaders for our unwavering commitment to providing the ultimate travel experience."
    },
    {
      icon: <FiShield className={styles.icon} />,
      title: "Safe & Secure Booking",
      description: "Your peace of mind is our priority. Enjoy secure transactions, flexible cancellations, and guaranteed safety during your trip."
    },
    {
      icon: <FiHeart className={styles.icon} />,
      title: "Passionate Local Guides",
      description: "Our guides don't just show you places; they share the stories, history, and soul of the destinations you visit."
    }
  ];

  return (
    <section className={styles.whySection}>
      <div className={styles.container}>
        <div className={styles.header}>
          <h4 className={styles.subtitle}>Why Choose Us</h4>
          <h2 className={styles.title}>Your Journey, Our Commitment</h2>
          <p className={styles.description}>
            We go above and beyond to ensure that every moment of your vacation is seamless, memorable, and extraordinary.
          </p>
        </div>

        <div className={styles.grid}>
          {reasons.map((reason, index) => (
            <div key={index} className={styles.card}>
              <div className={styles.iconWrapper}>
                {reason.icon}
              </div>
              <h3 className={styles.cardTitle}>{reason.title}</h3>
              <p className={styles.cardDescription}>{reason.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
