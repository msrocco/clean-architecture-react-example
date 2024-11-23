import { Product } from "../entities/product";

export type GetProductParams = {
  id: string;
};

export type GetProductReturn = Promise<Product | undefined>;

export type GetProduct = (params: GetProductParams) => GetProductReturn;
