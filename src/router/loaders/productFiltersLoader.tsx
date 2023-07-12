import { Category } from "interfaces/Category";
import { ProductFiltersService as filterService } from "services/filterService";

export const productFiltersLoader = async () => {
  const categoriesData: Category[] | undefined =
    await filterService.getCategories();

  return categoriesData;
};
