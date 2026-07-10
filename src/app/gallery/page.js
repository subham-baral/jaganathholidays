import BreadcrumbBanner from '@/components/BreadcrumbBanner';
import FullGallery from '@/components/FullGallery';

export default function GalleryPage() {
  const breadcrumbs = [
    { label: 'Home', link: '/' },
    { label: 'Gallery' }
  ];

  return (
    <main>
      <BreadcrumbBanner 
        title="Image Gallery" 
        breadcrumbs={breadcrumbs} 
        bgImage="/jaganath-banner.webp"
      />
      <FullGallery />
    </main>
  );
}
