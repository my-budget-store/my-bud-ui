import axios from "axios";
import { ProductApi } from "constants/apiConstants";

export const ProductService = {
  getProducts: async (): Promise<Product[] | []> => {
    try {
      const response = await axios.get(ProductApi.Products);
      return response.data;
    } catch (error) {
      console.error("Error retrieving products:", error);
      return [];
    }
  },
  getProductById: async (id: number) => {
    try {
      const response = await axios.get(ProductApi.Products + "/" + id);
      return response.data;
    } catch (error) {
      console.error("Error retrieving product with id: " + id, error);
      return [];
    }
  },
  getProductsByCategory: async (category: string | undefined) => {
    try {
      const response = await axios.get(ProductApi.Products + "/" + category);
      return response.data;
    } catch (error) {
      console.error("Error retrieving product with id: " + category, error);
      return [];
    }
  },
};
