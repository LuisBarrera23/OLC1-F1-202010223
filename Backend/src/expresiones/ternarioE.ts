import { Expression } from "../abstract/expresion";
import { Retorno } from "../abstract/retorno";
import { Singleton } from "../patronSingleton/singleton";
import { Environment } from "../symbols/enviroment";
import { Error } from "../objetos/error";
import { Type } from "../symbols/type";

export class TernarioE extends Expression{
    constructor(
        public expresion1:Expression,
        public expresion2:Expression,
        public expresion3:Expression,
        line:number,
        column:number
    ){
        super(line,column);
    }

    public ejecutar(env:Environment):Retorno{
        const instancia=Singleton.getInstance()
        let exp1=this.expresion1.ejecutar(env);
        console.log(exp1)
        if(exp1.type!=Type.BOOLEAN){
            throw instancia.addError(new Error("Semantico","Operador ternario necesita evaluar una expresion booleana",this.line+1,this.column+1));
        }
        let exp2=this.expresion2.ejecutar(env);
        let exp3=this.expresion3.ejecutar(env);
        if(exp1.value==true){
            return exp2;
        }else{
            return exp3;
        }
    }
}