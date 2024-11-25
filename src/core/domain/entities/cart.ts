export type CartItem = {
  productId: string;
  name: string;
  price: number;
  quantity: number;
};

export type Cart = {
  items: CartItem[];
};
