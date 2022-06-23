import { Instruccion } from "../abstract/instruccion";
import { Environment } from "../symbols/enviroment";
let hash = require('object-hash')


export class Break extends Instruccion {
    constructor(
        line: number, 
        column : number
    ) {
        super(line,column);
    }

    public ejecutar(env:Environment) {
        return this;


    }

    public graficar(env: Environment): string {
        let cadena: string = "";
        cadena += `nodo${hash(this)}[style=filled, label="Break"]\n`;
        return cadena;
    }
}