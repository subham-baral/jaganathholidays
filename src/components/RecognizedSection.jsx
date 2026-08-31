import styles from './RecognizedSection.module.css';

/* ── Data ── */
const recognizedLogos = [
  { name: "OTOAI", img: "/Recognized (1).png" },
  { name: "ODISHA", img: "/Recognized (2).png" },
  { name: "IATA", img: "/Recognized (3).png" },
  { name: "EcoTour ODISHA", img: "/Recognized (4).png" },
  { name: "Eco Retreat ODISHA", img: "/Recognized (5).png" },
  { name: "ATOAI", img: "/Recognized (6).png" }
];

/* ── Sub-components ── */
function RecognizedHeader() {
  return <h2 className={styles.heading}>Recognized & Approved by</h2>;
}

function LogoCard({ name, img }) {
  return (
    <div className={styles.logoCard}>
      <img src={img} alt={name} className={styles.logoImg} />
    </div>
  );
}

/* ── Main Component ── */
export default function RecognizedSection() {
  return (
    <section className={styles.recognizedSection}>
      <div className={styles.container}>
        <RecognizedHeader />
        
        <div className={styles.logoGrid}>
          {recognizedLogos.map((logo, index) => (
            <LogoCard key={index} {...logo} />
          ))}
        </div>
      </div>
    </section>
  );
}
