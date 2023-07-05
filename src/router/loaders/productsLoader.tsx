import { productService } from "services/productService";

export const productsLoader = () => {
  async function GetLoaderData() {
    return await productService.getProducts();
  }

  return GetLoaderData();
};
