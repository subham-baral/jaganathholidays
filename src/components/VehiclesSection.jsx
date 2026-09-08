import { getVehiclesList, getImageUrl } from '@/lib/api';
import VehiclesSlider from './VehiclesSlider';
import styles from './VehiclesSection.module.css';

/* ── Fallback Data ── */
const fallbackVehicles = [
  {
    title: "Tempo Traveller",
    capacity: "13+1 Seater",
    specs: {
      seats: "13+1 Seats",
      luggage: "6 Bags",
      ac: "Dual AC",
      drive: "Manual"
    },
    image: "https://picsum.photos/400/250?random=60"
  },
  {
    title: "Force Urbania",
    capacity: "10 Seater",
    specs: {
      seats: "10 Seats",
      luggage: "5 Bags",
      ac: "Roof AC",
      drive: "Manual"
    },
    image: "https://picsum.photos/400/250?random=61"
  },
  {
    title: "SML Coach Bus",
    capacity: "17 Seater",
    specs: {
      seats: "17 Seats",
      luggage: "10 Bags",
      ac: "Cabin AC",
      drive: "Manual"
    },
    image: "https://picsum.photos/400/250?random=62"
  },
  {
    title: "Innova Crysta",
    capacity: "7 Seater",
    specs: {
      seats: "7 Seats",
      luggage: "3 Bags",
      ac: "Auto AC",
      drive: "Auto/Manual"
    },
    image: "https://picsum.photos/400/250?random=63"
  },
  {
    title: "Toyota Fortuner",
    capacity: "7 Seater",
    specs: {
      seats: "7 Seats",
      luggage: "3 Bags",
      ac: "All-Row AC",
      drive: "4x4 Auto"
    },
    image: "https://picsum.photos/400/250?random=64"
  }
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

    const image = getImageUrl(
      vData.cover_image?.file_path || vData.cover_image,
      `https://picsum.photos/400/250?random=${60 + index}`
    );

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
      image,
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
