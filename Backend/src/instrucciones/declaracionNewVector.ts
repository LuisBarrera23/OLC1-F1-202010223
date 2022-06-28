import { Expression } from "../abstract/expresion";
import { Instruccion } from "../abstract/instruccion";
import { Error } from "../objetos/error";
import { Singleton } from "../patronSingleton/singleton";
import { Environment } from "../symbols/enviroment";
import { Type } from "../symbols/type";
let hash=require('object-hash')

export class DeclaracionNV extends Instruccion {
    constructor(
        public nombre: string,
        public tipo1: Type,
        public tipo2: Type,
        public expresion1: Expression,
        public expresion2: Expression,
        public editable:boolean,
        public dimension:number,
        public line: number,
        public column: number
    ) {
        super(line, column);
    }


    public ejecutar(env: Environment) {
        //analisis semantico
        //console.log("Declarando vector " + this.nombre);
        const instancia=Singleton.getInstance()
        if(env.buscarVector(this.nombre)){
            throw instancia.addError(new Error("Semantico","El vector con id "+this.nombre+" ya existe en esta tabla de simbolos",this.line,this.column+1));
        }
        if(this.tipo1!=this.tipo2){
            throw instancia.addError(new Error("Semantico","Declaracion "+this.nombre+" mal estructurada",this.line,this.column+1));
        }
        if(this.dimension==1){
            let exp1=this.expresion1.ejecutar(env);
            if(exp1.type!=Type.NUMBER){
                throw instancia.addError(new Error("Semantico","Solo se permiten expresiones de tipo entero en index",this.line,this.column+1));
            }
            let temp:any[]=[];
            for (let index = 0; index < exp1.value; index++) {
                if(this.tipo1==Type.NUMBER){
                    temp.push(0);
                }else if(this.tipo1==Type.DOUBLE){
                    temp.push(0.0);
                }else if(this.tipo1==Type.STRING){
                    temp.push("");
                }else if(this.tipo1==Type.CHAR){
                    temp.push('');
                }else if(this.tipo1==Type.BOOLEAN){
                    temp.push(false);
                }
            }
            env.guardarVector(this.nombre,temp,this.tipo1,this.editable,this.dimension);
        }else if(this.dimension==2){
            console.log("encontre un vector de dos dimensiones gg-----------")
            let exp1=this.expresion1.ejecutar(env);
            let exp2=this.expresion2.ejecutar(env);
            //console.log(exp1);
            //console.log(exp2);
            if(exp1.type!=Type.NUMBER || exp2.type!=Type.NUMBER){
                throw instancia.addError(new Error("Semantico","Solo se permiten expresiones de tipo entero en index",this.line,this.column+1));
            }
            let temp:any[][]=[];
            for (let j = 0; j < exp2.value; j++) {
                let tmp:any[]=[];
                for (let i = 0; i < exp1.value; i++) {
                    if(this.tipo1==Type.NUMBER){
                        tmp.push(0)
                    }else if(this.tipo1==Type.DOUBLE){
                        tmp.push(0.0)
                    }else if(this.tipo1==Type.STRING){
                        tmp.push("")
                    }else if(this.tipo1==Type.CHAR){
                        tmp.push('')
                    }else if(this.tipo1==Type.BOOLEAN){
                        tmp.push(false)
                    }
                }
                temp.push(tmp);
            }
            //console.log(temp)
            env.guardarVector(this.nombre,temp,this.tipo1,this.editable,this.dimension);
        }
        
        
    }

    public graficar(env: Environment): string {
        const instancia=Singleton.getInstance();
        let strtipo="";
        if(this.tipo1==Type.NUMBER){
            strtipo="INT";
        }else if(this.tipo1==Type.DOUBLE){
            strtipo="DOUBLE";
        }else if(this.tipo1==Type.STRING){
            strtipo="STRING";
        }else if(this.tipo1==Type.CHAR){
            strtipo="CHAR";
        }else if(this.tipo1==Type.BOOLEAN){
            strtipo="BOOLEAN";
        }
        let cadena:string="";
        let unico=this.line+this.column;
        cadena+=`nodo${hash(this)}[style=filled, label="Declaracion New Vector"]\n`;
        cadena+=`nodo${hash(this.nombre)}[style=filled, label="${this.nombre}"]\n`;
        cadena+=`nodo${hash(this.tipo1)+unico}[style=filled, label="${strtipo}"]\n`;

        if(this.dimension==1){
            cadena+=`nodo${hash(this.dimension)+unico}[style=filled, label="1 dimension"]\n`;
        }else{
            cadena+=`nodo${hash(this.dimension)+unico}[style=filled, label="2 dimensiones"]\n`;
        }

        cadena+=`nodo${hash(this)}->nodo${hash(this.nombre)}\n`;
        cadena+=`nodo${hash(this)}->nodo${hash(this.tipo1)+unico}\n`;
        cadena+=`nodo${hash(this)}->nodo${hash(this.dimension)+unico}\n`;

        return cadena;
    }
}