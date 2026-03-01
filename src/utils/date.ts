/**
 * Formats an ISO date string to "Jan 20, 2024" format.
 */
export function formatPostDate(isoDate: string | undefined): string {
  if (!isoDate) return '';
  try {
    const date = new Date(isoDate);
    if (Number.isNaN(date.getTime())) return '';
    return date.toLocaleDateString('en-US', {
      month: 'short',
      day: 'numeric',
      year: 'numeric',
    });
  } catch {
    return '';
  }
}
