
export abstract class Persona {
    /**
     * Constructor de la clase Persona
     * @param nombre_ string referente al alias de las persona
     * @param primer_apellido_ string referente al primer identificador alfabetico de la persona tras el nombre
     * @param segundo_apellido_ string referente al segundo identificador alfabetico de la persona tras el nombre
     * @param fecha_nacimiento_ string referente al dia, al mes y al año de la persona
     * @param genero_ string sobre el sexo de la persona
     * @param edad_ number referente a la edad
     */
    constructor (private _nombre: string, private _primer_apellido: string, private _segundo_apellido: string, private _fecha_nacimiento: string,
        private _genero: string, private _edad: number) {}

    get nombre() {
        return this._nombre;
    }

    get primer_apellido() {
        return this._primer_apellido;
    }

    get segundo_apellido() {
        return this._segundo_apellido;
    }

    get fecha_nacimiento() {
        return this._fecha_nacimiento;
    }

    get genero() {
        return this._genero;
    }

    get edad() {
        return this._edad;
    }

    set nombre(nombre) {
        this._nombre = nombre;
    }

    set primer_apellido(primer_apellido) {
        this._primer_apellido = primer_apellido;
    }

    set segundo_apellido(segundo_apellido) {
        this._segundo_apellido = segundo_apellido;
    }

    set fecha_nacimiento(fecha_nacimiento) {
        this._fecha_nacimiento = fecha_nacimiento;
    }

    set genero(genero) {
        this._genero = genero;
    }

    set edad(edad) {
        this._edad = edad;
    }
}