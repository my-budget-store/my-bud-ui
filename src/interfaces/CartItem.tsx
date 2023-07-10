export interface createCartItem {
  productId: number;
  quantity: number;
}

export interface CartItem {
  cartId: number;
  productId: number;
  dateAdded: Date;
  quantity: number;
  saveForLater: boolean;
}
