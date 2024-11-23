import { productMock } from "@/core/domain/__mocks__/product.mock";
import { IHttpClient } from "@/core/data/interfaces/http-client.interface";
import { buildProductsAdapters } from "../product.adapters";

const httpClient: IHttpClient = {
  delete: jest.fn(),
  post: jest.fn(),
  put: jest.fn(),
  patch: jest.fn(),
  get: jest.fn().mockResolvedValue({ statusCode: 200, data: productMock }),
};

const adapter = buildProductsAdapters(httpClient);

describe("Product Adapter", () => {
  it("Should call endpoint correctly", async () => {
    const productId = "1";

    await adapter.get({ id: productId });

    expect(httpClient.get).toHaveBeenCalledWith({
      url: `/api/products/${productId}`,
    });
  });

  it("Should return data correctly", async () => {
    const productId = "1";
    const expectedResponse = productMock;

    const result = await adapter.get({ id: productId });

    expect(result).toEqual(expectedResponse);
  });
});
