


import { useParams } from "react-router-dom";
import { PokemonService } from "../../services/pokemon.service";
import { useEffect, useState } from "react";
import { TypesPokemon } from "../../services/typespokemon.service";
import * as GiIcons from "react-icons/gi";

import { Badge, Button, Popover } from "flowbite-react";
import { PokemonGQLById } from "../../models/pokedataGQLById.models";
import { RiMedalFill, RiWeightFill } from "react-icons/ri";



export const PokemonDetail: React.FC = () => {
  const { id } = useParams()
  const pokemonService = new PokemonService();
  const [pokemon, setPokemon] = useState<PokemonGQLById>()
  const typeService = new TypesPokemon();

  useEffect(() => {
    if (id) {
      pokemonService.getPokemonsGQLById(Number(id)).then((response) => {
        console.log("pokemon by id", response)
        setPokemon(response)

      })
    }
  })
  return (
    <div className="flex justify-center">
      <div className=" rounded-lg border dark:border-slate-600 p-6 grid grid-cols1 md:grid-cols-2 w-[850px] gap-4 overflow-hidden shadow-lg dark:text-white dark:bg-slate-800">
        <h3 className="md:col-start-1 md:col-span-2 text-center font-thin text-4xl uppercase mb-2">{pokemon?.name}<span> # {pokemon?.id}</span></h3>
        <img className="w-sm" src={pokemon?.pokemon_v2_pokemonsprites[0].sprites} alt={pokemon?.name} />
        <div>
          <div className="px-6 py-4">
            <p className="text-xl font-semibold"> <span className=" text-slate-500 hover:text-sky-500"><RiWeightFill className=" inline" /> Weight: </span> 
             {pokemon?.weight}</p>
            <p className="text-xl font-semibold"><span className=" text-slate-500 hover:text-pink-600"><GiIcons.GiBodyHeight  className=" inline" /> Heigth: </span>  {pokemon?.height}</p>
            <p className="text-xl font-semibold">
            <span className=" text-slate-500 hover:text-green-500"><RiMedalFill   className=" inline" /> Base Experience: </span> {pokemon?.base_experience}</p>
            <div className="mt-4">
              <h3 className="font-bold pb-2 text-pink-500	">Types:</h3>
              <div className="flex flex-wrap gap-3">
                {pokemon?.pokemon_v2_pokemontypes.map((poketype) => {
                  const typeInfo = typeService.getTypeInfo(poketype.pokemon_v2_type.name);
                  if(typeInfo){
                    return (
                      <Badge key={poketype.pokemon_v2_type.name} color={typeInfo.color} className="rounded-full px-4 text-sm" icon={GiIcons[typeInfo.icon as keyof typeof GiIcons]}>
                        {poketype.pokemon_v2_type.name}
                      </Badge>
                    );}
                })}
              </div>

            </div>
            <div className="mt-4">
              <h3 className="font-bold text-teal-500 pb-2">Abilities:</h3>
              <div className="flex flex-wrap gap-3">

                {pokemon?.pokemon_v2_pokemonabilities.map((ability, index) => (
                  <div key={index} className="mb-2">
                    <Popover
                      trigger="hover"
                      content={
                        <div className="w-64 text-sm text-gray-500 dark:text-gray-400">
                          <div className="border-b border-gray-200 bg-gray-100 px-3 py-2 dark:border-gray-600 dark:bg-gray-700">
                            <h3 id="default-popover" className=" uppercase font-thin text-gray-900 dark:text-white">{ability.pokemon_v2_ability.name}</h3>
                          </div>
                          <div className="px-3 py-2">
                            <p>{ability.pokemon_v2_ability.pokemon_v2_abilityeffecttexts[0].effect}</p>
                          </div>
                        </div>
                      }
                      placement="bottom"
                    >
                      <Button gradientDuoTone="greenToBlue" className="px-2" pill size="xs" >
                        <GiIcons.GiWingedSword  className="mr-2 h-5 w-5"/>{ability.pokemon_v2_ability.name}
                      </Button>
                    </Popover>






                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
}