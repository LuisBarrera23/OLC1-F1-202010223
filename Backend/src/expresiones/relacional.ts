import { Expression } from "../abstract/expresion";
import { Retorno } from "../abstract/retorno";
import { Environment } from "../symbols/enviroment";
import { Type } from "../symbols/type";
import { RelacionalOption } from "./relacionalOption";

export class Relacional extends Expression{
    constructor(
        private izquierda: Expression,
        private derecha: Expression,
        private type: RelacionalOption,
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
    
        const nodoIzq = this.izquierda.ejecutar(env);
        const nodoDer = this.derecha.ejecutar(env);
    
        if (this.type == RelacionalOption.MAYOR) {
          if (nodoDer.type == Type.NUMBER && nodoIzq.type == Type.NUMBER) {
            result = {
              value: nodoIzq.value > nodoDer.value,
              type: Type.BOOLEAN,
            };
          }
        }else if (this.type == RelacionalOption.MENOR) {
            if (nodoDer.type == Type.NUMBER && nodoIzq.type == Type.NUMBER) {
              result = {
                value: nodoIzq.value < nodoDer.value,
                type: Type.BOOLEAN,
              };
            }
          }
        
        return result;
      }
}