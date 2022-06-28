import { Expression } from "../abstract/expresion";
import { Instruccion } from "../abstract/instruccion";
import { Singleton } from "../patronSingleton/singleton";
import { Environment } from "../symbols/enviroment";
import { Type } from "../symbols/type";
import { Error } from "../objetos/error";
let hash=require('object-hash');

export class Ternarioi extends Instruccion {
    constructor(
        public condicion:Expression,
        public bloque_verdadero: Instruccion,
        public bloque_falso: Instruccion,
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
            throw instancia.addError(new Error("Semantico","Ternario necesita una expresion booleana ",this.line,this.column));
        }
        

        if(x.value==true){
            const x:any=this.bloque_verdadero.ejecutar(env)
            return x;
        }else{
            this.bloque_falso.ejecutar(env)
        }

        
    }
    public graficar(env: Environment): string {
        const instancia=Singleton.getInstance();
        
        let cadena:string="";
        let unico=this.line+"_"+this.column;
        cadena+=`nodo${hash(this)}[style=filled, label="Operador Ternario"]\n`;
        cadena+=`nodo${hash(this.condicion)}[style=filled, label="Condicion"]\n`;
        cadena+=`nodo${hash(this)}->nodo${hash(this.condicion)}\n`
        
        cadena+=`nodo${hash(this)}->nodo${hash(this.bloque_verdadero)}\n`
        cadena+=this.bloque_verdadero.graficar(env);
        cadena+=`nodo${hash(this)}->nodo${hash(this.bloque_falso)}\n`
        cadena+=this.bloque_falso.graficar(env);
        

        return cadena;
    }
}