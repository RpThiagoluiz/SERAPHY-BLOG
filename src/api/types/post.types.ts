import type { Author } from './author.types';
import type { Category } from './category.types';

export interface Post {
  id: string;
  title?: string;
  content?: string;
  thumbnail_url?: string;
  authorId?: string;
  createdAt?: string;
  updatedAt?: string;
  categories?: Category[];
  author?: Author;
}
