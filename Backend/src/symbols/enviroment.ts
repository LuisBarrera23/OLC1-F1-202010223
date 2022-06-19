import { Type } from "./type";
import { Symbol } from "./symbols"
import { metodo } from "../instrucciones/metodo";
export class Environment {
    private tabladesimbolos: Map<string, Symbol>;
    private tabladesimbolos_metodos: Map<string, any>;

    constructor(public anterior: Environment | null) {
        this.tabladesimbolos = new Map();
        this.tabladesimbolos_metodos = new Map();
    }

    public vertablasimbolos() {
        return this.tabladesimbolos;
    }

    public guardar_metodo(nombre: string, valor:any) {
    
        //verificar que no existan duplicados
        this.tabladesimbolos_metodos.set(nombre, valor);
        console.log("metodo guardado");
    }
    public buscarMetodo(nombre: string): boolean {
        for (let entry of Array.from(this.tabladesimbolos_metodos.entries())) {
            if (entry[0] == nombre) return true;
        }
        return false;
    }

    public get_metodo(nombre: string): metodo | undefined | null {
        let env: Environment | null = this;
        while (env != null) {
            if (env.tabladesimbolos_metodos.has(nombre)) return env.tabladesimbolos_metodos.get(nombre);
            env = env.anterior;
        }
        return null;
    }

    public guardarVariable(nombre: string, valor: any, type: Type, editable: boolean): boolean {
        if (!this.buscarVariable(nombre)) {
            this.tabladesimbolos.set(nombre, new Symbol(valor, nombre, type, editable));
            return true;
        }
        console.log("esta variable [" + nombre + "] ya existe");
        return false;
    }

    public buscarVariable(nombre: string): boolean {
        for (let entry of Array.from(this.tabladesimbolos.entries())) {
            if (entry[0] == nombre) return true;
        }
        return false;
    }

    public getTipoVariable(nombre: string): Type {
        for (let entry of Array.from(this.tabladesimbolos.entries())) {
            if (entry[0] == nombre) return entry[1].type;
        }
        return Type.error
    }

    public actualizarVariable(nombre: string, nuevoValor: any) {
        let env: Environment | null = this;
        while (env != null) {
            for (let entry of Array.from(env.tabladesimbolos.entries())) {
                if (entry[0] == nombre) entry[1].value = nuevoValor;
            }
            env=env.anterior;
        }
        
    }

    public get_variable(nombre: string): Symbol | undefined | null {
        let env: Environment | null = this;
        while (env != null) {
            if (env.tabladesimbolos.has(nombre)) return env.tabladesimbolos.get(nombre);
            env = env.anterior;
        }
        return null;
    }

    public get_arregloSimbols():Symbol[]{
        let simbolos:Symbol[]=[];
        for (let entry of Array.from(this.tabladesimbolos.entries())) {
            simbolos.push(entry[1]);
        }

        return simbolos;
    }

    // public mostraranteriores() {
    //     // let env: any = this;
    //     // do {
    //     //     console.log(env);
    //     //     env = env.anterior;
    //     // } while (env != null);
    // }
}