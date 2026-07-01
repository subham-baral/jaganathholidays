import Link from 'next/link';
import { FiChevronRight } from 'react-icons/fi';
import styles from './BreadcrumbBanner.module.css';

export default function BreadcrumbBanner({ title, breadcrumbs, bgImage = '/jaganath-banner.webp' }) {
  return (
    <section className={styles.bannerSection} style={{ backgroundImage: `url(${bgImage})` }}>
      <div className={styles.overlay}></div>
      <div className={styles.container}>
        <h1 className={styles.title}>{title}</h1>
        
        <nav className={styles.breadcrumbNav}>
          <ul className={styles.breadcrumbList}>
            {breadcrumbs.map((crumb, index) => (
              <li key={index} className={styles.breadcrumbItem}>
                {crumb.link ? (
                  <Link href={crumb.link} className={styles.breadcrumbLink}>
                    {crumb.label}
                  </Link>
                ) : (
                  <span className={styles.breadcrumbCurrent}>{crumb.label}</span>
                )}
                
                {index < breadcrumbs.length - 1 && (
                  <FiChevronRight className={styles.separator} />
                )}
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </section>
  );
}
