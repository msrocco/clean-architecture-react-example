import { useCartStore } from "@/core/stores/cart.store";
import { CartItem } from "@/core/domain/entities/cart";
import { useCartDependenciesContext } from "./cart.dependencies";

interface CartViewControllerReturn {
  cart: CartItem[];
  total: number;
  handleAddItem: (item: Omit<CartItem, "quantity">) => void;
  handleRemoveItem: (productId: string) => void;
  handleUpdateQuantity: (productId: string, quantity: number) => void;
  handleClearCart: () => void;
}

export const useCartViewController = (): CartViewControllerReturn => {
  const { items, setItems, clearCart } = useCartStore();
  const { buildCartServices } = useCartDependenciesContext();

  const cartServices = buildCartServices();

  const handleAddItem = (item: Omit<CartItem, "quantity">) => {
    const updatedItems = cartServices.addItem(items, item);
    setItems(updatedItems);
  };

  const handleRemoveItem = (productId: string) => {
    const updatedItems = cartServices.removeItem(items, productId);
    setItems(updatedItems);
  };

  const handleUpdateQuantity = (productId: string, quantity: number) => {
    const updatedItems = cartServices.updateItemQuantity(items, productId, quantity);
    setItems(updatedItems);
  };

  const handleClearCart = () => {
    clearCart();
  };

  const total = cartServices.calculateTotal(items);

  return {
    cart: items,
    total,
    handleAddItem,
    handleRemoveItem,
    handleUpdateQuantity,
    handleClearCart,
  };
};
