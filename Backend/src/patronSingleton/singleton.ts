import { Error } from "../objetos/error";

export class Singleton{
    private static instance: Singleton;
    private consola:string="";
    private grafica_ast="digraph G {\nrankdir=TB\nnode [shape=ellipse,fillcolor=green]";
    private errores:Error[]=[];

    constructor(){}

    public reset(){
        this.errores=[];
        this.consola="";
        this.grafica_ast="digraph G {\nrankdir=TB\nnode [shape=ellipse,fillcolor=green]";
    }

    public static getInstance():Singleton{
        if(!Singleton.instance){
            Singleton.instance=new Singleton();
        }
        return Singleton.instance;
    }

    public addConsola(data: string){
        this.consola+=data;
    }

    public getConsola():string{
        return this.consola;
    }

    public addError(data: Error){
        this.errores.push(data);
    }

    public getErrores():Error[]{
        return this.errores;
    }

    public add_graficaAST(dot:string){
        this.grafica_ast+=dot;
    }

    public get_graficaAST():string{
        return this.grafica_ast;
    }
}