import { FiClock } from 'react-icons/fi';
import styles from './DestinationItinerary.module.css';

export default function DestinationItinerary() {
  const itineraryData = [
    {
      day: "Day 1",
      title: "Arrival at Bhubaneswar > Puri Local Sightseeing > Puri Stay",
      description: "Arrival at Bhubaneswar Railway Station/Airport in the morning time 00.00 AM, then meets and greets our Tour Executive. Then transfer to Hotel check in Puri. After Refreshment, then proceeds to visit Govardhan Math is one of the four cardinal Pithams established by Adi Shankaracharya, Lord of Universe Jagannath Temple Darshan, Narendra Pokhari, Markandeshwara Temple, Bedi Hanuman, Mata Matha and 108 Shiva Temple. Then Back to Hotel Puri. After refreshment if you have free time for shopping activity at Golden Beach in Evening, Overnight Stay at Puri."
    },
    {
      day: "Day 2",
      title: "Puri > Lord of Universe Jagannath Darshan > Chilka Lake Sightseeing > Puri Stay",
      description: "The morning after breakfast at 8.00 A.M proceed to visit Chilika Lake on Satpada - The Largest Ramsar Site in Asia. Cruise to Sea-Mouth viewing Rare Irrawaddy Dolphins and Rajhans Island, Allarnath Temple, then back to Puri and visit Lord of Universe Jagannath Evening Arti Darshan in Temple, then come back and Overnight Stay at Puri."
    },
    {
      day: "Day 3",
      title: "Puri > Konark Sun Temple Sightseeing > Bhubaneswar Stay",
      description: "The morning after breakfast check out from hotel at 8.00 A.M and proceed to konark en-route covering Sonar Gouranga Temple, Enjoy 25 KM Marine Drive, Ramachandi Temple, Chandrabhaga Sea Beach, Then Excursion to UNESCO World Heritage Site Konark Sun Temple Known as (Black Pagoda), Pipili Applique Village, 64 Yogini Tantra Pitha, Dhauli Buddhist Heritage (Peace Pagoda), Ashoka Rock Edicts Then Back to Hotel check in Bhubaneswar. After refreshment if you have free time for shopping activity at in Evening, Overnight Stay at Bhubaneswar."
    },
    {
      day: "Day 4",
      title: "Bhubaneswar > Bhubaneswar Local Sightseeing > Over Night Journey Kolkata",
      description: "The morning after breakfast check out from hotel at 8:00 AM and Udayagiri and Khandagiri Caves, Iskon Temple. Then Visit to Temple Famous Lord Lingaraj, Rajarani, Mukteswar, Kedar Gouri, Rajarani, Ram Mandir, , to Nandankanan Zoogical Park, Udayagiri and Khandagiri Caves, after sightseeing drop at Bhubaneshwar Bus stand in the evening for your further journey to your Kolkata destination."
    }
  ];

  return (
    <section id="tour-itinerary" className={styles.itinerarySection}>
      <div className={styles.container}>
        <h2 className={styles.sectionTitle}>Tour Itinerary</h2>
        
        <div className={styles.timeline}>
          {itineraryData.map((item, index) => (
            <div key={index} className={styles.timelineItem}>
              {/* Left Side: Day Circle */}
              <div className={styles.timelineIndicator}>
                <div className={styles.dayCircle}>{item.day}</div>
                {/* Don't draw the line after the last item */}
                {index !== itineraryData.length - 1 && <div className={styles.timelineLine}></div>}
              </div>

              {/* Right Side: Content Box */}
              <div className={styles.timelineContent}>
                <div className={styles.contentHeader}>
                  <h3 className={styles.contentTitle}>{item.title}</h3>
                  <div className={styles.timeTag}>
                    <FiClock className={styles.clockIcon} /> {item.day}
                  </div>
                </div>
                <p className={styles.description}>{item.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
