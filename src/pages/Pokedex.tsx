import React from "react";
import { Pokemons } from "../components/Pokedex/PokemonsGallery";

export const PokedexPage: React.FC = ()=>{
  return(
    <div className="container mx-auto p-3">
    
      <Pokemons></Pokemons>
    </div>
  )
}