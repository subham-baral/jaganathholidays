import styles from './NewsSection.module.css';

/* ── Data ── */
const articlesData = [
  {
    title: "Odisha's Top Attractions",
    description: "Explore the most popular tourist destinations across Odisha.",
    date: "Date: 21 Jun 2026",
    image: "https://picsum.photos/500/350?random=90"
  },
  {
    title: "Best Time to Visit Odisha",
    description: "Find the ideal season for a comfortable and memorable trip.",
    date: "Date: 21 Jun 2026",
    image: "https://picsum.photos/500/350?random=91"
  },
  {
    title: "Odisha Golden Triangle Tour",
    description: "Discover the heritage and beauty of Puri, Konark, and Bhubaneswar.",
    date: "Date: 21 Jun 2026",
    image: "https://picsum.photos/500/350?random=92"
  }
];

/* ── Sub-components ── */
function NewsHeader() {
  return <h2 className={styles.heading}>News & Article</h2>;
}

function ArticleCard({ title, description, date, image }) {
  return (
    <div className={styles.card}>
      <img src={image} alt={title} className={styles.cardImage} />
      <div className={styles.cardOverlay}>
        <h3 className={styles.cardTitle}>{title}</h3>
        <p className={styles.cardDescription}>{description}</p>
        <div className={styles.cardDate}>{date}</div>
      </div>
    </div>
  );
}

/* ── Main Component ── */
export default function NewsSection() {
  return (
    <section className={styles.newsSection}>
      <div className={styles.container}>
        <NewsHeader />
        
        <div className={styles.grid}>
          {articlesData.map((article, index) => (
            <ArticleCard key={index} {...article} />
          ))}
        </div>
      </div>
    </section>
  );
}
