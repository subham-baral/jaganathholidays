import styles from './BlogDetailsContent.module.css';
import { FiCalendar, FiUser, FiMessageCircle } from 'react-icons/fi';

export default function BlogDetailsContent() {
  return (
    <section className={styles.detailsSection}>
      <div className={styles.container}>
        
        {/* Main Article Content */}
        <div className={styles.mainContent}>
          <img src="/jaganath-banner.webp" alt="Blog Hero" className={styles.heroImage} />
          
          <div className={styles.metaData}>
            <div className={styles.metaItem}>
              <FiCalendar className={styles.metaIcon} />
              <span>June 21, 2026</span>
            </div>
            <div className={styles.metaItem}>
              <FiUser className={styles.metaIcon} />
              <span>By Admin</span>
            </div>
            <div className={styles.metaItem}>
              <FiMessageCircle className={styles.metaIcon} />
              <span>4 Comments</span>
            </div>
          </div>

          <h1 className={styles.title}>Exploring the Hidden Gems of Odisha: A Complete Travel Guide</h1>
          
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
        </div>

        {/* Sidebar */}
        <div className={styles.sidebar}>
          
          <div className={styles.widget}>
            <h4 className={styles.widgetTitle}>Search</h4>
            <input type="text" placeholder="Search blogs..." className={styles.searchInput} />
          </div>

          <div className={styles.widget}>
            <h4 className={styles.widgetTitle}>Categories</h4>
            <ul className={styles.categoryList}>
              <li className={styles.categoryItem}><span>Travel Guides</span> <span>(12)</span></li>
              <li className={styles.categoryItem}><span>Temple Tours</span> <span>(8)</span></li>
              <li className={styles.categoryItem}><span>Nature & Wildlife</span> <span>(5)</span></li>
              <li className={styles.categoryItem}><span>Local Cuisine</span> <span>(4)</span></li>
              <li className={styles.categoryItem}><span>Travel Tips</span> <span>(7)</span></li>
            </ul>
          </div>

          <div className={styles.widget}>
            <h4 className={styles.widgetTitle}>Recent Posts</h4>
            <div className={styles.recentPost}>
              <img src="/loved-destination-1.png" alt="Recent Post" className={styles.recentPostImage} />
              <div className={styles.recentPostInfo}>
                <div className={styles.recentPostTitle}>Best Time to Visit the Jagannath Temple</div>
                <div className={styles.recentPostDate}>May 12, 2026</div>
              </div>
            </div>
            <div className={styles.recentPost}>
              <img src="/loved-destination-2.png" alt="Recent Post" className={styles.recentPostImage} />
              <div className={styles.recentPostInfo}>
                <div className={styles.recentPostTitle}>A Guide to the Chilika Lake Bird Sanctuary</div>
                <div className={styles.recentPostDate}>April 28, 2026</div>
              </div>
            </div>
            <div className={styles.recentPost}>
              <img src="/loved-destination-3.png" alt="Recent Post" className={styles.recentPostImage} />
              <div className={styles.recentPostInfo}>
                <div className={styles.recentPostTitle}>Top 5 Seafood Dishes to Try in Puri</div>
                <div className={styles.recentPostDate}>April 15, 2026</div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
