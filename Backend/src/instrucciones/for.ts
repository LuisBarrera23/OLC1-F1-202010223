import { Expression } from "../abstract/expresion";
import { Instruccion } from "../abstract/instruccion";
import { Singleton } from "../patronSingleton/singleton";
import { Environment } from "../symbols/enviroment";
import { Type } from "../symbols/type";
import { Error } from "../objetos/error";
let hash=require('object-hash');

export class For extends Instruccion {
    constructor(
        public inicializacion: any,
        public condicion:Expression,
        public actualizacion: Instruccion,
        public bloque:Instruccion,
        line: number, 
        column : number
    ) {
        super(line,column);
    }

    public ejecutar(env:Environment) {
       
        //confirmar que la expresion es de tipo booleana
        const nuevoEnv=new Environment(env);
        this.inicializacion.ejecutar(nuevoEnv);
        const x=this.condicion.ejecutar(nuevoEnv);
        const instancia=Singleton.getInstance();
        if(x.type!=Type.BOOLEAN){
            throw instancia.addError(new Error("Semantico","Sentencia for necesita una expresion booleana ",this.line,this.column));
        }
        
        while(true){
            let exp=this.condicion.ejecutar(nuevoEnv);
            if(exp.value==true){
                this.bloque.ejecutar(nuevoEnv);
                this.actualizacion.ejecutar(nuevoEnv);
            }else{
                break;
            }
        }

        
    }

    public graficar(env: Environment): string {
        const instancia=Singleton.getInstance();
        
        let cadena:string="";
        let unico=this.line+"_"+this.column;
        cadena+=`nodo${hash(this)}[style=filled, label="FOR"]\n`;
        cadena+=`nodo${hash(this.inicializacion)}[style=filled, label="Inicializacion"]\n`;
        cadena+=`nodo${hash(this.condicion)}[style=filled, label="Expresion"]\n`;
        cadena+=`nodo${hash(this.actualizacion)}[style=filled, label="Actualizacion"]\n`;


        cadena+=`nodo${hash(this)}->nodo${hash(this.inicializacion)}\n`
        cadena+=`nodo${hash(this)}->nodo${hash(this.condicion)}\n`
        cadena+=`nodo${hash(this)}->nodo${hash(this.actualizacion)}\n`
        cadena+=`nodo${hash(this)}->nodo${hash(this.bloque)}\n`
        cadena+=this.bloque.graficar(env);
        //console.log(cadena)
        return cadena;
    }
}