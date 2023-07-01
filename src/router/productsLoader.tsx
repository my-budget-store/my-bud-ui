import { FilterService } from "services/FilterService";
import { ProductService } from "services/ProductService";

export const productsLoader = () => {
  const products = ProductService.getProducts();
  const filters = FilterService.getFilters();
  
  return [products, filters];
};
