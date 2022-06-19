import { Expression } from "../abstract/expresion";
import { Retorno } from "../abstract/retorno";
import { Singleton } from "../patronSingleton/singleton";
import { Environment } from "../symbols/enviroment";
import { Error } from "../objetos/error";

export class Acceso extends Expression{
    constructor(
        public id:string,
        line:number,
        column:number
    ){
        super(line,column);
    }

    public ejecutar(env:Environment):Retorno{
        const varible_buscada=env.get_variable(this.id);
        const instancia=Singleton.getInstance()

        if(varible_buscada==null||varible_buscada==undefined){
            throw instancia.addError(new Error("Semantico","La variable "+this.id+" no existe",this.line+1,this.column+1));
        }
        return {value:varible_buscada.value,type:varible_buscada.type}
    }
}