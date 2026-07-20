import BreadcrumbBanner from '@/components/BreadcrumbBanner';
import PackageFeatures from '@/components/PackageFeatures';
import TourPackagesSection from '@/components/TourPackagesSection';

export async function generateMetadata({ params }) {
  const { slug } = await params;
  const destinationName = slug.charAt(0).toUpperCase() + slug.slice(1);
  return {
    title: `${destinationName} Tour Packages | Jagannath Holidays`,
    description: `Explore our wide range of tour packages for ${destinationName}.`,
  };
}

export default async function DestinationPage({ params, searchParams }) {
  const { slug } = await params;
  const destinationName = slug.charAt(0).toUpperCase() + slug.slice(1);

  const breadcrumbs = [
    { label: 'Home', link: '/' },
    { label: 'Tour Packages', link: '/packages' },
    { label: `${destinationName} Tours` }
  ];

  return (
    <main>
      <BreadcrumbBanner 
        title={`${destinationName} Tour Packages`} 
        breadcrumbs={breadcrumbs} 
        bgVideo="/videos/road.mp4"
      />
      <TourPackagesSection 
        searchParams={searchParams} 
        routeParams={params}
        pageType="destination"
      />
      <PackageFeatures />
    </main>
  );
}