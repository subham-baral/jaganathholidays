import styles from './StatsSection.module.css';
import { FiUsers, FiMap, FiAward, FiSmile } from 'react-icons/fi';

export default function StatsSection() {
  const stats = [
    { icon: <FiUsers className={styles.icon} />, number: "25k+", label: "Happy Travelers" },
    { icon: <FiMap className={styles.icon} />, number: "100+", label: "Tour Destinations" },
    { icon: <FiAward className={styles.icon} />, number: "15+", label: "Years Experience" },
    { icon: <FiSmile className={styles.icon} />, number: "10k+", label: "Positive Reviews" }
  ];

  return (
    <section className={styles.statsSection}>
      <div className={styles.container}>
        {stats.map((stat, index) => (
          <div key={index} className={styles.statItem}>
            <div className={styles.iconWrapper}>
              {stat.icon}
            </div>
            <h3 className={styles.number}>{stat.number}</h3>
            <p className={styles.label}>{stat.label}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
