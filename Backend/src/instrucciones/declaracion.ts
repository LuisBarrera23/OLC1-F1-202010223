import { Expression } from "../abstract/expresion";
import { Instruccion } from "../abstract/instruccion";
import { Environment } from "../symbols/enviroment";

export class Declaracion extends Instruccion {
    constructor(
        public nombre: String,
        public tipo: string,
        public expresion: Expression,
        public editable:boolean,
        public line: number,
        public column: number
    ) {
        super(line, column);
    }


    public ejecutar(env: Environment) {
        //analisis semantico
        console.log("Declarando nueva variable " + this.nombre);
        const expresion = this.expresion.ejecutar(env);
        console.log(expresion);
        let nombres: string[] = String(this.nombre).split(",");
        for (let n of nombres) {
            if (env.buscarVariable(n)) {
                //error semenaticos
                throw "Error semantico, la variable ya existe, y no se puede repetir en esta ts"
            }

            env.guardarVariable(n, expresion.value, expresion.type,this.editable);
        }
    }
}