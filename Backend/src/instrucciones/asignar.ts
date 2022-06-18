import { Expression } from "../abstract/expresion";
import { Instruccion } from "../abstract/instruccion";
import { Singleton } from "../patronSingleton/singleton";
import { Environment } from "../symbols/enviroment";
import { Error } from "../objetos/error";
import { Symbol } from "../symbols/symbols";

export class Asignar extends Instruccion{
    constructor(public nombre:string,public expresion:Expression,line:number,column:number){
        super(line,column);
    }

    public ejecutar(env: Environment) {
        //se debe verificar si existe en la tabla, si existe verificar que sea del mismo tipo
        let buscada:any=env.get_variable(this.nombre);
        const instancia=Singleton.getInstance()
        const expresion = this.expresion.ejecutar(env);
        if(buscada==null||buscada==undefined){
            throw instancia.addError(new Error("Semantico","La variable "+this.nombre+" no existe en la tabla de simbolos",this.line,this.column));
        }
        if(buscada.editable==false){
            throw instancia.addError(new Error("Semantico","La variable "+this.nombre+" no es editable",this.line,this.column));
        }
        if(buscada.type==expresion.type){
            env.actualizarVariable(this.nombre,expresion.value);
        }else{
            throw instancia.addError(new Error("Semantico","La asignacion de "+this.nombre+" no es del mismo tipo de la declarada",this.line,this.column));
        }
    }
}

