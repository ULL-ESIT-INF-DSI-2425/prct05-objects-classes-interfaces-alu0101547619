import { describe, expect, test } from "vitest";
import { Estudiante } from "../src/ejercicio-PE/estudiante";
import { Profesor } from "../src/ejercicio-PE/profesor";

describe("Combat class tests", () => {
    let estudiante: Estudiante = new Estudiante("Alu0101547619", 3 ,"Adrian", "MArtin", "Castellano", "15-09-2004", "hombre", 20 );
    const fisrt_string: string = "El estudiante Adrian  MArtin  Castellano esta en el 3 año y su correo es Alu0101547619.Nacio el 15-09-2004 , es hombre y tiene 20";
    test("Mostrar la inforamcion de Adrian", () => {
        expect(estudiante.mostrar()).toBe(fisrt_string);
      });
    
    let profesor1: Profesor = new Profesor("Alu0101547619", "tecnologia", 35 ,"Ana", "Gonazles", "Marrero", "15-09-2004", "hombre", 20 );
    const second_string: string = "El profesor Ana  Gonazles  Marrero se ha dedicado durante 35 años la rama de tecnologia";
      test("Mostrar la informacion del profesor Ana", () => {
        expect(profesor1.show_info()).toBe(second_string);
      });
    
    //   test("Calcular el total de reproducciones de un disco inexistente", () => {
    //     expect(estudiante.mostrar()).toBe(0);
    //   });
});
