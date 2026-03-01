import { postService } from '../api/services/post.service';

export function usePosts(filters: Record<string, unknown> = {}) {
  return postService.useGetPosts(filters);
}
