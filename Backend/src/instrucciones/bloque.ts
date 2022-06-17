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

        //analisis semantivo 

        const new_env= new Environment(env);

        // como acceder a otras tablas de simbolos padres
        // while(env!=null){
        //     //busqueda de dla variblea
        //     env = env.anterior
        // }


        for (const elemento  of this.instrucciones) {
            try {
                elemento.ejecutar(new_env)
            } catch (error) {
                console.log(error);
                
            }
        }

        
    }

}