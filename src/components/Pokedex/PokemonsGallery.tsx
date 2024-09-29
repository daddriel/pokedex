import { useEffect, useState } from "react";
import { PokemonService } from "../../services/pokemon.service";
import { PokemonCard } from "./PokemonCard";
import { Label, Pagination, TextInput } from "flowbite-react";
import { PokemonGQL } from "../../models/pokedataGQL.models";
import { FiSearch } from "react-icons/fi";


export const Pokemons: React.FC = () => {
  const pokeService = new PokemonService();

  const [pokemons, setPokemons] = useState<PokemonGQL[]>([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(0);
  const [searchText, setSearchText] = useState("");

  const itemsPerPage = 15;
  const onPageChange = (page: number) => setCurrentPage(page);

  useEffect(() => {
    const offset = (currentPage - 1) * itemsPerPage;
    if (searchText) {
      pokeService.getPokemonsSearchGQL(itemsPerPage, offset, searchText)
        .then((response) => {
          console.log("response", response)
          setPokemons(response);
          setTotalPages(pokemons.length / itemsPerPage);
        });
    } else {
      pokeService.getPokemonsGQL(itemsPerPage, offset).then((response) => {
        console.log("response", response);
        setPokemons(response);

        setTotalPages(Math.ceil(1050 / itemsPerPage));
      });
    }




  }, [currentPage, searchText]);

  const handleKeyEnter = (e) => {
    if(e.key === "Enter"){
      console.log("e", e)

      setSearchText(e.target.value)

    }
  }
  return (
    <div className="pt-10">

      <div className="max-w-md mx-auto">
      <TextInput
          id="search"
          type="text"
          onKeyDown={handleKeyEnter}
          icon={FiSearch}
          placeholder="Type pokemon name"
          required
        />
      </div>

      <div className="container mx-auto grid justify-items-center md:justify-items-stretch grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-5 pt-20 pb-2">
        {pokemons.map((poke) => (

          <PokemonCard
            key={poke.id}
            pokemon={poke}
          />

        ))}
      </div>
      <Pagination className="flex justify-center pb-20"
        currentPage={currentPage}
        totalPages={totalPages}
        onPageChange={onPageChange}
        showIcons
      />
    </div>
  );
};
