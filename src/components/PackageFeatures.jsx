import { FiCheckCircle, FiStar, FiHeart, FiShield } from 'react-icons/fi';
import styles from './PackageFeatures.module.css';

export default function PackageFeatures() {
  const features = [
    {
      icon: <FiStar />,
      title: "Handpicked Tours",
      desc: "Expertly crafted itineraries"
    },
    {
      icon: <FiCheckCircle />,
      title: "Best Price Guarantee",
      desc: "No hidden booking fees"
    },
    {
      icon: <FiHeart />,
      title: "Personalized Care",
      desc: "24/7 dedicated support"
    },
    {
      icon: <FiShield />,
      title: "Safe & Secure",
      desc: "Trusted by thousands"
    }
  ];

  return (
    <section className={styles.featuresSection}>
      <div className={styles.container}>
        <div className={styles.grid}>
          {features.map((feature, index) => (
            <div key={index} className={styles.featureItem}>
              <div className={styles.iconWrapper}>
                {feature.icon}
              </div>
              <div className={styles.textWrapper}>
                <h3 className={styles.title}>{feature.title}</h3>
                <p className={styles.desc}>{feature.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
