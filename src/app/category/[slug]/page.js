import BreadcrumbBanner from '@/components/BreadcrumbBanner';
import PackageFeatures from '@/components/PackageFeatures';
import TourPackagesSection from '@/components/TourPackagesSection';

export async function generateMetadata({ params }) {
  const { slug } = await params;
  const categoryName = slug.charAt(0).toUpperCase() + slug.slice(1);
  return {
    title: `${categoryName} Tour Packages | Jagannath Holidays`,
    description: `Explore our wide range of ${categoryName} tour packages.`,
  };
}

export default async function CategoryPage({ params, searchParams }) {
  const { slug } = await params;
  const categoryName = slug.charAt(0).toUpperCase() + slug.slice(1);

  const breadcrumbs = [
    { label: 'Home', link: '/' },
    { label: 'Tour Packages', link: '/packages' },
    { label: `${categoryName} Tours` }
  ];

  return (
    <main>
      <BreadcrumbBanner 
        title={`${categoryName} Tour Packages`} 
        breadcrumbs={breadcrumbs} 
        bgVideo="/videos/road.mp4"
      />
      <TourPackagesSection 
        searchParams={searchParams} 
        routeParams={params}
        pageType="category"
      />
      <PackageFeatures />
    </main>
  );
}