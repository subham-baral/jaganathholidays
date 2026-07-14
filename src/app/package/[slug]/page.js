import DestinationDetailsBanner from '@/components/DestinationDetailsBanner';
import DestinationDetailsContent from '@/components/DestinationDetailsContent';
import DestinationWhatToExpect from '@/components/DestinationWhatToExpect';
import DestinationItinerary from '@/components/DestinationItinerary';
import DestinationGallery from '@/components/DestinationGallery';
import DestinationRelatedTours from '@/components/DestinationRelatedTours';
import TestimonialsSection from '@/components/TestimonialsSection';
import FaqSection from '@/components/FaqSection';

export default function PackageDetailsPage() {
  return (
    <main>
      <DestinationDetailsBanner />
      <DestinationDetailsContent />
      <DestinationWhatToExpect />
      <DestinationItinerary />
      <DestinationGallery />
      <DestinationRelatedTours />
      <TestimonialsSection />
      <FaqSection />
    </main>
  );
}
