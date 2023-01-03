import React from "react";
import { BiChevronLeft } from "react-icons/bi";
import { open } from "./State/Slice/CheckOutSlice";
import { useDispatch } from "react-redux";

export default function CheckOut() {
  const dispatch = useDispatch();
  return (
    <div className="bg-transparentBlack fixed z-30 top-0 left-0 w-full h-screen">
      <div className="h-full bg-grey sm:w-[40rem] min-w-[15rem] overflow-y-auto">
        <div className="p-6">
          <div className="flex items-center justify-between">
            <div
              className="flex itemss-center cursor-pointer "
              onClick={() => dispatch(open())}
            >
              <BiChevronLeft size={25} />
              <span className="uppercase text-[1rem] select-none">
                Continue Shopping
              </span>
            </div>
            <div>Shopping Bag (0)</div>
          </div>
        </div>
      </div>
    </div>
  );
}
