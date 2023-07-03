import axios from "axios";
import { FilterApi } from "constants/apiConstants";
import { ProductFiltersEntity } from "interfaces/Filter";

export const FilterService = {
  getFilters: async (): Promise<ProductFiltersEntity | undefined> => {
    try {
      const response = await axios.get(FilterApi.Filters);
      return response.data;
    } catch (error) {
      console.error("Error retrieving filters:", error);
    }
    return undefined;
  },
  getFiltersByCategory: async (
    category: string | undefined
  ): Promise<ProductFiltersEntity | undefined> => {
    try {
      const response = await axios.get(FilterApi.Filters + "/" + category);
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
