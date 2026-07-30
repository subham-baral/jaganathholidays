import Link from 'next/link';
import { FiMapPin, FiClock } from 'react-icons/fi';
import styles from './DestinationsList.module.css';

export default async function DestinationsList({ searchParams }) {
  const resolvedParams = searchParams && typeof searchParams.then === 'function'
    ? await searchParams
    : (searchParams || {});

  const itemsPerPage = 12;

  // Fetch destinations from the API
  let destinations = [];
  try {
    const res = await fetch(`${process.env.CMS_API_URL}/api/v1/delivery/taxonomies?slug=destinations`, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${process.env.CMS_TOKEN}`
      },
      next: { revalidate: 3600 } // Cache for 1 hour
    });
    const result = await res.json();
    if (result.success && result.data && result.data.length > 0) {
      destinations = result.data[0].terms || [];
    }
  } catch (error) {
    console.error("Error fetching destinations:", error);
  }

  // Fallback to empty array if no destinations
  if (!destinations) destinations = [];

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
          {currentItems.map((dest, index) => {
            const preloadColors = [
              '#0f766e', // Teal
              '#0369a1', // Light Blue
              '#a21caf', // Fuchsia
              '#b45309', // Amber
              '#be123c', // Rose
              '#4d7c0f', // Lime
            ];
            
            let imageUrl = null;
            if (dest.featured_image) {
              if (typeof dest.featured_image === 'string') {
                imageUrl = dest.featured_image.startsWith('http') ? dest.featured_image : `${process.env.CMS_MEDIA_URL}/${dest.featured_image}`;
              } else if (dest.featured_image.file_path) {
                imageUrl = `${process.env.CMS_MEDIA_URL}/${dest.featured_image.file_path}`;
              } else if (dest.featured_image.url) {
                imageUrl = dest.featured_image.url;
              }
            }
            
            const bgColor = preloadColors[index % preloadColors.length];
            
            return (
              <div key={dest.id} className={`${styles.card} shineEffect`}>
                <div 
                  className={styles.cardImage} 
                  style={
                    imageUrl 
                      ? { backgroundImage: `url(${imageUrl})`, backgroundSize: 'cover', backgroundPosition: 'center' } 
                      : { backgroundColor: bgColor }
                  } 
                />
                <div className={styles.cardOverlay}>
                  <h3 className={styles.cardTitle}>{dest.name}</h3>
                  <Link href={`/destination/${dest.slug}`} className={styles.bookNow}>View Packages</Link>
                </div>
              </div>
            );
          })}
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
