const DEFAULT_MAX_LENGTH = 120;

export function matchesSearch(
  query: string,
  ...texts: (string | undefined)[]
): boolean {
  const q = query.trim().toLowerCase();
  if (!q) return true;
  const searchable = texts
    .filter((t): t is string => typeof t === 'string')
    .join(' ')
    .toLowerCase();
  return searchable.includes(q);
}

export function extractExcerpt(
  content: string | undefined,
  maxLength: number = DEFAULT_MAX_LENGTH,
): string {
  if (!content || typeof content !== 'string') return '';

  let plainText: string;
  if (typeof document !== 'undefined') {
    const doc = new DOMParser().parseFromString(content, 'text/html');
    plainText = doc.body.textContent ?? '';
  } else {
    plainText = content.replace(/<[^>]*>/g, '');
  }

  plainText = plainText.replace(/\s+/g, ' ').trim();
  if (plainText.length <= maxLength) return plainText;
  return plainText.slice(0, maxLength).trim() + '...';
}
