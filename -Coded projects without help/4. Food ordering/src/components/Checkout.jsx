import { useContext } from "react";
import CartContext from "../store/CartContext";
import UserProgressContext from "../store/UserProgressContext";
import { currencyFormatter } from "../util/formatting";
import Button from "./UI/Button";
import Input from "./UI/Input";
import Modal from "./UI/Modal";

export default function Checkout() {
  const cartCtx = useContext(CartContext);
  const progressCtx = useContext(UserProgressContext);

  const totalPrice = cartCtx.items.reduce(
    (totalPrice, item) => totalPrice + item.quantity * item.price,
    0
  );

  function handleClose() {
    progressCtx.hideCheckout();
  }

  return (
    
    <Modal open={progressCtx.progress === "checkout"} onClose={handleClose}> 
      <form>
        <h2>Checkout</h2>
        <p>Total Amount: {currencyFormatter.format(totalPrice)} </p>
        <Input label="Full Name" type="text" id="full-name"></Input>
        <Input label="Email" type="email" id="email"></Input>
        <Input label="Streed Address" type="text" id="street"></Input>
        <div className="control-row">
          <Input label="Postal Code" type="text" id="postal-code"></Input>
          <Input label="City" type="tezt" id="city"></Input>
        </div>
        <p className="modal-actions">
          <Button onClick={handleClose} textOnly type="button">
            Close
          </Button>
          <Button>Submit Order</Button>
        </p>
      </form>
    </Modal>
  );
}
