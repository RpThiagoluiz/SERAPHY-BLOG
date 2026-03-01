import { createContext } from 'react';

export const LAST_SEARCHES_KEY = 'seraphy-blog-last-searches';
export const MAX_LAST_SEARCHES = 5;

export function loadLastSearches(): string[] {
  try {
    const raw = localStorage.getItem(LAST_SEARCHES_KEY);
    if (!raw) return [];
    const parsed = JSON.parse(raw) as unknown;
    return Array.isArray(parsed)
      ? parsed
          .filter((x): x is string => typeof x === 'string')
          .slice(0, MAX_LAST_SEARCHES)
      : [];
  } catch {
    return [];
  }
}

export function saveLastSearches(searches: string[]) {
  try {
    localStorage.setItem(
      LAST_SEARCHES_KEY,
      JSON.stringify(searches.slice(0, MAX_LAST_SEARCHES)),
    );
  } catch {
    // ignore
  }
}

export interface SearchContextValue {
  searchQuery: string;
  performSearch: (value: string) => void;
  setSearchQuery: (value: string) => void;
  clearSearch: () => void;
  lastSearches: string[];
}

export const SearchContext = createContext<SearchContextValue | null>(null);
