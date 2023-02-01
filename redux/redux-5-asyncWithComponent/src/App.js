import Cart from "./components/Cart/Cart";
import Layout from "./components/Layout/Layout";
import Products from "./components/Shop/Products";
import Notification from "./components/UI/Notification";
import { useSelector, useDispatch } from "react-redux";
import { useEffect } from "react";
import { uiSliceActions } from "./store/uiSlice";

let firstRender = true;

function App() {
  const showCart = useSelector((state) => state.ui.cartVisible);
  const cart = useSelector((state) => state.cart);
  const dispatch = useDispatch();
  const notification = useSelector((state) => state.ui.notification);

  useEffect(() => {
    const sendCartData = async () => {
      dispatch(
        uiSliceActions.showNotification({
          status: "pending",
          title: "Sending...",
          message: "Sending cart data.",
        })
      );
      const response = await fetch(
        "https://redux-d4edd-default-rtdb.firebaseio.com/cart.json",
        {
          method: "PUT",
          body: JSON.stringify(cart),
        }
      );
      if (!response.ok) {
        throw new Error("Sending cart data failed");
      }

      dispatch(
        uiSliceActions.showNotification({
          status: "success",
          title: "Success!",
          message: "Sent cart data successfully.",
        })
      );
    };
    //stop first render to throw an error
    if (firstRender) {
      firstRender = false;
      return;
    }

    sendCartData().catch((error) => {
      dispatch(
        uiSliceActions.showNotification({
          status: "error",
          title: "Error!",
          message: "Sending cart data failed.",
        })
      );
    });
  }, [cart, dispatch]);

  return (
    <>
      {notification && (
        <Notification
          status={notification.status}
          title={notification.title}
          message={notification.message}
        />
      )}
      <Layout>
        {showCart && <Cart />}
        <Products />
      </Layout>
    </>
  );
}

export default App;
