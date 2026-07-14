import BreadcrumbBanner from '@/components/BreadcrumbBanner';
import PackageFeatures from '@/components/PackageFeatures';
import PackageGrid from '@/components/PackageGrid';

export const metadata = {
  title: 'Tour Packages | Jagannath Holidays',
  description: 'Explore our wide range of tour packages for Odisha, Puri, and beyond.',
};

export default function PackagesPage() {
  const breadcrumbs = [
    { label: 'Home', link: '/' },
    { label: 'Tour Packages' }
  ];

  return (
    <main>
      <BreadcrumbBanner 
        title="Tour Packages" 
        breadcrumbs={breadcrumbs} 
        bgImage="/jaganath-banner.webp"
        bgVideo="/videos/road.mp4"
      />
      <PackageFeatures />
      <PackageGrid />
    </main>
  );
}
