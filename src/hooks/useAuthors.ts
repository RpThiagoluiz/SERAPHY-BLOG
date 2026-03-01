import { authorService } from '../api/services/author.service';

export function useAuthors() {
  return authorService.useGetAuthors();
}
