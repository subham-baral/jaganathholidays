import styles from './AccommodationsSection.module.css';
import { getImageUrl } from '@/lib/api';

async function fetchAccommodations() {
  try {
    const payload = {
      slug: "hotel",
      content_type: "hotel"
    };

    const res = await fetch(`${process.env.CMS_API_URL || 'https://cmsapi.one9ty.com'}/api/v1/delivery/contents/show`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${process.env.CMS_TOKEN || '141|PLIcQEisrq76oVJH35rTn3CqkZWZ6xaCSwNDWCiw2ea64d79'}`
      },
      body: JSON.stringify(payload),
      next: { revalidate: 0 }
    });

    const result = await res.json();

    // Response shape: { success, data: { ...meta, data: { items: [{name, image: {file_path}, location}] } } }
    const items = result?.data?.data?.items;

    if (Array.isArray(items) && items.length > 0) {
      return items.map((item, index) => ({
        id: index,
        name: item.name || 'Accommodation',
        image: getImageUrl(item.image?.file_path || item.image),
        location: item.location || ''
      }));
    }
  } catch (error) {
    console.error("Error fetching accommodations:", error);
  }
  return [];
}

/* ── Sub-components ── */
function AccommodationHeader() {
  return (
    <div className={styles.headingArea}>
      <h4 className={styles.subheading}>RELAX IN TOP-RATED HOTELS</h4>
      <h2 className={styles.heading}>Accommodations With Star Hotels</h2>
    </div>
  );
}

function AccommodationCard({ name, location, image }) {
  return (
    <div className={styles.card}>
      <img src={image} alt={name} className={styles.cardImage} />
      <div className={styles.cardOverlay}>
        <h3 className={styles.cardTitle}>{name}</h3>
        <p className={styles.cardLocation}>{location}</p>
      </div>
    </div>
  );
}

/* ── Main Component ── */
export default async function AccommodationsSection() {
  const accommodationsData = await fetchAccommodations();

  return (
    <section className={styles.accommodationsSection}>
      <div className={styles.container}>
        <AccommodationHeader />
        {accommodationsData.length > 0 ? (
          <div className={styles.cardsGrid}>
            {accommodationsData.map((hotel, index) => (
              <AccommodationCard key={index} {...hotel} />
            ))}
          </div>
        ) : (
          <div className={styles.noResult}>No accommodations available</div>
        )}
      </div>
    </section>
  );
}
