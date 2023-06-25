import axios from "axios";
import { ProductApi } from "constants/apiConstants";

export const ProductService = {
  getProducts: async () => {
    try {
      const response = await axios.get(ProductApi.Products);
      return response.data;
    } catch (error) {
      console.error("Error retrieving products:", error);
      return [];
    }
  },
  getProductById: async (token: string | undefined, id: number) => {
    try {
      const response = await axios.get(ProductApi.Products + "/" + id, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      return response.data;
    } catch (error) {
      console.error("Error retrieving product with id: " + id, error);
      return [];
    }
  },
};
