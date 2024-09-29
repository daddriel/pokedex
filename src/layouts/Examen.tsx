import React from "react";
import { Outlet } from "react-router-dom";
import { Flowbite } from "flowbite-react";
import { NavBarExamen } from "../Examen/Components/NavBarExamen";

export const ExamenLayout: React.FC = () => {
  return (
    <>
      <Flowbite>
        <NavBarExamen />
        <Outlet />
      </Flowbite>

    </>

  )
} 