import { authorService } from '../api/services/author.service';

export function useAuthors() {
  return authorService.useGetAuthors();
}

export function useAuthorById(id: string | undefined) {
  return authorService.useGetAuthorById(id);
}
