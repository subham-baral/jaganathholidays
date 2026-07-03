import BreadcrumbBanner from '@/components/BreadcrumbBanner';
import AboutStory from '@/components/AboutStory';
import VisionMissionSection from '@/components/VisionMissionSection';
import WhyChooseUs from '@/components/WhyChooseUs';
import LovedDestinations from '@/components/LovedDestinations';
import TestimonialsSection from '@/components/TestimonialsSection';
import StatsSection from '@/components/StatsSection';

export default function AboutPage() {
  const breadcrumbs = [
    { label: 'Home', link: '/' },
    { label: 'About Us' }
  ];

  return (
    <main>
      <BreadcrumbBanner 
        title="About Us" 
        breadcrumbs={breadcrumbs} 
        bgImage="/jaganath-banner.webp"
      />
     
      <AboutStory />
      <VisionMissionSection />
      <WhyChooseUs />
       <StatsSection />
      <LovedDestinations />
      <TestimonialsSection />
    </main>
  );
}
