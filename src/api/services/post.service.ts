import { useQuery } from '@tanstack/react-query';
import { api } from '../axios.config';
import { QUERY_KEYS } from '../constants/queryKeys';
import type { Post } from '../types/post.types';

function isPostArray(value: unknown): value is Post[] {
  return Array.isArray(value);
}

function isPost(value: unknown): value is Post {
  return value !== null && typeof value === 'object';
}

export const postService = {
  useGetPosts: (filters: Record<string, unknown> = {}) => {
    return useQuery<Post[]>({
      queryKey: QUERY_KEYS.posts.list(filters),
      queryFn: async () => {
        const { data } = await api.get<unknown>('/posts', { params: filters });
        return isPostArray(data) ? data : [];
      },
    });
  },

  useGetPostById: (id: string | undefined) => {
    return useQuery<Post | null>({
      queryKey: QUERY_KEYS.posts.detail(id),
      queryFn: async () => {
        const { data } = await api.get<unknown>(`/posts/${id}`);
        return isPost(data) ? data : null;
      },
      enabled: !!id,
    });
  },
};
