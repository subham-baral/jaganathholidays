import BreadcrumbBanner from '@/components/BreadcrumbBanner';
import BlogDetailsContent from '@/components/BlogDetailsContent';

export default function BlogDetailsPage() {
  const breadcrumbs = [
    { label: 'Home', link: '/' },
    { label: 'Blogs', link: '/blogs' },
    { label: 'Blog Details' }
  ];

  return (
    <main>
      <BreadcrumbBanner 
        title="Blog Details" 
        breadcrumbs={breadcrumbs} 
        bgImage="/jaganath-banner.webp"
      />
      <BlogDetailsContent />
    </main>
  );
}
