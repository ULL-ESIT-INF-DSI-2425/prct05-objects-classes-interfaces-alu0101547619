import { Persona } from './persona';
import { Estudiante } from './estudiante';
import { Profesor } from './profesor';

type Cal = [Estudiante, number];

export class Asignatura {
    /**
     * Constructor de la clase Asigantura
     * @param _code ID de la asignatura
     * @param _asiganture_name Nombre de la asiganura
     * @param _titulation Titulación de la asignatura
     * @param _calif Calificaciones entre estudiante y alumno 
     * @param _profesores Lista de profesores que dan la asigatura
     */
    constructor (private _code: number, private _asiganture_name: string, private _titulation: string, private _calif: Cal[], private _profesores: Profesor[], private _alumando: Estudiante[] ) {
    }
    get code() {
        return this._code;
    }

    get asiganture_name() {
        return this._asiganture_name;
    }

    get titulation() {
        return this._titulation;
    }
    get profesores() {
        return this._profesores;
    }

    /**
     * Setter de code
     */
    set code(code) {
        this._code = code;
    }

    /**
     * Setter de asignatura
     */
    set asiganture_name(asignature_name) {
        this._asiganture_name = asignature_name;
    }

    /**
     * Setter de titulacion
     */
    set titulation(titulation) {
         this._titulation = titulation;
    }

    /**
     * Setter de profesores
     */
    set profesores(profesores) {
         this._profesores = profesores;
    }

    /**
     * Metodo que muestra la informacion de cada profesor que imparte la asignatura
     */
    show_prof_info(): void {
        this._profesores.forEach(profesor => {
            profesor.show_info()
        });
    }

    /**
     * Metodo que muestra la informacion de cada alumno
     */
    show_alum_info(): void {
        this._alumando.forEach(alumno => {
            alumno.mostrar()
        })
    }

    /**
     * Metodo que muestra la informacion de un profesor en base a su nombre o correo institucional
     * @param nombre_prof 
     */
    show_prof(nombre_prof: string): void {
        this._profesores.forEach(profesor => {
            if (profesor.nombre === nombre_prof || profesor.correo_institucional === nombre_prof) profesor.show_info();
        });
    }

    /**
     * Metodo que muestra la informacion de un alumno en base a su nombre o correo
     * @param nombre_alum 
     */
    show_alum(nombre_alum: string): void {
        this._alumando.forEach(alumno => {
            if (alumno.nombre === nombre_alum || alumno.correo_institucional === nombre_alum) alumno.mostrar();
        });
    }

    /**
     * Metodo que muestra los alumnos que tienen mas o igual que 8 en su calificacion
     */
    show_alum_not(): void {
        this._calif.forEach(alumno => {
            if (alumno[1] === 8 || alumno[1] >= 8) alumno[0].mostrar();
        })
    }

}