import { ProductService } from "services/ProductService";

export const productsLoader = () => {
  let productsData: Product[];

  async function GetLoaderData() {
    productsData = await ProductService.getProducts();
    return [productsData];
  }

  return GetLoaderData();
};
