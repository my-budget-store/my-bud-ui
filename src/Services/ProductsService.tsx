import { ProductApi } from "constants/apiConstants";
import { HttpRequest } from "services/helpers";

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
