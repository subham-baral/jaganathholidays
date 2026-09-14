import { FiCompass, FiHome, FiPackage } from 'react-icons/fi';
import styles from './not-found.module.css';
import AnimatedButton from '@/components/AnimatedButton';

export const metadata = {
  title: '404 - Page Not Found | Jagannath Holidays',
  description: 'The page you are looking for does not exist. Explore our popular Odisha tour packages, destinations, or return home.',
};

export default function NotFound() {
  return (
    <main className={styles.notFoundSection}>
      <div className={styles.container}>
        
        {/* Animated Visual Card */}
        <div className={styles.visualWrapper}>
          <div className={styles.glowCircle}></div>
          <div className={styles.numberBadge}>
            <span className={styles.numFour}>4</span>
            <div className={styles.compassWrapper}>
              <FiCompass className={styles.compassIcon} />
            </div>
            <span className={styles.numFour}>4</span>
          </div>
        </div>

        {/* Text Header */}
        <h1 className={styles.title}>Lost Your Way in Odisha?</h1>
        <p className={styles.description}>
          Oops! The page you are looking for seems to have taken a detour. It might have been moved, renamed, or no longer exists.
        </p>

        {/* Primary Action Buttons */}
        <div className={styles.actionButtons}>
          <AnimatedButton href="/">
            <FiHome style={{ marginRight: '8px', fontSize: '18px', verticalAlign: 'middle' }} /> BACK TO HOME
          </AnimatedButton>
          <AnimatedButton href="/packages">
            <FiPackage style={{ marginRight: '8px', fontSize: '18px', verticalAlign: 'middle' }} /> VIEW TOUR PACKAGES
          </AnimatedButton>
        </div>
      </div>
    </main>
  );
}
