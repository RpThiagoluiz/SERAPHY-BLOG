import { vi } from 'vitest';

export { mockPost, mockCategory, mockAuthor } from './fixtures';

vi.mock('../../hooks/usePosts', () => ({
  usePosts: vi.fn(),
  usePostById: vi.fn(),
}));

vi.mock('../../hooks/useAuthors', () => ({
  useAuthors: vi.fn(),
  useAuthorById: vi.fn(),
}));
