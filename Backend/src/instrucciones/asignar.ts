import { Expression } from "../abstract/expresion";
import { Instruccion } from "../abstract/instruccion";
import { Environment } from "../symbols/enviroment";

export class Asignar extends Instruccion{
    constructor(public nombre:string,public expresion:Expression,line:number,column:number){
        super(line,column);
    }

    public ejecutar(env: Environment) {
        //se debe verificar si existe en la tabla, si existe verificar que sea del mismo tipo
        env.actualizarVariable(this.nombre,10)
    }
}

