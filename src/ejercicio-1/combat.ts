import { Pokemon, PokemonType } from './pokedex';

export class Combat{
  /**
 * Clase para simular un combate entre dos Pokémon.
 * @param _first_pokemon - El primer Pokémon que participará en el combate.
 * @param _second_pokemon - El segundo Pokémon que participará en el combate.
 */
  constructor(private _first_pokemon: Pokemon, private _second_pokemon: Pokemon) {}

  /**
 * Este método simula un combate entre dos Pokémon, usando un sistema de turnos. 
 * En cada turno, uno de los Pokémon atacará al otro y el daño será calculado
 * según las estadísticas de ataque, defensa y la efectividad del tipo de Pokémon.
 * El combate continúa hasta que uno de los Pokémon se quede sin vida.
 * @returns El nombre del Pokémon ganador si uno de los Pokémon se debilita (su vida llega a 0 o menos).
 * Si ambos Pokémon están incapacitados antes de iniciar, se retorna "Combate imposible".
 */
  start() {
    console.log(`ENFRENTAMIENTO POKEMON\n\n${this._first_pokemon.name} vs ${this._second_pokemon.name}\n\nVida de ${this._first_pokemon.name}: ${this._first_pokemon.stats.maxHP}\nVida de ${this._second_pokemon.name}: ${this._second_pokemon.stats.maxHP}`)
    let maxHP1 = this._first_pokemon.stats.maxHP;
    let maxHP2 = this._second_pokemon.stats.maxHP;
    let turnos = 1;
    let my_var: boolean = true;
    if (maxHP1 < 1) return "Combate imposible";
    if (maxHP2 < 1) return "Combate imposible";
    while (maxHP1 > 1 && maxHP2 > 1) {
      console.log(`--------------------------------\nTurno ${turnos}\n`);
      let atacante = my_var ? this._first_pokemon : this._second_pokemon;
      let defensor = my_var ? this._second_pokemon : this._first_pokemon;
      let efectividad = this.efectividad(atacante, defensor);

      let daño = Number((50 * (atacante.stats.attack / defensor.stats.attack) * efectividad).toFixed(0));

      if (my_var) maxHP2 -= daño;
      else maxHP1 -= daño;

      console.log(`${atacante.name} ataca a ${defensor.name}\n\n${defensor.name} recibe ${daño} de daño`);
      console.log(`\nVida de ${this._first_pokemon.name}: ${maxHP1}\nVida de ${this._second_pokemon.name}: ${maxHP2}\n`)
      if (efectividad > 1) console.log(`El golpe es supereficaz!!!`);
      if (efectividad === 1) console.log(`El golpe es eficaz`);
      if (efectividad < 1) console.log(`El golpe es poco eficaz...`);
      turnos++;
      my_var? my_var = false : my_var = true;
      if (maxHP1 <= 0) {
        console.log(`\n${this._first_pokemon.name} se ha debilitado\nEl ganador es ${this._second_pokemon.name}!\n`);
        return this._second_pokemon.name; 
      } else 
      if (maxHP2 <= 0) {
        console.log(`\n${this._second_pokemon.name} se ha debilitado\nEl ganador es ${this._first_pokemon.name}!\n`);
        return this._first_pokemon.name;
      } else {
        continue;
      }
     
    }
  }

 /**
 * Calcula la efectividad del ataque de un Pokémon contra otro en función de sus tipos.
 * @param atacante - El Pokémon que realiza el ataque.
 * @param defensor - El Pokémon que recibe el ataque.
 * @returns Un número que representa la efectividad del ataque.
 */
  efectividad (atacante: Pokemon, defensor: Pokemon): number {
    let my_result: number = 1;
    switch (atacante.type) {
        case "fuego":
            if (defensor.type === "hierba") my_result = 2;
            if (defensor.type === "agua") my_result = 0.5;
            break;
        case "hierba":
            if (defensor.type === "fuego") my_result = 0.5;
            if (defensor.type === "agua") my_result = 2;
            break;
        case "agua":
            if (defensor.type === "hierba") my_result = 0.5;
            if (defensor.type === "electrico") my_result = 0.5;
            if (defensor.type === "fuego") my_result = 2;
            break;
        case "electrico":
            if (defensor.type === "agua") my_result = 2;
            break;
    }
    return my_result;
  }
}