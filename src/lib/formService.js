/**
 * Reusable Form Submission Service for Jagannath Holidays
 * Handles submissions for Contact Us (Form ID: 6), Bookings, and other inquiry forms.
 */

/**
 * Standard submit function for any CMS form
 * @param {Object} options
 * @param {number|string} options.formId - The CMS form ID (default: 6)
 * @param {string} options.slug - The CMS form slug (default: 'contact-us')
 * @param {Object} options.data - Form payload, e.g. { name, email, phone, message, ... }
 * @returns {Promise<{success: boolean, submission_no?: string, message?: string, error?: string}>}
 */
export async function submitCmsForm({ formId = 6, slug = 'contact-us', data = {} }) {
  if (!formId || !slug) {
    throw new Error('Both formId and slug are required for submission.');
  }

  // Format and trim inputs
  const payload = {};
  for (const [key, value] of Object.entries(data)) {
    payload[key] = typeof value === 'string' ? value.trim() : value;
  }

  try {
    const res = await fetch(`/api/forms/${formId}/${slug}/submit`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(payload),
    });

    const result = await res.json().catch(() => null);

    if (!res.ok || !result?.success) {
      const errorMessage =
        result?.error ||
        (result?.details ? Object.values(result.details).flat().join(', ') : null) ||
        'Failed to submit form. Please check your inputs and try again.';
      return {
        success: false,
        error: errorMessage,
        details: result?.details || null,
      };
    }

    return {
      success: true,
      submission_no: result.submission_no,
      message: result.message || 'Your inquiry has been submitted successfully!',
      data: result.data,
    };
  } catch (err) {
    console.error('Submission error in submitCmsForm:', err);
    return {
      success: false,
      error: err.message || 'Network error occurred. Please try again.',
    };
  }
}

/**
 * Convenience helper specifically for contact form (Form ID: 6, slug: contact-us)
 * @param {Object} param0
 * @param {string} param0.name
 * @param {string} param0.email
 * @param {string} param0.phone
 * @param {string} param0.message
 */
export async function submitContactForm({ name, email, phone, message }) {
  return submitCmsForm({
    formId: 6,
    slug: 'contact-us',
    data: { name, email, phone, message },
  });
}
