import { Expression } from "../abstract/expresion";
import { Retorno } from "../abstract/retorno";
import { Singleton } from "../patronSingleton/singleton";
import { Environment } from "../symbols/enviroment";
import { Type } from "../symbols/type";
import { Acceso } from "./acceso";
import { Error } from "../objetos/error";

export class Indexof extends Expression {
    constructor(
        public id: string,
        public expression: Expression,
        line: number,
        column: number
    ) {
        super(line, column);
    }

    public ejecutar(env: Environment): Retorno {
        let resultado: Retorno = { value: null, type: Type.error }
        const instancia = Singleton.getInstance();
        let vector = env.get_vector(this.id);
        if (vector == null || vector == undefined) {
            throw instancia.addError(new Error("Semantico", "El vector " + this.id + " no existe", this.line, this.column + 1));
        }
        if(vector.dimension==2){
            throw instancia.addError(new Error("Semantico", "La funcion IndexOf solo funciona para vectores de 1 dimension", this.line, this.column + 1));
        }
        let arreglo:any[]=vector.value;
        let exp=this.expression.ejecutar(env);
        let pos:Number=arreglo.indexOf(exp.value);
        resultado={value:pos,type:Type.NUMBER}
        return resultado;
    }

}