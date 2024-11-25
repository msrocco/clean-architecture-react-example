import { create } from "zustand";
import { CartItem } from "@/core/domain/entities/cart";

type CartState = {
  items: CartItem[];
  setItems: (items: CartItem[]) => void;
  clearCart: () => void;
};

export const useCartStore = create<CartState>((set) => ({
  items: [],
  setItems: (items) => set({ items }),
  clearCart: () => set({ items: [] }),
}));
