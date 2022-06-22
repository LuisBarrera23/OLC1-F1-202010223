import { Expression } from "../abstract/expresion";
import { Instruccion } from "../abstract/instruccion";
import { Singleton } from "../patronSingleton/singleton";
import { Environment } from "../symbols/enviroment";
import { Error } from "../objetos/error";
import { Symbol } from "../symbols/symbols";
let hash=require('object-hash')

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

    public graficar(env: Environment): string {
        let distinto=this.line+this.column;
        const instancia=Singleton.getInstance();
        let cadena:string="";
        cadena+=`nodo${hash(this)}[style=filled, label="Asignacion"]\n`;
        cadena+=`nodo${hash(this.nombre)+distinto}[style=filled, label="${this.nombre}"]\n`
        cadena+=`nodo${hash(this.expresion)+distinto}[style=filled, label="Expresion"]\n`
        cadena+=`nodo${hash(this)}->nodo${hash(this.nombre)+distinto}\n nodo${hash(this)}->nodo${hash(this.expresion)+distinto}\n`
        //console.log(cadena)
        return cadena;
    }
}

