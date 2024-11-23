import { buildProductsAdapters } from "@/core/data/adapters/product.adapters";
import { createGenericContext } from "@/utils/create-generic-context.util";

export const productViewDependencies = {
  buildProductsAdapters,
};

const {
  Provider: ProductViewDependenciesProvider,
  useGenericContext: useProductViewDependenciesContext,
} = createGenericContext<typeof productViewDependencies>(
  productViewDependencies
);

export { ProductViewDependenciesProvider, useProductViewDependenciesContext };
