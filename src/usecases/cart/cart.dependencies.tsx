import { buildCartServices } from "@/core/domain/services/cart.services";
import { createGenericContext } from "@/utils/create-generic-context.util";

export const cartDependencies = {
  buildCartServices,
};

const {
  Provider: CartDependenciesProvider,
  useGenericContext: useCartDependenciesContext,
} = createGenericContext<typeof cartDependencies>(cartDependencies);

export { CartDependenciesProvider, useCartDependenciesContext };
