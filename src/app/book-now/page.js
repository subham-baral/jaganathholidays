import BreadcrumbBanner from '@/components/BreadcrumbBanner';
import BookNowForm from '@/components/BookNowForm';
import BookNowFaq from '@/components/BookNowFaq';
import RecognizedSection from '@/components/RecognizedSection';

export const metadata = {
  title: 'Book Now | Jagannath Holidays - Custom Odisha Tour Packages',
  description: 'Book your Odisha tour package or luxury vehicle rental with Jagannath Holidays. Instant confirmation, best price guarantee, and 100% customizable itineraries.',
};

export default function BookNowPage() {
  const breadcrumbs = [
    { label: 'Home', link: '/' },
    { label: 'Book Now' }
  ];

  return (
    <main>
      <BreadcrumbBanner 
        title="Book Your Odisha Holiday" 
        breadcrumbs={breadcrumbs} 
        bgVideo="/videos/road.mp4"
      />
      <BookNowForm />
      <RecognizedSection />
      <BookNowFaq />
    </main>
  );
}
