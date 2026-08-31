import styles from './BlogDetailsContent.module.css';
import { FiCalendar, FiUser, FiMessageCircle } from 'react-icons/fi';

/* ── Sub-components: Article ── */

function BlogArticleHeader({ 
  heroImage = "/jaganath-banner.webp",
  date = "June 21, 2026",
  author = "By Admin",
  commentsCount = "4 Comments",
  title = "Exploring the Hidden Gems of Odisha: A Complete Travel Guide"
}) {
  return (
    <>
      <img src={heroImage} alt={title} className={styles.heroImage} />
      
      <div className={styles.metaData}>
        <div className={styles.metaItem}>
          <FiCalendar className={styles.metaIcon} />
          <span>{date}</span>
        </div>
        <div className={styles.metaItem}>
          <FiUser className={styles.metaIcon} />
          <span>{author}</span>
        </div>
        <div className={styles.metaItem}>
          <FiMessageCircle className={styles.metaIcon} />
          <span>{commentsCount}</span>
        </div>
      </div>

      <h1 className={styles.title}>{title}</h1>
    </>
  );
}

function BlogArticleBody() {
  return (
    <div className={styles.articleBody}>
      <p>
        Odisha, a state located on the eastern coast of India, is widely known for its vibrant culture, 
        ancient temples, and breathtaking coastlines. From the architectural marvels of the Sun Temple at Konark 
        to the sacred vibes of the Jagannath Temple in Puri, Odisha is a treasure trove of heritage waiting to be explored.
      </p>
      <p>
        But beyond the famous Golden Triangle (Bhubaneswar, Puri, and Konark) lies an array of untamed natural beauty 
        and tribal cultures that rarely make it to the standard tourist itineraries. In this guide, we dive deep into 
        the hidden gems that make Odisha a truly spectacular destination for the intrepid traveler.
      </p>

      <h3>The Pristine Beaches of Gopalpur</h3>
      <p>
        While Puri beach gets all the limelight, Gopalpur-on-Sea offers a serene, quiet alternative. 
        Once a bustling commercial port during the British era, it is now a peaceful coastal retreat perfect for 
        long walks, surfing, and witnessing glorious sunrises. The decaying ruins of old colonial buildings add a 
        touch of melancholy and history to the salty sea breeze.
      </p>

      <div className={styles.quoteBlock}>
        "Traveling through Odisha feels like flipping through the pages of a deeply ancient, beautifully illustrated history book, where every chapter offers a new revelation."
      </div>

      <h3>Daringbadi: The Kashmir of Odisha</h3>
      <p>
        Often referred to as the 'Kashmir of Odisha', Daringbadi is a hill station located in the Kandhamal district. 
        Surrounded by thick pine forests, coffee gardens, and majestic waterfalls, this destination offers a 
        refreshing escape from the coastal humidity. During peak winters, you might even witness frost here, 
        a rare phenomenon in this part of the country.
      </p>
      
      <p>
        Whether you are a history buff, a nature lover, or someone simply seeking spiritual solace, Odisha has something 
        extraordinary to offer. Pack your bags and embark on a journey to the soul of incredible India!
      </p>
    </div>
  );
}

/* ── Sub-components: Sidebar ── */

function BlogSearchWidget() {
  return (
    <div className={styles.widget}>
      <h4 className={styles.widgetTitle}>Search</h4>
      <input type="text" placeholder="Search blogs..." className={styles.searchInput} />
    </div>
  );
}

function BlogCategoriesWidget() {
  const categories = [
    { name: "Travel Guides", count: 12 },
    { name: "Temple Tours", count: 8 },
    { name: "Nature & Wildlife", count: 5 },
    { name: "Local Cuisine", count: 4 },
    { name: "Travel Tips", count: 7 }
  ];

  return (
    <div className={styles.widget}>
      <h4 className={styles.widgetTitle}>Categories</h4>
      <ul className={styles.categoryList}>
        {categories.map((cat, idx) => (
          <li key={idx} className={styles.categoryItem}>
            <span>{cat.name}</span>
            <span>({cat.count})</span>
          </li>
        ))}
      </ul>
    </div>
  );
}

function BlogRecentPostsWidget() {
  const recentPosts = [
    {
      title: "Best Time to Visit the Jagannath Temple",
      date: "May 12, 2026",
      image: "/loved-destination-1.png"
    },
    {
      title: "A Guide to the Chilika Lake Bird Sanctuary",
      date: "April 28, 2026",
      image: "/loved-destination-2.png"
    },
    {
      title: "Top 5 Seafood Dishes to Try in Puri",
      date: "April 15, 2026",
      image: "/loved-destination-3.png"
    }
  ];

  return (
    <div className={styles.widget}>
      <h4 className={styles.widgetTitle}>Recent Posts</h4>
      {recentPosts.map((post, idx) => (
        <div key={idx} className={styles.recentPost}>
          <img src={post.image} alt={post.title} className={styles.recentPostImage} />
          <div className={styles.recentPostInfo}>
            <div className={styles.recentPostTitle}>{post.title}</div>
            <div className={styles.recentPostDate}>{post.date}</div>
          </div>
        </div>
      ))}
    </div>
  );
}

/* ── Main Component ── */

export default function BlogDetailsContent() {
  return (
    <section className={styles.detailsSection}>
      <div className={styles.container}>
        
        {/* Main Article Content */}
        <div className={styles.mainContent}>
          <BlogArticleHeader />
          <BlogArticleBody />
        </div>

        {/* Sidebar */}
        <div className={styles.sidebar}>
          <BlogSearchWidget />
          <BlogCategoriesWidget />
          <BlogRecentPostsWidget />
        </div>

      </div>
    </section>
  );
}
