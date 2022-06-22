import { Expression } from "../abstract/expresion";
import { Instruccion } from "../abstract/instruccion";
import { Singleton } from "../patronSingleton/singleton";
import { Environment } from "../symbols/enviroment";
import { Type } from "../symbols/type";
import { Error } from "../objetos/error";

export class Dowhile extends Instruccion {
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
            throw instancia.addError(new Error("Semantico","Sentencia do-while necesita una expresion booleana ",this.line,this.column));
        }
        
        this.bloqueUnico.ejecutar(env);
        while(true){
            let exp=this.condicion.ejecutar(env);
            if(exp.value==true){
                this.bloqueUnico.ejecutar(env);
            }else{
                break;
            }
        }

        
    }

    public graficar(env: Environment): string {
        return "";
    }
}