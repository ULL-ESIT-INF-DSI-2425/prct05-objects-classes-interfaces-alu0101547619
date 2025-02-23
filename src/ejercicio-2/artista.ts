import { IDisco } from './disco';

export interface IArtista {
    nombre: string;
    oyentesMensuales: number;
    discografia: IDisco[];
}

export class Artista {
    constructor(public nombre: string, public oyentesMensuales: number, public discografia: IDisco[]) {}
}