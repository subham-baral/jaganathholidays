"use client";

import { useState } from 'react';
import { 
  FiUser, 
  FiMail, 
  FiPhone, 
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

export default function BookNowForm() {
  const [formData, setFormData] = useState({
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

  const resetForm = () => {
    setIsSubmitted(false);
    setFormData({
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
                  Thank you, <strong>{formData.fullName}</strong>. Your travel inquiry has been successfully received.
                </p>
                <div className={styles.summaryDetailsBox}>
                  <h4>Submitted Details</h4>
                  <ul>
                    <li><strong>Full Name:</strong> {formData.fullName}</li>
                    <li><strong>Email Address:</strong> {formData.email}</li>
                    <li><strong>Phone Number:</strong> {formData.phone}</li>
                    {formData.whatsapp && <li><strong>WhatsApp Number:</strong> {formData.whatsapp}</li>}
                    {formData.city && <li><strong>City / Location:</strong> {formData.city}</li>}
                    {formData.specialNotes && <li><strong>Notes:</strong> {formData.specialNotes}</li>}
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
                  <p className={styles.formSub}>Fill out your contact details below for a customized quote & instant confirmation.</p>
                </div>

                {/* Contact & Traveler Details */}
                <div className={styles.formGroupSection}>
                  <h3 className={styles.sectionHeader}>
                    Contact & Traveler Details
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
              <h3 className={styles.summaryTitle}>Summary</h3>
              
              <div className={styles.summaryBody}>
                <div className={styles.summaryRow}>
                  <span className={styles.sumLabel}>Full Name</span>
                  <span className={styles.sumVal}>{formData.fullName || 'Not entered'}</span>
                </div>
                <div className={styles.summaryRow}>
                  <span className={styles.sumLabel}>Phone</span>
                  <span className={styles.sumVal}>{formData.phone || 'Not entered'}</span>
                </div>
                <div className={styles.summaryRow}>
                  <span className={styles.sumLabel}>Email</span>
                  <span className={styles.sumVal}>{formData.email || 'Not entered'}</span>
                </div>
                <div className={styles.summaryRow}>
                  <span className={styles.sumLabel}>City</span>
                  <span className={styles.sumVal}>{formData.city || 'Not entered'}</span>
                </div>
              </div>

              <div className={styles.summaryFooter}>
                <p className={styles.pricingNote}>
                  ⚡ <strong>Instant Response:</strong> Our travel expert will call & WhatsApp you with customized pricing options.
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
