import Link from 'next/link';
import styles from './DestinationsWindows.module.css';
import { getBannerItems, getImageUrl } from '@/lib/api';

/* ── Fallback Data ── */
const fallbackWindows = [
  { src: '/destination-window-1.png', name: 'Puri', link: '/destination/puri' },
  { src: '/destination-window-2.png', name: 'Daringbadi', link: '/destination/daringbadi' },
  { src: '/destination-window-3.png', name: 'Konark', link: '/destination/konark' },
  { src: '/destination-window-4.png', name: 'Dhauli', link: '/destination/dhauli' },
  { src: '/destination-window-5.png', name: 'Nandan Kanan', link: '/destination/nandan-kanan' },
  { src: '/destination-window-6.png', name: 'Satapada', link: '/destination/satapada' },
];

function formatLink(link, slug) {
  if (!link) {
    return slug ? `/package/${slug}` : '/packages';
  }
  // If it's a full URL to jaganathholidays domain, convert to relative path for instant client-side transitions
  if (link.includes('jaganathholidays.vercel.app') || link.includes('jaganathholidays.com')) {
    try {
      const url = new URL(link);
      return url.pathname + url.search;
    } catch {
      return link.replace(/^https?:\/\/[^/]+/, '') || '/';
    }
  }
  return link;
}

export default async function DestinationsWindows({ initialItems = null } = {}) {
  let rawItems = initialItems;

  if (!rawItems) {
    rawItems = await getBannerItems();
  }

  let baseImages = [];
  if (Array.isArray(rawItems) && rawItems.length > 0) {
    baseImages = rawItems.map((item, index) => {
      const itemData = item.data || {};
      const name = item.title || itemData.title || 'Destination';
      const slug = item.slug || itemData.slug || name.toLowerCase().replace(/\s+/g, '-');
      const fallbackSrc = `/destination-window-${(index % 6) + 1}.png`;
      const src = getImageUrl(itemData.image?.file_path || itemData.image, fallbackSrc);
      const link = formatLink(itemData.link, slug);

      return {
        id: item.id || item._id || index,
        name,
        src,
        link,
      };
    });
  }

  if (baseImages.length === 0) {
    baseImages = fallbackWindows;
  }

  // To ensure the marquee has enough items to fill screens and loop seamlessly,
  // we repeat the set before duplicating for the 50% CSS translation loop.
  const loopSet = baseImages.length < 6 ? [...baseImages, ...baseImages] : baseImages;
  const allImages = [...loopSet, ...loopSet];

  return (
    <section className={styles.windowsSection}>
      <div className={styles.windowsContainer}>
        <div className={styles.marqueeTrack}>
          {allImages.map((dest, index) => {
            return (
              <Link
                key={`${dest.id || dest.name}-${index}`}
                href={dest.link}
                className={styles.slideItem}
              >
                <div
                  className={styles.windowFrame}
                  style={{ animationDelay: `${0.1 + ((index % baseImages.length) * 0.15)}s` }}
                >
                  <img
                    src={dest.src}
                    alt={dest.name}
                    className={styles.image}
                    loading="lazy"
                  />
                  <h4 className={styles.destName}>{dest.name}</h4>
                </div>
              </Link>
            );
          })}
        </div>
      </div>
    </section>
  );
}
