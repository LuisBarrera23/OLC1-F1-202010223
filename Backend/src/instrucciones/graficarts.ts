import { Expression } from "../abstract/expresion";
import { Instruccion } from "../abstract/instruccion";
import { Acceso } from "../expresiones/acceso";
import { Singleton } from "../patronSingleton/singleton";
import { Environment } from "../symbols/enviroment";
import { Symbol_array } from "../symbols/symbols";
let hash= require('object-hash');

export class Graficarts extends Instruccion{
    constructor(
        line:number,
        column:number
    ){
        super(line,column);
    }

    public ejecutar(env: Environment) {
        const instancia=Singleton.getInstance();
        let cadena=env.graficarts();
        //console.log(cadena);
        instancia.add_graficasts(cadena)
    }

    public graficar(env: Environment): string {
        let distinto=this.line+"_"+this.column;
        const instancia=Singleton.getInstance();
        let cadena:string="";
        cadena+=`nodo${hash(this)}[style=filled, label="GraficarTS"]\n`;
        return cadena;
    }
}