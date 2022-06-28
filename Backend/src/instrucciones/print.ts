import { Expression } from "../abstract/expresion";
import { Instruccion } from "../abstract/instruccion";
import { Acceso } from "../expresiones/acceso";
import { Singleton } from "../patronSingleton/singleton";
import { Environment } from "../symbols/enviroment";
import { Symbol_array } from "../symbols/symbols";
let hash= require('object-hash');

export class Print extends Instruccion{
    constructor(
        public expresion: Expression,
        line:number,
        column:number
    ){
        super(line,column);
    }

    public ejecutar(env: Environment) {
        const instancia=Singleton.getInstance();
        if(this.expresion instanceof Acceso){
            let vector=env.get_vector(this.expresion.id);
            if(vector instanceof Symbol_array){
                let salida:string=this.graficarvector(vector,vector.dimension);
                instancia.addConsola(String(salida));
                return;
            }
        }
        const exp=this.expresion.ejecutar(env);
        //console.log(">>",exp.value); //esto es lo que tienen que mostrar al usuario
        instancia.addConsola(String(exp.value));
    }

    public graficar(env: Environment): string {
        let distinto=this.line+"_"+this.column;
        const instancia=Singleton.getInstance();
        let cadena:string="";
        cadena+=`nodo${hash(this)}[style=filled, label="Print"]\n`;
        cadena+=`nodo${hash(this.expresion)+distinto}[style=filled, label="Expresion"]\n`
        cadena+=`nodo${hash(this)}->nodo${hash(this.expresion)+distinto}\n`
        return cadena;
    }

    public graficarvector(arreglo:Symbol_array,dimension:number):string{
        let estructura:string="";
        if(dimension==1){
            estructura="[";
            let array:any[]=arreglo.value;
            let largo=array.length;
            for (let i = 0; i < array.length; i++) {
                if(i==largo-1){
                    estructura+=String(array[i]);
                }else{
                    estructura+=String(array[i])+",";
                }
                
            }
            estructura+="]";
        }else if(dimension==2){
            estructura+="["
            let array:any[][]=arreglo.value;
            for (let j = 0; j < array.length; j++) {
                let largo=array[j].length;
                estructura+="["
                for (let i = 0; i < largo; i++) {
                    if(i==largo-1){
                        estructura+=String(array[j][i]);
                    }else{
                        estructura+=String(array[j][i])+",";
                    }
                }
                if(j==array.length-1){
                    estructura+="]]"
                }else{
                    estructura+="]\n"
                }
                
            }
        }
        return estructura;
    }
}