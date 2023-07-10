import axios, { AxiosResponse } from "axios";
import { CartApi, OrderApi } from "constants/apiConstants";
import { Order, OrderItem } from "interfaces/Order";

export const orderService = {
  createOrder: async (
    token: string | undefined,
    createOrderRequest: OrderItem[]
  ): Promise<boolean> => {
    try {
      const response = await axios.post(
        OrderApi.createOrder,
        createOrderRequest,
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );
      if (response.status === 201) {
        return true; // Return the order response
      }
      return false;
    } catch (error) {
      console.error("Error while placing order", error);
      return false;
    }
  },
  getOrders: async (token: string | undefined): Promise<Order[]> => {
    try {
      const response: AxiosResponse<Order[]> = await axios.get<Order[]>(OrderApi.orders, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });

      return response.data;
    } catch (error) {
      console.error("Error retrieving orders:", error);
      return [];
    }
  },
};
