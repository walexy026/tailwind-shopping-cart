import React from "react";

export default function ShoppingItems({ item }) {
  const { id, image, name, price } = item;
  return (
    <div>
      <div className="flex items-center justify-center h-[400px] bg-blue rounded-full">
        <img src={image} alt="" className="w-[200px]" />
        <p>{price}</p>
      </div>
    </div>
  );
}
