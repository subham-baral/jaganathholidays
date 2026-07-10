import BreadcrumbBanner from '@/components/BreadcrumbBanner';
import BlogList from '@/components/BlogList';

export default function BlogsPage() {
  const breadcrumbs = [
    { label: 'Home', link: '/' },
    { label: 'Blogs' }
  ];

  return (
    <main>
      <BreadcrumbBanner 
        title="Our Latest Blogs" 
        breadcrumbs={breadcrumbs} 
        bgImage="/jaganath-banner.webp"
      />
      <BlogList />
    </main>
  );
}
