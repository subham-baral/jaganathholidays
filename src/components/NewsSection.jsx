import styles from './NewsSection.module.css';

export default function NewsSection() {
  const articles = [
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

  return (
    <section className={styles.newsSection}>
      <div className={styles.container}>
        <h2 className={styles.heading}>News & Article</h2>
        
        <div className={styles.grid}>
          {articles.map((article, index) => (
            <div key={index} className={styles.card}>
              <img src={article.image} alt={article.title} className={styles.cardImage} />
              <div className={styles.cardOverlay}>
                <h3 className={styles.cardTitle}>{article.title}</h3>
                <p className={styles.cardDescription}>{article.description}</p>
                <div className={styles.cardDate}>{article.date}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
