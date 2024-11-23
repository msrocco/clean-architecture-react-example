"use client";

import { ProductViewCard } from "@/usecases/product-view/product-view.card";

export default function Home() {
  return (
    <div className="w-full h-full flex flex-col justify-center items-center bg-slate-200">
      <ProductViewCard id="1" />
    </div>
  );
}
