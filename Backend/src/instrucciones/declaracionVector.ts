import { Expression } from "../abstract/expresion";
import { Instruccion } from "../abstract/instruccion";
import { Error } from "../objetos/error";
import { Singleton } from "../patronSingleton/singleton";
import { Environment } from "../symbols/enviroment";
import { Type } from "../symbols/type";
let hash = require('object-hash')

export class DeclaracionV extends Instruccion {
    constructor(
        public nombre: string,
        public tipo: Type,
        public expresiones: any[],
        public editable: boolean,
        public dimension: number,
        public line: number,
        public column: number
    ) {
        super(line, column);
    }


    public ejecutar(env: Environment) {
        //analisis semantico
        //console.log("Declarando vector " + this.nombre);
        const instancia = Singleton.getInstance()
        if (env.buscarVector(this.nombre)) {
            throw instancia.addError(new Error("Semantico", "El vector con id " + this.nombre + " ya existe en esta tabla de simbolos", this.line, this.column + 1));
        }
        if (this.dimension == 1) {
            let temp: any[] = [];
            for (let i = 0; i < this.expresiones.length; i++) {
                let expresion = this.expresiones[i].ejecutar(env);
                if (this.tipo != expresion.type) {
                    throw instancia.addError(new Error("Semantico", "El vector " + this.nombre + " necesita elementos del mismo tipo de la declaracion", this.line, this.column + 1));
                }
                temp.push(expresion.value);
            }
            env.guardarVector(this.nombre, temp, this.tipo, this.editable, this.dimension);
        } else if (this.dimension == 2) {
            let temp: any[][] = [];
            let tmp: any[] = [];
            for (let j = 0; j < this.expresiones.length; j++) {
                tmp = [];
                for (let i = 0; i < this.expresiones[j].length; i++) {
                    let expresion = this.expresiones[j][i].ejecutar(env);
                    if (this.tipo != expresion.type) {
                        throw instancia.addError(new Error("Semantico", "El vector " + this.nombre + " necesita elementos del mismo tipo de la declaracion", this.line, this.column + 1));
                    }
                    tmp.push(expresion.value);
                }
                temp.push(tmp);
            }
            env.guardarVector(this.nombre, temp, this.tipo, this.editable, this.dimension);
            //console.log(temp)
        }


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
        cadena += `nodo${hash(this)}[style=filled, label="Declaracion Vector"]\n`;
        cadena += `nodo${hash(this.nombre)}[style=filled, label="${this.nombre}"]\n`;
        cadena += `nodo${hash(this.tipo) + unico}[style=filled, label="${strtipo}"]\n`;

        if (this.dimension == 1) {
            cadena += `nodo${hash(this.dimension) + unico}[style=filled, label="1 dimension"]\n`;
        } else {
            cadena += `nodo${hash(this.dimension) + unico}[style=filled, label="2 dimensiones"]\n`;
        }

        cadena += `nodo${hash(this)}->nodo${hash(this.nombre)}\n`;
        cadena += `nodo${hash(this)}->nodo${hash(this.tipo) + unico}\n`;
        cadena += `nodo${hash(this)}->nodo${hash(this.dimension) + unico}\n`;

        return cadena;
    }
}