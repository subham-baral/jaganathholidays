import styles from './FaqSection.module.css';
import FaqSectionClient from './FaqSectionClient';

async function fetchFaqs() {
  try {
    const payload = {
      content_type_id: 'faqs',
      status: 'published',
      per_page: 30
    };

    let res = await fetch(`${process.env.CMS_API_URL || 'https://cmsapi.one9ty.com'}/api/v1/delivery/contents?per_page=30`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${process.env.CMS_TOKEN || '141|PLIcQEisrq76oVJH35rTn3CqkZWZ6xaCSwNDWCiw2ea64d79'}`
      },
      body: JSON.stringify(payload),
      next: { revalidate: 0 } // Revalidate every 30s (testing mode)
    });

    let result = await res.json();
    let rawItems = [];

    if (Array.isArray(result)) {
      rawItems = result;
    } else if (Array.isArray(result?.data?.data)) {
      rawItems = result.data.data;
    } else if (Array.isArray(result?.data)) {
      rawItems = result.data;
    }

    // If 'faqs' returned empty array, try fallback content_type_id 'faq'
    if (rawItems.length === 0) {
      payload.content_type_id = 'faq';
      const fallbackRes = await fetch(`${process.env.CMS_API_URL || 'https://cmsapi.one9ty.com'}/api/v1/delivery/contents?per_page=30`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${process.env.CMS_TOKEN || '141|PLIcQEisrq76oVJH35rTn3CqkZWZ6xaCSwNDWCiw2ea64d79'}`
        },
        body: JSON.stringify(payload),
        next: { revalidate: 0 }
      });
      const fallbackResult = await fallbackRes.json();
      if (Array.isArray(fallbackResult)) {
        rawItems = fallbackResult;
      } else if (Array.isArray(fallbackResult?.data?.data)) {
        rawItems = fallbackResult.data.data;
      } else if (Array.isArray(fallbackResult?.data)) {
        rawItems = fallbackResult.data;
      }
    }

    if (rawItems.length > 0) {
      return rawItems.map((item, index) => {
        const itemData = item.data || {};
        const rawAnswer = itemData.answer || itemData.description || itemData.content || '';
        const cleanAnswer = rawAnswer.replace(/<[^>]*>?/gm, ' ').replace(/\s+/g, ' ').trim();
        return {
          id: item.id || index,
          question: item.title || itemData.question || itemData.title || 'Frequently Asked Question',
          answer: cleanAnswer || 'Please contact our support team for more details.'
        };
      });
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
