import { productMock } from "../../__mocks__/product.mock";
import { buildProductServices } from "../product.services";

const { getFormattedPrice } = buildProductServices();

describe("Product services", () => {
  describe("getFormattedPrice", () => {
    it("Should return formatted price in CAD", () => {
      expect(getFormattedPrice(productMock)).toEqual("CA $1999.99");
    });
  });
});
