import { categoryService } from '../api/services/category.service';

export function useCategories() {
  return categoryService.useGetCategories();
}
