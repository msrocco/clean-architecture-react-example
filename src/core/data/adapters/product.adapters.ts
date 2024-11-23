import { axiosClient } from "@/core/infra";
import { IHttpClient } from "@/core/data/interfaces/http-client.interface";
import {
  GetProduct,
  GetProductReturn,
} from "../../domain/contracts/product.contracts";

export interface ProductAdapters {
  get: GetProduct;
}

export type BuildProductsAdapters = (http?: IHttpClient) => ProductAdapters;

export const buildProductsAdapters: BuildProductsAdapters = (
  http = axiosClient()
) => {
  const get: ProductAdapters["get"] = async ({ id }) => {
    return (await http.get<GetProductReturn>({ url: `/api/products/${id}` }))
      .data;
  };

  return {
    get,
  };
};
