const MONTHS = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];

// Format an ISO date (YYYY-MM-DD) as "Mon YYYY" without timezone shifts.
export function formatMonth(iso) {
  const [y, m] = iso.split('-').map(Number);
  return `${MONTHS[m - 1]} ${y}`;
}

export const external = { target: '_blank', rel: 'noopener noreferrer' };

// Open web links in a new tab; mailto: links open the mail app in place.
export const linkProps = (url) => (url.startsWith('mailto:') ? {} : external);
