import { ProductService } from "services/ProductService";

export const productsLoader = () => {
  return ProductService.getProducts();
};
