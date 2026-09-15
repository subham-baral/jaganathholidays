import styles from './EcoRetreatSection.module.css';
import EcoRetreatSectionClient from './EcoRetreatSectionClient';
import { getImageUrl } from '@/lib/api';

async function fetchEcoRetreats() {
  try {
    const payload = {
      slug: "eco-retreat",
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
        name: item.name || 'Eco Retreat',
        image: getImageUrl(item.image?.file_path || item.image),
        location: item.location || ''
      }));
    }
  } catch (error) {
    console.error("Error fetching eco retreats:", error);
  }
  return [];
}

/* ── Sub-components ── */
function EcoHeader() {
  return (
    <div className={styles.header}>
      <span className={styles.subtitle}>Nature Getaways</span>
      <h2 className={styles.heading}>Book Eco Retreat Odisha</h2>
      <div className={styles.underline}></div>
    </div>
  );
}

/* ── Main Component ── */
export default async function EcoRetreatSection() {
  const retreatsData = await fetchEcoRetreats();

  return (
    <section className={styles.ecoSection}>
      <div className={styles.container}>
        <EcoHeader />

        {retreatsData.length > 0 ? (
          <EcoRetreatSectionClient retreatsData={retreatsData} />
        ) : (
          <div className={styles.noResult}>No eco retreats available</div>
        )}
      </div>
    </section>
  );
}
