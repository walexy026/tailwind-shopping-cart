import React from "react";
// import { useSelector } from "react-redux";
// import CheckOut from "./components/CheckOut";
import Navbar from "./components/Navbar";
import ShoppingContainer from "./components/ShoppingContainer";

function App() {
  // const { isOpen } = useSelector((state) => state.checkout);
  return (
    <div>
      <Navbar />
      <ShoppingContainer />
      {/* <CheckOut /> */}
      {/* {isOpen && <CheckOut />} */}
    </div>
  );
}

export default App;
