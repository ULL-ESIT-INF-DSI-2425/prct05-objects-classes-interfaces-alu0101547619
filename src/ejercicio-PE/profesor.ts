import { Persona } from './persona';
import { Estudiante } from './estudiante';

export class Profesor extends Persona{
    /**
     * 
     * @param _correo_insitucional 
     * @param _rama_de_enseñanza 
     * @param _año_de_enseñanza 
     * @param nombre 
     * @param primer_apellido 
     * @param segundo_apellido 
     * @param fecha_nacimiento 
     * @param genero 
     * @param edad 
     */
    constructor (private _correo_insitucional: string, private _rama_de_enseñanza: string, private _año_de_enseñanza: number, nombre: string,
        primer_apellido: string, segundo_apellido: string, fecha_nacimiento: string, genero: string, edad: number) {
        super(nombre, primer_apellido, segundo_apellido, fecha_nacimiento, genero, edad);
    }

    get correo_institucional() {
        return this._correo_insitucional
    }

    get rama_enseñanza() {
        return this._rama_de_enseñanza
    }

    get año_de_enseñanza() {
        return this._año_de_enseñanza
    }

    set correo_institucional(correo_institucional) {
       this._correo_insitucional = correo_institucional;
    }

    set rama_enseñanza( rama_enseñanza) {
        this._rama_de_enseñanza = rama_enseñanza;
    }

    set año_de_enseñanza(año_de_enseñanza) {
        this._año_de_enseñanza = año_de_enseñanza;
    }

    /**
     * Metodo que muestra la informacion la infromacion de un profesor
     * @returns retorna la informacion del profesor
     */
    show_info(): string {
        return `El profesor ${this.nombre}  ${this.primer_apellido}  ${this.segundo_apellido} se ha dedicado durante ${this._año_de_enseñanza} años la rama de ${this._rama_de_enseñanza}`;
    }
}
