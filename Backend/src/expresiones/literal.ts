import { Expression } from "../abstract/expresion";
import { Retorno } from "../abstract/retorno";
import { Type } from "../symbols/type";

export class Literal extends Expression{
    constructor(
        private value: any,
        private type: Type,
        line: number,
        column: number
    ) {
        super(line, column);
    }

    public ejecutar(): Retorno {
        if (this.type == Type.NUMBER){
            return { value: Number(this.value), type: Type.NUMBER }
        }else if(this.type==Type.DOUBLE){
            return {value:parseFloat(this.value),type:Type.DOUBLE}
        }
        else if (this.type == Type.STRING){
            this.value = (this.value).replaceAll("\"","")
            return { value: this.value, type: Type.STRING }
        }
        else if (this.type == Type.BOOLEAN) {
            if (this.value == "true") return { value: Boolean(true), type: Type.BOOLEAN }
            else return { value: Boolean(false), type: Type.BOOLEAN }
        }
        else return { value: this.value, type: Type.error }

    }
}