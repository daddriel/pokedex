import React from "react";
import { ButtonCustom } from "../Components/Button";
import { CardCustom } from "../Components/Card";

export const Page1: React.FC = ()=>{
  return(
    <>
        <ButtonCustom text="boton prueba" />
        <CardCustom title="Card title" description="Description"/>

    </>

  )
}