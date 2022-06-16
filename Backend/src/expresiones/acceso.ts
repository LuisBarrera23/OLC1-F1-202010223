import { Expression } from "../abstract/expresion";
import { Retorno } from "../abstract/retorno";
import { Environment } from "../symbols/enviroment";

export class Acceso extends Expression{
    constructor(
        private id:string,
        line:number,
        column:number
    ){
        super(line,column);
    }

    public ejecutar(env:Environment):Retorno{
        const varible_buscada=env.get_variable(this.id);

        if(varible_buscada==null||varible_buscada==undefined){
            throw "Error semantico la variable no existe"
        }
        return {value:varible_buscada.value,type:varible_buscada.type}
    }
}