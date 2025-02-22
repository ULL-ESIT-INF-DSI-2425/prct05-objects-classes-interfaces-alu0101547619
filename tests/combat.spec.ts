import { describe, expect, test } from "vitest";
import { Combat } from "../src/ejercicio-1/combat";
import { Pokemon, PokemonType } from "../src/ejercicio-1/pokedex";  // Asegúrate de que la ruta es correcta

describe("Combat class tests", () => {
  const charmander: Pokemon = { 
      name: "charmander", 
      weight_height: [8.5, 0.6], 
      type: PokemonType.fuego, 
      stats: { attack: 52, defense: 43, speed: 65, maxHP: 39 } 
  };

  const squirtle: Pokemon = { 
    name: "squirtle", 
    weight_height: [9.0, 0.5], 
    type: PokemonType.agua, 
    stats: { attack: 48, defense: 65, speed: 43, maxHP: 44 } 
  };

    const bulbasaur: Pokemon = { 
        name: "bulbasaur", 
        weight_height: [6.9, 0.7], 
        type: PokemonType.hierba, 
        stats: { attack: 49, defense: 49, speed: 45, maxHP: 45 } 
    };

    const jolteon: Pokemon = { 
        name: "jolteon", 
        weight_height: [24.5, 0.8], 
        type: PokemonType.electrico, 
        stats: { attack: 65, defense: 60, speed: 130, maxHP: 65 } 
    };

    const pikachu: Pokemon = {
        name: "Pikachu",
        weight_height: [6, 0.4],
        type: PokemonType.electrico,
        stats: { attack: 55, defense: 40, speed: 90, maxHP: 0 }
    };

  test("Charmander vs Squirtle - Squirtle debe ganar", () => {
    const combate = new Combat(charmander, squirtle);
    expect(combate.start()).toBe("squirtle");
  });

  test("Charmander vs Charmander - Uno debe ganar", () => {
    const combate = new Combat(charmander, charmander);
    const resultado = combate.start();
    expect(combate.start()).toContain("charmander");
  });

  test("pikachu vs Charmander - Uno debe ganar", () => {
    const combate = new Combat(pikachu, charmander);
    const resultado = combate.start();
    expect(combate.start()).toContain("Combate imposible");
  });

  test("Charmander vs pikachu - Uno debe ganar", () => {
    const combate = new Combat(charmander, pikachu);
    const resultado = combate.start();
    expect(combate.start()).toContain("Combate imposible");
  });

  test("Efectividad de ataque: fuego vs agua debe ser 0.5", () => {
    const combate = new Combat(charmander, squirtle);
    expect(combate.efectividad(charmander, squirtle)).toBe(0.5);
  });

  test("Efectividad de ataque: fuego vs hierba debe ser 2", () => {
    const combate = new Combat(charmander, bulbasaur);
    expect(combate.efectividad(charmander, bulbasaur)).toBe(2);
  });

  test("Efectividad de ataque: hierba vs fuego debe ser 2", () => {
    const combate = new Combat(bulbasaur, charmander);
    expect(combate.efectividad(bulbasaur, charmander)).toBe(0.5);
  });

  test("Efectividad de ataque: electrico vs agua debe ser 2", () => {
    const combate = new Combat(jolteon, squirtle);
    expect(combate.efectividad(jolteon, squirtle)).toBe(2);
  });
  test("Efectividad de ataque: hierba vs agua debe ser 2", () => {
    const combate = new Combat(bulbasaur, squirtle);
    expect(combate.efectividad(bulbasaur, squirtle)).toBe(2);
  });
  test("Efectividad de ataque: agua vs hierba debe ser 2", () => {
    const combate = new Combat(squirtle, bulbasaur);
    expect(combate.efectividad(squirtle, bulbasaur)).toBe(0.5);
  });
  test("Efectividad de ataque: agua vs electrico debe ser 2", () => {
    const combate = new Combat(squirtle, jolteon);
    expect(combate.efectividad(squirtle, jolteon)).toBe(0.5);
  });
});
