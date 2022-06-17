import { Error } from "../objetos/error";

export class Singleton{
    private static instance: Singleton;
    private consola:string="";
    private errores:Error[]=[];

    constructor(){}

    public reset(){
        this.errores=[];
        this.consola="";
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
}