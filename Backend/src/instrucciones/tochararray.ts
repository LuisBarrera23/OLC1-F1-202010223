import { Expression } from "../abstract/expresion";
import { Instruccion } from "../abstract/instruccion";
import { Error } from "../objetos/error";
import { Singleton } from "../patronSingleton/singleton";
import { Environment } from "../symbols/enviroment";
import { Type } from "../symbols/type";
let hash = require('object-hash')

export class Tochar extends Instruccion {
    constructor(
        public nombre: string,
        public tipo: Type,
        public expresion: any,
        public editable: boolean,
        public line: number,
        public column: number
    ) {
        super(line, column);
    }


    public ejecutar(env: Environment) {
        //analisis semantico
        console.log("Declarando vector " + this.nombre);
        const instancia = Singleton.getInstance()
        if (env.buscarVector(this.nombre)) {
            throw instancia.addError(new Error("Semantico", "El vector con id " + this.nombre + " ya existe en esta tabla de simbolos", this.line, this.column + 1));
        }
        let exp=this.expresion.ejecutar(env);
        if(exp.type!=Type.STRING){
            throw instancia.addError(new Error("Semantico", "Para la declaracion ToCharArray se necesita una expresion de tipo String", this.line, this.column + 1));
        }

        if(this.tipo!=Type.CHAR){
            throw instancia.addError(new Error("Semantico", "Para la declaracion ToCharArray se necesita un vector tipo char", this.line, this.column + 1));
        }
        let cadena:string=exp.value;
        let temp:string[]=[];
        for (let i = 0; i < exp.value.length; i++) {
            temp.push(cadena.charAt(i))
        }
        env.guardarVector(this.nombre, temp, this.tipo, this.editable, 1);

    }

    public graficar(env: Environment): string {
        const instancia = Singleton.getInstance();
        let strtipo = "";
        if (this.tipo == Type.NUMBER) {
            strtipo = "INT";
        } else if (this.tipo == Type.DOUBLE) {
            strtipo = "DOUBLE";
        } else if (this.tipo == Type.STRING) {
            strtipo = "STRING";
        } else if (this.tipo == Type.CHAR) {
            strtipo = "CHAR";
        } else if (this.tipo == Type.BOOLEAN) {
            strtipo = "BOOLEAN";
        }
        let cadena: string = "";
        let unico = this.line + this.column;
        cadena += `nodo${hash(this)}[style=filled, label="Declaracion ToCharArray"]\n`;
        cadena += `nodo${hash(this.nombre)}[style=filled, label="${this.nombre}"]\n`;
        cadena += `nodo${hash(this.tipo) + unico}[style=filled, label="${strtipo}"]\n`;
        cadena += `nodo${hash(this.line) + unico}[style=filled, label="1 dimension"]\n`;


        cadena += `nodo${hash(this)}->nodo${hash(this.nombre)}\n`;
        cadena += `nodo${hash(this)}->nodo${hash(this.tipo) + unico}\n`;
        cadena += `nodo${hash(this)}->nodo${hash(this.line) + unico}\n`;

        return cadena;
    }
}