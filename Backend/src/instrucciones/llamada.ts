import { Expression } from "../abstract/expresion";
import { Instruccion } from "../abstract/instruccion";
import { Error } from "../objetos/error";
import { Singleton } from "../patronSingleton/singleton";
import { Environment } from "../symbols/enviroment";
import { Declaracion } from "./declaracion";

export class llamada extends Instruccion {
    constructor(
        public id:string,
        public parametros: Expression[],
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
        if(metodo.parametros==undefined && this.parametros== undefined){
            console.log("vacio")
            metodo.bloque.ejecutar(env_para_parametros);
        }
        if(metodo.parametros==undefined&& this.parametros!=undefined|| metodo.parametros!=undefined&&this.parametros==undefined){
            throw instancia.addError(new Error("Semantico","El metodo "+this.id+" no tiene la misma cantidad de parametros",this.line,this.column));
        }
        if(metodo.parametros.length!=this.parametros.length){
            throw instancia.addError(new Error("Semantico","El metodo "+this.id+" no tiene la misma cantidad de parametros",this.line,this.column));
        }
        if(metodo.parametros.length==this.parametros.length){
            let diferente:Boolean=false;
            let cont:number=0;
            this.parametros.forEach(element => {
                let x=element.ejecutar(env_para_parametros);
                if(x.type!=metodo.parametros[cont].tipo){
                    diferente=true;
                }else{
                    env_para_parametros.guardarVariable(metodo.parametros[cont].id,x.value, x.type,true);
                }
                cont++;
                
            });
            if(diferente==false){
                metodo.bloque.ejecutar(env_para_parametros);
            }else{
                throw instancia.addError(new Error("Semantico","El metodo "+this.id+" no tiene parametros del mismo tipo",this.line,this.column));
            }
        }

        
        
        

    }
}