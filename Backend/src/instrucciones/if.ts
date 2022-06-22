import { Expression } from "../abstract/expresion";
import { Instruccion } from "../abstract/instruccion";
import { Singleton } from "../patronSingleton/singleton";
import { Environment } from "../symbols/enviroment";
import { Type } from "../symbols/type";
import { Error } from "../objetos/error";

export class Sentencia_if extends Instruccion {
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
            throw instancia.addError(new Error("Semantico","Sentencia if necesita una expresion booleana ",this.line,this.column));
        }
        ///en su proyecto tiene que hacer l avalidacion que unicamente pasen expresiones de tipo bool
        

        if(x.value==true){
            const x:any=this.bloque_verdadero.ejecutar(env)
            return x;
        }else{
            this.bloque_falso.ejecutar(env)
        }

        
    }
    public graficar(env: Environment): string {
        return "";
    }
}