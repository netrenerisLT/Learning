import { Outlet } from "react-router-dom";
import MainNavgation from "../components/MainNavgation";

function RootLayout() {
  return (
    <>
      <MainNavgation></MainNavgation>
      <main>
        <Outlet></Outlet>
      </main>
    </>
  );
}

export default RootLayout;
