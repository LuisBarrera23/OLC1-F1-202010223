import { Expression } from "../abstract/expresion";
import { Instruccion } from "../abstract/instruccion";
import { Singleton } from "../patronSingleton/singleton";
import { Environment } from "../symbols/enviroment";
import { Type } from "../symbols/type";
import { Error } from "../objetos/error";
import { Break } from "./break";
let hash=require('object-hash')

export class While extends Instruccion {
    constructor(
        public condicion:Expression,
        public bloqueUnico: Instruccion,
        line: number, 
        column : number
    ) {
        super(line,column);
    }

    public ejecutar(env:Environment) {
       
        //confirmar que la expresion es de tipo booleana

        const x=this.condicion.ejecutar(env);
        const instancia=Singleton.getInstance();
        if(x.type!=Type.BOOLEAN){
            throw instancia.addError(new Error("Semantico","Sentencia while necesita una expresion booleana ",this.line,this.column));
        }
        
      
        while(true){
            let exp=this.condicion.ejecutar(env);
            if(exp.value==true){
                this.bloqueUnico.ejecutar(env);
                // if(ejecucion instanceof Break){
                //     console.log("encontre un break")
                //     return;
                // }
            }else{
                break;
            }
        }

        
    }

    public graficar(env: Environment): string {
        const instancia=Singleton.getInstance();
        
        let cadena:string="";
        let unico=this.line+"_"+this.column;
        cadena+=`nodo${hash(this)}[style=filled, label="while"]\n`;
        cadena+=`nodo${hash(this.condicion)}[style=filled, label="Expresion"]\n`;


        cadena+=`nodo${hash(this)}->nodo${hash(this.condicion)}\n`
        cadena+=`nodo${hash(this)}->nodo${hash(this.bloqueUnico)}\n`
        cadena+=this.bloqueUnico.graficar(env);
        //console.log(cadena)
        return cadena;
    }
}