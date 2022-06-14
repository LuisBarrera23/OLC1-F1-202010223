import { Environment } from "../symbols/enviroment";
import { Retorno } from "./retorno";

export abstract class Expression{
    constructor(public line:number,public column:number){
        this.line=line;
        this.column=column+1;
    }

    public abstract ejecutar(env: Environment):Retorno
}