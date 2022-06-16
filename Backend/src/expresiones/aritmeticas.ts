import { Expression } from "../abstract/expresion";
import { Retorno } from "../abstract/retorno";
import { Environment } from "../symbols/enviroment";
import { Type } from "../symbols/type";
import { ArithmeticOption } from "./aritmeticOption";

export class Arithmetic extends Expression{
    constructor(
        private izquierda:Expression,
        private derecha:Expression,
        private type:ArithmeticOption,
        line: number,
        column:number
    ){
        super(line,column);
    }
    
    public ejecutar(env: Environment): Retorno {
        let resultado:Retorno={
            value:null,
            type:Type.error
        }

        const nodoIzq=this.izquierda.ejecutar(env);
        const nodoDer=this.derecha.ejecutar(env);
        
        if(this.type==ArithmeticOption.MAS){
            if (nodoDer.type == Type.NUMBER && nodoIzq.type == Type.NUMBER) {
                resultado = { 
                    value: (nodoIzq.value + nodoDer.value), 
                    type: Type.NUMBER 
                }
            }else if (nodoDer.type == Type.NUMBER && nodoIzq.type == Type.DOUBLE
                ||nodoDer.type == Type.DOUBLE && nodoIzq.type == Type.NUMBER) {
                resultado = { 
                    value: (parseFloat(nodoIzq.value) + parseFloat(nodoDer.value)), 
                    type: Type.DOUBLE 
                }
            }else if (nodoDer.type == Type.NUMBER && nodoIzq.type == Type.STRING
                ||nodoDer.type == Type.STRING && nodoIzq.type == Type.NUMBER) {
                resultado = { 
                    value: (String(nodoIzq.value) + String(nodoDer.value)), 
                    type: Type.STRING 
                }
            }else if (nodoIzq.type == Type.STRING || nodoDer.type == Type.STRING ) {
                resultado = { 
                    value: (String(nodoIzq.value) + String(nodoDer.value)), 
                    type: Type.STRING 
                }
            }else if (nodoIzq.type == Type.BOOLEAN && nodoDer.type == Type.NUMBER ) {
                const val:number= nodoIzq.value? 1:0
                resultado = { 
                    value: ( val+nodoDer.value), 
                    type: Type.NUMBER 
                }
            }
            else if (nodoDer.type == Type.BOOLEAN && nodoIzq.type == Type.NUMBER ) {
                const val:number= nodoDer.value? 1:0
                resultado = { 
                    value: ( val+nodoIzq.value), 
                    type: Type.NUMBER 
                }
            }
            else if (nodoIzq.type == Type.BOOLEAN || nodoDer.type == Type.BOOLEAN ) {
                const val1:number= nodoIzq.value? 1:0
                const val2:number= nodoDer.value? 1:0
                resultado = { 
                    value: ( val1+val2), 
                    type: Type.NUMBER 
                }
            }
            
            //demas validadionces para la operaciones aritmeticas
        }else if(this.type==ArithmeticOption.MENOS){
            
            if (nodoDer.type == Type.NUMBER && nodoIzq.type == Type.NUMBER) {
                resultado = { 
                    value: (nodoIzq.value - nodoDer.value), 
                    type: Type.NUMBER 
                };
            }
        }

        return resultado;
    }
}