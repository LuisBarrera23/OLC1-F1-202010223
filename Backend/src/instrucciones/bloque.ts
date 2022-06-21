import { Instruccion } from "../abstract/instruccion";
import { Environment } from "../symbols/enviroment";
import { Break } from "./break";
import { Return } from "./return";

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
                const x:any=elemento.ejecutar(new_env);
                if(x instanceof Return){
                    console.log("encontro un return en bloque")
                    return x;
                }
            } catch (error) {
                console.log("------------------------------------------------")
                console.log(elemento);
                
            }
        }

        
    }

}