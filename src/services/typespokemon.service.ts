export class TypesPokemon {
  static instance: TypesPokemon;

  public readonly types = [
    {
      "name": "normal",
      "url": "https://pokeapi.co/api/v2/type/1/",
      "color": "gray",
      "icon": "GiPlainDagger"
    },
    {
      "name": "fighting",
      "url": "https://pokeapi.co/api/v2/type/2/",
      "color": "failure",
      "icon": "GiBoxingGlove"
    },
    {
      "name": "flying",
      "url": "https://pokeapi.co/api/v2/type/3/",
      "color": "indigo",
      "icon": "GiFeather"
    },
    {
      "name": "poison",
      "url": "https://pokeapi.co/api/v2/type/4/",
      "color": "purple",
      "icon": "GiPoisonBottle"
    },
    {
      "name": "ground",
      "url": "https://pokeapi.co/api/v2/type/5/",
      "color": "warning",
      "icon": "GiGroundbreaker"
    },
    {
      "name": "rock",
      "url": "https://pokeapi.co/api/v2/type/6/",
      "color": "dark",
      "icon": "GiStonePile"
    },
    {
      "name": "bug",
      "url": "https://pokeapi.co/api/v2/type/7/",
      "color": "success",
      "icon": "GiLadybug"
    },
    {
      "name": "ghost",
      "url": "https://pokeapi.co/api/v2/type/8/",
      "color": "purple",
      "icon": "GiGhost"
    },
    {
      "name": "steel",
      "url": "https://pokeapi.co/api/v2/type/9/",
      "color": "info",
      "icon": "GiSteelClaws"
    },
    {
      "name": "fire",
      "url": "https://pokeapi.co/api/v2/type/10/",
      "color": "failure",
      "icon": "GiFire"
    },
    {
      "name": "water",
      "url": "https://pokeapi.co/api/v2/type/11/",
      "color": "blue",
      "icon": "GiWaterDrop"
    },
    {
      "name": "grass",
      "url": "https://pokeapi.co/api/v2/type/12/",
      "color": "success",
      "icon": "GiGrass"
    },
    {
      "name": "electric",
      "url": "https://pokeapi.co/api/v2/type/13/",
      "color": "warning",
      "icon": "GiElectric"
    },
    {
      "name": "psychic",
      "url": "https://pokeapi.co/api/v2/type/14/",
      "color": "pink",
      "icon": "GiBrain"
    },
    {
      "name": "ice",
      "url": "https://pokeapi.co/api/v2/type/15/",
      "color": "blue",
      "icon": "GiIceCube"
    },
    {
      "name": "dragon",
      "url": "https://pokeapi.co/api/v2/type/16/",
      "color": "indigo",
      "icon": "GiDragonHead"
    },
    {
      "name": "dark",
      "url": "https://pokeapi.co/api/v2/type/17/",
      "color": "dark",
      "icon": "GiEvilBat"
    },
    {
      "name": "fairy",
      "url": "https://pokeapi.co/api/v2/type/18/",
      "color": "pink",
      "icon": "GiFairyWand"
    },
    {
      "name": "stellar",
      "url": "https://pokeapi.co/api/v2/type/19/",
      "color": "warning",
      "icon": "GiStarSwirl"
    },
    {
      "name": "unknown",
      "url": "https://pokeapi.co/api/v2/type/10001/",
      "color": "teal",
      "icon": "GiQuestionMark"
    }
  ];

  constructor() {
    if (!TypesPokemon.instance) {
      TypesPokemon.instance = this;
    }
    return TypesPokemon.instance;
  }

  getTypes() {
    return this.types;
  }

  getTypeInfo(name: string) {
    return this.types.find(type => type.name === name);
  }
}
