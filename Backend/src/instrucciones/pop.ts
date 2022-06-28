import { Instruccion } from "../abstract/instruccion";
import { Error } from "../objetos/error";
import { Singleton } from "../patronSingleton/singleton";
import { Environment } from "../symbols/enviroment";
let hash = require('object-hash')

export class Pop extends Instruccion {
    constructor(
        public nombre: string,
        public line: number,
        public column: number
    ) {
        super(line, column);
    }


    public ejecutar(env: Environment) {
        //analisis semantico
        const instancia = Singleton.getInstance()
        let simbol=env.get_vector(this.nombre);
        //console.log(simbol)
        if(simbol==null||simbol==undefined){
            throw instancia.addError(new Error("Semantico","El vector "+this.nombre+" no existe",this.line,this.column+1));
        }
        if(simbol.dimension!=1){
            throw instancia.addError(new Error("Semantico","Instruccion Pop() es unicamente para vectores de 1 dimension",this.line,this.column+1));
        }
        let vector:any[]=simbol.value;
        if(vector.length==0){
            throw instancia.addError(new Error("Semantico","El vector "+this.nombre+" no tiene elementos",this.line,this.column+1));
        }
        //console.log(env.get_vector(this.nombre)?.value)
        env.popVector(this.nombre);
        //console.log(env.get_vector(this.nombre)?.value)

    }

    public graficar(env: Environment): string {
        const instancia = Singleton.getInstance();
        let cadena: string = "";
        let unico = this.line +"_"+this.column;
        cadena += `nodo${hash(this)}[style=filled, label="Pop"]\n`;
        cadena += `nodo${hash(this.nombre)+unico}[style=filled, label="${this.nombre}"]\n`;
        cadena += `nodo${hash(this)}->nodo${hash(this.nombre)+unico}\n`;
        return cadena;
    }
}