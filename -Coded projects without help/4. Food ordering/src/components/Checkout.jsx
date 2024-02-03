import { useContext } from "react";
import CartContext from "../store/CartContext";
import UserProgressContext from "../store/UserProgressContext";
import { currencyFormatter } from "../util/formatting";
import Button from "./UI/Button";
import Input from "./UI/Input";
import Modal from "./UI/Modal";
import useHTTP from "../hooks/useHttp";
import Error from "./Error";

const requestConfig = {
  method: "POST",
  headers: {
    "Content-Type": "application/json",
  },
};

export default function Checkout() {
  const cartCtx = useContext(CartContext);
  const progressCtx = useContext(UserProgressContext);

  const { data, isLoading, error, sendRequest, clearData } = useHTTP(
    "http://localhost:3000/orders",
    requestConfig
  );

  if (error) {
    return <Error title="Failed to fetch meals." message={error}></Error>;
  }

  const totalPrice = cartCtx.items.reduce(
    (totalPrice, item) => totalPrice + item.quantity * item.price,
    0
  );

  function handleClose() {
    progressCtx.hideCheckout();
  }
  function handleFinish() {
    progressCtx.hideCheckout();
    cartCtx.clearCart();
    clearData()
  }

  function handleSubmit(event) {
    event.preventDefault();

    const formData = new FormData(event.target);
    const checkoutData = Object.fromEntries(formData.entries());

    sendRequest(
      JSON.stringify({
        order: {
          items: cartCtx,
          customer: checkoutData,
        },
      })
    );
  }

  let actions = (
    <>
      <Button onClick={handleClose} textOnly type="button">
        Close
      </Button>
      <Button>Submit Order</Button>
    </>
  );

  if (isLoading) {
    actions = <span>Sending order data...</span>;
  }

  if (data && !error) {
    return (
      <Modal open={progressCtx.progress === "checkout"} onClose={handleFinish}>
        <h2>Success!</h2>
        <p>Your order submitted.</p>
        <p className="modal-actions">
          <Button onClick={handleFinish}>Okay</Button>
        </p>
      </Modal>
    );
  }

  return (
    <Modal open={progressCtx.progress === "checkout"} onClose={handleClose}>
      <form onSubmit={handleSubmit}>
        <h2>Checkout</h2>
        <p>Total Amount: {currencyFormatter.format(totalPrice)} </p>
        <Input label="Full Name" type="text" id="name"></Input>
        <Input label="Email" type="email" id="email"></Input>
        <Input label="Streed Address" type="text" id="street"></Input>
        <div className="control-row">
          <Input label="Postal Code" type="text" id="postal-code"></Input>
          <Input label="City" type="tezt" id="city"></Input>
        </div>
        {error && (
          <Error title="Failed to submit order." message={error}></Error>
        )}
        <p className="modal-actions">{actions}</p>
      </form>
    </Modal>
  );
}
