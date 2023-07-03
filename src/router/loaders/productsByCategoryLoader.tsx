import { ProductFiltersEntity } from "interfaces/Filter";
import { FilterService } from "services/FilterService";
import { ProductService } from "services/ProductService";

export const productsByCategoryLoader = async ({ params }: any) => {
  let productsData: Product[];
  let filtersData: ProductFiltersEntity | undefined;

  productsData = await ProductService.getProductsByCategory(params);
  filtersData = await FilterService.getFiltersByCategory(params);
  return [productsData, filtersData];
};
