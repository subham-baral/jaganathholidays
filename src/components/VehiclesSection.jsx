import { getVehiclesList, getImageUrl } from '@/lib/api';
import VehiclesSlider from './VehiclesSlider';
import styles from './VehiclesSection.module.css';

/* ── Fallback Data with multiple photos ── */
const fallbackVehicles = [

];

/* ── Sub-components ── */
function VehicleHeader() {
  return (
    <div className={styles.header}>
      <span className={styles.pretitle}>Premium Fleet</span>
      <h2 className={styles.heading}>Our Vehicles to Travel</h2>
    </div>
  );
}

/* ── Data mapping helper ── */
function mapVehicleData(items) {
  if (!Array.isArray(items) || items.length === 0) {
    return fallbackVehicles;
  }

  return items.map((item, index) => {
    const vData = item.data || {};

    // Extract fuel type from terms
    const fuelTerm = item.terms?.find(
      (t) =>
        t.taxonomy?.slug === 'fuel-type' ||
        t.taxonomy?.name?.toLowerCase().includes('fuel')
    );

    const seatingCapacity = vData.seating_capacity || 4;
    const capacity = `${seatingCapacity} Seater`;
    const seats = `${seatingCapacity} Seats`;

    const luggageCount =
      vData.luggage !== undefined && vData.luggage !== null
        ? `${vData.luggage} Bags`
        : '4 Bags';

    const ac =
      vData.air_conditioning !== false ? 'AC Available' : 'Non-AC';

    const driveOrFuel =
      fuelTerm?.name || (vData.airbag ? 'Airbags' : 'Manual');

    // Extract photos / images
    const rawPhotos = vData.photos || item.photos || vData.gallery || vData.images;
    let imagesList = [];

    if (Array.isArray(rawPhotos) && rawPhotos.length > 0) {
      imagesList = rawPhotos
        .map((p) => getImageUrl(p?.file_path || p?.url || p))
        .filter(Boolean);
    }

    if (vData.cover_image) {
      const coverUrl = getImageUrl(vData.cover_image?.file_path || vData.cover_image);
      if (coverUrl && !imagesList.includes(coverUrl)) {
        imagesList.unshift(coverUrl);
      }
    }

    if (imagesList.length === 0) {
      imagesList = [`https://picsum.photos/600/400?random=${60 + index}`];
    }

    return {
      id: item.id || item._id || index,
      title: item.title || vData.title || 'Vehicle',
      capacity,
      specs: {
        seats,
        luggage: luggageCount,
        ac,
        drive: driveOrFuel,
      },
      image: imagesList[0],
      images: imagesList,
    };
  });
}

/* ── Main Component ── */
export default async function VehiclesSection({ initialVehicles = null } = {}) {
  let rawVehicles = initialVehicles;

  if (!rawVehicles) {
    rawVehicles = await getVehiclesList();
  }

  const vehicles = mapVehicleData(rawVehicles);

  return (
    <section className={styles.vehicleSection}>
      <div className={styles.container}>
        <VehicleHeader />
        <VehiclesSlider vehicles={vehicles} />
      </div>
    </section>
  );
}
