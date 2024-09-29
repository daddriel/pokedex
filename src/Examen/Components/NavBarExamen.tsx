import React from 'react';

import Logo from "../../assets/react.svg"
import { DarkThemeToggle} from "flowbite-react";

import { Button, Navbar, NavbarBrand } from "flowbite-react";
import { Link } from 'react-router-dom';

export const NavBarExamen : React.FC = () =>  {
  return (
    <Navbar fluid className='border-b border-gray-200'>
      <NavbarBrand href="/examen">
      <img src={Logo} className="mr-3 h-6 sm:h-9" alt="pokeball" />
        <span className="self-center whitespace-nowrap text-xl font-semibold dark:text-white">Examen</span>
      </NavbarBrand>
      <div className="flex gap-2">
      <Button as={Link} to={"page1"} outline gradientDuoTone="purpleToBlue">Page 1</Button>
      <Button as={Link} to={"page2"} outline gradientDuoTone="purpleToBlue">Page 2</Button>
      <DarkThemeToggle />
      </div>
    </Navbar>
  );
}