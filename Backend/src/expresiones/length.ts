import { Expression } from "../abstract/expresion";
import { Retorno } from "../abstract/retorno";
import { Singleton } from "../patronSingleton/singleton";
import { Environment } from "../symbols/enviroment";
import { Type } from "../symbols/type";
import { Acceso } from "./acceso";
import { Error } from "../objetos/error";

export class Length extends Expression {
    constructor(
        private expression: Expression,
        line: number,
        column: number
    ) {
        super(line, column);
    }

    public ejecutar(env: Environment): Retorno {
        let resultado: Retorno = { value: null, type: Type.error }
        const instancia = Singleton.getInstance();
        if (this.expression instanceof Acceso) {
            let vector = env.get_vector(this.expression.id);
            if (vector == null || vector == undefined) {
                let variable = env.get_variable(this.expression.id);
                if (variable == null || variable == undefined) {
                    throw instancia.addError(new Error("Semantico", "La variable " + this.expression.id + " no existe", this.line, this.column + 1));
                }
                let exp = this.expression.ejecutar(env);
                if (exp.type != Type.STRING) {
                    throw instancia.addError(new Error("Semantico", "La expresion Length solo admite vectores de una dimension o String", this.line, this.column + 1));
                }
                let cadena: string = exp.value;
                resultado = { value: Number(cadena.length), type: Type.NUMBER }
                return resultado;
            }
            if (vector.dimension == 2) {
                throw instancia.addError(new Error("Semantico", "La expresion Length solo admite vectores de una dimension", this.line, this.column + 1));
            }
            let arreglo: any[] = vector.value;
            //console.log(arreglo.length);
            resultado = { value: Number(arreglo.length), type: Type.NUMBER }
        } else {
            let exp = this.expression.ejecutar(env);
            if (exp.type != Type.STRING) {
                throw instancia.addError(new Error("Semantico", "La expresion Length solo admite vectores de una dimension o String", this.line, this.column + 1));
            }
            let cadena: string = exp.value;
            resultado = { value: Number(cadena.length), type: Type.NUMBER }
        }
        return resultado;
    }

}