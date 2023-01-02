import React, { useEffect, useState } from "react";
import { BiShoppingBag } from "react-icons/bi";

export default function Navbar() {
  const [scroll, setScroll] = useState(false);

  useEffect(() => {
    window.addEventListener("scroll", () => {
      setScroll(window.scrollY > 20);
    });
  }, []);
  return (
    <div
      className={`${
        scroll ? "bg-sky-500 shadow-lg" : ""
      } fixed top-0 left-0 w-full z-20`}
    >
      <div className=" flex items-center justify-between relative container  py-4 px-2 mx-auto">
        <div className="font-bold text-xl">Shopify</div>
        <div className="relative cursor-pointer">
          <BiShoppingBag className="text-3xl opacity-80" />
          <div className="absolute w-4 h-4 z-10 right-[-3px] bottom-[-3px] rounded-full flex items-center justify-center text-[10px] bg-black text-white">
            0
          </div>
        </div>
      </div>
    </div>
  );
}
