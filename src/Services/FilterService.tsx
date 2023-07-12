import axios from "axios";
import { productFiltersApi } from "constants/apiConstants";
import { Category } from "interfaces/Category";
import { ProductFiltersEntity } from "interfaces/Filter";

export const ProductFiltersService = {
  getCategories: async (): Promise<Category[] | undefined> => {
    try {
      const response = await axios.get(productFiltersApi.categories);
      return response.data;
    } catch (error) {
      console.error("Error retrieving categories:", error);
    }
    return undefined;
  },
  getFiltersByCategory: async (
    category: string | undefined
  ): Promise<ProductFiltersEntity | undefined> => {
    try {
      const response = await axios.get(
        productFiltersApi.searchFilters + "/" + category
      );
      return response.data;
    } catch (error) {
      console.error(
        "Error retrieving filters based on category: " + category,
        error
      );
      return undefined;
    }
  },
};
