import BreadcrumbBanner from '@/components/BreadcrumbBanner';
import BookNowForm from '@/components/BookNowForm';
import BookNowFaq from '@/components/BookNowFaq';
import RecognizedSection from '@/components/RecognizedSection';
import { getPackagesList, getVehiclesList } from '@/lib/api';

export const metadata = {
  title: 'Book Now | Jagannath Holidays - Custom Odisha Tour Packages',
  description: 'Book your Odisha tour package or luxury vehicle rental with Jagannath Holidays. Instant confirmation, best price guarantee, and 100% customizable itineraries.',
};

export default async function BookNowPage({ searchParams }) {
  // Fetch dynamic CMS data for packages and vehicles
  const cmsPackages = await getPackagesList(100);
  const cmsVehicles = await getVehiclesList();

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
      <BookNowForm 
        cmsPackages={cmsPackages}
        cmsVehicles={cmsVehicles}
        initialPackage={searchParams?.package || searchParams?.slug || ''}
        initialVehicle={searchParams?.vehicle || ''}
      />
      <RecognizedSection />
      <BookNowFaq />
    </main>
  );
}
