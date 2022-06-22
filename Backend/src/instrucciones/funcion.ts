import { Instruccion } from "../abstract/instruccion";
import { Singleton } from "../patronSingleton/singleton";
import { Environment } from "../symbols/enviroment";
import { Error } from "../objetos/error";
import { Parametro } from "../objetos/parametro";
import { Type } from "../symbols/type";

export class Funcion extends Instruccion {
    constructor(
        public tipo:Type,
        public id:string,
        public parametros:Parametro[],
        public bloque: Instruccion[],
        line: number, 
        column : number
    ) {
        super(line,column);
    }

    public ejecutar(env:Environment) {
       
        //semantica
        const instancia=Singleton.getInstance();
        //asignacion parecida a la de varibles, envez de guardar variables, estoy guardando funciones/metodods
        if(env.buscarMetodo(this.id)){
            throw instancia.addError(new Error("Semantico","El metodo "+this.id+" ya existe",this.line,this.column));
        }
        //console.log(this);
        env.guardar_metodo(this.id, this);


    }
    public graficar(env: Environment): string {
        return "";
    }
}