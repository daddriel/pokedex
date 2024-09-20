
import { Carousel } from "flowbite-react";
import React from "react";

export const Hero: React.FC = ()=> {
  return (

    <div className="h-56 sm:h-[400px] xl:h-[600px] 2xl:h-[800px]">
      <Carousel >
        <img src="/src/assets/pokemons/1348998.png" alt="..." />
        <img src="/src/assets/pokemons/1351278.png" alt="..." />
        <img src="/src/assets/pokemons/1351279.png" alt="..." />
        <img src="/src/assets/pokemons/1351785.png" alt="..." />
        <img src="/src/assets/pokemons/613932.png" alt="..." />
      </Carousel>
    </div>
  );
}
