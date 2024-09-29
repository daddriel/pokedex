import React, { useEffect, useState } from "react";
import { PokemonGQL } from "../../models/pokedataGQL.models";
import { apiPoke } from "../../services/pokefetch.service";
import { PokemonService } from "../../services/pokemon.service";

export const Page3: React.FC = ()=>{
  const pokeaxios = new PokemonService

  const [pokemons, setPokemons] = useState<PokemonGQL[]>([]);
  const [pokemonsfetch, setPokemonsfetch ] = useState<any[]>([])

  useEffect(() => {
    pokeaxios.getPokemonsGQL(20, 0).then((response) => {
      console.log("Axios", response);
      setPokemons(response);
      
      const fetchData = async () => {
          const {data} = await apiPoke();
          console.log("Pokemons fetch", data)

          setPokemonsfetch(data);

       
      };
      fetchData();

       
    });

  }, []);

  return(
    <>
      
     
    </>

  )
}