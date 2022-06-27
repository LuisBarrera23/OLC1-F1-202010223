import { Expression } from "../abstract/expresion";
import { Instruccion } from "../abstract/instruccion";
import { Error } from "../objetos/error";
import { Singleton } from "../patronSingleton/singleton";
import { Environment } from "../symbols/enviroment";
import { Type } from "../symbols/type";
let hash = require('object-hash')

export class ModificarVector extends Instruccion {
    constructor(
        public nombre: string,
        public expresion1:Expression,
        public expresion2:Expression,
        public expresion3:Expression,
        public dimension: number,
        public line: number,
        public column: number
    ) {
        super(line, column);
    }


    public ejecutar(env: Environment) {
        const varible_buscada=env.get_vector(this.nombre);
        const instancia=Singleton.getInstance()

        if(varible_buscada==null||varible_buscada==undefined){
            throw instancia.addError(new Error("Semantico","El vector "+this.nombre+" no existe",this.line,this.column+1));
        }
        if(varible_buscada.editable==false){
            throw instancia.addError(new Error("Semantico","El vector "+this.nombre+" no se puede editar",this.line,this.column+1));
        }
        if(this.dimension==1){
            let vector:any[]=varible_buscada.value;
            if(varible_buscada.dimension!=this.dimension){
                throw instancia.addError(new Error("Semantico","El vector "+this.nombre+" es de dos dimensiones",this.line,this.column+1));
            }
            let expresion=this.expresion1.ejecutar(env);
            let valor=this.expresion3.ejecutar(env);
            if(expresion.type!=Type.NUMBER){
                throw instancia.addError(new Error("Semantico","Acceso de vector necesita un valor entero como expresion",this.line,this.column+1));
            }
            let tamaño:number=vector.length;
            if(expresion.value<tamaño){
                env.actualizarVector(this.nombre,expresion.value,expresion.value,1,valor.value);
            }else{
                throw instancia.addError(new Error("Semantico","no existe esta posicion en el vector",this.line,this.column+1));
            }

        }else if(this.dimension==2){
            let vector:any[][]=varible_buscada.value;
            if(varible_buscada.dimension!=this.dimension){
                throw instancia.addError(new Error("Semantico","El vector "+this.nombre+" es de una dimension",this.line,this.column+1));
            }
            let exp1=this.expresion1.ejecutar(env);
            let exp2=this.expresion2.ejecutar(env);
            if(exp1.type!=Type.NUMBER||exp2.type!=Type.NUMBER){
                throw instancia.addError(new Error("Semantico","Acceso de vector necesita un valor entero como expresion",this.line,this.column+1));
            }
            let y:number=vector.length;
            let x:number;
            if(exp2.value>=y){
                throw instancia.addError(new Error("Semantico","no existe esta posicion en el vector",this.line,this.column+1));
            }else{
                x=vector[exp2.value].length;
            }
            if(exp1.value<x){
                let valor=this.expresion3.ejecutar(env);
                if(valor.type!=varible_buscada.type){
                    throw instancia.addError(new Error("Semantico","El vector no admite este tipo de expresion",this.line,this.column+1));
                }
                env.actualizarVector(this.nombre,exp1.value,exp2.value,2,valor.value);
            }else{
                throw instancia.addError(new Error("Semantico","no existe esta posicion en el vector",this.line,this.column+1));
            }
        }


    }

    public graficar(env: Environment): string {
        const instancia = Singleton.getInstance();
        let cadena: string = "";
        let unico = this.line+"_" + this.column;
        cadena += `nodo${hash(this)}[style=filled, label="Modificacion Vector"]\n`;
        cadena += `nodo${hash(this.nombre)+unico}[style=filled, label="${this.nombre}"]\n`;
        cadena += `nodo${hash(this)}->nodo${hash(this.nombre)+unico}\n`;

        return cadena;
    }
}