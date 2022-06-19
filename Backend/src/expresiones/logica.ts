import { Expression } from "../abstract/expresion";
import { Retorno } from "../abstract/retorno";
import { Environment } from "../symbols/enviroment";
import { Type } from "../symbols/type";
import { logicaOption } from "./logicaOption";
import { Singleton } from "../patronSingleton/singleton";
import { Error } from "../objetos/error";

export class Logica extends Expression {
    constructor(
        private izquierda: Expression,
        private derecha: Expression,
        private type: logicaOption,
        line: number,
        column: number
    ) {
        super(line, column);
    }

    public ejecutar(env: Environment): Retorno {
        let result: Retorno = {
            value: null,
            type: Type.error,
        };

        const instancia=Singleton.getInstance();
        const nodoDer = this.derecha.ejecutar(env);
        if(nodoDer.type!=Type.BOOLEAN){
            throw instancia.addError(new Error("Semantico","tipo de operacion logica no valida",this.line,this.column));
        }
        if(this.type==logicaOption.NOT){
            result = {
                value: !nodoDer,
                type: Type.BOOLEAN,
            };
            return result;
        }


        const nodoIzq = this.izquierda.ejecutar(env);

        if(nodoIzq.type!=Type.BOOLEAN){
            throw instancia.addError(new Error("Semantico","tipo de operacion logica no valida",this.line,this.column));
        }

        if (this.type == logicaOption.OR) {
            if (nodoIzq.value == false && nodoDer.value == false) {
                result = {
                    value: false,
                    type: Type.BOOLEAN,
                };
            } else if (nodoIzq.value == false && nodoDer.value == true) {
                result = {
                    value: true,
                    type: Type.BOOLEAN,
                };
            } else if (nodoIzq.value == true && nodoDer.value == false) {
                result = {
                    value: true,
                    type: Type.BOOLEAN,
                };
            } else if (nodoIzq.value == true && nodoDer.value == true) {
                result = {
                    value: true,
                    type: Type.BOOLEAN,
                };
            } 


        }else if (this.type == logicaOption.AND) {
            if (nodoIzq.value == false && nodoDer.value == false) {
                result = {
                    value: false,
                    type: Type.BOOLEAN,
                };
            } else if (nodoIzq.value == false && nodoDer.value == true) {
                result = {
                    value: false,
                    type: Type.BOOLEAN,
                };
            } else if (nodoIzq.value == true && nodoDer.value == false) {
                result = {
                    value: false,
                    type: Type.BOOLEAN,
                };
            } else if (nodoIzq.value == true && nodoDer.value == true) {
                result = {
                    value: true,
                    type: Type.BOOLEAN,
                };
            } 


        }else if (this.type == logicaOption.XOR) {
            if (nodoIzq.value == false && nodoDer.value == false) {
                result = {
                    value: false,
                    type: Type.BOOLEAN,
                };
            } else if (nodoIzq.value == false && nodoDer.value == true) {
                result = {
                    value: true,
                    type: Type.BOOLEAN,
                };
            } else if (nodoIzq.value == true && nodoDer.value == false) {
                result = {
                    value: true,
                    type: Type.BOOLEAN,
                };
            } else if (nodoIzq.value == true && nodoDer.value == true) {
                result = {
                    value: false,
                    type: Type.BOOLEAN,
                };
            } 


        }

        return result;
    }
}