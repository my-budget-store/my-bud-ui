import axios from "axios";
import { FilterApi } from "constants/apiConstants";
import { FilterBase } from "interfaces/Filter";

export const FilterService = {
  getFilters: async (): Promise<FilterBase[] | []> => {
    try {
      const response = await axios.get(FilterApi.Filters);
      return response.data;
    } catch (error) {
      console.error("Error retrieving filters:", error);
      return [];
    }
  },
};
