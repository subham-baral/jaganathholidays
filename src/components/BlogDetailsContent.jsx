import styles from './BlogDetailsContent.module.css';
import { FiCalendar } from 'react-icons/fi';
import { getImageUrl } from '@/lib/api';

function formatDate(dateStr) {
  if (!dateStr) return 'June 21, 2026';
  try {
    const d = new Date(dateStr);
    if (isNaN(d.getTime())) return dateStr;
    return d.toLocaleDateString('en-US', {
      month: 'long',
      day: 'numeric',
      year: 'numeric',
    });
  } catch {
    return dateStr;
  }
}

/* ── Sub-components: Article ── */

function BlogArticleHeader({ 
  heroImage = "/jaganath-banner.webp",
  date = "June 21, 2026",
  title = "Exploring the Hidden Gems of Odisha: A Complete Travel Guide",
  category = null,
}) {
  return (
    <>
      <img src={heroImage} alt={title} className={styles.heroImage} />
      
      <div className={styles.metaData}>
        <div className={styles.metaItem}>
          <FiCalendar className={styles.metaIcon} />
          <span>{date}</span>
        </div>
        {category && (
          <div className={styles.metaItem}>
            <span className={styles.categoryBadge}>{category}</span>
          </div>
        )}
      </div>

      <h1 className={styles.title}>{title}</h1>
    </>
  );
}

function BlogArticleBody({ content }) {
  if (!content) {
    return (
      <div className={styles.articleBody}>
        <p>No content available.</p>
      </div>
    );
  }

  return (
    <div 
      className={styles.articleBody} 
      dangerouslySetInnerHTML={{ __html: content }} 
    />
  );
}

/* ── Main Component ── */

export default function BlogDetailsContent({ blog = null }) {
  const details = blog?.data || {};
  const title = blog?.title || details.title || 'Exploring the Hidden Gems of Odisha';
  const content = details.content || details.short_description || '';
  const heroImage = getImageUrl(
    details.featured_image || details.thumbnail || details.cover_image,
    '/jaganath-banner.webp'
  );
  const date = formatDate(blog?.published_at || details.published_date || blog?.created_at);
  const categoryTerm = blog?.terms?.find(
    t => t.taxonomy?.slug === 'blog-category' || t.taxonomy?.slug === 'categories'
  );
  const category = categoryTerm?.name || null;

  return (
    <section className={styles.detailsSection}>
      <div className={styles.container}>
        <div className={styles.mainContent}>
          <BlogArticleHeader
            heroImage={heroImage}
            date={date}
            title={title}
            category={category}
          />
          <BlogArticleBody content={content} />
        </div>
      </div>
    </section>
  );
}
