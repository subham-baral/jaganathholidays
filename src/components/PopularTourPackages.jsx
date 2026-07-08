import Image from 'next/image';
import { FiClock, FiMapPin, FiStar } from 'react-icons/fi';
import styles from './PopularTourPackages.module.css';
import AnimatedButton from './AnimatedButton';

export default function PopularTourPackages() {
  const packages = [
    {
      title: 'Golden Triangle Tour of Odisha',
      description: 'Explore the three most picturesque and celebrated cities of Odisha: Bhubaneswar, Puri, and Konark.',
      duration: '2N / 3D',
      location: 'Puri - Konark - Bhubaneswar',
      price: '₹4,999',
      rating: '4.8',
      badge: 'Best Seller',
      image: 'https://picsum.photos/400/300?random=40'
    },
    {
      title: 'Odisha Adventure Tour Packages',
      description: 'An ultimate thriller package through wildlife sanctuaries, waterfalls, and scenic gorges of Similipal.',
      duration: '8N / 10D',
      location: 'Similipal - Satkosia',
      price: '₹14,499',
      rating: '4.9',
      badge: 'Adventure',
      image: 'https://picsum.photos/400/300?random=41'
    },
    {
      title: 'Puri Jagannath Rath Yatra Tour',
      description: 'Witness the grand and holy festival of Chariots in Puri with premium hospitality and VIP darshan.',
      duration: '3N / 4D',
      location: 'Puri Jagannath Temple',
      price: '₹6,999',
      rating: '4.7',
      badge: 'Devotional',
      image: 'https://picsum.photos/400/300?random=42'
    },
    {
      title: 'Authentic Tribal Tour Packages',
      description: 'A unique opportunity to connect with local tribal communities and experience their heritage.',
      duration: '5N / 6D',
      location: 'Koraput & Rayagada',
      price: '₹7,999',
      rating: '4.8',
      badge: 'Cultural',
      image: 'https://picsum.photos/400/300?random=43'
    },
    {
      title: 'Satkosia Wildlife & Nature Tour',
      description: 'Stay in luxury tents, enjoy boat cruises, and look out for rare fauna in Satkosia Tiger Reserve.',
      duration: '3N / 4D',
      location: 'Satkosia Gorge Reserve',
      price: '₹12,999',
      rating: '4.9',
      badge: 'Wildlife',
      image: 'https://picsum.photos/400/300?random=44'
    },
    {
      title: 'Romantic Odisha Honeymoon Tour',
      description: 'Celebrate love along the pristine beaches of Gopalpur and scenic valleys of Daringbadi.',
      duration: '4N / 5D',
      location: 'Gopalpur - Daringbadi',
      price: '₹9,999',
      rating: '5.0',
      badge: 'Honeymoon',
      image: 'https://picsum.photos/400/300?random=45'
    },
    {
      title: 'Chilika Lake & Island Exploration',
      description: 'Experience Asia\'s largest brackish water lagoon, spot dolphins, and view thousands of migratory birds.',
      duration: '2N / 3D',
      location: 'Chilika - Mangalajodi',
      price: '₹5,499',
      rating: '4.8',
      badge: 'Nature',
      image: 'https://picsum.photos/400/300?random=46'
    },
    {
      title: 'Heritage & Crafts Tour of Raghurajpur',
      description: 'Discover traditional Patachitra painters, wood crafts, and Odissi dance recitals at the heritage village.',
      duration: '1N / 2D',
      location: 'Raghurajpur Heritage Village',
      price: '₹3,999',
      rating: '4.9',
      badge: 'Heritage',
      image: 'https://picsum.photos/400/300?random=47'
    }
  ];

  return (
    <section className={styles.tourSection}>
      <div className={styles.container}>
        <div className={styles.header}>
          <div className={styles.titleArea}>
            <span className={styles.pretitle}>Featured Offers</span>
            <h2 className={styles.heading}>Popular Tour Packages</h2>
          </div>
          <AnimatedButton className={styles.viewAllBtn}>View All Packages</AnimatedButton>
        </div>

        <div className={styles.grid}>
          {packages.map((pkg, index) => (
            <div key={index} className={styles.card}>
              <div className={styles.imageWrapper}>
                <img src={pkg.image} alt={pkg.title} className={pkg.cardImage} />
                <div className={styles.imageOverlay}></div>
                {pkg.badge && <span className={styles.badge}>{pkg.badge}</span>}
                {pkg.price && (
                  <div className={styles.priceTag}>
                    <span className={styles.startsFrom}>Starts from</span>
                    <span className={styles.priceVal}>{pkg.price}</span>
                  </div>
                )}
              </div>
              <div className={styles.cardContent}>
                <div className={styles.locationRow}>
                  <span className={styles.location}>
                    <FiMapPin className={styles.locationIcon} /> {pkg.location}
                  </span>
                  <span className={styles.rating}>
                    <FiStar className={styles.starIcon} /> {pkg.rating}
                  </span>
                </div>
                <h3 className={styles.cardTitle}>{pkg.title}</h3>
                {/* <p className={styles.cardDescription}>{pkg.description}</p> */}
                <div className={styles.cardFooter}>
                  <span className={styles.duration}>
                    <FiClock className={styles.durationIcon} /> {pkg.duration}
                  </span>
                  <AnimatedButton className={styles.bookNowBtn}>Book Now</AnimatedButton>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
