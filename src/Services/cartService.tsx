import axios from "axios";
import { cartApi } from "constants/apiConstants";
import { createCartItem as createCartItemModel } from "interfaces/CartItem";

export const cartService = {
  createCartItem: async (
    token: string | undefined,
    createCartItemModel: createCartItemModel
  ) => {
    try {
      const response = await axios.post(
        cartApi.createCartItems,
        createCartItemModel,
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );
      return response.data as Product;
    } catch (error) {
      console.error("Error while adding items to cart", error);
      return [];
    }
  },
  getCartItems: async (token: string | undefined) => {
    try {
      const response = await axios.get(cartApi.Cart, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      return response.data;
    } catch (error) {
      console.error("Error retrieving cart items:", error);
      return [];
    }
  },
};
