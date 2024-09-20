import React from "react";
import { NavBarPoke } from "../components/NavBar";
import { Outlet } from "react-router-dom";

export const DefaultLayout: React.FC = () => {
  return (
    <>
      <NavBarPoke />
      <Outlet />
    </>

  )
} 