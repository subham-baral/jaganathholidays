"use client";

import { useState, useMemo } from 'react';
import { 
  FiUser, 
  FiMail, 
  FiPhone, 
  FiCalendar, 
  FiUsers, 
  FiMessageSquare, 
  FiCheckCircle, 
  FiSend, 
  FiMapPin, 
  FiShield, 
  FiClock, 
  FiHeadphones,
  FiAward
} from 'react-icons/fi';
import styles from './BookNowForm.module.css';

// Pre-defined fallback tour packages
const FALLBACK_PACKAGES = [
  { id: 'puri-gangasagar-tour-packages', label: 'Puri Gangasagar Tour Package', days: '05 Nights / 06 Days' },
  { id: 'golden-triangle-tour-of-odisha', label: 'Golden Triangle Tour of Odisha (Puri - Konark - Bhubaneswar)', days: '02 Nights / 03 Days' },
  { id: 'odisha-adventure-tour-packages', label: 'Odisha Adventure & Wildlife Tour', days: '08 Nights / 10 Days' },
  { id: 'odisha-tribal-tour-package', label: 'Odisha Tribal Culture & Heritage Tour', days: '06 Nights / 07 Days' },
  { id: 'gopalpur-beach-tour-package', label: 'Gopalpur Beach & Chilika Lake Retreat', days: '04 Nights / 05 Days' },
  { id: 'daringbadi-hill-station-tour', label: 'Daringbadi Hill Station Tour', days: '04 Nights / 05 Days' },
  { id: 'odisha-eco-retreat-special', label: 'Odisha Eco-Retreat Luxury Experience', days: '03 Nights / 04 Days' },
  { id: 'honeymoon-special-odisha', label: 'Romantic Odisha Honeymoon Package', days: '05 Nights / 06 Days' },
  { id: 'cab-rental-only', label: 'Cab / Vehicle Rental Service Only', days: 'Custom Days' },
  { id: 'custom-tailor-made', label: 'Custom Tailor-Made Itinerary', days: 'Flexible' }
];

// Pre-defined fallback vehicles
const FALLBACK_VEHICLES = [
  { id: 'swift-dzire-etios', label: 'Sedan (Swift Dzire / Etios) - 4 Seater AC' },
  { id: 'innova-crysta', label: 'SUV (Innova Crysta) - 6+1 Seater Luxury AC' },
  { id: 'ertiga-marazzo', label: 'MUV (Ertiga / Marazzo) - 6 Seater AC' },
  { id: 'tempo-traveller-13', label: 'Tempo Traveller - 13+1 Seater Luxury AC' },
  { id: 'tempo-traveller-17', label: 'Tempo Traveller - 17+1 Seater Luxury AC' },
  { id: 'force-urbania', label: 'Force Urbania - 10/13 Seater Premium AC' },
  { id: 'sml-luxury-bus', label: 'SML Coach Bus - 17/26 Seater AC' }
];

// Dynamic accommodation classes
const HOTEL_CATEGORIES = [
  { id: '3-star', label: 'Standard (3-Star Deluxe Hotels)' },
  { id: '4-star', label: 'Premium (4-Star Resorts & Star Hotels)' },
  { id: '5-star-luxury', label: 'Luxury (5-Star / Luxury Eco-Resorts)' },
  { id: 'heritage-homestay', label: 'Heritage Properties & Eco-Tents' },
  { id: 'budget', label: 'Budget (2-Star / Clean Guest Houses)' },
  { id: 'none', label: 'No Accommodation Required (Only Cabs / Sightseeing)' }
];

