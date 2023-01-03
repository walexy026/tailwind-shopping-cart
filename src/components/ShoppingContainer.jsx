import React from "react";
import { items } from "../CartItems";
import ShoppingItems from "./ShoppingItems";

export default function ShoppingContainer() {
  return (
    <div className="section grid lg:grid-cols-3 md:grid-cols-2 gap-6 my-12 mx-4">
      {items.map((item) => {
        return <ShoppingItems key={item.id} item={item} />;
      })}
    </div>
  );
}
