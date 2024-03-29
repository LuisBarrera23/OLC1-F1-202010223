import { Environment } from "../symbols/enviroment";

export abstract class Instruccion{
    constructor(public line: number, public column: number ){
        this.line=line;
        this.column=column+1;
    }
    public abstract ejecutar(env: Environment):any

    public abstract graficar(env: Environment):string
}