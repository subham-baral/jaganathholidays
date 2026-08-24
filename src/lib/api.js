const CMS_API_URL = process.env.CMS_API_URL || 'https://cmsapi.one9ty.com';
const CMS_TOKEN = process.env.CMS_TOKEN || '141|PLIcQEisrq76oVJH35rTn3CqkZWZ6xaCSwNDWCiw2ea64d79';
const CMS_STORAGE_URL = "https://cdn.one9ty.com/one9ty-travel";

/**
 * Constructs a full image URL from a CMS media file path
 */
export function getImageUrl(filePath, fallback = '/jaganath-banner.webp') {
  if (!filePath) return fallback;
  if (typeof filePath === 'object') {
    filePath = filePath.file_path || filePath.url || '';
  }
  if (!filePath) return fallback;
  if (filePath.startsWith('http://') || filePath.startsWith('https://') || filePath.startsWith('/')) {
    return filePath;
  }
  return `${CMS_STORAGE_URL}/${filePath.replace(/^\/+/, '')}`;
}

/**
 * Strips HTML tags from rich text to generate plain text for SEO meta descriptions
 */
export function stripHtml(html = '') {
  if (!html) return '';
  return html
    .replace(/<style[^>]*>[\s\S]*?<\/style>/gi, '')
    .replace(/<script[^>]*>[\s\S]*?<\/script>/gi, '')
    .replace(/<[^>]+>/g, ' ')
    .replace(/&nbsp;/g, ' ')
    .replace(/&amp;/g, '&')
    .replace(/&quot;/g, '"')
    .replace(/&apos;/g, "'")
    .replace(/&lt;/g, '<')
    .replace(/&gt;/g, '>')
    .replace(/\s+/g, ' ')
    .trim();
}

/**
 * Fetches package details by slug from CMS API
 */
export async function getPackageBySlug(slug) {
  if (!slug) return null;

  try {
    const res = await fetch(`${CMS_API_URL}/api/v1/delivery/contents/show`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${CMS_TOKEN}`,
        'Accept': 'application/json',
      },
      body: JSON.stringify({
        slug: slug,
        content_type: 'packages',
      }),
      next: { revalidate: 60 }, // ISR caching: revalidate every 60 seconds
    });

    if (!res.ok) {
      console.error(`Failed to fetch package for slug "${slug}":`, res.status, res.statusText);
      return null;
    }

    const data = await res.json();
    if (data?.success && data?.data) {
      return data.data;
    }

    return null;
  } catch (error) {
    console.error(`Error fetching package "${slug}":`, error);
    return null;
  }
}

/**
 * Fetches list of packages from CMS API
 */
export async function getPackagesList(limit = 6) {
  try {
    const res = await fetch(`${CMS_API_URL}/api/v1/delivery/contents`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${CMS_TOKEN}`,
        'Accept': 'application/json',
      },
      body: JSON.stringify({
        content_type: 'packages',
      }),
      next: { revalidate: 60 },
    });

    if (!res.ok) return [];

    const json = await res.json();
    const items = json?.data?.data || json?.data || [];
    return Array.isArray(items) ? items.slice(0, limit) : [];
  } catch (error) {
    console.error('Error fetching packages list:', error);
    return [];
  }
}
