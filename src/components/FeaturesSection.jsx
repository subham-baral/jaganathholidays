import styles from './FeaturesSection.module.css';
import { FiGlobe, FiPercent, FiHome, FiShield } from 'react-icons/fi';

export default function FeaturesSection() {
  const features = [
    {
      icon: <FiGlobe className={styles.icon} />,
      title: '150+ DESTINATIONS',
      subtitle: 'Explore curated religious, historical, and adventure spots across India.'
    },
    {
      icon: <FiPercent className={styles.icon} />,
      title: 'BEST PRICE GUARANTEE',
      subtitle: 'Top-tier luxury holiday experiences offered at competitive and fair rates.'
    },
    {
      icon: <FiHome className={styles.icon} />,
      title: 'GREAT CUSTOMER SUPPORT',
      subtitle: 'Dedicated round-the-clock client assistance and local tour guides.'
    },
    {
      icon: <FiShield className={styles.icon} />,
      title: '100% SECURE PAYMENT',
      subtitle: 'Safe and encrypted online booking and invoicing systems.'
    }
  ];

  return (
    <section className={styles.featuresSection}>
      <div className={styles.container}>
        {features.map((feature, index) => (
          <div key={index} className={styles.featureItem}>
            <div className={styles.iconCircle}>
              {feature.icon}
            </div>
            <h3 className={styles.title}>{feature.title}</h3>
            <p className={styles.subtitle}>{feature.subtitle}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
