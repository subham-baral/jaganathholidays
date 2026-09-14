"use client";

import { useState } from 'react';
import styles from './BookNowFaq.module.css';

const bookingFaqs = [
  {
    question: "How do I confirm my booking with Jagannath Holidays?",
    answer: "After submitting your booking request online, our travel expert will contact you with a customized itinerary and price quote. Once you confirm, an advance deposit completes your reservation, and we issue an official booking confirmation voucher."
  },
  {
    question: "What is the advance payment required for booking?",
    answer: "We typically require a 25% to 30% advance payment to reserve hotels, cabs, and guides. The remaining balance can be conveniently paid upon arrival in Odisha or before the start of your tour."
  },
  {
    question: "Can I customize the itinerary after submitting the booking request?",
    answer: "Yes, absolutely! All our tour packages are 100% customizable. You can request changes to hotel categories, destinations, vehicle models, or travel dates prior to final confirmation."
  },
  {
    question: "What is your cancellation and refund policy?",
    answer: "We offer flexible cancellation policies. Cancellations made 15+ days prior to travel receive a full refund minus minimal admin fees. Detailed terms are provided transparently with your booking quotation."
  },
  {
    question: "Do you provide airport and railway station pickup and drop?",
    answer: "Yes, complimentary or included pickup and drop services from Bhubaneswar Airport (BBI), Bhubaneswar Railway Station, or Puri Railway Station are provided in all tour packages."
  },
  {
    question: "Are driver allowances, fuel, tolls, and parking included in cab prices?",
    answer: "Yes! All vehicle prices quoted by Jagannath Holidays include fuel, driver allowances, toll taxes, state permits, and parking fees with zero hidden extra costs."
  }
];

export default function BookNowFaq() {
  const [activeIndex, setActiveIndex] = useState(0);

  const toggleFaq = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <section className={styles.faqSection}>
      <div className={styles.container}>
        <div className={styles.header}>
          <h2 className={styles.title}>Booking Frequently Asked Questions</h2>
          <p className={styles.subtitle}>
            Have questions about booking your Odisha holiday? Here are answers to common queries regarding payments, cancellations, and travel arrangements.
          </p>
        </div>

        <div className={styles.faqList}>
          {bookingFaqs.map((faq, index) => {
            const isActive = activeIndex === index;
            return (
              <div 
                key={index} 
                className={`${styles.faqCard} ${isActive ? styles.activeCard : ''}`}
                onClick={() => toggleFaq(index)}
              >
                <div className={styles.faqHeader}>
                  <h3 className={styles.question}>{faq.question}</h3>
                  <span className={styles.toggleIcon}>{isActive ? '−' : '+'}</span>
                </div>
                {isActive && (
                  <div className={styles.faqBody}>
                    <p className={styles.answer}>{faq.answer}</p>
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
