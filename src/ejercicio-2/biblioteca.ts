import { Artista } from './artista';
import { ICancion, Cancion } from './cancion';
import { Disco } from './disco';

export class BibliotecaMusical {
    private artistas: Artista[] = [];
  
    /**
     * Agrega un nuevo artista a la biblioteca
     * @param artista - Artista a agregar
     */
    agregarArtista(artista: Artista): void {
      this.artistas.push(artista);
    }
  
    /**
     * Muestra toda la información de la biblioteca musical en formato tabla
     */
    mostrarBiblioteca(): void {
      console.table(this.artistas.map(a => ({
        Nombre: a.nombre,
        "Oyentes Mensuales": a.oyentesMensuales,
        "Número de Discos": a.discografia.length
      })));
  
      this.artistas.forEach(artista => {
        console.log(`\nDiscografía de ${artista.nombre}:`);
        console.table(artista.discografia.map(disco => ({
          Nombre: disco.nombre,
          Año: disco.anio,
          "Número de Canciones": disco.canciones.length
        })));
  
        artista.discografia.forEach(disco => {
          console.log(`\nCanciones del álbum "${disco.nombre}":`);
          console.table(disco.canciones.map(cancion => ({
            Nombre: cancion.nombre,
            Duración: cancion.duracion,
            Géneros: cancion.generos.join(", "),
            Single: cancion.single ? "Sí" : "No",
            Reproducciones: cancion.reproducciones
          })));
        });
      });
    }


    /**
     * Verifica si una canción es un "single" y devuelve una cadena con el valor "Sí" o "No" según corresponda.
     * @param cancion - Un objeto de tipo Cancion que contiene la información de la canción, incluyendo si es un single o no.
     * @returns Una cadena de texto, "Sí" si la canción es un single, o "No" si no lo es.
     */
    mapSingle(cancion: Cancion): string {
        if (cancion.single) {
            return "Sí";
        } else {
            return "No";
        }
    }

    /**
     * Realiza una búsqueda en la biblioteca musical de artistas, discos o canciones según el filtro especificado.
     * Dependiendo del filtro proporcionado, se buscará un artista, disco o canción, y luego se imprimirá la información relevante en la consola.
     * @param filtro - El tipo de filtro que se desea aplicar para la búsqueda. Puede ser uno de los siguientes valores: 
     *                 "artista", "disco" o "cancion".
     * @param dato - El valor que se utilizará para realizar la búsqueda. Puede ser el nombre de un artista, disco o canción,
     *               dependiendo del filtro seleccionado.
     */
    search(filtro: string, dato: string): void {
        this.artistas.filter(artista => {
            switch(filtro) {
                case "disco":
                    const disco_ = artista.discografia.filter(disco => disco.nombre === dato); // Usar '===' para comparar
                    console.table(disco_.map(disc => ({
                        Nombre: disc.nombre,
                        Año: disc.anio,
                        "Número de Canciones": disc.canciones.length
                    })));
                    break;
                case "cancion":
                    const canciones_ = artista.discografia.flatMap(disco =>
                        disco.canciones.filter(cancion => cancion.nombre === dato)
                    );
                    console.table(canciones_.map(cancion => ({
                        Nombre: cancion.nombre,
                        Duración: cancion.duracion,
                        Géneros: cancion.generos.join(", "),
                        Single: this.mapSingle(cancion), // Llamamos a la función mapSingle aquí
                        Reproducciones: cancion.reproducciones
                    })));
                    break;
                case "artista":
                    const artista_ = this.artistas.filter(artista_ => artista_.nombre === dato); // Usar '===' para comparar
                    console.table(artista_.map(art => ({
                        Nombre: art.nombre,
                        "Oyentes Mensuales": art.oyentesMensuales,
                        "Número de Discos": art.discografia.length
                    })));
                    break;
                default:
                    console.log(`Filtro no encontrado`);
            }
        });
    }

    /**
     * Devuelve el número total de canciones de un disco específico en la biblioteca musical.
     * Busca el disco con el nombre proporcionado y, si lo encuentra, retorna la cantidad de canciones que contiene.
     * Si el disco no se encuentra, retorna 0.
     * @param disc - El nombre del disco que se desea buscar en la biblioteca musical.
     * @returns El número de canciones del disco especificado. Si el disco no se encuentra en la biblioteca, devuelve 0.
     */
    number_song(disc: string): number {
        for (const artista of this.artistas) {
            for (const disc_ of artista.discografia) {
                if (disc_.nombre === disc) {
                    return disc_.canciones.length; 
                }
            }
        }
        return 0;
    }
    
    /**
     * Cuenta el número de canciones en un disco específico de la biblioteca musical.
     * Busca el disco con el nombre proporcionado y devuelve la cantidad de canciones que contiene.
     * Si el disco no se encuentra, retorna 0.
     * @param disc - El nombre del disco que se desea buscar en la biblioteca musical.
     * @returns El número de canciones del disco especificado. Si el disco no se encuentra, devuelve 0.
     */
    disc_dur(disc: string): number {
        let result: number = 0;
        this.artistas.forEach(artista => {
            artista.discografia.forEach(disc_ => {
                if (disc_.nombre === disc) {
                    for (const song_ of disc_.canciones) {
                    result += song_.duracion;
                }
                }
            })
        })
        return result;    
    }

    /**
     * Calcula el número total de reproducciones de un disco específico en la biblioteca musical.
     * Busca el disco con el nombre proporcionado y suma las reproducciones de todas las canciones que contiene.
     * Si el disco no se encuentra, retorna 0.
     * @param disc - El nombre del disco que se desea buscar en la biblioteca musical.
     * @returns El número total de reproducciones de todas las canciones en el disco especificado.
     *          Si el disco no se encuentra, devuelve 0.
     */
    disc_rep(disc: string): number {
        let result: number = 0;
        this.artistas.forEach(artista => {
            artista.discografia.forEach(disc_ => {
                if (disc_.nombre === disc) {
                  for (const song_ of disc_.canciones) {
                    result += song_.reproducciones;
                }  
                }
            })
        })
        return result;    
    }
  }