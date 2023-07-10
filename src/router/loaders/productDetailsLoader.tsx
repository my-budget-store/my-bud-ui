import { productService } from "services/productService";

export const productDetailsLoader = async ({ params }: any) => {
  async function GetLoaderData() {
    return await productService.getProductById(params.productId);
  }

  return GetLoaderData();
};
