"use client";

import { useProductViewController } from "./product-view.controller";

export interface ProductViewCardProps {
  id: string;
}

export const ProductViewCard: React.FC<ProductViewCardProps> = function (props) {
  const { product, services } = useProductViewController(props);

  if (!product.data) return <p>Loading</p>;

  return (
    <div className="bg-white rounded-lg h-[450px] w-full max-w-[350px] flex items-start flex-col overflow-hidden">
      <img src={product.data.imageUrl} alt={product.data.name} />

      <div className="p-4 w-full h-full flex flex-col justify-between">
        <div className="flex flex-col gap-1">
          <p className="text-gray-900 font-bold text-lg">{product.data.name}</p>
          <p className="text-gray-900">{services.getFormattedPrice(product.data)}</p>
        </div>

        <button className="w-full h-12 bg-black">Add to Bag</button>
      </div>
    </div>
  );
};
