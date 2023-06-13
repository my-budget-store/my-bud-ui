import { ProductApi } from "Services/Constants/ApiConstants";
import { HttpRequest } from "Services/Helpers";

const ProductsService = {
  GetProducts: async () => {
    return await HttpRequest(ProductApi.Products)
      .fetchPublic()
      .then((response:any) => {
        return response.data;
      });
  },
};

export default ProductsService;
