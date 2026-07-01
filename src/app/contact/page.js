import BreadcrumbBanner from '@/components/BreadcrumbBanner';
import ContactSection from '@/components/ContactSection';

export default function ContactPage() {
  const breadcrumbs = [
    { label: 'Home', link: '/' },
    { label: 'Contact Us' }
  ];

  return (
    <main>
      <BreadcrumbBanner 
        title="Contact Us" 
        breadcrumbs={breadcrumbs} 
        bgImage="/jaganath-banner.webp"
      />
      <ContactSection />
    </main>
  );
}
