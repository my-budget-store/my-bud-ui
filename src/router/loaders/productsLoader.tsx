import { ProductFiltersEntity } from "interfaces/Filter";
import { FilterService } from "services/FilterService";
import { ProductService } from "services/ProductService";

export const productsLoader = () => {
  let productsData: Product[];
  let filtersData: ProductFiltersEntity | undefined;

  async function GetLoaderData() {
    productsData = await ProductService.getProducts();
    filtersData = await FilterService.getFilters();
    return [productsData, filtersData];
  }

  return GetLoaderData();
};
