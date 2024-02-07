import { useSelector, useDispatch } from "react-redux";
import Cart from "./components/Cart/Cart";
import Layout from "./components/Layout/Layout";
import Products from "./components/Shop/Products";
import Notification from "./components/UI/Notification";
import { useEffect } from "react";
import { sendCartData } from "./store/cart-slice";
let isInitialCart = true;

function App() {
  const showCart = useSelector((state) => state.uiSlice.cartIsVisible);
  const dispatch = useDispatch();

  const cart = useSelector((state) => state.cartSlice);
  const notification = useSelector((state) => state.uiSlice.notification);

  useEffect(() => {
    if (isInitialCart) {
      isInitialCart = false;
      return;
    }
    dispatch(sendCartData(cart));
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
