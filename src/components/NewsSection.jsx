import Link from 'next/link';
import styles from './NewsSection.module.css';
import { getImageUrl, stripHtml } from '@/lib/api';

/* ── Fallback Data ── */
const dummyArticles = [
  {
    title: "Odisha's Top Attractions",
    description: "Explore the most popular tourist destinations across Odisha.",
    date: "Date: 21 Jun 2026",
    image: "https://picsum.photos/500/350?random=90",
    link: "/blogs"
  },
  {
    title: "Best Time to Visit Odisha",
    description: "Find the ideal season for a comfortable and memorable trip.",
    date: "Date: 21 Jun 2026",
    image: "https://picsum.photos/500/350?random=91",
    link: "/blogs"
  },
  {
    title: "Odisha Golden Triangle Tour",
    description: "Discover the heritage and beauty of Puri, Konark, and Bhubaneswar.",
    date: "Date: 21 Jun 2026",
    image: "https://picsum.photos/500/350?random=92",
    link: "/blogs"
  }
];

function formatDate(dateStr) {
  if (!dateStr) return 'Date: 21 Jun 2026';
  try {
    const d = new Date(dateStr);
    if (isNaN(d.getTime())) return `Date: ${dateStr}`;
    const day = d.getDate();
    const month = d.toLocaleString('en-US', { month: 'short' });
    const year = d.getFullYear();
    return `Date: ${day} ${month} ${year}`;
  } catch {
    return `Date: ${dateStr}`;
  }
}

/* ── Server-side Data fetching ── */
async function fetchLatestBlogs() {
  try {
    let res = await fetch(`${process.env.CMS_API_URL || 'https://cmsapi.one9ty.com'}/api/v1/delivery/contents`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${process.env.CMS_TOKEN || '141|PLIcQEisrq76oVJH35rTn3CqkZWZ6xaCSwNDWCiw2ea64d79'}`
      },
      body: JSON.stringify({ content_type_id: 'blog', status: 'published' }),
      next: { revalidate: 30 },
    });

    let result = await res.json();

    // If 'blog' returned empty, try 'blogs'
    if (!result.success || !result.data?.data?.length) {
      const fallbackRes = await fetch(`${process.env.CMS_API_URL || 'https://cmsapi.one9ty.com'}/api/v1/delivery/contents`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${process.env.CMS_TOKEN || '141|PLIcQEisrq76oVJH35rTn3CqkZWZ6xaCSwNDWCiw2ea64d79'}`
        },
        body: JSON.stringify({ content_type_id: 'blogs', status: 'published' }),
        next: { revalidate: 30 },
      });
      const fallbackResult = await fallbackRes.json();
      if (fallbackResult.success && fallbackResult.data?.data?.length > 0) {
        result = fallbackResult;
      }
    }

    if (result.success && result.data?.data?.length > 0) {
      const apiArticles = result.data.data.slice(0, 3).map((item, index) => {
        const itemData = item.data || {};
        const title = itemData.title || item.title || 'Odisha Travel Story';
        const rawDesc = itemData.short_description || itemData.description || itemData.content || '';
        const description = stripHtml(rawDesc) || 'Discover the heritage and beauty of Odisha with Jagannath Holidays.';
        const date = formatDate(item.published_at || itemData.published_date || item.created_at);
        const rawImage = itemData.featured_image || itemData.thumbnail || itemData.cover_image || itemData.image;
        const defaultFallbackImage = `https://picsum.photos/500/350?random=${index + 90}`;
        const image = rawImage ? getImageUrl(rawImage, defaultFallbackImage) : defaultFallbackImage;
        const slug = item.slug || itemData.slug;
        const link = slug ? `/blog/${slug}` : '/blogs';

        return {
          id: item.id || item._id || index,
          title,
          description,
          date,
          image,
          link,
        };
      });

      // If fewer than 3, fill with dummy articles so the 3-column layout stays balanced
      if (apiArticles.length < 3) {
        return [...apiArticles, ...dummyArticles.slice(apiArticles.length, 3)];
      }

      return apiArticles;
    }
  } catch (err) {
    console.error('Error fetching blogs in NewsSection:', err);
  }

  return dummyArticles;
}

/* ── Sub-components ── */
function NewsHeader() {
  return <h2 className={styles.heading}>News & Article</h2>;
}

function ArticleCard({ title, description, date, image, link = '/blogs/details' }) {
  return (
    <Link href={link} className={styles.card}>
      <img src={image} alt={title} className={styles.cardImage} />
      <div className={styles.cardOverlay}>
        <h3 className={styles.cardTitle}>{title}</h3>
        <p className={styles.cardDescription}>{description}</p>
        <div className={styles.cardDate}>{date}</div>
      </div>
    </Link>
  );
}

/* ── Main Component (Server Component) ── */
export default async function NewsSection() {
  const articles = await fetchLatestBlogs();

  return (
    <section className={styles.newsSection}>
      <div className={styles.container}>
        <NewsHeader />
        
        <div className={styles.grid}>
          {articles.map((article, index) => (
            <ArticleCard key={article.id || index} {...article} />

))}
        </div>
      </div>
    </section>
  );
}
