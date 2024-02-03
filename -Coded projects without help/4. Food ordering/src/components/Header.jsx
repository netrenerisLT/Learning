import { useContext } from "react";
import logoImg from "../assets/logo.jpg";
import Button from "./UI/Button";
import CartContext from "../store/CartContext";

export default function Header() {
  const cartCtx = useContext(CartContext);
  console.log(cartCtx.items)

  const totalCartItems = cartCtx.items.reduce(
    (totalNumberOfItems, singleItem) => {
      return totalNumberOfItems + singleItem.quantity;
    },
    0
  );

  return (
    <header id="main-header">
      <div id="title">
        <img src={logoImg} alt="Food order" />
        <h1>Fooder</h1>
      </div>
      <nav>
        <Button textOnly>Cart ({totalCartItems})</Button>
      </nav>
    </header>
  );
}
