import { postService } from '../api/services/post.service';

export function usePost(id: string | undefined) {
  return postService.useGetPostById(id);
}
