import { cartActions } from "./cart-slice";
import { uiActions } from "./ui-slice";

export const fetchCartData = () => {
  return async (dispatch) => {
    const fetchData = async () => {
      const response = await fetch(
        "https://reduxtest-305d5-default-rtdb.europe-west1.firebasedatabase.app/cart.json"
      );

      if (!response.ok) {
        throw new Error("Couldnt load data");
      }
      const data = await response.json();
      return data;
    };
    try {
      const cartData = await fetchData();
      dispatch(cartActions.replaceCart(cartData));
    } catch (error) {
      dispatch(
        uiActions.showNotification({
          status: "error",
          title: "Error!",
          message: "There was an error for loading the cart data.",
        })
      );
    }
  };
};

export function sendCartData(cart) {
  return async (dispatch) => {
    dispatch(
      uiActions.showNotification({
        status: "pending",
        title: "Sending...",
        message: "Your cart data is sending.",
      })
    );

    const sendRequest = async () => {
      const response = await fetch(
        "https://reduxtest-305d5-default-rtdb.europe-west1.firebasedatabase.app/cart.json",
        {
          method: "PUT",
          body: JSON.stringify(cart),
        }
      );
      if (!response.ok) {
        throw new Error("sending cart data failed");
      }
    };

    try {
      await sendRequest();

      dispatch(
        uiActions.showNotification({
          status: "success",
          title: "Success!",
          message: "Your cart data was sent.",
        })
      );
    } catch (error) {
      dispatch(
        uiActions.showNotification({
          status: "error",
          title: "Error!",
          message: "There was an error for sending the cart data.",
        })
      );
    }
  };
}
