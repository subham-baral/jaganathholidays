import styles from './FaqSection.module.css';
import FaqSectionClient from './FaqSectionClient';

async function fetchFaqs() {
  try {
    const payload = {
      slug: "faqs",
      content_type: "faqs"
    };

    const res = await fetch(`${process.env.CMS_API_URL || 'https://cmsapi.one9ty.com'}/api/v1/delivery/contents/show`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${process.env.CMS_TOKEN || '141|PLIcQEisrq76oVJH35rTn3CqkZWZ6xaCSwNDWCiw2ea64d79'}`
      },
      body: JSON.stringify(payload),
      next: { revalidate: 0 }
    });

    const result = await res.json();

    // Response shape: { success, data: { ...meta, data: { questions: [{question, answers}] } } }
    const questions = result?.data?.data?.questions;

    if (Array.isArray(questions) && questions.length > 0) {
      return questions.map((item, index) => ({
        id: index,
        question: item.question || 'Frequently Asked Question',
        answer: item.answers || 'Please contact our support team for more details.'
      }));
    }
  } catch (error) {
    console.error("Error fetching FAQs:", error);
  }
  return [];
}

/* ── Main Component ── */
export default async function FaqSection() {
  const faqs = await fetchFaqs();

  return (
    <section className={styles.faqSection}>
      <div className={styles.container}>
        <h2 className={styles.heading}>Frequently Asked Questions</h2>
        
        {faqs && faqs.length > 0 ? (
          <FaqSectionClient faqsData={faqs} />
        ) : (
          <div className={styles.noResult}>No result available</div>
        )}
      </div>
    </section>
  );
}
