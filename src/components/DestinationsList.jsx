import Link from 'next/link';
import { FiMapPin, FiClock } from 'react-icons/fi';
import styles from './DestinationsList.module.css';

export default async function DestinationsList({ searchParams }) {
  const resolvedParams = searchParams && typeof searchParams.then === 'function'
    ? await searchParams
    : (searchParams || {});

  const itemsPerPage = 12;

  // Generate 18 dummy destinations
  const destinations = Array.from({ length: 18 }).map((_, index) => ({
    id: index + 1,
    title: `Destination ${index + 1}`,
    location: "Odisha, India",
    duration: "3 Days / 2 Nights",
    description: "Experience the vibrant culture, serene temples, and beautiful landscapes of this amazing destination.",
    image: `https://picsum.photos/600/400?random=${index + 10}`,
    price: `₹${(Math.floor(Math.random() * 15) + 5) * 1000}`
  }));

  const totalPages = Math.ceil(destinations.length / itemsPerPage);
  const currentPage = Math.min(Math.max(Number(resolvedParams.page || 1), 1), totalPages || 1);
  
  // Calculate items for current page
  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = destinations.slice(indexOfFirstItem, indexOfLastItem);

  return (
    <section className={styles.destinationsSection}>
      <div className={styles.container}>
        <div className={styles.grid}>
          {currentItems.map((dest) => (
            <div key={dest.id} className={`${styles.card} shineEffect`}>
              <img src={dest.image} alt={dest.title} className={styles.cardImage} />
              <div className={styles.cardOverlay}>
                <h3 className={styles.cardTitle}>{dest.title}</h3>
                <Link href="/destination/puri" className={styles.bookNow}>View Packages</Link>
              </div>
            </div>
          ))}
        </div>

        {/* Pagination Controls */}
        {totalPages > 1 && (
          <div className={styles.pagination}>
            <Link 
              href={`?page=${currentPage - 1}`}
              className={`${styles.pageBtn} ${currentPage === 1 ? styles.disabledBtn : ''}`}
              aria-disabled={currentPage === 1}
              tabIndex={currentPage === 1 ? -1 : undefined}
            >
              Prev
            </Link>
            
            {[...Array(totalPages)].map((_, i) => (
              <Link 
                key={i + 1}
                href={`?page=${i + 1}`}
                className={`${styles.pageBtn} ${currentPage === i + 1 ? styles.activePage : ''}`}
              >
                {i + 1}
              </Link>
            ))}

            <Link 
              href={`?page=${currentPage + 1}`}
              className={`${styles.pageBtn} ${currentPage === totalPages ? styles.disabledBtn : ''}`}
              aria-disabled={currentPage === totalPages}
              tabIndex={currentPage === totalPages ? -1 : undefined}
            >
              Next
            </Link>
          </div>
        )}
      </div>
    </section>
  );
}
