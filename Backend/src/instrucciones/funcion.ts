import { Instruccion } from "../abstract/instruccion";
import { Singleton } from "../patronSingleton/singleton";
import { Environment } from "../symbols/enviroment";
import { Error } from "../objetos/error";
import { Parametro } from "../objetos/parametro";
import { Type } from "../symbols/type";
let hash=require('object-hash');

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
        const instancia=Singleton.getInstance();
        let strtipo="";
        if(this.tipo==Type.NUMBER){
            strtipo="INT";
        }else if(this.tipo==Type.DOUBLE){
            strtipo="DOUBLE";
        }else if(this.tipo==Type.STRING){
            strtipo="STRING";
        }else if(this.tipo==Type.CHAR){
            strtipo="CHAR";
        }else if(this.tipo==Type.BOOLEAN){
            strtipo="BOOLEAN";
        }
        let cadena:string="";
        let unico=this.line+"_"+this.column;
        cadena+=`nodo${hash(this)}[style=filled, label="Funcion"]\n`;
        cadena+=`nodo${hash(this.tipo)+unico}[style=filled, label="${strtipo}"]\n`;
        cadena+=`nodo${hash(this.id)+unico}[style=filled, label="${this.id}"]\n`;
        cadena+=`nodo${hash(this)}->nodo${hash(this.tipo)+unico}\n`
        cadena+=`nodo${hash(this)}->nodo${hash(this.id)+unico}\n`

        if(!(this.parametros==undefined)){
            cadena+=`nodo${hash(this.parametros)}[style=filled, label="Parametros"]\n`;
            cadena+=`nodo${hash(this)}->nodo${hash(this.parametros)}\n`
        }
        cadena+=`nodo${hash(this)}->nodo${hash(this.bloque)}\n`
        cadena += `nodo${hash(this.bloque)}[style=filled, label="Bloque"]\n`;
        const metod:any = env.get_metodo(this.id);
        let instrucciones=metod.bloque.instrucciones;
        for (const elemento of instrucciones) {
            try {
                cadena += `nodo${hash(this.bloque)}->nodo${hash(elemento)}\n` + elemento.graficar(env)+"\n";
            } catch (error) {
                //console.log(error); 
            }
        }
        return cadena;
    }
}