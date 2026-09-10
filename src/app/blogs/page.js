import BreadcrumbBanner from '@/components/BreadcrumbBanner';
import BlogList from '@/components/BlogList';

export default async function BlogsPage({ searchParams }) {
  const resolvedSearchParams = await searchParams;
  const page = Number(resolvedSearchParams?.page) || 1;

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
      <BlogList page={page} />
    </main>
  );
}
