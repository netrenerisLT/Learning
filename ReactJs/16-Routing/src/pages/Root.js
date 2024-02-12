import React from "react";
import { Outlet } from "react-router-dom";
import MainNavgation from "../components/MainNavgation";
import classes from "./Root.module.css";

function RootLayout() {
  return (
    <>
      <MainNavgation></MainNavgation>
      <main className={classes.content}>
        <Outlet></Outlet>
      </main>
    </>
  );
}

export default RootLayout;
