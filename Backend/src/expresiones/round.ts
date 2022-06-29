import { Expression } from "../abstract/expresion";
import { Retorno } from "../abstract/retorno";
import { Singleton } from "../patronSingleton/singleton";
import { Environment } from "../symbols/enviroment";
import { Type } from "../symbols/type";
import { Error } from "../objetos/error";

export class Round extends Expression{
    constructor(
        private expression: Expression,
        line: number,
        column: number
    ) {
        super(line, column);
    }

    public ejecutar(env: Environment): Retorno {
        let resultado={value:0,type:Type.error}
        const instancia=Singleton.getInstance();
        let exp=this.expression.ejecutar(env);
        if(exp.type!=Type.DOUBLE){
            throw instancia.addError(new Error("Semantico","Round necesita una expresion de tipo Double",this.line,this.column+1));
        }
        let numero:number=Math.round(exp.value);
        resultado={value:numero,type:Type.NUMBER}
        return resultado;
    }
}