import { Expression } from "../abstract/expresion";
import { Retorno } from "../abstract/retorno";
import { Environment } from "../symbols/enviroment";
import { Type } from "../symbols/type";

export class Typof extends Expression{
    constructor(
        private expression: Expression,
        line: number,
        column: number
    ) {
        super(line, column);
    }

    public ejecutar(env: Environment): Retorno {
        const nodounico = this.expression.ejecutar(env);
        if (nodounico.type == Type.NUMBER){
            return { value: "INT", type: Type.STRING }
        }else if(nodounico.type==Type.DOUBLE){
            return { value: "DOUBLE", type: Type.STRING }
        }
        else if (nodounico.type == Type.STRING){
            return { value: "STRING", type: Type.STRING }
        }
        else if (nodounico.type == Type.BOOLEAN) {
            return { value: "BOOLEAN", type: Type.STRING }
        }else if(nodounico.type==Type.CHAR){
            return { value: "CHAR", type: Type.STRING }
        }
        else return { value: "INDEFINIDO", type: Type.error }

    }
}