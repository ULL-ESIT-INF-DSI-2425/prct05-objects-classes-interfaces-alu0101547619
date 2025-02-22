interface PokemonStats {
    attack: number;
    defense: number;
    speed: number;
    maxHP: number;
  }

export enum PokemonType {
    fuego = "fuego",
    hierba = "hierba",
    agua = "agua" ,
    electrico = "electrico"
}

type OtherStats = [number, number];

interface Pokemon {
    name: string;
    weight_height: OtherStats;
    type: PokemonType;
    stats: PokemonStats
}

export class Pokedex {
  /**
   * Crea una nueva instancia de la Pokedex con una lista opcional de Pokémon.
   * @param _pokemons - Lista de Pokémon a almacenar en la Pokédex.
   */
  constructor(private _pokemons: Pokemon[] = []) {}

  /**
   * Obtiene la lista de Pokémon almacenados en la Pokédex.
   */
  // get pokemons() {
  //   return this._pokemons;
  // }
  
  /**
   * Establece una nueva lista de Pokémon en la Pokédex.
   * @param pokemons - Lista de Pokémon a asignar.
   */
  // set pokemons(pokemons) {
  //   this._pokemons = pokemons;
  // }

  /**
   * Busca Pokémon en la Pokédex según un filtro específico.
   * @param filtro - Criterio de búsqueda (ej. "name", "weight", "height", "type", "attack", etc.).
   * @param dato - Valor a buscar en el filtro (puede ser string o número).
   * @returns Un array de Pokémon que cumplen con el criterio de búsqueda.
   */
  search(filtro: string, dato: string | number): Pokemon[] | undefined {
    return this._pokemons.filter(pokemon => {
      switch (filtro) {
        case "name":
          return pokemon.name.toLowerCase() === String(dato).toLowerCase();

        case "weight":
          return pokemon.weight_height[0] === Number(dato);

        case "height":
          return pokemon.weight_height[1] === Number(dato);

        case "type":
          return pokemon.type === dato;
          //   let tipo = PokemonType[dato as keyof typeof PokemonType];
          // this._pokemons.forEach(pokemon => {
          //   if (pokemon.type === tipo) {
          //     resultado.push(pokemon);
          //   }
          // });
        case "attack":
          return pokemon.stats.attack === Number(dato);

        case "defense":
          return pokemon.stats.defense === Number(dato);

        case "maxHP":
          return pokemon.stats.maxHP === Number(dato);

        case "speed":
          return pokemon.stats.speed === Number(dato);

        default:
          return undefined; // Filtro inválido, no se devuelve nada
      }
    });
  }
}