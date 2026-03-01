export const QUERY_KEYS = {
  posts: {
    all: ['posts'] as const,
    lists: () => [...QUERY_KEYS.posts.all, 'list'] as const,
    list: (filters: Record<string, unknown> = {}) =>
      [...QUERY_KEYS.posts.lists(), { filters }] as const,
    details: () => [...QUERY_KEYS.posts.all, 'detail'] as const,
    detail: (id: string | undefined) =>
      [...QUERY_KEYS.posts.details(), id] as const,
  },
  authors: {
    all: ['authors'] as const,
    lists: () => [...QUERY_KEYS.authors.all, 'list'] as const,
    details: () => [...QUERY_KEYS.authors.all, 'detail'] as const,
    detail: (id: string | undefined) =>
      [...QUERY_KEYS.authors.details(), id] as const,
  },
  categories: {
    all: ['categories'] as const,
    lists: () => [...QUERY_KEYS.categories.all, 'list'] as const,
    details: () => [...QUERY_KEYS.categories.all, 'detail'] as const,
    detail: (id: string | undefined) =>
      [...QUERY_KEYS.categories.details(), id] as const,
  },
} as const;
