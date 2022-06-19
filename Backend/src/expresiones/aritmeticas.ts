import { Expression } from "../abstract/expresion";
import { Retorno } from "../abstract/retorno";
import { Error } from "../objetos/error";
import { Singleton } from "../patronSingleton/singleton";
import { Environment } from "../symbols/enviroment";
import { Type } from "../symbols/type";
import { ArithmeticOption } from "./aritmeticOption";

export class Arithmetic extends Expression {
    constructor(
        private izquierda: Expression,
        private derecha: Expression,
        private type: ArithmeticOption,
        line: number,
        column: number
    ) {
        super(line, column);
    }

    public ejecutar(env: Environment): Retorno {
        let resultado: Retorno = {
            value: null,
            type: Type.error
        }

        const nodoDer = this.derecha.ejecutar(env);
        if(this.type==ArithmeticOption.NEGACION){
            resultado = {
                value: (Number(nodoDer.value))*-1,
                type: nodoDer.type
            }
            return resultado;
        }
        const instancia=Singleton.getInstance();

        const nodoIzq = this.izquierda.ejecutar(env);
        

        if (this.type == ArithmeticOption.MAS) {
            if (nodoDer.type == Type.NUMBER && nodoIzq.type == Type.NUMBER) {
                resultado = {
                    value: (Number(nodoIzq.value) + Number(nodoDer.value)),
                    type: Type.NUMBER
                }
            } else if (nodoDer.type == Type.NUMBER && nodoIzq.type == Type.DOUBLE
                || nodoDer.type == Type.DOUBLE && nodoIzq.type == Type.NUMBER) {
                resultado = {
                    value: (Number(nodoIzq.value) + Number(nodoDer.value)).toFixed(2),
                    type: Type.DOUBLE
                }
            } else if (nodoDer.type == Type.NUMBER && nodoIzq.type == Type.CHAR
                || nodoDer.type == Type.CHAR && nodoIzq.type == Type.NUMBER) {
                let valor: number;
                if (nodoDer.type == Type.CHAR) {
                    valor = (Number(nodoIzq.value) + Number(nodoDer.value.charCodeAt(0)))
                } else {
                    valor = (Number(nodoDer.value) + Number(nodoIzq.value.charCodeAt(0)))
                }
                resultado = {
                    value: valor,
                    type: Type.NUMBER
                }
            } else if (nodoDer.type == Type.NUMBER && nodoIzq.type == Type.STRING
                || nodoDer.type == Type.STRING && nodoIzq.type == Type.NUMBER) {
                resultado = {
                    value: (String(nodoIzq.value) + String(nodoDer.value)),
                    type: Type.STRING
                }
            } else if (nodoDer.type == Type.DOUBLE && nodoIzq.type == Type.DOUBLE) {
                resultado = {
                    value: (Number(nodoIzq.value) + Number(nodoDer.value)).toFixed(2),
                    type: Type.DOUBLE
                }
            } else if (nodoDer.type == Type.DOUBLE && nodoIzq.type == Type.CHAR
                || nodoDer.type == Type.CHAR && nodoIzq.type == Type.DOUBLE) {
                let valor: number;
                if (nodoDer.type == Type.CHAR) {
                    valor = (Number(nodoIzq.value) + Number(nodoDer.value.charCodeAt(0)))
                } else {
                    valor = (Number(nodoDer.value) + Number(nodoIzq.value.charCodeAt(0)))
                }
                resultado = {
                    value: valor.toFixed(2),
                    type: Type.DOUBLE
                }
            } else if (nodoDer.type == Type.DOUBLE && nodoIzq.type == Type.STRING
                || nodoDer.type == Type.STRING && nodoIzq.type == Type.DOUBLE) {
                resultado = {
                    value: (String(nodoIzq.value) + String(nodoDer.value)),
                    type: Type.STRING
                }
            } else if (nodoDer.type == Type.CHAR && nodoIzq.type == Type.CHAR) {
                resultado = {
                    value: (Number(nodoIzq.value.charCodeAt(0)) + Number(nodoDer.value.charCodeAt(0))),
                    type: Type.NUMBER
                }
            } else if (nodoDer.type == Type.CHAR && nodoIzq.type == Type.STRING
                || nodoDer.type == Type.STRING && nodoIzq.type == Type.CHAR) {
                resultado = {
                    value: (String(nodoIzq.value) + String(nodoDer.value)),
                    type: Type.STRING
                }
            } else if (nodoIzq.type == Type.STRING && nodoDer.type == Type.STRING) {
                resultado = {
                    value: (String(nodoIzq.value) + String(nodoDer.value)),
                    type: Type.STRING
                }
            } else if (nodoIzq.type == Type.STRING && nodoDer.type == Type.BOOLEAN) {
                resultado = {
                    value: (String(nodoIzq.value) + String(nodoDer.value)),
                    type: Type.STRING
                }
            }else{
                throw instancia.addError(new Error("Semantico","tipo de suma no valida",this.line,this.column));
            }


            //demas validadionces para la operaciones aritmeticas
        } else if (this.type == ArithmeticOption.MENOS) {

            if (nodoIzq.type == Type.NUMBER && nodoDer.type == Type.NUMBER) {
                resultado = {
                    value: (Number(nodoIzq.value) - Number(nodoDer.value)),
                    type: Type.NUMBER
                };
            } else if (nodoIzq.type == Type.NUMBER && nodoDer.type == Type.DOUBLE
                || nodoIzq.type == Type.DOUBLE && nodoDer.type == Type.NUMBER) {
                resultado = {
                    value: (Number(nodoIzq.value) - Number(nodoDer.value)).toFixed(2),
                    type: Type.DOUBLE
                };
            } else if (nodoIzq.type == Type.NUMBER && nodoDer.type == Type.CHAR
                || nodoIzq.type == Type.CHAR && nodoDer.type == Type.NUMBER) {
                let valor: number;
                if (nodoDer.type == Type.CHAR) {
                    valor = (Number(nodoIzq.value) - Number(nodoDer.value.charCodeAt(0)))
                } else {
                    valor = (Number(nodoIzq.value.charCodeAt(0)) - Number(nodoDer.value))
                }
                resultado = {
                    value: valor,
                    type: Type.NUMBER
                };
            } else if (nodoIzq.type == Type.DOUBLE && nodoDer.type == Type.DOUBLE) {
                resultado = {
                    value: (Number(nodoIzq.value) - Number(nodoDer.value)).toFixed(2),
                    type: Type.DOUBLE
                };
            } else if (nodoIzq.type == Type.DOUBLE && nodoDer.type == Type.CHAR
                || nodoIzq.type == Type.CHAR && nodoDer.type == Type.DOUBLE) {
                let valor: number;
                if (nodoDer.type == Type.CHAR) {
                    valor = (Number(nodoIzq.value) - Number(nodoDer.value.charCodeAt(0)))
                } else {
                    valor = (Number(nodoIzq.value.charCodeAt(0)) - Number(nodoDer.value))
                }
                resultado = {
                    value: valor.toFixed(2),
                    type: Type.DOUBLE
                };
            } else if (nodoDer.type == Type.CHAR && nodoIzq.type == Type.CHAR) {
                resultado = {
                    value: (Number(nodoIzq.value.charCodeAt(0)) - Number(nodoDer.value.charCodeAt(0))),
                    type: Type.NUMBER
                }
            }else{
                throw instancia.addError(new Error("Semantico","tipo de resta no valida",this.line,this.column));
            }
        } else if (this.type == ArithmeticOption.MULTIPLICACION) {
            if (nodoIzq.type == Type.NUMBER && nodoDer.type == Type.NUMBER) {
                resultado = {
                    value: (Number(nodoIzq.value) * Number(nodoDer.value)),
                    type: Type.NUMBER
                };
            } else if (nodoIzq.type == Type.NUMBER && nodoDer.type == Type.DOUBLE
                || nodoIzq.type == Type.DOUBLE && nodoDer.type == Type.NUMBER) {
                resultado = {
                    value: (Number(nodoIzq.value) * Number(nodoDer.value)).toFixed(2),
                    type: Type.DOUBLE
                };
            } else if (nodoIzq.type == Type.NUMBER && nodoDer.type == Type.CHAR
                || nodoIzq.type == Type.CHAR && nodoDer.type == Type.NUMBER) {
                let valor: number;
                if (nodoDer.type == Type.CHAR) {
                    valor = (Number(nodoIzq.value) * Number(nodoDer.value.charCodeAt(0)))
                } else {
                    valor = (Number(nodoIzq.value.charCodeAt(0)) * Number(nodoDer.value))
                }
                resultado = {
                    value: valor,
                    type: Type.NUMBER
                };
            } else if (nodoIzq.type == Type.DOUBLE && nodoDer.type == Type.DOUBLE) {
                resultado = {
                    value: (Number(nodoIzq.value) * Number(nodoDer.value)).toFixed(2),
                    type: Type.DOUBLE
                };
            } else if (nodoIzq.type == Type.DOUBLE && nodoDer.type == Type.CHAR
                || nodoIzq.type == Type.CHAR && nodoDer.type == Type.DOUBLE) {
                let valor: number;
                if (nodoDer.type == Type.CHAR) {
                    valor = (Number(nodoIzq.value) * Number(nodoDer.value.charCodeAt(0)))
                } else {
                    valor = (Number(nodoIzq.value.charCodeAt(0)) * Number(nodoDer.value))
                }
                resultado = {
                    value: valor.toFixed(2),
                    type: Type.DOUBLE
                };
            } else if (nodoDer.type == Type.CHAR && nodoIzq.type == Type.CHAR) {
                resultado = {
                    value: (Number(nodoIzq.value.charCodeAt(0)) * Number(nodoDer.value.charCodeAt(0))),
                    type: Type.NUMBER
                }
            }else{
                throw instancia.addError(new Error("Semantico","tipo de multiplicacion no valida",this.line,this.column));
            }


        } else if (this.type == ArithmeticOption.DIV) {
            if (nodoIzq.type == Type.NUMBER && nodoDer.type == Type.NUMBER) {
                resultado = {
                    value: Math.trunc(Number(nodoIzq.value) / Number(nodoDer.value)),
                    type: Type.NUMBER
                };
            } else if (nodoIzq.type == Type.NUMBER && nodoDer.type == Type.DOUBLE
                || nodoIzq.type == Type.DOUBLE && nodoDer.type == Type.NUMBER) {
                resultado = {
                    value: (Number(nodoIzq.value) / Number(nodoDer.value)).toFixed(2),
                    type: Type.DOUBLE
                };
            } else if (nodoIzq.type == Type.NUMBER && nodoDer.type == Type.CHAR
                || nodoIzq.type == Type.CHAR && nodoDer.type == Type.NUMBER) {
                let valor: number;
                if (nodoDer.type == Type.CHAR) {
                    valor = (Number(nodoIzq.value) / Number(nodoDer.value.charCodeAt(0)))
                } else {
                    valor = (Number(nodoIzq.value.charCodeAt(0)) / Number(nodoDer.value))
                }
                resultado = {
                    value: Math.trunc(valor),
                    type: Type.NUMBER
                };
            } else if (nodoIzq.type == Type.DOUBLE && nodoDer.type == Type.DOUBLE) {
                resultado = {
                    value: (Number(nodoIzq.value) / Number(nodoDer.value)).toFixed(2),
                    type: Type.DOUBLE
                };
            } else if (nodoIzq.type == Type.DOUBLE && nodoDer.type == Type.CHAR
                || nodoIzq.type == Type.CHAR && nodoDer.type == Type.DOUBLE) {
                let valor: number;
                if (nodoDer.type == Type.CHAR) {
                    valor = (Number(nodoIzq.value) / Number(nodoDer.value.charCodeAt(0)))
                } else {
                    valor = (Number(nodoIzq.value.charCodeAt(0)) / Number(nodoDer.value))
                }
                resultado = {
                    value: valor.toFixed(2),
                    type: Type.DOUBLE
                };
            } else if (nodoDer.type == Type.CHAR && nodoIzq.type == Type.CHAR) {
                resultado = {
                    value: Math.trunc((Number(nodoIzq.value.charCodeAt(0)) / Number(nodoDer.value.charCodeAt(0)))),
                    type: Type.NUMBER
                }
            }else{
                throw instancia.addError(new Error("Semantico","tipo de division no valida",this.line,this.column));
            }


        }else if (this.type == ArithmeticOption.POT) {
            if (nodoIzq.type == Type.NUMBER && nodoDer.type == Type.NUMBER) {
                resultado = {
                    value: (Number(nodoIzq.value) ** Number(nodoDer.value)).toFixed(2),
                    type: Type.DOUBLE
                };
            } else if (nodoIzq.type == Type.NUMBER && nodoDer.type == Type.DOUBLE
                || nodoIzq.type == Type.DOUBLE && nodoDer.type == Type.NUMBER) {
                resultado = {
                    value: (Number(nodoIzq.value) ** Number(nodoDer.value)).toFixed(2),
                    type: Type.DOUBLE
                };
            } else if (nodoIzq.type == Type.NUMBER && nodoDer.type == Type.CHAR
                || nodoIzq.type == Type.CHAR && nodoDer.type == Type.NUMBER) {
                let valor: number;
                if (nodoDer.type == Type.CHAR) {
                    valor = (Number(nodoIzq.value) ** Number(nodoDer.value.charCodeAt(0)))
                } else {
                    valor = (Number(nodoIzq.value.charCodeAt(0)) ** Number(nodoDer.value))
                }
                resultado = {
                    value: valor.toFixed(2),
                    type: Type.DOUBLE
                };
            } else if (nodoIzq.type == Type.DOUBLE && nodoDer.type == Type.DOUBLE) {
                resultado = {
                    value: (Number(nodoIzq.value) ** Number(nodoDer.value)).toFixed(2),
                    type: Type.DOUBLE
                };
            } else if (nodoIzq.type == Type.DOUBLE && nodoDer.type == Type.CHAR
                || nodoIzq.type == Type.CHAR && nodoDer.type == Type.DOUBLE) {
                let valor: number;
                if (nodoDer.type == Type.CHAR) {
                    valor = (Number(nodoIzq.value) ** Number(nodoDer.value.charCodeAt(0)))
                } else {
                    valor = (Number(nodoIzq.value.charCodeAt(0)) ** Number(nodoDer.value))
                }
                resultado = {
                    value: valor.toFixed(2),
                    type: Type.DOUBLE
                };
            } else if (nodoDer.type == Type.CHAR && nodoIzq.type == Type.CHAR) {
                resultado = {
                    value: (Number(nodoIzq.value.charCodeAt(0)) ** Number(nodoDer.value.charCodeAt(0))).toFixed(2),
                    type: Type.DOUBLE
                }
            }else{
                console.log(nodoIzq.type+","+nodoDer.type)
                throw instancia.addError(new Error("Semantico","tipo de potencia no valida",this.line,this.column));
            }


        }else if (this.type == ArithmeticOption.MODULO) {
            if (nodoIzq.type == Type.NUMBER && nodoDer.type == Type.NUMBER) {
                resultado = {
                    value: (Number(nodoIzq.value) % Number(nodoDer.value)).toFixed(2),
                    type: Type.DOUBLE
                };
            } else if (nodoIzq.type == Type.NUMBER && nodoDer.type == Type.DOUBLE
                || nodoIzq.type == Type.DOUBLE && nodoDer.type == Type.NUMBER) {
                resultado = {
                    value: (Number(nodoIzq.value) % Number(nodoDer.value)).toFixed(2),
                    type: Type.DOUBLE
                };
            } else if (nodoIzq.type == Type.NUMBER && nodoDer.type == Type.CHAR
                || nodoIzq.type == Type.CHAR && nodoDer.type == Type.NUMBER) {
                let valor: number;
                if (nodoDer.type == Type.CHAR) {
                    valor = (Number(nodoIzq.value) % Number(nodoDer.value.charCodeAt(0)))
                } else {
                    valor = (Number(nodoIzq.value.charCodeAt(0)) % Number(nodoDer.value))
                }
                resultado = {
                    value: valor.toFixed(2),
                    type: Type.DOUBLE
                };
            } else if (nodoIzq.type == Type.DOUBLE && nodoDer.type == Type.DOUBLE) {
                resultado = {
                    value: (Number(nodoIzq.value) % Number(nodoDer.value)).toFixed(2),
                    type: Type.DOUBLE
                };
            } else if (nodoIzq.type == Type.DOUBLE && nodoDer.type == Type.CHAR
                || nodoIzq.type == Type.CHAR && nodoDer.type == Type.DOUBLE) {
                let valor: number;
                if (nodoDer.type == Type.CHAR) {
                    valor = (Number(nodoIzq.value) % Number(nodoDer.value.charCodeAt(0)))
                } else {
                    valor = (Number(nodoIzq.value.charCodeAt(0)) % Number(nodoDer.value))
                }
                resultado = {
                    value: valor.toFixed(2),
                    type: Type.DOUBLE
                };
            } else if (nodoDer.type == Type.CHAR && nodoIzq.type == Type.CHAR) {
                resultado = {
                    value: (Number(nodoIzq.value.charCodeAt(0)) % Number(nodoDer.value.charCodeAt(0))).toFixed(2),
                    type: Type.DOUBLE
                }
            }else{
                throw instancia.addError(new Error("Semantico","tipo de modulo no valido",this.line,this.column));
            }


        } 

        return resultado;
    }
}