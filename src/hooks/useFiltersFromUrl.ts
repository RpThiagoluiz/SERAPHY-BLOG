import { useCallback, useMemo } from 'react';
import { useSearchParams } from 'react-router-dom';
import type { SortOrder } from '../components';

const PARAM_CATEGORIES = 'categories';
const PARAM_AUTHORS = 'authors';
const PARAM_SORT = 'sort';
const PARAM_SEARCH = 'search';

function parseIds(value: string | null): string[] {
  if (!value || typeof value !== 'string') return [];
  return value
    .split(',')
    .map((s) => s.trim())
    .filter(Boolean);
}

function serializeIds(ids: string[]): string {
  return ids.filter(Boolean).join(',');
}

export interface FiltersFromUrl {
  categoryIds: string[];
  authorIds: string[];
  sortOrder: SortOrder;
  setCategoryIds: (ids: string[]) => void;
  setAuthorIds: (ids: string[]) => void;
  setSortOrder: (order: SortOrder) => void;
  clearAllFilters: () => void;
}

export function useFiltersFromUrl(): FiltersFromUrl {
  const [searchParams, setSearchParams] = useSearchParams();

  const categoryIds = useMemo(
    () => parseIds(searchParams.get(PARAM_CATEGORIES)),
    [searchParams],
  );

  const authorIds = useMemo(
    () => parseIds(searchParams.get(PARAM_AUTHORS)),
    [searchParams],
  );

  const sortOrder = useMemo((): SortOrder => {
    const value = searchParams.get(PARAM_SORT);
    return value === 'oldest' ? 'oldest' : 'newest';
  }, [searchParams]);

  const setCategoryIds = useCallback(
    (ids: string[]) => {
      setSearchParams(
        (prev) => {
          const next = new URLSearchParams(prev);
          const serialized = serializeIds(ids);
          if (serialized) {
            next.set(PARAM_CATEGORIES, serialized);
          } else {
            next.delete(PARAM_CATEGORIES);
          }
          return next;
        },
        { replace: true },
      );
    },
    [setSearchParams],
  );

  const setAuthorIds = useCallback(
    (ids: string[]) => {
      setSearchParams(
        (prev) => {
          const next = new URLSearchParams(prev);
          const serialized = serializeIds(ids);
          if (serialized) {
            next.set(PARAM_AUTHORS, serialized);
          } else {
            next.delete(PARAM_AUTHORS);
          }
          return next;
        },
        { replace: true },
      );
    },
    [setSearchParams],
  );

  const setSortOrder = useCallback(
    (order: SortOrder) => {
      setSearchParams(
        (prev) => {
          const next = new URLSearchParams(prev);
          if (order === 'oldest') {
            next.set(PARAM_SORT, 'oldest');
          } else {
            next.delete(PARAM_SORT);
          }
          return next;
        },
        { replace: true },
      );
    },
    [setSearchParams],
  );

  const clearAllFilters = useCallback(() => {
    setSearchParams(
      (prev) => {
        const next = new URLSearchParams(prev);
        next.delete(PARAM_CATEGORIES);
        next.delete(PARAM_AUTHORS);
        next.delete(PARAM_SEARCH);
        return next;
      },
      { replace: true },
    );
  }, [setSearchParams]);

  return {
    categoryIds,
    authorIds,
    sortOrder,
    setCategoryIds,
    setAuthorIds,
    setSortOrder,
    clearAllFilters,
  };
}
