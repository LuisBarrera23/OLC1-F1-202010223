import { Instruccion } from "../abstract/instruccion";
import { Error } from "../objetos/error";
import { Singleton } from "../patronSingleton/singleton";
import { Environment } from "../symbols/enviroment";

export class llamada extends Instruccion {
    constructor(
        public id:string,
        public parametros: any,
        line: number, 
        column : number
    ) {
        super(line,column);
    }

    public ejecutar(env:Environment) {
       
        
        console.log(this);
        const metodo= env.get_metodo(this.id)
        const instancia=Singleton.getInstance();

        //si lo encontro
        //new env para declarar los parametros
        let env_para_parametros= new Environment(env);        
        

        if (metodo== null) {
            throw instancia.addError(new Error("Semantico","El metodo "+this.id+" no existe",this.line,this.column));
        }

        metodo.bloque.ejecutar(env_para_parametros);
        
        

    }
}