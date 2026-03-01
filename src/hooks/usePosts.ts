import { postService } from '../api/services/post.service';

export function usePosts(filters: Record<string, unknown> = {}) {
  return postService.useGetPosts(filters);
}

export function usePostById(id: string | undefined) {
  return postService.useGetPostById(id);
}
