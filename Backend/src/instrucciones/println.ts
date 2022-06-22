import { Expression } from "../abstract/expresion";
import { Instruccion } from "../abstract/instruccion";
import { Singleton } from "../patronSingleton/singleton";
import { Environment } from "../symbols/enviroment";

export class Println extends Instruccion{
    constructor(
        public expresion: Expression,
        line:number,
        column:number
    ){
        super(line,column);
    }

    public ejecutar(env: Environment) {
        const exp=this.expresion.ejecutar(env);
        //console.log(">>",exp.value); //esto es lo que tienen que mostrar al usuario
        const instancia=Singleton.getInstance();
        instancia.addConsola(String(exp.value)+"\n");
    }

    public graficar(env: Environment): string {
        return "";
    }
}