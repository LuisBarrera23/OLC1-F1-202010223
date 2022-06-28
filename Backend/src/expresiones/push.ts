import { Expression } from "../abstract/expresion";
import { Retorno } from "../abstract/retorno";
import { Singleton } from "../patronSingleton/singleton";
import { Environment } from "../symbols/enviroment";
import { Type } from "../symbols/type";

export class Push extends Expression {
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
        //console.log(vector)
        if (vector == null || vector == undefined) {
            resultado={value:false,type:Type.BOOLEAN}
            return resultado;
        }
        if(vector.dimension==2){
            resultado={value:false,type:Type.BOOLEAN}
            return resultado;
        }
        let exp=this.expression.ejecutar(env);
        if(vector.type!=exp.type){
            resultado={value:false,type:Type.BOOLEAN}
            return resultado;
        }
        //console.log(env.get_vector(this.id)?.value)
        env.pushVector(this.id,exp.value);
        //console.log(env.get_vector(this.id)?.value)
        resultado={value:true,type:Type.BOOLEAN}
        return resultado;
    }

}