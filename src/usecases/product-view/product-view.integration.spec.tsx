import { productMock } from "@/core/domain/__mocks__/product.mock";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { render, screen } from "@testing-library/react";
import { ProductViewCard } from "./product-view.card";
import { ProductViewDependenciesProvider } from "./product-view.dependencies";

describe("ProductViewCard", () => {
  beforeEach(() => {
    const client = new QueryClient();

    render(
      <QueryClientProvider client={client}>
        <ProductViewDependenciesProvider
          value={{
            buildProductsAdapters: () => ({
              get: () => Promise.resolve(productMock),
            }),
          }}
        >
          <ProductViewCard id="1" />
        </ProductViewDependenciesProvider>
      </QueryClientProvider>
    );
  });

  it("Should show product name", async () => {
    expect(await screen.findByText(new RegExp(productMock.name))).toBeVisible();
  });

  it("Should show product price", async () => {
    expect(await screen.findByText(/CA \$1999.99/)).toBeVisible();
  });

  it("Should show product image", async () => {
    const image = await screen.findByAltText(new RegExp(productMock.name));

    expect(image).toBeInTheDocument();
    expect(image).toBeVisible();
  });
});
