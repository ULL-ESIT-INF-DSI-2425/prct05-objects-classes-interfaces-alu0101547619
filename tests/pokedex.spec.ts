import { describe, expect, test } from "vitest";
import { Pokedex, PokemonType, Pokemon } from "../src/ejercicio-1/pokedex";

let pokedex = new Pokedex([
    { 
      name: "Charmander", 
      weight_height: [8.5, 0.6], 
      type: PokemonType.fuego, 
      stats: { attack: 52, defense: 43, speed: 65, maxHP: 39 } 
    },
    { 
      name: "Bulbasaur", 
      weight_height: [6.9, 0.7], 
      type: PokemonType.hierba, 
      stats: { attack: 49, defense: 49, speed: 45, maxHP: 45 } 
    },
    { 
      name: "Squirtle", 
      weight_height: [9, 0.5], 
      type: PokemonType.agua, 
      stats: { attack: 48, defense: 65, speed: 43, maxHP: 44 } 
    },
    { 
      name: "Pikachu", 
      weight_height: [6, 0.4], 
      type: PokemonType.electrico, 
      stats: { attack: 55, defense: 40, speed: 90, maxHP: 35 } 
    }, 
    { 
      name: "Growlithe", 
      weight_height: [19, 0.7], 
      type: PokemonType.fuego, 
      stats: { attack: 70, defense: 45, speed: 60, maxHP: 55 } 
    },
    { 
      name: "Bellsprout", 
      weight_height: [4, 0.7], 
      type: PokemonType.hierba, 
      stats: { attack: 75, defense: 35, speed: 40, maxHP: 50 } 
    },
    { 
      name: "Tentacool", 
      weight_height: [45.5, 0.9], 
      type: PokemonType.agua, 
      stats: { attack: 40, defense: 35, speed: 70, maxHP: 40 } 
    },
    { 
      name: "Electrode", 
      weight_height: [66.6, 1.2], 
      type: PokemonType.electrico, 
      stats: { attack: 50, defense: 70, speed: 140, maxHP: 60 } 
    },
    { 
      name: "Ponyta", 
      weight_height: [30, 1], 
      type: PokemonType.fuego, 
      stats: { attack: 85, defense: 55, speed: 90, maxHP: 50 } 
    },
    { 
      name: "Exeggcute", 
      weight_height: [2.5, 0.4], 
      type: PokemonType.hierba, 
      stats: { attack: 40, defense: 80, speed: 40, maxHP: 60 } 
    },
    { 
      name: "Seadra", 
      weight_height: [25, 1.2], 
      type: PokemonType.agua, 
      stats: { attack: 65, defense: 95, speed: 85, maxHP: 55 } 
    },
    { 
      name: "Jolteon", 
      weight_height: [24.5, 0.8], 
      type: PokemonType.electrico, 
      stats: { attack: 65, defense: 60, speed: 130, maxHP: 65 } 
    },
    { 
      name: "Flareon", 
      weight_height: [25, 0.9], 
      type: PokemonType.fuego, 
      stats: { attack: 130, defense: 60, speed: 65, maxHP: 65 } 
    },
    { 
      name: "Tangela", 
      weight_height: [35, 1], 
      type: PokemonType.hierba, 
      stats: { attack: 55, defense: 115, speed: 60, maxHP: 65 } 
    },
    { 
      name: "Gyarados", 
      weight_height: [235, 6.5], 
      type: PokemonType.agua, 
      stats: { attack: 125, defense: 79, speed: 81, maxHP: 95 } 
    },
    { 
      name: "Zapdos", 
      weight_height: [52.6, 1.6], 
      type: PokemonType.electrico, 
      stats: { attack: 90, defense: 85, speed: 100, maxHP: 90 } 
    }
  ]);

  describe("Pokedex search function tests", () => {
    test("Buscar por nombre 'Pikachu'", () => {
      expect(pokedex.search("name", "Pikachu")).toEqual([
        {
          name: "Pikachu",
          weight_height: [6, 0.4],
          type: PokemonType.electrico,
          stats: { attack: 55, defense: 40, speed: 90, maxHP: 35 },
        },
      ]);
    });
  
    test("Buscar por tipo 'hierba", () => {
      expect(pokedex.search("type", PokemonType.hierba)).toEqual([
        {
          name: 'Bulbasaur',
          weight_height: [ 6.9, 0.7 ],
          type: 'hierba',
          stats: { attack: 49, defense: 49, speed: 45, maxHP: 45 }
        },
        {
          name: 'Bellsprout',
          weight_height: [ 4, 0.7 ],
          type: 'hierba',
          stats: { attack: 75, defense: 35, speed: 40, maxHP: 50 }
        },
        {
          name: 'Exeggcute',
          weight_height: [ 2.5, 0.4 ],
          type: 'hierba',
          stats: { attack: 40, defense: 80, speed: 40, maxHP: 60 }
        },
        {
          name: 'Tangela',
          weight_height: [ 35, 1 ],
          type: 'hierba',
          stats: { attack: 55, defense: 115, speed: 60, maxHP: 65 }
        }
      ]);
    });
  
    test("Buscar por ataque 55 ", () => {
      expect(pokedex.search("attack", 55)).toEqual([
        {
          name: 'Pikachu',
          weight_height: [ 6, 0.4 ],
          type: 'electrico',
          stats: { attack: 55, defense: 40, speed: 90, maxHP: 35 }
        },
        {
          name: 'Tangela',
          weight_height: [ 35, 1 ],
          type: 'hierba',
          stats: { attack: 55, defense: 115, speed: 60, maxHP: 65 }
        }
      ]);
    });

    test("Buscar por peso 30 ", () => {
        expect(pokedex.search("weight", 30)).toEqual([
            {
              name: 'Ponyta',
              weight_height: [ 30, 1 ],
              type: 'fuego',
              stats: { attack: 85, defense: 55, speed: 90, maxHP: 50 }
            }
          ]);
      });

      test("Buscar por altura 0.4 ", () => {
        expect(pokedex.search("height", 0.4)).toEqual([
            {
              name: 'Pikachu',
              weight_height: [ 6, 0.4 ],
              type: 'electrico',
              stats: { attack: 55, defense: 40, speed: 90, maxHP: 35 }
            },
            {
              name: 'Exeggcute',
              weight_height: [ 2.5, 0.4 ],
              type: 'hierba',
              stats: { attack: 40, defense: 80, speed: 40, maxHP: 60 }
            }
          ]);
      });

      test("Buscar por maxHP 55 ", () => {
        expect(pokedex.search("maxHP", 55)).toEqual([
            {
              name: 'Growlithe',
              weight_height: [ 19, 0.7 ],
              type: 'fuego',
              stats: { attack: 70, defense: 45, speed: 60, maxHP: 55 }
            },
            {
              name: 'Seadra',
              weight_height: [ 25, 1.2 ],
              type: 'agua',
              stats: { attack: 65, defense: 95, speed: 85, maxHP: 55 }
            }
          ]);
      });

      test("Buscar por defensa 55 ", () => {
        expect(pokedex.search("defense", 60)).toEqual([
            {
              name: 'Jolteon',
              weight_height: [ 24.5, 0.8 ],
              type: 'electrico',
              stats: { attack: 65, defense: 60, speed: 130, maxHP: 65 }
            },
            {
              name: 'Flareon',
              weight_height: [ 25, 0.9 ],
              type: 'fuego',
              stats: { attack: 130, defense: 60, speed: 65, maxHP: 65 }
            }
          ]);
      });

      test("Buscar por velocidad 40 ", () => {
        expect(pokedex.search("speed", 40)).toEqual([
            {
              name: 'Bellsprout',
              weight_height: [ 4, 0.7 ],
              type: 'hierba',
              stats: { attack: 75, defense: 35, speed: 40, maxHP: 50 }
            },
            {
              name: 'Exeggcute',
              weight_height: [ 2.5, 0.4 ],
              type: 'hierba',
              stats: { attack: 40, defense: 80, speed: 40, maxHP: 60 }
            }
          ]);
      });
  
    test("Buscar por filtro inválido devuelve un array vacío", () => {
      expect(pokedex.search("masa", 100)).toEqual([]);
    });

});
