// import React from "react";
// import { add } from "./State/Slice/CartSlice";
// import { useDispatch } from "react-redux";
// export default function ShoppingItems({ item }) {
//   const { id, image, name, price } = item;
//   const dispatch = useDispatch();
//   return (
//     <div>
//       <div className="flex items-center justify-center h-[400px] bg-sky-500/50 ">
//         <img src={image} alt="" className="w-[200px]" />
//       </div>
//       <div className="mt-6 flex justify-between items-center px-4">
//         <div>
//           <div className="text-sm font-bold mb-3"> {name}</div>
//           <div className="text-xl font-bold">${price}</div>
//         </div>
//         <button
//           className="bg-sky-500 p-3 rounded-500"
//           onClick={() => dispatch(add(item))}
//         >
//           Add to Cart
//         </button>
//       </div>
//     </div>
//   );
// }
