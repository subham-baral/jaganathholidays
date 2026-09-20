import Banner from "@/components/Banner";
import DestinationsWindows from "@/components/DestinationsWindows";
import AboutSection from "@/components/AboutSection";
import LovedDestinations from "@/components/LovedDestinations";
import HoneymoonSection from "@/components/HoneymoonSection";
import PopularTourPackages from "@/components/PopularTourPackages";
import FeaturesSection from "@/components/FeaturesSection";
import VehiclesSection from "@/components/VehiclesSection";
import AccommodationsSection from "@/components/AccommodationsSection";
import EcoRetreatSection from "@/components/EcoRetreatSection";
import NewsSection from "@/components/NewsSection";
import FaqSection from "@/components/FaqSection";
import TestimonialsSection from "@/components/TestimonialsSection";
import { getDestinationsTaxonomy } from "@/lib/api";

async function fetchReviews() {
  try {
    const res = await fetch(`${process.env.CMS_API_URL || 'https://cmsapi.one9ty.com'}/api/v1/delivery/contents/show`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${process.env.CMS_TOKEN || '141|PLIcQEisrq76oVJH35rTn3CqkZWZ6xaCSwNDWCiw2ea64d79'}`
      },
      body: JSON.stringify({
        slug: "reviews",
        content_type: "reviews"
      }),
      next: { revalidate: 0 }
    });

    const result = await res.json();

    // Response shape: { success, data: { ...meta, data: { reviews: [{name, rating, content}] } } }
    const reviews = result?.data?.data?.reviews;

    if (Array.isArray(reviews) && reviews.length > 0) {
      return reviews.map((item, index) => ({
        id: index,
        name: item.name || 'Customer',
        rating: item.rating || 5,
        text: item.content || ''
      }));
    }
  } catch (error) {
    console.error("Error fetching reviews:", error);
  }
  return [];
}

export default async function Home() {
  const [reviewsData, destinationsData] = await Promise.all([
    fetchReviews(),
    getDestinationsTaxonomy(),
  ]);

  return (
    <main>
      <Banner />
      <DestinationsWindows />
      <AboutSection />
      <LovedDestinations destinations={destinationsData} />
      <HoneymoonSection />
      <PopularTourPackages />
      <FeaturesSection />
      <VehiclesSection />
      <AccommodationsSection />
      <EcoRetreatSection />
      <NewsSection />
      <TestimonialsSection reviewsData={reviewsData} />
      <FaqSection />
      {/* <TeamSection /> */}
    </main>
  );
}
