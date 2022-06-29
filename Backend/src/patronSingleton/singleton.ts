import { Error } from "../objetos/error";

export class Singleton{
    private static instance: Singleton;
    private consola:string="";
    private graficasTS:string="";
    private contador:number=0;
    private errores:Error[]=[];

    constructor(){}

    public reset(){
        this.errores=[];
        this.consola="";
        this.graficasTS="";
        this.contador=0;
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

    public add_graficasts(dot:string){
        this.graficasTS+=`nodo${this.contador}`+dot+"\n";
        this.contador++;
        //console.log(this.graficasTS);
    }

    public get_graficasts():string{
        let cadena=`digraph G {\nrankdir=TB\nnode [shape=plaintext];\n`+this.graficasTS+"\n}\n";
        return cadena;
    }
}