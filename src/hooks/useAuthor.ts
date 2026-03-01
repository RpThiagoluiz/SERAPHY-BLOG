import { authorService } from '../api/services/author.service';

export function useAuthor(id: string | undefined) {
  return authorService.useGetAuthorById(id);
}
