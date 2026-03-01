import { useQuery } from '@tanstack/react-query';
import { api } from '../axios.config';
import { QUERY_KEYS } from '../constants/queryKeys';
import type { Author } from '../types/author.types';

function isAuthorArray(value: unknown): value is Author[] {
  return Array.isArray(value);
}

function isAuthor(value: unknown): value is Author {
  return value !== null && typeof value === 'object';
}

export const authorService = {
  useGetAuthors: () => {
    return useQuery<Author[]>({
      queryKey: QUERY_KEYS.authors.lists(),
      queryFn: async () => {
        const { data } = await api.get<unknown>('/authors');
        return isAuthorArray(data) ? data : [];
      },
    });
  },

  useGetAuthorById: (id: string | undefined) => {
    return useQuery<Author | null>({
      queryKey: QUERY_KEYS.authors.detail(id),
      queryFn: async () => {
        const { data } = await api.get<unknown>(`/authors/${id}`);
        return isAuthor(data) ? data : null;
      },
      enabled: !!id,
    });
  },
};
