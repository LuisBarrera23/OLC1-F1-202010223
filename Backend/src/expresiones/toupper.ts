import { Expression } from "../abstract/expresion";
import { Retorno } from "../abstract/retorno";
import { Singleton } from "../patronSingleton/singleton";
import { Environment } from "../symbols/enviroment";
import { Type } from "../symbols/type";
import { Error } from "../objetos/error";

export class Toupper extends Expression{
    constructor(
        private expression: Expression,
        line: number,
        column: number
    ) {
        super(line, column);
    }

    public ejecutar(env: Environment): Retorno {
        let resultado={value:"",type:Type.error}
        const instancia=Singleton.getInstance();
        let exp=this.expression.ejecutar(env);
        if(exp.type!=Type.STRING){
            throw instancia.addError(new Error("Semantico","ToUpper necesita una expresion de tipo String",this.line,this.column+1));
        }
        let cadena:string=exp.value;
        resultado={value:cadena.toUpperCase(),type:Type.STRING}
        return resultado;
    }
}