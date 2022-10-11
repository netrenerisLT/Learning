import "../styles/globals.css";
import Navbar from "../components/Navbar";
import { ToastContainer, toast, Slide } from "react-toastify";
import { UserContext } from "../lib/context";
import { useUserData } from "../lib/hooks";

function MyApp({ Component, pageProps }) {
  const userData = useUserData();

  return (
    <UserContext.Provider value={userData}>
      <Navbar />
      <ToastContainer
        position="top-right"
        autoClose={3000}
        hideProgressBar={false}
        transition={Slide}
        limit={3}
        rtl={false}
        newestOnTop
        closeOnClick
        draggable
        pauseOnHover
      />
      <Component {...pageProps} />
    </UserContext.Provider>
  );
}

export default MyApp;
