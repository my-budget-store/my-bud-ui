import { ProductFiltersEntity } from "interfaces/Filter";
import { ProductFiltersService as filterService } from "services/filterService";
import { productService } from "services/productService";

export const productsByCategoryLoader = async ({ params }: any) => {
  const productsData: Product[] = await productService.getProductsByCategory(
    params.category
  );

  const filtersData: ProductFiltersEntity | undefined =
    await filterService.getFiltersByCategory(params.category);

  return [productsData, filtersData];
};
