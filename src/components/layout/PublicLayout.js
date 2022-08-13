import React from "react";
import { Outlet } from "react-router-dom";
import Navbar from "../Navbar";

const PublicLayout = ({ children }) => {
  return (
    <>
      <Navbar />
      <main>{children ? children : <Outlet />}</main>
    </>
  );
};

export default PublicLayout;
