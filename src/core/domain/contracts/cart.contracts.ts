import { Cart } from "../entities/cart";

export interface CartService {
  addItemToCart(cartId: string, productId: string, quantity: number): Promise<void>;
  removeItemFromCart(cartId: string, productId: string): Promise<void>;
  updateCartItem(cartId: string, productId: string, quantity: number): Promise<void>;
  getCart(cartId: string): Promise<Cart>;
}
