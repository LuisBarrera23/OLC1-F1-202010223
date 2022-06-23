import { Expression } from "../abstract/expresion";
import { Instruccion } from "../abstract/instruccion";
import { Singleton } from "../patronSingleton/singleton";
import { Environment } from "../symbols/enviroment";
let hash= require('object-hash');

export class Print extends Instruccion{
    constructor(
        public expresion: Expression,
        line:number,
        column:number
    ){
        super(line,column);
    }

    public ejecutar(env: Environment) {
        const exp=this.expresion.ejecutar(env);
        //console.log(">>",exp.value); //esto es lo que tienen que mostrar al usuario
        const instancia=Singleton.getInstance();
        instancia.addConsola(String(exp.value));
    }

    public graficar(env: Environment): string {
        let distinto=this.line+"_"+this.column;
        const instancia=Singleton.getInstance();
        let cadena:string="";
        cadena+=`nodo${hash(this)}[style=filled, label="Print"]\n`;
        cadena+=`nodo${hash(this.expresion)+distinto}[style=filled, label="Expresion"]\n`
        cadena+=`nodo${hash(this)}->nodo${hash(this.expresion)+distinto}\n`
        return cadena;
    }
}