import { Persona } from './persona';

export class Estudiante extends Persona {
    /**
     * Constructor de la clase Persona
     * @param nombre_ string referente al alias de las persona
     * @param primer_apellido_ string referente al primer identificador alfabetico de la persona tras el nombre
     * @param segundo_apellido_ string referente al segundo identificador alfabetico de la persona tras el nombre
     * @param fecha_nacimiento_ string referente al dia, al mes y al año de la persona
     * @param genero_ string sobre el sexo de la persona
     * @param edad_ number referente a la edad
     * @param correo_insitucional_ identificador del alumno para enviar correos
     * @param año_escolar number asociado al año matriculado por el alumno
     */
    constructor (private _correo_insitucional: string, private _año_escolar: number, nombre: string,
        primer_apellido: string, segundo_apellido: string, fecha_nacimiento: string, genero: string, edad: number) {
        super(nombre, primer_apellido, segundo_apellido, fecha_nacimiento, genero, edad);
    }

    get correo_institucional() {
        return this._correo_insitucional
    }

    get año_escolar() {
        return this._año_escolar
    }

    set correo_institucional(correo_institucional) {
       this._correo_insitucional = correo_institucional;
    }

    set año_escolar( año_escolar) {
        this._año_escolar = año_escolar;
    }

    /**
     * Metodo void que muestra la información de un estudiante
     */
    mostrar(): string {
        return `El estudiante ${this.nombre}  ${this.primer_apellido}  ${this.segundo_apellido} esta en el ${this._año_escolar} año y su correo es ${this._correo_insitucional}.Nacio el ${this.fecha_nacimiento} , es ${this.genero} y tiene ${this.edad}`;
    }
}
let estudiante: Estudiante = new Estudiante("Alu0101547619", 3 ,"Adrian", "MArtin", "Castellano", "15-09-2004", "hombre", 20 );
estudiante.mostrar();
