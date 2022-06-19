import { Instruccion } from "../abstract/instruccion";
import { Environment } from "../symbols/enviroment";

export class Bloque extends Instruccion {
    constructor(
        
        public instrucciones : any[],
        line: number, 
        column : number
    ) {
        super(line,column);
    }

    public ejecutar(env:Environment) {


        const new_env= new Environment(env);


        for (const elemento  of this.instrucciones) {
            try {
                elemento.ejecutar(new_env)
            } catch (error) {
                console.log(error);
                
            }
        }

        
    }

}