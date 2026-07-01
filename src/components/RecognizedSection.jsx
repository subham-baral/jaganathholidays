import styles from './RecognizedSection.module.css';

export default function RecognizedSection() {
  const logos = [
    { name: "OTOAI", img: "/Recognized (1).png" },
    { name: "ODISHA", img: "/Recognized (2).png" },
    { name: "IATA", img: "/Recognized (3).png" },
    { name: "EcoTour ODISHA", img: "/Recognized (4).png" },
    { name: "Eco Retreat ODISHA", img: "/Recognized (5).png" },
    { name: "ATOAI", img: "/Recognized (6).png" }
  ];

  return (
    <section className={styles.recognizedSection}>
      <div className={styles.container}>
        <h2 className={styles.heading}>Recognized & Approved by</h2>
        
        <div className={styles.logoGrid}>
          {logos.map((logo, index) => (
            <div key={index} className={styles.logoCard}>
              <img src={logo.img} alt={logo.name} className={styles.logoImg} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
