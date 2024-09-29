import { Badge } from "flowbite-react";
import { Card } from "flowbite-react";
import { TypesPokemon } from "../../services/typespokemon.service";
import * as GiIcons from "react-icons/gi";
import { useNavigate } from "react-router-dom";
import { PokemonGQL } from "../../models/pokedataGQL.models";

interface PokemonCardProps {
  pokemon: PokemonGQL;
}

export const PokemonCard: React.FC<PokemonCardProps> = ({ pokemon }) => {
  const navigate = useNavigate();

  const typeService = new TypesPokemon();
  const handleCardClick = () => {
    navigate(`/pokemon/${pokemon.id}`);
  };

  return (
    <Card

      className="max-w-sm transition  ease-in-out delay-150  hover:scale-105 cursor-pointer"
      imgSrc={pokemon.pokemon_v2_pokemonsprites[0].sprites}
      onClick={handleCardClick}
      horizontal
    >
      <h5 className="text-2xl font-normal tracking-tight text-gray-900 dark:text-white uppercase">
        {pokemon.name}
      </h5>
      <span className="text-gray-600 dark:text-white"># {pokemon.id}</span>
      <div className="flex flex-wrap gap-3">
        {pokemon.pokemon_v2_pokemontypes.map((poketype) => {
          const typeInfo = typeService.getTypeInfo(poketype.pokemon_v2_type.name);
          return (
            <Badge key={poketype.pokemon_v2_type.name} color={typeInfo.color} className="rounded-full px-4 text-sm" icon={GiIcons[typeInfo.icon]}>
              {poketype.pokemon_v2_type.name}
            </Badge>
          );
        })}
      </div>
    </Card>
  );
}
