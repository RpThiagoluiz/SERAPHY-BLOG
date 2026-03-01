import { categoryService } from '../api/services/category.service';

export function useCategory(id: string | undefined) {
  return categoryService.useGetCategoryById(id);
}
