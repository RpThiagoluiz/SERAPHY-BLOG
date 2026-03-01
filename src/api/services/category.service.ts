import { useQuery } from '@tanstack/react-query';
import { api } from '../axios.config';
import { QUERY_KEYS } from '../constants/queryKeys';
import type { Category } from '../types/category.types';

function isCategoryArray(value: unknown): value is Category[] {
  return Array.isArray(value);
}

function isCategory(value: unknown): value is Category {
  return value !== null && typeof value === 'object';
}

export const categoryService = {
  useGetCategories: () => {
    return useQuery<Category[]>({
      queryKey: QUERY_KEYS.categories.lists(),
      queryFn: async () => {
        const { data } = await api.get<unknown>('/categories');
        return isCategoryArray(data) ? data : [];
      },
    });
  },

  useGetCategoryById: (id: string | undefined) => {
    return useQuery<Category | null>({
      queryKey: QUERY_KEYS.categories.detail(id),
      queryFn: async () => {
        const { data } = await api.get<unknown>(`/categories/${id}`);
        return isCategory(data) ? data : null;
      },
      enabled: !!id,
    });
  },
};
