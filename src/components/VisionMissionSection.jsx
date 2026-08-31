import { FiEye, FiTarget } from 'react-icons/fi';
import styles from './VisionMissionSection.module.css';

/* ── Data ── */
const vmData = [
  {
    icon: <FiEye className={styles.icon} />,
    title: "Our Vision",
    description: "To be the most trusted and innovative travel companion, inspiring people to explore the world deeply, connect across cultures, and create lifelong memories while preserving the beauty of our planet for future generations."
  },
  {
    icon: <FiTarget className={styles.icon} />,
    title: "Our Mission",
    description: "To curate exceptional, personalized travel experiences that exceed our clients' expectations. We strive to provide unparalleled service, expert guidance, and seamless journeys, all while promoting responsible and sustainable tourism practices."
  }
];

/* ── Sub-component ── */
function VisionMissionCard({ icon, title, description }) {
  return (
    <div className={styles.card}>
      <div className={styles.iconWrapper}>
        {icon}
      </div>
      <h2 className={styles.title}>{title}</h2>
      <p className={styles.description}>{description}</p>
    </div>
  );
}

/* ── Main Component ── */
export default function VisionMissionSection() {
  return (
    <section className={styles.vmSection}>
      <div className={styles.container}>
        {vmData.map((item, index) => (
          <VisionMissionCard
            key={index}
            icon={item.icon}
            title={item.title}
            description={item.description}
          />
        ))}
      </div>
    </section>
  );
}
