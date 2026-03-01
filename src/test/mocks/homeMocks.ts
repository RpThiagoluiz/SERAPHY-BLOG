import { vi } from 'vitest';

/** Re-export fixtures for convenience when using Home mocks */
export { mockPost, mockCategory, mockAuthor } from './fixtures';

/**
 * Mocks for Home page tests. Import this file at the top of the test
 * to enable usePosts, useCategories, useAuthors, and useErrorNotifications mocks.
 */
vi.mock('../../hooks/usePosts', () => ({
  usePosts: vi.fn(),
}));

vi.mock('../../hooks/useCategories', () => ({
  useCategories: vi.fn(),
}));

vi.mock('../../hooks/useAuthors', () => ({
  useAuthors: vi.fn(),
}));

vi.mock('../../hooks/useNotifications', () => ({
  useErrorNotifications: vi.fn(),
}));
