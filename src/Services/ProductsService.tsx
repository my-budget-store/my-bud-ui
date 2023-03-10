import { ProductApi } from "Services/Constants/ApiConstants";
import { HttpRequest } from "Services/Helpers";

const ProductsService = {
  GetProducts: async () => {
    return await HttpRequest(ProductApi.Products)
      .fetchPublic()
      .then((response) => {
        return response.data;
      });
  },
};

export default ProductsService;
