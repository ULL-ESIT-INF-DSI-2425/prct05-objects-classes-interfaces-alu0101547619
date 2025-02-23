import { describe, expect, test, vi } from "vitest";
import { Artista } from "../src/ejercicio-2/artista";
import { BibliotecaMusical } from "../src/ejercicio-2/biblioteca";
import { Cancion } from "../src/ejercicio-2/cancion";
import { Disco } from "../src/ejercicio-2/disco";

describe("Combat class tests", () => {
    
        let biblioteca = new BibliotecaMusical();
    
        // Canciones
        let cancion1 = new Cancion("Song 1", 180, ["Pop"], true, 100000);
        let cancion2 = new Cancion("Song 2", 210, ["Rock"], false, 50000);
        
        // Discos
        let disco1 = new Disco("Album 1", 2023, [cancion1, cancion2]);
        let disco2 = new Disco("Album 2", 2021, []);
    
        // Artistas
        let artista1 = new Artista("Artista 1", 500000, [disco1]);
        let artista2 = new Artista("Artista 2", 200000, [disco2]);
    
        // Agregar artistas a la biblioteca
        biblioteca.agregarArtista(artista1);
        biblioteca.agregarArtista(artista2);
    
        test("Mostrar biblioteca con artistas y discos", () => {
            const consoleTableSpy = vi.spyOn(console, "table");
            const consoleLogSpy = vi.spyOn(console, "log");
          
            biblioteca.mostrarBiblioteca();
          
            expect(consoleTableSpy).toHaveBeenCalled(); // Verifica que se ha llamado a console.table
            expect(consoleLogSpy).toHaveBeenCalled();   // Verifica que se ha llamado a console.log
          
            consoleTableSpy.mockRestore(); // Restaurar el comportamiento normal
            consoleLogSpy.mockRestore();
          });

          test("should return 'No' when the song is not a single", () => {
            expect(biblioteca.mapSingle(cancion2)).toBe("No");
        });

        test("Buscar un disco existente en la biblioteca", () => {
            const consoleSpy = vi.spyOn(console, "table");
          
            biblioteca.search("disco", "Album 1");
          
            expect(consoleSpy).toHaveBeenCalled();
            consoleSpy.mockRestore(); // Restaurar el comportamiento original
          });

          test("Buscar un artista inexistente", () => {
            const consoleSpy = vi.spyOn(console, "log");
            biblioteca.search("banda", "Artista Desconocido");
            expect(consoleSpy).toHaveBeenCalledWith("Filtro no encontrado");
            consoleSpy.mockRestore();
        });
    
        test("Buscar un artista existente", () => {
            const consoleSpy = vi.spyOn(console, "table"); 
            biblioteca.search("artista", "Artista 1");
            expect(consoleSpy).toHaveBeenCalled();
            consoleSpy.mockRestore();
        });

        test("Buscar una canción existente", () => {
            const consoleSpy = vi.spyOn(console, "table"); 
            biblioteca.search("cancion", "Song 1");
            expect(consoleSpy).toHaveBeenCalled();
            consoleSpy.mockRestore();
        });

    test("Contar el número de canciones de un disco existente", () => {
        expect(biblioteca.number_song("Album 1")).toBe(2);
      });
    
      test("Contar el número de canciones de un disco inexistente", () => {
        expect(biblioteca.number_song("Disco Desconocido")).toBe(0);
      });
    
      test("Calcular la duración total de un disco existente", () => {
        expect(biblioteca.disc_dur("Album 1")).toBe(180 + 210);
      });
    
      test("Calcular la duración total de un disco inexistente", () => {
        expect(biblioteca.disc_dur("Disco Desconocido")).toBe(0);
      });
    
      test("Calcular el total de reproducciones de un disco existente", () => {
        expect(biblioteca.disc_rep("Album 1")).toBe(100000 + 50000);
      });
    
      test("Calcular el total de reproducciones de un disco inexistente", () => {
        expect(biblioteca.disc_rep("Disco Desconocido")).toBe(0);
      });
});