import { CartItem } from "../entities/cart";

export interface ICartServices {
  addItem: (items: CartItem[], item: Omit<CartItem, "quantity">) => CartItem[];
  removeItem: (items: CartItem[], productId: string) => CartItem[];
  updateItemQuantity: (
    items: CartItem[],
    productId: string,
    quantity: number
  ) => CartItem[];
  clearCart: () => CartItem[];
  calculateTotal: (items: CartItem[]) => number;
}

type BuildCartServices = () => ICartServices;

export const buildCartServices: BuildCartServices = () => {
  const addItem: ICartServices["addItem"] = (items, item) => {
    const existingItem = items.find((i) => i.productId === item.productId);
    if (existingItem) {
      return items.map((i) =>
        i.productId === item.productId ? { ...i, quantity: i.quantity + 1 } : i
      );
    }

    return [...items, { ...item, quantity: 1 }];
  };

  const removeItem: ICartServices["removeItem"] = (items, productId) =>
    items.filter((item) => item.productId !== productId);

  const updateItemQuantity: ICartServices["updateItemQuantity"] = (
    items,
    productId,
    quantity
  ) =>
    items.map((item) =>
      item.productId === productId ? { ...item, quantity } : item
    );

  const clearCart: ICartServices["clearCart"] = () => [];

  const calculateTotal: ICartServices["calculateTotal"] = (items) =>
    items.reduce((total, item) => total + item.price * item.quantity, 0);

  return {
    addItem,
    removeItem,
    updateItemQuantity,
    clearCart,
    calculateTotal,
  };
};
