import Image from 'next/image';
import styles from './TeamSection.module.css';

export default function TeamSection() {
  const team = [
    { name: "Rajesh Kumar", role: "Tour Director", image: "https://picsum.photos/300/400?random=10" },
    { name: "Anita Mishra", role: "Travel Consultant", image: "https://picsum.photos/300/400?random=11" },
    { name: "Sanjay Dash", role: "Local Guide Expert", image: "https://picsum.photos/300/400?random=12" },
    { name: "Priya Mohanty", role: "Customer Support", image: "https://picsum.photos/300/400?random=13" }
  ];

  return (
    <section className={styles.teamSection}>
      <div className={styles.container}>
        <div className={styles.header}>
          <h4 className={styles.subtitle}>Our Experts</h4>
          <h2 className={styles.title}>Meet The Team</h2>
          <p className={styles.description}>
            Our experienced and passionate travel experts are here to make your dream vacation a reality.
          </p>
        </div>

        <div className={styles.grid}>
          {team.map((member, index) => (
            <div key={index} className={styles.card}>
              <div className={styles.imageWrapper}>
                <img src={member.image} alt={member.name} className={styles.image} />
                <div className={styles.overlay}>
                  <p className={styles.overlayText}>Contact Me</p>
                </div>
              </div>
              <div className={styles.info}>
                <h3 className={styles.name}>{member.name}</h3>
                <p className={styles.role}>{member.role}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