export default function BookNowForm({ 
  cmsPackages = [], 
  cmsVehicles = [], 
  initialPackage = '', 
  initialVehicle = '' 
}) {

  // Dynamically build tour options by combining CMS items + fallbacks
  const tourOptions = useMemo(() => {
    const cmsOptions = cmsPackages.map(pkg => {
      const title = pkg.title || pkg.name || 'Tour Package';
      const days = pkg.duration || pkg.days || (pkg.nights ? `${pkg.nights} Nights` : 'Custom Days');
      const slug = pkg.slug || title.toLowerCase().replace(/[^a-z0-9]+/g, '-');
      return { id: slug, label: title, days };
    });

    const combined = [...cmsOptions];
    FALLBACK_PACKAGES.forEach(fb => {
      if (!combined.some(item => item.id === fb.id || item.label.toLowerCase() === fb.label.toLowerCase())) {
        combined.push(fb);
      }
    });

    return combined;
  }, [cmsPackages]);

  // Dynamically build vehicle options by combining CMS items + fallbacks
  const vehicleOptions = useMemo(() => {
    const cmsVehicleItems = cmsVehicles.map(veh => {
      const title = veh.title || veh.name || 'Vehicle Rental';
      const capacity = veh.capacity ? ` - ${veh.capacity}` : ' AC Cab';
      const slug = veh.slug || title.toLowerCase().replace(/[^a-z0-9]+/g, '-');
      return { id: slug, label: `${title}${capacity}` };
    });

    const combined = [...cmsVehicleItems];
    FALLBACK_VEHICLES.forEach(fb => {
      if (!combined.some(item => item.id === fb.id || item.label.toLowerCase().includes(fb.id))) {
        combined.push(fb);
      }
    });

    return combined;
  }, [cmsVehicles]);

  // Default selection (with support for pre-selection via URL searchParams)
  const defaultPackageId = useMemo(() => {
    if (initialPackage) {
      const match = tourOptions.find(t => t.id === initialPackage || t.id.includes(initialPackage));
      if (match) return match.id;
    }
    return tourOptions[0]?.id || FALLBACK_PACKAGES[0].id;
  }, [initialPackage, tourOptions]);

  const defaultVehicleId = useMemo(() => {
    if (initialVehicle) {
      const match = vehicleOptions.find(v => v.id === initialVehicle || v.id.includes(initialVehicle));
      if (match) return match.id;
    }
    return vehicleOptions[0]?.id || FALLBACK_VEHICLES[0].id;
  }, [initialVehicle, vehicleOptions]);

  const [formData, setFormData] = useState({
    tourType: defaultPackageId,
    hotelCategory: '3-star',
    vehicleCategory: defaultVehicleId,
    startDate: '',
    adults: 2,
    children: 0,
    fullName: '',
    email: '',
    phone: '',
    whatsapp: '',
    city: '',
    specialNotes: ''
  });

  const [isSubmitted, setIsSubmitted] = useState(false);
  const [validated, setValidated] = useState(false);
  const [bookingRef, setBookingRef] = useState('');

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const form = e.currentTarget;

    if (form.checkValidity() === false) {
      e.stopPropagation();
      setValidated(true);
      return;
    }

    const randomRef = 'JH-' + Math.floor(100000 + Math.random() * 900000);
    setBookingRef(randomRef);
    setIsSubmitted(true);
    setValidated(false);
  };

  // Currently selected items for live summary
  const selectedTour = tourOptions.find(t => t.id === formData.tourType) || tourOptions[0];
  const selectedHotel = HOTEL_CATEGORIES.find(h => h.id === formData.hotelCategory) || HOTEL_CATEGORIES[0];
  const selectedVehicle = vehicleOptions.find(v => v.id === formData.vehicleCategory) || vehicleOptions[0];

  const resetForm = () => {
    setIsSubmitted(false);
    setFormData({
      tourType: defaultPackageId,
      hotelCategory: '3-star',
      vehicleCategory: defaultVehicleId,
      startDate: '',
      adults: 2,
      children: 0,
      fullName: '',
      email: '',
      phone: '',
      whatsapp: '',
      city: '',
      specialNotes: ''
    });
  };

  return (
    <section className={styles.bookingSection}>
      <div className={styles.container}>
        
        <div className={styles.bookingGrid}>
          
          {/* Form Left Side */}
          <div className={styles.formCard}>
            {isSubmitted ? (
              <div className={styles.successBox}>
                <div className={styles.successIconWrapper}>
                  <FiCheckCircle className={styles.successIcon} />
                </div>
                <span className={styles.refBadge}>Booking Reference: {bookingRef}</span>
                <h3 className={styles.successTitle}>Booking Request Received!</h3>
                <p className={styles.successDesc}>
                  Thank you, <strong>{formData.fullName}</strong>. Your customized booking request for <strong>{selectedTour?.label}</strong> has been successfully received.
                </p>
                <div className={styles.summaryDetailsBox}>
                  <h4>Booking Summary</h4>
                  <ul>
                    <li><strong>Selected Package / Service:</strong> {selectedTour?.label} ({selectedTour?.days})</li>
                    <li><strong>Accommodation Class:</strong> {selectedHotel?.label}</li>
                    <li><strong>Preferred Cab / Vehicle:</strong> {selectedVehicle?.label}</li>
                    <li><strong>Travel Date:</strong> {formData.startDate || 'To be decided'}</li>
                    <li><strong>Travelers:</strong> {formData.adults} Adults, {formData.children} Children</li>
                    <li><strong>Contact Phone:</strong> {formData.phone}</li>
                  </ul>
                </div>
                <p className={styles.calloutText}>
                  Our senior travel representative will review your request and call/WhatsApp you within 30 minutes with the complete itinerary & lowest pricing quote!
                </p>
                <button type="button" className={styles.newBookingBtn} onClick={resetForm}>
                  Submit Another Booking Request
                </button>
              </div>
            ) : (
              <form 
                noValidate 
                className={`${styles.form} ${validated ? styles.wasValidated : ''}`} 
                onSubmit={handleSubmit}
              >
                <div className={styles.formHeader}>
                  <h2 className={styles.formTitle}>Book Your Holiday Package</h2>
                  <p className={styles.formSub}>Fill out your travel preferences below for a customized quote & instant confirmation.</p>
                </div>

                {/* Section 1: Dynamic Selections */}
                <div className={styles.formGroupSection}>
                  <h3 className={styles.sectionHeader}>
                    <span className={styles.stepNum}>1</span> Select Tour, Cab & Hotel Class
                  </h3>

                  <div className={styles.inputGroup}>
                    <label className={styles.label}>Select Package / Service <span className={styles.req}>*</span></label>
                    <div className={styles.selectWrapper}>
                      <select 
                        name="tourType" 
                        value={formData.tourType} 
                        onChange={handleChange}
                        className={styles.select}
                        required
                      >
                        {tourOptions.map((tour) => (
                          <option key={tour.id} value={tour.id}>
                            {tour.label} {tour.days ? `— [${tour.days}]` : ''}
                          </option>
                        ))}
                      </select>
                    </div>
                  </div>

                  <div className={styles.rowTwo}>
                    <div className={styles.inputGroup}>
                      <label className={styles.label}>Preferred Vehicle / Cab <span className={styles.req}>*</span></label>
                      <select 
                        name="vehicleCategory" 
                        value={formData.vehicleCategory} 
                        onChange={handleChange}
                        className={styles.select}
                        required
                      >
                        {vehicleOptions.map((veh) => (
                          <option key={veh.id} value={veh.id}>{veh.label}</option>
                        ))}
                      </select>
                    </div>

                    <div className={styles.inputGroup}>
                      <label className={styles.label}>Accommodation Class <span className={styles.req}>*</span></label>
                      <select 
                        name="hotelCategory" 
                        value={formData.hotelCategory} 
                        onChange={handleChange}
                        className={styles.select}
                        required
                      >
                        {HOTEL_CATEGORIES.map((hotel) => (
                          <option key={hotel.id} value={hotel.id}>{hotel.label}</option>
                        ))}
                      </select>
                    </div>
                  </div>
                </div>

                {/* Section 2: Dates & Members */}
                <div className={styles.formGroupSection}>
                  <h3 className={styles.sectionHeader}>
                    <span className={styles.stepNum}>2</span> Travel Dates & Members
                  </h3>

                  <div className={styles.rowThree}>
                    <div className={styles.inputGroup}>
                      <label className={styles.label}>Start Date <span className={styles.req}>*</span></label>
                      <div className={styles.iconInputWrapper}>
                        <FiCalendar className={styles.inputIcon} />
                        <input 
                          type="date" 
                          name="startDate" 
                          value={formData.startDate} 
                          onChange={handleChange}
                          className={styles.input}
                          required
                        />
                      </div>
                    </div>

                    <div className={styles.inputGroup}>
                      <label className={styles.label}>Adults (12+ yrs) <span className={styles.req}>*</span></label>
                      <div className={styles.iconInputWrapper}>
                        <FiUsers className={styles.inputIcon} />
                        <input 
                          type="number" 
                          name="adults" 
                          min="1" 
                          max="50" 
                          value={formData.adults} 
                          onChange={handleChange}
                          className={styles.input}
                          required
                        />
                      </div>
                    </div>

                    <div className={styles.inputGroup}>
                      <label className={styles.label}>Children (below 12 yrs)</label>
                      <div className={styles.iconInputWrapper}>
                        <FiUsers className={styles.inputIcon} />
                        <input 
                          type="number" 
                          name="children" 
                          min="0" 
                          max="20" 
                          value={formData.children} 
                          onChange={handleChange}
                          className={styles.input}
                        />
                      </div>
                    </div>
                  </div>
                </div>

                {/* Section 3: Contact & Traveler Details */}
                <div className={styles.formGroupSection}>
                  <h3 className={styles.sectionHeader}>
                    <span className={styles.stepNum}>3</span> Contact & Traveler Details
                  </h3>

                  <div className={styles.rowTwo}>
                    <div className={styles.inputGroup}>
                      <label className={styles.label}>Full Name <span className={styles.req}>*</span></label>
                      <div className={styles.iconInputWrapper}>
                        <FiUser className={styles.inputIcon} />
                        <input 
                          type="text" 
                          name="fullName" 
                          placeholder="Your complete name" 
                          value={formData.fullName} 
                          onChange={handleChange}
                          className={styles.input}
                          required
                        />
                      </div>
                    </div>

                    <div className={styles.inputGroup}>
                      <label className={styles.label}>Email Address <span className={styles.req}>*</span></label>
                      <div className={styles.iconInputWrapper}>
                        <FiMail className={styles.inputIcon} />
                        <input 
                          type="email" 
                          name="email" 
                          placeholder="name@example.com" 
                          value={formData.email} 
                          onChange={handleChange}
                          className={styles.input}
                          required
                        />
                      </div>
                    </div>
                  </div>

                  <div className={styles.rowThree}>
                    <div className={styles.inputGroup}>
                      <label className={styles.label}>Phone Number <span className={styles.req}>*</span></label>
                      <div className={styles.iconInputWrapper}>
                        <FiPhone className={styles.inputIcon} />
                        <input 
                          type="tel" 
                          name="phone" 
                          placeholder="10-digit mobile number" 
                          value={formData.phone} 
                          onChange={handleChange}
                          className={styles.input}
                          required
                        />
                      </div>
                    </div>

                    <div className={styles.inputGroup}>
                      <label className={styles.label}>WhatsApp Number</label>
                      <div className={styles.iconInputWrapper}>
                        <FiPhone className={styles.inputIcon} />
                        <input 
                          type="tel" 
                          name="whatsapp" 
                          placeholder="WhatsApp number" 
                          value={formData.whatsapp} 
                          onChange={handleChange}
                          className={styles.input}
                        />
                      </div>
                    </div>

                    <div className={styles.inputGroup}>
                      <label className={styles.label}>Your City / Location</label>
                      <div className={styles.iconInputWrapper}>
                        <FiMapPin className={styles.inputIcon} />
                        <input 
                          type="text" 
                          name="city" 
                          placeholder="e.g. Kolkata, Delhi" 
                          value={formData.city} 
                          onChange={handleChange}
                          className={styles.input}
                        />
                      </div>
                    </div>
                  </div>

                  <div className={styles.inputGroup}>
                    <label className={styles.label}>Special Requirements or Customization Notes</label>
                    <div className={styles.iconInputWrapper}>
                      <FiMessageSquare className={`${styles.inputIcon} ${styles.textareaIcon}`} />
                      <textarea 
                        name="specialNotes" 
                        rows="3"
                        placeholder="Tell us about special places you want to visit, dietary choices, extra beds, or flight details..."
                        value={formData.specialNotes}
                        onChange={handleChange}
                        className={styles.textarea}
                      />
                    </div>
                  </div>
                </div>

                <button type="submit" className={styles.submitBtn}>
                  <FiSend className={styles.sendIcon} /> Confirm & Submit Booking Request
                </button>
              </form>
            )}
          </div>

          {/* Right Sidebar Live Summary */}
          <div className={styles.sidebar}>
            
            <div className={styles.summaryCard}>
              <h3 className={styles.summaryTitle}>Live Booking Summary</h3>
              
              <div className={styles.summaryBody}>
                <div className={styles.summaryRow}>
                  <span className={styles.sumLabel}>Selected Package</span>
                  <span className={styles.sumVal}>{selectedTour?.label}</span>
                </div>
                <div className={styles.summaryRow}>
                  <span className={styles.sumLabel}>Duration</span>
                  <span className={styles.sumValBadge}>{selectedTour?.days}</span>
                </div>
                <div className={styles.summaryRow}>
                  <span className={styles.sumLabel}>Preferred Cab</span>
                  <span className={styles.sumVal}>{selectedVehicle?.label}</span>
                </div>
                <div className={styles.summaryRow}>
                  <span className={styles.sumLabel}>Accommodation</span>
                  <span className={styles.sumVal}>{selectedHotel?.label}</span>
                </div>
                <div className={styles.summaryRow}>
                  <span className={styles.sumLabel}>Travelers</span>
                  <span className={styles.sumVal}>{formData.adults} Adults, {formData.children} Children</span>
                </div>
                <div className={styles.summaryRow}>
                  <span className={styles.sumLabel}>Start Date</span>
                  <span className={styles.sumVal}>{formData.startDate || 'Not selected yet'}</span>
                </div>
              </div>

              <div className={styles.summaryFooter}>
                <p className={styles.pricingNote}>
                  ⚡ <strong>Best Price Guarantee:</strong> Customized quote with exact pricing will be delivered via Phone & Email instantly.
                </p>
              </div>
            </div>

            <div className={styles.trustCard}>
              <h4 className={styles.trustTitle}>Why Book With Jagannath Holidays?</h4>
              
              <div className={styles.trustItem}>
                <FiAward className={styles.trustIcon} />
                <div>
                  <h5>Government Authorized</h5>
                  <p>Certified travel operator in Odisha with 10+ years of local hospitality experience.</p>
                </div>
              </div>

              <div className={styles.trustItem}>
                <FiShield className={styles.trustIcon} />
                <div>
                  <h5>100% Price Transparency</h5>
                  <p>No hidden charges or unexpected fees during your journey.</p>
                </div>
              </div>

              <div className={styles.trustItem}>
                <FiClock className={styles.trustIcon} />
                <div>
                  <h5>24/7 On-Trip Assistance</h5>
                  <p>Dedicated travel manager available around the clock while you travel.</p>
                </div>
              </div>
            </div>

            <div className={styles.hotlineCard}>
              <FiHeadphones className={styles.hotlineIcon} />
              <h4>Need Urgent Assistance?</h4>
              <p>Speak directly with our Odisha travel expert for quick phone booking.</p>
              <a href="tel:+911234567890" className={styles.hotlinePhone}>+91 1234567890</a>
              <span className={styles.hotlineEmail}>info@jagannathholidays.com</span>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
