import { Expression } from "../abstract/expresion";
import { Retorno } from "../abstract/retorno";
import { Error } from "../objetos/error";
import { Singleton } from "../patronSingleton/singleton";
import { Environment } from "../symbols/enviroment";
import { Type } from "../symbols/type";
import { Funcion } from "../instrucciones/funcion";
import { metodo } from "../instrucciones/metodo";
import { Return } from "../instrucciones/return";

export class llamadaF extends Expression {
    constructor(
        public id: string,
        public parametros: Expression[],
        line: number,
        column: number
    ) {
        super(line, column);
    }

    public ejecutar(env: Environment):Retorno {

        let resultado: Retorno = {
            value: null,
            type: Type.error
        }
        //console.log(this);
        const metodo = env.get_metodo(this.id);
        const instancia = Singleton.getInstance();

        //si lo encontro
        //new env para declarar los parametros
        let env_para_parametros = new Environment(env);


        if (metodo == null) {
            throw instancia.addError(new Error("Semantico", "El metodo " + this.id + " no existe", this.line, this.column));
        }
        if (metodo.parametros == undefined && this.parametros == undefined) {
            //console.log("vacio")
            resultado=this.corrermetodo(env_para_parametros,env);
            return resultado;
        }
        if (metodo.parametros == undefined && this.parametros != undefined || metodo.parametros != undefined && this.parametros == undefined) {
            throw instancia.addError(new Error("Semantico", "El metodo " + this.id + " no tiene la misma cantidad de parametros", this.line, this.column));
        }
        if (metodo.parametros.length != this.parametros.length) {
            throw instancia.addError(new Error("Semantico", "El metodo " + this.id + " no tiene la misma cantidad de parametros", this.line, this.column));
        }
        if (metodo.parametros.length == this.parametros.length) {
            let diferente: Boolean = false;
            let cont: number = 0;
            this.parametros.forEach(element => {
                let x = element.ejecutar(env_para_parametros);
                if (x.type != metodo.parametros[cont].tipo) {
                    diferente = true;
                } else {
                    env_para_parametros.guardarVariable(metodo.parametros[cont].id, x.value, x.type, true);
                }
                cont++;

            });
            if (diferente == false) {
                //metodo.bloque.ejecutar(env_para_parametros);
                resultado=this.corrermetodo(env_para_parametros,env);
                return resultado;
            } else {
                throw instancia.addError(new Error("Semantico", "El metodo " + this.id + " no tiene parametros del mismo tipo", this.line, this.column));
            }
        }



        return resultado;

    }

    public corrermetodo(env: Environment,env_original:Environment):Retorno {
        const instancia=Singleton.getInstance();
        const metod:any = env_original.get_metodo(this.id);
        let resultado: Retorno = {
            value: null,
            type: Type.error
        }
        if (metod == null || metod == undefined) {
            return resultado;
        }
        let instrucciones: any[] = metod.bloque.instrucciones;
        //console.log(instrucciones);
        if(metod instanceof metodo){
            throw instancia.addError(new Error("Semantico", "La expresion recibida " + this.id + " es un metodo no una funcion", this.line, this.column));
        }else if(metod instanceof Funcion){
            console.log("este es una funcion no un metodo")
            for (const elemento of instrucciones) {
                try {
                    const x:any=elemento.ejecutar(env);
                    if (x instanceof Return) {
                        let a:Retorno=x.Exp.ejecutar(env);
                        return resultado={value:a.value,type:a.type};
                    }
                } catch (error) {
                    console.log(error);
                }
            }
        }

        return resultado;
    }
}