import {
  buildProductServices,
  IProductServices,
} from "@/core/domain/services/product.services";
import {
  useGetProduct,
  UseGetProductReturn,
} from "@/repositories/product/get.repository";
import { useState } from "react";
import { ProductViewCardProps } from "./product-view.card";
import { useProductViewDependenciesContext } from "./product-view.dependencies";

interface ProductViewControllerReturn {
  product: UseGetProductReturn;
  services: IProductServices;
  handleToggleImage: () => void;
  canShowImage: boolean;
}

type ProductViewControllerParams = ProductViewCardProps;

type ProductViewUseCase = (
  params: ProductViewControllerParams
) => ProductViewControllerReturn;

export const useProductViewController: ProductViewUseCase = ({ id }) => {
  const { buildProductsAdapters } = useProductViewDependenciesContext();

  const product = useGetProduct({ adapters: buildProductsAdapters(), id });

  const [canShowImage, setCanShowImage] = useState(false);

  const handleToggleImage = () => {
    setCanShowImage(!canShowImage);
  };

  return {
    product,
    handleToggleImage,
    services: buildProductServices(),
    canShowImage,
  };
};
