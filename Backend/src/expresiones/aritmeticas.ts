import { Expression } from "../abstract/expresion";
import { Retorno } from "../abstract/retorno";
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

        const nodoIzq = this.izquierda.ejecutar(env);
        const nodoDer = this.derecha.ejecutar(env);

        if (this.type == ArithmeticOption.MAS) {
            if (nodoDer.type == Type.NUMBER && nodoIzq.type == Type.NUMBER) {
                resultado = {
                    value: (nodoIzq.value + nodoDer.value),
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
                    value: (Number(nodoIzq.value.charCodeAt(0)) + Number(nodoDer.value.charCodeAt(0))).toFixed(2),
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
            }


            //demas validadionces para la operaciones aritmeticas
        } else if (this.type == ArithmeticOption.MENOS) {

            if (nodoIzq.type == Type.NUMBER && nodoDer.type == Type.NUMBER) {
                resultado = {
                    value: (nodoIzq.value - nodoDer.value),
                    type: Type.NUMBER
                };
            } else if (nodoIzq.type == Type.NUMBER && nodoDer.type == Type.DOUBLE
                || nodoIzq.type == Type.DOUBLE && nodoDer.type == Type.NUMBER) {
                resultado = {
                    value: (nodoIzq.value - nodoDer.value).toFixed(2),
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
                    value: (nodoIzq.value - nodoDer.value).toFixed(2),
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
            }
        } else if (this.type == ArithmeticOption.MULTIPLICACION) {
            if (nodoIzq.type == Type.NUMBER && nodoDer.type == Type.NUMBER) {
                resultado = {
                    value: (nodoIzq.value * nodoDer.value),
                    type: Type.NUMBER
                };
            } else if (nodoIzq.type == Type.NUMBER && nodoDer.type == Type.DOUBLE
                || nodoIzq.type == Type.DOUBLE && nodoDer.type == Type.NUMBER) {
                resultado = {
                    value: (nodoIzq.value * nodoDer.value).toFixed(2),
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
                    value: (nodoIzq.value * nodoDer.value).toFixed(2),
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
            }
        } else if (this.type == ArithmeticOption.DIV) {
            if (nodoIzq.type == Type.NUMBER && nodoDer.type == Type.NUMBER) {
                resultado = {
                    value: Math.trunc((nodoIzq.value / nodoDer.value)),
                    type: Type.NUMBER
                };
            } else if (nodoIzq.type == Type.NUMBER && nodoDer.type == Type.DOUBLE
                || nodoIzq.type == Type.DOUBLE && nodoDer.type == Type.NUMBER) {
                resultado = {
                    value: (nodoIzq.value / nodoDer.value).toFixed(2),
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
                    value: (nodoIzq.value / nodoDer.value).toFixed(2),
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
            }
        }else if (this.type == ArithmeticOption.POT) {
            if (nodoIzq.type == Type.NUMBER && nodoDer.type == Type.NUMBER) {
                resultado = {
                    value: (nodoIzq.value ** nodoDer.value).toFixed(2),
                    type: Type.DOUBLE
                };
            } else if (nodoIzq.type == Type.NUMBER && nodoDer.type == Type.DOUBLE
                || nodoIzq.type == Type.DOUBLE && nodoDer.type == Type.NUMBER) {
                resultado = {
                    value: (nodoIzq.value ** nodoDer.value).toFixed(2),
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
                    value: (nodoIzq.value ** nodoDer.value).toFixed(2),
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
            }
        }else if (this.type == ArithmeticOption.MODULO) {
            if (nodoIzq.type == Type.NUMBER && nodoDer.type == Type.NUMBER) {
                resultado = {
                    value: (nodoIzq.value % nodoDer.value).toFixed(2),
                    type: Type.DOUBLE
                };
            } else if (nodoIzq.type == Type.NUMBER && nodoDer.type == Type.DOUBLE
                || nodoIzq.type == Type.DOUBLE && nodoDer.type == Type.NUMBER) {
                resultado = {
                    value: (nodoIzq.value % nodoDer.value).toFixed(2),
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
                    value: (nodoIzq.value % nodoDer.value).toFixed(2),
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
            }
        } 

        return resultado;
    }
}