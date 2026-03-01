import { useCallback, useMemo, useState, type ReactNode } from 'react';
import { useLocation, useNavigate, useSearchParams } from 'react-router-dom';

import {
  loadLastSearches,
  MAX_LAST_SEARCHES,
  saveLastSearches,
  SearchContext,
} from './searchStore';

interface SearchProviderProps {
  children: ReactNode;
}

export function SearchProvider({ children }: SearchProviderProps) {
  const [searchParams, setSearchParams] = useSearchParams();
  const navigate = useNavigate();
  const location = useLocation();

  const searchQuery = searchParams.get('search') ?? '';

  const [lastSearches, setLastSearches] = useState<string[]>(loadLastSearches);

  const performSearch = useCallback(
    (value: string) => {
      const trimmed = value.trim();
      if (!trimmed) return;

      setLastSearches((prev) => {
        const next = [trimmed, ...prev.filter((s) => s !== trimmed)].slice(
          0,
          MAX_LAST_SEARCHES,
        );
        saveLastSearches(next);
        return next;
      });

      const isOnHome = location.pathname === '/';
      const nextParams = new URLSearchParams(searchParams);
      nextParams.set('search', trimmed);

      if (isOnHome) {
        setSearchParams(nextParams, { replace: true });
      } else {
        navigate({ pathname: '/', search: nextParams.toString() });
      }
    },
    [location.pathname, navigate, searchParams, setSearchParams],
  );

  const setSearchQuery = useCallback(
    (value: string) => {
      const nextParams = new URLSearchParams(searchParams);
      if (value.trim()) {
        nextParams.set('search', value.trim());
      } else {
        nextParams.delete('search');
      }
      setSearchParams(nextParams, { replace: true });
    },
    [searchParams, setSearchParams],
  );

  const clearSearch = useCallback(() => {
    const nextParams = new URLSearchParams(searchParams);
    nextParams.delete('search');
    setSearchParams(nextParams, { replace: true });
  }, [searchParams, setSearchParams]);

  const value = useMemo(
    () => ({
      searchQuery,
      performSearch,
      setSearchQuery,
      clearSearch,
      lastSearches,
    }),
    [searchQuery, performSearch, setSearchQuery, clearSearch, lastSearches],
  );

  return (
    <SearchContext.Provider value={value}>{children}</SearchContext.Provider>
  );
}
