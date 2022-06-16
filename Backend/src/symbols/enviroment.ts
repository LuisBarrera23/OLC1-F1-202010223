import { Type } from "./type";
import { Symbol } from "./symbols"
export class Environment {
    private tabladesimbolos: Map<string, Symbol>;
    constructor(public anterior: Environment | null) {
        this.tabladesimbolos = new Map();
    }

    public vertablasimbolos() {
        return this.tabladesimbolos;
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
        for (let entry of Array.from(this.tabladesimbolos.entries())) {
            if (entry[0] == nombre) entry[1].value = nuevoValor;
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

    // public mostraranteriores() {
    //     // let env: any = this;
    //     // do {
    //     //     console.log(env);
    //     //     env = env.anterior;
    //     // } while (env != null);
    // }
}