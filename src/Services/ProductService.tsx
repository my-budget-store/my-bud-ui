import axios from "axios";
import { ProductApi } from "constants/apiConstants";

export const productService = {
  getProducts: async (): Promise<Product[] | []> => {
    try {
      const response = await axios.get(ProductApi.Products);
      return response.data;
    } catch (error) {
      console.error("Error retrieving products:", error);
      return [];
    }
  },
  getProductById: async (id: number): Promise<Product> => {
    try {
      const response = await axios.get(ProductApi.Products + "/" + id);
      return response.data;
    } catch (error) {
      console.error("Error retrieving product with id: " + id, error);
      throw error; // Re-throw the error to propagate it
    }
  },
  getProductsByCategory: async (category: string | undefined) => {
    try {
      const response = await axios.get(
        ProductApi.Products + "/category/" + category
      );
      return response.data;
    } catch (error) {
      console.error("Error retrieving product with id: " + category, error);
      return [];
    }
  },
  createProduct: async (token: string | undefined, formData: any) => {
    try {
      const response = await axios.post(ProductApi.Products, formData, {
        headers: {
          Authorization: `Bearer ${token}`,
          "Content-Type": "multipart/form-data",
        },
      });
      return response.data as Product;
    } catch (error) {
      console.error("Error creating product", error);
      return [];
    }
  },
};
