import { Instruccion } from "../abstract/instruccion";
import { Environment } from "../symbols/enviroment";
import { Break } from "./break";
import { Return } from "./return";
let hash = require('object-hash')

export class Bloque extends Instruccion {
    constructor(

        public instrucciones: any[],
        line: number,
        column: number
    ) {
        super(line, column);
    }

    public ejecutar(env: Environment) {


        const new_env = new Environment(env);


        for (const elemento of this.instrucciones) {
            try {
                const x: any = elemento.ejecutar(new_env);
                if (x instanceof Return) {
                    console.log("encontro un return en bloque")
                    return x;
                }
            } catch (error) {
                //console.log("Error------------------------------------------------")
                //console.log(elemento);

            }
        }


    }

    public graficar(env: Environment): string {
        let cadena: string = "";
        let unico = this.line + this.column;
        const ast: any[]=this.instrucciones;
        cadena += `nodo${hash(this)}[style=filled, label="Bloque"]\n`;
        for (const elemento of ast) {
            try {
                cadena += `nodo${hash(this)}->nodo${hash(elemento)}\n` + elemento.graficar(env)+"\n";
            } catch (error) {
                //console.log(error); 
            }
        }

        return cadena;
    }

}