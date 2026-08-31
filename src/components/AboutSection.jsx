import styles from './AboutSection.module.css';
import AnimatedButton from './AnimatedButton';
import Link from 'next/link';

/* ── Sub-components ──────────────────────────────────── */

function SectionLabel({ children }) {
  return <h4 className={styles.subheading}>{children}</h4>;
}

function SectionHeading({ children }) {
  return <h2 className={styles.heading}>{children}</h2>;
}

function AboutText() {
  return (
    <>
      <p className={styles.paragraph}>
        Jagannath Holidays believes that a refreshing getaway is the perfect way to escape the
        demands of everyday life. Planning a trip can often feel overwhelming, but our experienced
        team is here to make your journey seamless, comfortable, and unforgettable. With carefully
        crafted tour packages, personalized itineraries, reliable reservation services, and
        competitive pricing, we cater to travelers from across the globe who wish to explore the
        beauty and culture of Odisha.
      </p>
      <p className={styles.paragraph}>
        Since our establishment, Jagannath Holidays has been dedicated to providing reliable
        and professional travel services to travelers across India and around the world. Based in
        Bhubaneswar, Odisha, we specialize in delivering a wide range of B2B and B2C travel
        solutions, offering personalized assistance and exceptional customer support.
      </p>
    </>
  );
}

function AboutImage() {
  return (
    <div className={styles.imageColumn}>
      <div className={styles.imageWrapper}>
        <img
          src="/360-view-new.webp"
          alt="Jagannath Holidays 360 View"
          className={styles.collageImage}
        />
      </div>
    </div>
  );
}

/* ── Main Component ──────────────────────────────────── */

export default function AboutSection() {
  return (
    <section className={styles.aboutSection}>
      <div className={styles.container}>

        {/* Left — Content */}
        <div className={styles.contentColumn}>
          <SectionLabel>Our Story</SectionLabel>
          <SectionHeading>About Jagannath Holidays</SectionHeading>
          <AboutText />
          <Link href="/about">
            <AnimatedButton>Read More</AnimatedButton>
          </Link>
        </div>

        {/* Right — Image */}
        <AboutImage />

      </div>
    </section>
  );
}
