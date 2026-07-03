import BreadcrumbBanner from '@/components/BreadcrumbBanner';
import PackageDetailsBanner from '@/components/PackageDetailsBanner';
import PackageDetailsContent from '@/components/PackageDetailsContent';
import PackageItinerary from '@/components/PackageItinerary';
import DestinationGallery from '@/components/DestinationGallery';
import PackageGrid from '@/components/PackageGrid';

export default function PackageDetailsPage() {
  const breadcrumbs = [
    { label: 'Home', link: '/' },
    { label: 'Tour Packages', link: '/packages' },
    { label: 'Premium Puri Gangasagar Tour Package' }
  ];

  return (
    <main>
      <BreadcrumbBanner 
        title="Package Details" 
        breadcrumbs={breadcrumbs} 
        bgImage="/jaganath-banner.webp"
      />
      <PackageDetailsBanner />
      <PackageDetailsContent />
      <PackageItinerary />
      <DestinationGallery />
      <PackageGrid title="Related Packages" subtitle="Discover more" limit={3} />
    </main>
  );
}
