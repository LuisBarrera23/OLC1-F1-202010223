import { Expression } from "../abstract/expresion";
import { Instruccion } from "../abstract/instruccion";
import { Error } from "../objetos/error";
import { Singleton } from "../patronSingleton/singleton";
import { Environment } from "../symbols/enviroment";
import { Type } from "../symbols/type";
let hash = require('object-hash')

export class Splice extends Instruccion {
    constructor(
        public nombre: string,
        public expresion1:Expression,
        public expresion2:Expression,
        public line: number,
        public column: number
    ) {
        super(line, column);
    }


    public ejecutar(env: Environment) {
        //analisis semantico
        const instancia = Singleton.getInstance()
        let simbol=env.get_vector(this.nombre);
        let exp1=this.expresion1.ejecutar(env);
        let exp2=this.expresion2.ejecutar(env);
        //console.log(simbol);
        if(simbol==null||simbol==undefined){
            throw instancia.addError(new Error("Semantico","El vector "+this.nombre+" no existe",this.line,this.column+1));
        }
        if(simbol.dimension!=1){
            throw instancia.addError(new Error("Semantico","Instruccion Splice() es unicamente para vectores de 1 dimension",this.line,this.column+1));
        }
        if(exp1.type!=Type.NUMBER){
            throw instancia.addError(new Error("Semantico","Instruccion Splice() necesita la primer expresion de tipo entero",this.line,this.column+1));
        }
        if(exp2.type!=simbol.type){
            throw instancia.addError(new Error("Semantico","La expresion que se desea insertar no es del mismo tipo que el vector",this.line,this.column+1));
        }
        let vector:any[]=simbol.value;
        if(exp1.value>=vector.length){
            throw instancia.addError(new Error("Semantico","El vector "+this.nombre+" no tiene la posicion indicada",this.line,this.column+1));
        }
        //console.log(env.get_vector(this.nombre)?.value)
        env.spliceVector(this.nombre,exp1.value,exp2.value);
        //console.log(env.get_vector(this.nombre)?.value)

    }

    public graficar(env: Environment): string {
        const instancia = Singleton.getInstance();
        let cadena: string = "";
        let unico = this.line +"_"+this.column;
        cadena += `nodo${hash(this)}[style=filled, label="Splice"]\n`;
        cadena += `nodo${hash(this.nombre)+unico}[style=filled, label="${this.nombre}"]\n`;
        cadena += `nodo${hash(this.expresion1)}[style=filled, label="Expresion1"]\n`;
        cadena += `nodo${hash(this.expresion2)}[style=filled, label="Expresion2"]\n`;
        cadena += `nodo${hash(this)}->nodo${hash(this.nombre)+unico}\n`;
        cadena += `nodo${hash(this)}->nodo${hash(this.expresion1)}\n`;
        cadena += `nodo${hash(this)}->nodo${hash(this.expresion2)}\n`;
        return cadena;
    }
}