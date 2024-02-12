import { Outlet } from "react-router-dom";
import MainNavigation from "../components/MainNavigation";

function Root() {
  return (
    <>
    <MainNavigation></MainNavigation>
    <Outlet></Outlet>
    </>
  )
}

export default Root