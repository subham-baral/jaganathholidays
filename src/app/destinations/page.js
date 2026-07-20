import BreadcrumbBanner from '@/components/BreadcrumbBanner';
import DestinationsList from '@/components/DestinationsList';

export default async function DestinationsPage({ searchParams }) {
  const breadcrumbs = [
    { label: 'Home', href: '/' },
    { label: 'Destinations' }
  ];

  return (
    <main>
      <BreadcrumbBanner 
        title="Our Destinations" 
        breadcrumbs={breadcrumbs} 
        bgImage="/loved-destination-1.png"
      />
      <DestinationsList searchParams={searchParams} />
    </main>
  );
}
