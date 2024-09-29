export interface PokemonGQLById {
  id: number
  name: string
  order: number
  weight: number
  height: number
  base_experience: number
  pokemon_v2_pokemontypes: PokemonV2Pokemontype[]
  pokemon_v2_pokemonabilities: PokemonV2Pokemonability[]
  pokemon_v2_pokemonsprites: PokemonV2Pokemonsprite[]
}

export interface PokemonV2Pokemontype {
  pokemon_v2_type: PokemonV2Type
}

export interface PokemonV2Type {
  name: string
}

export interface PokemonV2Pokemonability {
  pokemon_v2_ability: PokemonV2Ability
}

export interface PokemonV2Ability {
  name: string
  pokemon_v2_abilityeffecttexts: PokemonV2Abilityeffecttext[]
}

export interface PokemonV2Abilityeffecttext {
  effect: string
}

export interface PokemonV2Pokemonsprite {
  sprites: string
}