import React from "react";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import HomeIcon from "@mui/icons-material/Home";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
export function Navbar({ setSearch }) {
  const cart = useSelector((state) => state.cart);
  console.log(cart);
  return (
    <section className="w-screen bg-red-400 h-[56px] sticky top-0 flex items-center justify-center ">
      <Link to="/">
        <HomeIcon className="mr-[300px]" />
      </Link>
      <form>
        {" "}
        <input
          placeholder="search"
          onChange={(e) => {
            setSearch(e.target.value);
          }}
        />
      </form>

      <ShoppingCartIcon className="ml-[300px] relative z-[6]" />
      <div className="w-[30px] h-[30px] bg-gray-400 absolute right-[530px] top-[-5px] rounded-[50%]">
        {cart.quantity}
      </div>
    </section>
  );
}
