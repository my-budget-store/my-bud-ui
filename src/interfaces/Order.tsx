export interface OrderItem {
  orderItemId: number;
  productId: number;
  quantity: number;
}

export interface Order {
  orderId: number;
  orderPlacedData: Date;
  orderItems: OrderItem[];
}
