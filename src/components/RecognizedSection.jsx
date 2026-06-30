import styles from './RecognizedSection.module.css';

export default function RecognizedSection() {
  const logos = [
    { name: "OTOAI", img: "https://picsum.photos/150/80?random=120" },
    { name: "ODISHA", img: "https://picsum.photos/150/80?random=121" },
    { name: "IATA", img: "https://picsum.photos/150/80?random=122" },
    { name: "EcoTour ODISHA", img: "https://picsum.photos/150/80?random=123" },
    { name: "Eco Retreat ODISHA", img: "https://picsum.photos/150/80?random=124" },
    { name: "ATOAI", img: "https://picsum.photos/150/80?random=125" }
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
