import { ProductFiltersEntity } from "interfaces/Filter";
import { FilterService as filterService } from "services/filterService";
import { productService } from "services/productService";

export const productsByCategoryLoader = async ({ params }: any) => {
  let productsData: Product[];
  let filtersData: ProductFiltersEntity | undefined;

  productsData = await productService.getProductsByCategory(params.category);
  filtersData = await filterService.getFiltersByCategory(params.category);

  return [productsData, filtersData];
};
