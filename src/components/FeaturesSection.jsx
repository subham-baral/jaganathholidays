import styles from './FeaturesSection.module.css';
import { FiGlobe, FiPercent, FiHome, FiShield } from 'react-icons/fi';

export default function FeaturesSection() {
  const features = [
    {
      icon: <FiGlobe className={styles.icon} />,
      title: '100+ DESTINATIONS',
      subtitle: 'Dream, explore & discover'
    },
    {
      icon: <FiPercent className={styles.icon} />,
      title: 'BEST PRICE GUARANTEE',
      subtitle: 'The price of liberty is eternal care'
    },
    {
      icon: <FiHome className={styles.icon} />,
      title: 'GREAT CUSTOMER',
      subtitle: 'Satisfaction Beyond Expectations'
    },
    {
      icon: <FiShield className={styles.icon} />,
      title: 'SECURE PAYMENT',
      subtitle: 'A unique payment processing'
    }
  ];

  return (
    <section className={styles.featuresSection}>
      <div className={styles.overlay}></div>
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
