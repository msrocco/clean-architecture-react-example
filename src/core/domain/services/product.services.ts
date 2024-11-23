import { Product } from "../entities/product";

export interface IProductServices {
  getFormattedPrice: (product: Product) => string;
}

type BuildProductServices = () => IProductServices;

export const buildProductServices: BuildProductServices = () => {
  const getFormattedPrice: IProductServices["getFormattedPrice"] = (
    product
  ) => {
    return "CA $" + product.price.toFixed(2);
  };

  return {
    getFormattedPrice,
  };
};
