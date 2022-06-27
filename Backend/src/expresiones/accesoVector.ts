import { Expression } from "../abstract/expresion";
import { Retorno } from "../abstract/retorno";
import { Singleton } from "../patronSingleton/singleton";
import { Environment } from "../symbols/enviroment";
import { Error } from "../objetos/error";
import { Type } from "../symbols/type";

export class AccesoVector extends Expression{
    constructor(
        public id:string,
        public expresion1:Expression,
        public expresion2:Expression,
        public dimension:number,
        line:number,
        column:number
    ){
        super(line,column);
    }

    public ejecutar(env:Environment):Retorno{
        const varible_buscada=env.get_vector(this.id);
        const instancia=Singleton.getInstance()
        let resultado:Retorno={
            value:null,
            type:Type.error
        }

        if(varible_buscada==null||varible_buscada==undefined){
            throw instancia.addError(new Error("Semantico","El vector "+this.id+" no existe",this.line,this.column));
        }
        if(this.dimension==1){
            let vector:any[]=varible_buscada.value;
            if(varible_buscada.dimension!=this.dimension){
                throw instancia.addError(new Error("Semantico","El vector "+this.id+" es de dos dimensiones",this.line,this.column));
            }
            let expresion=this.expresion1.ejecutar(env);
            if(expresion.type!=Type.NUMBER){
                throw instancia.addError(new Error("Semantico","Acceso de vector necesita un valor entero como expresion",this.line,this.column));
            }
            let tamaño:number=vector.length;
            if(expresion.value<tamaño){
                resultado={value:vector[expresion.value],type:varible_buscada.type}
            }else{
                throw instancia.addError(new Error("Semantico","no existe esta posicion en el vector",this.line,this.column));
            }

        }else if(this.dimension==2){
            let vector:any[][]=varible_buscada.value;
            if(varible_buscada.dimension!=this.dimension){
                throw instancia.addError(new Error("Semantico","El vector "+this.id+" es de una dimension",this.line,this.column));
            }
            let exp1=this.expresion1.ejecutar(env);
            let exp2=this.expresion2.ejecutar(env);
            if(exp1.type!=Type.NUMBER||exp2.type!=Type.NUMBER){
                throw instancia.addError(new Error("Semantico","Acceso de vector necesita un valor entero como expresion",this.line,this.column));
            }
            let y:number=vector.length;
            let x:number;
            if(exp2.value>=y){
                throw instancia.addError(new Error("Semantico","no existe esta posicion en el vector",this.line,this.column));
            }else{
                x=vector[exp2.value].length;
            }
            if(exp1.value<x){
                resultado={value:vector[exp2.value][exp1.value],type:varible_buscada.type}
            }else{
                throw instancia.addError(new Error("Semantico","no existe esta posicion en el vector",this.line,this.column));
            }
        }
        return resultado
    }
}