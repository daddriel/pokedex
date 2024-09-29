import React from "react";
import { Outlet } from "react-router-dom";
import { Flowbite } from "flowbite-react";
import { NavBarPoke } from "../components/NavBar";

export const DefaultLayout: React.FC = () => {
  return (
    <>
      <Flowbite>
        <NavBarPoke />
        <Outlet />
      </Flowbite>

    </>

  )
} 