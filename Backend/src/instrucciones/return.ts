import { Expression } from "../abstract/expresion";
import { Instruccion } from "../abstract/instruccion";
import { Environment } from "../symbols/enviroment";
let hash=require('object-hash');


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
        let cadena: string = "";
        cadena += `nodo${hash(this)}[style=filled, label="Return"]\n`;

        if(this.Exp!=null){
            cadena += `nodo${hash(this.Exp)}[style=filled, label="Expresion"]\n`;
            cadena+=`nodo${hash(this)}->nodo${hash(this.Exp)}\n`;
        }
        
        return cadena;
    }
}