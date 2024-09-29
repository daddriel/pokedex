import React from 'react';

import PokeLogo from "../assets/pokeball.svg"
import { DarkThemeToggle} from "flowbite-react";

import { Button, Navbar, NavbarBrand } from "flowbite-react";
import { Link } from 'react-router-dom';

export const NavBarPoke : React.FC = () =>  {
  return (
    <Navbar fluid className='border-b border-gray-200'>
      <NavbarBrand href="/">
      <img src={PokeLogo} className="mr-3 h-6 sm:h-9" alt="pokeball" />
        <span className="self-center whitespace-nowrap text-xl font-semibold dark:text-white">Pokemon</span>
      </NavbarBrand>
      <div className="flex gap-2">
      <Button as={Link} to={"pokedex"} outline gradientDuoTone="purpleToBlue">Pokedex</Button>
      <DarkThemeToggle />
      </div>
    </Navbar>
  );
}
