import Link from 'next/link';
import { FiClock, FiMapPin, FiStar } from 'react-icons/fi';
import styles from './PopularTourPackages.module.css';
import AnimatedButton from './AnimatedButton';

async function fetchPopularPackages() {
  const dummyPackages = [
    {
      title: 'Golden Triangle Tour of Odisha',
      duration: '2N / 3D',
      location: 'Puri - Konark - Bhubaneswar',
      price: '₹4,999',
      rating: '4.8',
      badge: 'Best Seller',
      image: 'https://picsum.photos/400/300?random=40',
      slug: 'golden-triangle'
    },
    {
      title: 'Odisha Adventure Tour Packages',
      duration: '8N / 10D',
      location: 'Similipal - Satkosia',
      price: '₹14,499',
      rating: '4.9',
      badge: 'Adventure',
      image: 'https://picsum.photos/400/300?random=41',
      slug: 'odisha-adventure'
    },
    {
      title: 'Puri Jagannath Rath Yatra Tour',
      duration: '3N / 4D',
      location: 'Puri Jagannath Temple',
      price: '₹6,999',
      rating: '4.7',
      badge: 'Devotional',
      image: 'https://picsum.photos/400/300?random=42',
      slug: 'rath-yatra'
    },
    {
      title: 'Authentic Tribal Tour Packages',
      duration: '5N / 6D',
      location: 'Koraput & Rayagada',
      price: '₹7,999',
      rating: '4.8',
      badge: 'Cultural',
      image: 'https://picsum.photos/400/300?random=43',
      slug: 'tribal-tour'
    }
  ];

  try {
    const payload = {
      content_type_id: "packages",
      status: "published",
      show_in_home: "true"
    };

    const res = await fetch(`${process.env.CMS_API_URL}/api/v1/delivery/contents`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${process.env.CMS_TOKEN}`
      },
      body: JSON.stringify(payload),
      next: { revalidate: 3600 }
    });

    const result = await res.json();
    if (result.success && result.data && result.data.data && result.data.data.length > 0) {
      return result.data.data.map((item, index) => {
        const categoryTerm = item.terms?.find(t => t.taxonomy?.slug === 'category');
        return {
          title: item.title,
          duration: item.data.tour_duration || 'N/A',
          location: item.data.starting_point ? (item.data.end_point ? `${item.data.starting_point} - ${item.data.end_point}` : item.data.starting_point) : 'Odisha',
          price: 'On Request',
          rating: '4.8',
          badge: categoryTerm ? categoryTerm.name : 'Popular',
          image: item.data.cover_image?.file_path ? `${process.env.CMS_MEDIA_URL}/${item.data.cover_image.file_path}` : `https://picsum.photos/400/300?random=${index + 40}`,
          slug: item.slug || item.data.slug
        };
      });
    }
  } catch (error) {
    console.error("Error fetching popular packages:", error);
  }
  return dummyPackages;
}

export default async function PopularTourPackages() {
  const packages = await fetchPopularPackages();

  return (
    <section className={styles.tourSection}>
      <div className={styles.container}>
        <div className={styles.header}>
          <div className={styles.titleArea}>
            <span className={styles.pretitle}>Featured Offers</span>
            <h2 className={styles.heading}>Popular Tour Packages</h2>
          </div>
          <Link href="/packages">
            <AnimatedButton className={styles.viewAllBtn}>View All Packages</AnimatedButton>
          </Link>
        </div>

        <div className={styles.grid}>
          {packages.map((pkg, index) => {
            const slug = pkg.title.toLowerCase().replace(/\s+/g, '-');
            return (
              <div key={index} className={styles.card}>
                <div className={`${styles.imageWrapper} shineEffect`}>
                  <img src={pkg.image} alt={pkg.title} className={pkg.cardImage} />
                  <div className={styles.imageOverlay}></div>
                  {pkg.badge && <span className={styles.badge}>{pkg.badge}</span>}
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
                  <h3 className={styles.cardTitle}>
                    <Link href={`/package/${slug}`} className={styles.titleLink}>
                      {pkg.title}
                    </Link>
                  </h3>
                  {/* <p className={styles.cardDescription}>{pkg.description}</p> */}
                  <div className={styles.cardFooter}>
                    <span className={styles.duration}>
                      <FiClock className={styles.durationIcon} /> {pkg.duration}
                    </span>
                    <AnimatedButton className={styles.bookNowBtn}>Book Now</AnimatedButton>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
