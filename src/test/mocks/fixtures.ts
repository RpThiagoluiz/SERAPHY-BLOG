import type { Post } from '../../api/types/post.types';
import type { Category } from '../../api/types/category.types';
import type { Author } from '../../api/types/author.types';

/** Shared mock data for tests. Reusable across Home, PostDetails, and other tests. */
export const mockPost: Post = {
  id: 'post-1',
  title: 'Technology Trends',
  content: 'Exploring the latest in tech and innovation.',
  thumbnail_url: 'https://example.com/thumb.jpg',
  authorId: 'author-1',
  createdAt: '2026-01-15T10:00:00Z',
  updatedAt: '2026-01-15T10:00:00Z',
  categories: [{ id: 'cat-1', name: 'Technology', postId: 'post-1' }],
  author: { id: 'author-1', name: 'Jane Doe', profilePicture: '' },
};

export const mockCategory: Category = {
  id: 'cat-1',
  name: 'Technology',
  postId: 'post-1',
};

export const mockAuthor: Author = {
  id: 'author-1',
  name: 'Jane Doe',
  profilePicture: '',
};

/** Second post for Latest articles in PostDetails tests */
export const mockPost2: Post = {
  id: 'post-2',
  title: 'Another Article',
  content: 'Content for the second post.',
  thumbnail_url: 'https://example.com/thumb2.jpg',
  authorId: 'author-1',
  createdAt: '2026-01-10T10:00:00Z',
  updatedAt: '2026-01-10T10:00:00Z',
  categories: [{ id: 'cat-1', name: 'Technology', postId: 'post-2' }],
  author: { id: 'author-1', name: 'Jane Doe', profilePicture: '' },
};
