import { Expression } from "../abstract/expresion";
import { Retorno } from "../abstract/retorno";
import { Error } from "../objetos/error";
import { Singleton } from "../patronSingleton/singleton";
import { Environment } from "../symbols/enviroment";
import { Type } from "../symbols/type";
import { Acceso } from "./acceso";
import { modificadorOption } from "./modificadorOption";

export class Modificador extends Expression{
    constructor(
        private id: any,
        private accion: modificadorOption, 
        line: number,
        column: number
    ) {
        super(line, column);
    }

    public ejecutar(env:Environment): Retorno {
        let resultado:Retorno={
            value:null,
            type:Type.error
        }
        const instancia=Singleton.getInstance();
        if(this.id instanceof Acceso){
            //console.log("si es instancia")
        }else{
            throw instancia.addError(new Error("Semantico","Incremento y decremento unicamente para identificadores",this.line,this.column));
        }
        let valor=this.id.ejecutar(env);
        if(!(valor.type==Type.DOUBLE || valor.type==Type.NUMBER)){
            throw instancia.addError(new Error("Semantico","Incremento y decremento unicamente para DOUBLE o INT",this.line,this.column));
        }
        
        
        if(this.accion==modificadorOption.INCREDERECHA){
            env.actualizarVariable(this.id.id,Number(valor.value)+1);
            resultado={
                value:valor.value,
                type:valor.type
            }
        }else if(this.accion==modificadorOption.INCREIZQUIERDA){
            env.actualizarVariable(this.id.id,Number(valor.value)+1);
            resultado={
                value:valor.value+1,
                type:valor.type
            }
        }else if(this.accion==modificadorOption.DECREDERECHA){
            env.actualizarVariable(this.id.id,Number(valor.value)-1);
            resultado={
                value:valor.value,
                type:valor.type
            }
        }else if(this.accion==modificadorOption.DECREIZQUIERDA){
            env.actualizarVariable(this.id.id,Number(valor.value)-1);
            resultado={
                value:valor.value-1,
                type:valor.type
            }
        }
        return resultado;

    }
}