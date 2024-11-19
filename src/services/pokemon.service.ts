import { PokemonGQL } from "../models/pokedataGQL.models";
import { PokemonGQLById } from "../models/pokedataGQLById.models";
import { APIGQL } from "./api";

export class PokemonService {

  private static readonly queryAll: string = `
  query MyQuery($limit: Int, $offset: Int) {
    pokemon_v2_pokemon(limit: $limit, offset: $offset, where: {pokemon_v2_pokemontypes: {pokemon_v2_pokemon: {name: {_like: "%%"}}}, pokemon_v2_pokemonsprites: {pokemon_v2_pokemon: {name: {_like: "%%"}}}}) {
      id
      name
      height
      weight
      pokemon_v2_pokemonsprites {
        sprites(path: "other.official-artwork.front_default")
      }
      pokemon_v2_pokemontypes {
        pokemon_v2_type {
          name
        }
      }
    }
  }
  `;

  private static readonly queryById: string =`
  query GetPokemonDetails($id: Int!) {
    pokemon_v2_pokemon(where: {id: {_eq: $id}}) {
      id
      name
      order
      weight
      height
      base_experience
      pokemon_v2_pokemontypes {
        pokemon_v2_type {
          name
        }
      }
      pokemon_v2_pokemonabilities {
        pokemon_v2_ability {
          name
          pokemon_v2_abilityeffecttexts {
            effect
          }
        }
      }
      pokemon_v2_pokemonsprites {
        sprites(path: "other.official-artwork.front_default")
      }
    }
  }

  `;

  private static readonly querySearch = `
  query MyQuery($limit: Int, $offset: Int, $name: String) {
    pokemon_v2_pokemon(limit: $limit, offset: $offset, where: {name: {_regex: $name}}) {
      id
      name
      height
      weight
      pokemon_v2_pokemonsprites {
        sprites(path: "other.official-artwork.front_default")
      }
      pokemon_v2_pokemontypes {
        pokemon_v2_type {
          name
        }
      }
    }
  }
`;

  async getPokemonsGQL(limit: number, offset: number): Promise<PokemonGQL[]> {
    const { data } = await APIGQL.post('', {
      query: PokemonService.queryAll,
      variables: { limit, offset }
    });
    return data.data.pokemon_v2_pokemon;
  }

  async getPokemonsSearchGQL(limit: number, offset: number, name: string): Promise<PokemonGQL[]> {
    const { data } = await APIGQL.post('', {
      query: PokemonService.querySearch,
      variables: { limit, offset, name }
    });
    return data.data.pokemon_v2_pokemon;
  }

  async getPokemonsGQLById(id:number): Promise<PokemonGQLById> {
    const { data } = await APIGQL.post('', {
      query: PokemonService.queryById,
      variables: { id }
    });
    return data.data.pokemon_v2_pokemon[0];
  }
}
