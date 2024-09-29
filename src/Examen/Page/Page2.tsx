import React, { useState } from "react";
import { ButtonCustom } from "../Components/Button";
import { CardCustom } from "../Components/Card";

export const Page2: React.FC = ()=>{
  const [counter, setCounter] = useState(0);
  const handleEvent = ()=>{
    counter
    setCounter(counter + 1)
  }
  return(
    <>
      <div className="flex items-center flex-col p-10 container mx-auto">
      <span className="text-3xl dark:text-white">You clicked {counter} times</span>
        <CardCustom title="Card title" description="Description"/>
        <ButtonCustom event_counter={handleEvent}  text="counter" />
      </div>
     
    </>

  )
}