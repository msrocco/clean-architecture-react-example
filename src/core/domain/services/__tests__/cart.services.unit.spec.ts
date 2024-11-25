import { mockCartItemNew, mockCartExistingItem } from "../../__mocks__/cart.mock";
import { buildCartServices } from "../cart.services";

describe("Cart services", () => {
  const cartServices = buildCartServices();

  describe("addItem", () => {
    it("Should add a new item to the cart", () => {
      const updatedItems = cartServices.addItem([], mockCartItemNew);

      expect(updatedItems).toHaveLength(1);
      expect(updatedItems[0]).toEqual({ ...mockCartItemNew, quantity: 1 });
    });

    it("Should increase the quantity of the item if it already exists", () => {
      const initialItems = [mockCartExistingItem];
      const updatedItems = cartServices.addItem(initialItems, mockCartExistingItem);

      expect(updatedItems).toHaveLength(1);
      expect(updatedItems[0].quantity).toBe(3);
    });
  });

  describe("removeItem", () => {
    it("Should remove an item from the cart", () => {
      const initialItems = [mockCartItemNew, mockCartExistingItem];
      const updatedItems = cartServices.removeItem(
        initialItems,
        mockCartItemNew.productId
      );

      expect(updatedItems).toHaveLength(1);
      expect(updatedItems[0]).toEqual(mockCartExistingItem);
    });
  });

  describe("updateItemQuantity", () => {
    it("Should update the quantity of an existing item", () => {
      const initialItems = [mockCartExistingItem];
      const updatedItems = cartServices.updateItemQuantity(
        initialItems,
        mockCartExistingItem.productId,
        3
      );

      expect(updatedItems[0].quantity).toBe(3);
    });

    it("Should not update the quantity of a non-existing item", () => {
      const initialItems = [mockCartExistingItem];
      const updatedItems = cartServices.updateItemQuantity(
        initialItems,
        "non-existing-id",
        3
      );

      expect(updatedItems).toHaveLength(1);
      expect(updatedItems[0].quantity).toBe(2);
    });
  });

  describe("clearCart", () => {
    it("Should return an empty cart", () => {
      const updatedItems = cartServices.clearCart();

      expect(updatedItems).toHaveLength(0);
    });
  });

  describe("calculateTotal", () => {
    it("Should calculate the total price of items in the cart", () => {
      const items = [mockCartItemNew, mockCartExistingItem];
      const total = cartServices.calculateTotal(items);

      expect(total).toBe(
        mockCartItemNew.price * mockCartItemNew.quantity +
          mockCartExistingItem.price * mockCartExistingItem.quantity
      );
    });

    it("Should return 0 if the cart is empty", () => {
      const total = cartServices.calculateTotal([]);

      expect(total).toBe(0);
    });
  });
});
