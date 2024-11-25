import { ShoppingCart } from "lucide-react";

export default function Header() {
  return (
    <header className="w-full h-14 flex items-center justify-end px-16 bg-white">
      <ShoppingCart color="gray" />
    </header>
  );
}
