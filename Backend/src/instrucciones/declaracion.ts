import { Expression } from "../abstract/expresion";
import { Instruccion } from "../abstract/instruccion";
import { Error } from "../objetos/error";
import { Singleton } from "../patronSingleton/singleton";
import { Environment } from "../symbols/enviroment";
import { Type } from "../symbols/type";

export class Declaracion extends Instruccion {
    constructor(
        public nombre: String,
        public tipo: Type,
        public expresion: Expression,
        public editable:boolean,
        public line: number,
        public column: number
    ) {
        super(line, column);
    }


    public ejecutar(env: Environment) {
        //analisis semantico
        console.log("Declarando nueva variable " + this.nombre+","+this.tipo);
        const instancia=Singleton.getInstance()
        const expresion = this.expresion.ejecutar(env);
        if(expresion.type==Type.error){
            throw instancia.addError(new Error("Semantico","La variable "+this.nombre+" tiene una expresion no valida",this.line+1,this.column+1));
        }
        console.log(expresion);
        let nombres: string[] = String(this.nombre).split(",");
        for (let n of nombres) {
            if (env.buscarVariable(n)) {
                //error semenaticos
                throw instancia.addError(new Error("Semantico","La variable "+this.nombre+" ya existe, y no se puede repetir en esta ts",this.line+1,this.column+1));
            }
            


            if(expresion.type==this.tipo){
            }else{
                throw instancia.addError(new Error("Semantico","El tipo de variable no coincide con la expresion ",this.line,this.column));
                
            }

            env.guardarVariable(n, expresion.value, expresion.type,this.editable);
        }
    }
}