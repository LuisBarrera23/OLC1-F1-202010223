import { Expression } from "../abstract/expresion";
import { Instruccion } from "../abstract/instruccion";
import { Environment } from "../symbols/enviroment";


export class Return extends Instruccion {
    constructor(
        public Exp:Expression,
        line: number, 
        column : number
    ) {
        super(line,column);
    }

    public ejecutar(env:Environment) {
        return this;
    }

    public graficar(env: Environment): string {
        return "";
    }
}