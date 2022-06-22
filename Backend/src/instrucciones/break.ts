import { Instruccion } from "../abstract/instruccion";
import { Environment } from "../symbols/enviroment";


export class Break extends Instruccion {
    constructor(
        line: number, 
        column : number
    ) {
        super(line,column);
    }

    public ejecutar(env:Environment) {
       console.log("gggggggggggggggggggggg")
        return this;


    }

    public graficar(env: Environment): string {
        return "";
    }
}