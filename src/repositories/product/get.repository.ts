import { UseQueryResult, useQuery } from "@tanstack/react-query";
import { ProductAdapters } from "@/core/data/adapters/product.adapters";
import { GetProductParams } from "@/core/domain/contracts/product.contracts";
import { Product } from "@/core/domain/entities/product";

interface IUseGetProductParams extends GetProductParams {
  adapters: ProductAdapters;
}

export type UseGetProductReturn = UseQueryResult<Product | undefined, Error>;

type UseGetProduct = (params: IUseGetProductParams) => UseGetProductReturn;

export const useGetProduct: UseGetProduct = ({ adapters, ...params }) => {
  const query = useQuery({
    queryFn: () => adapters.get(params),
    queryKey: [params.id],
  });

  return query;
};
