import { Request, Response } from "express";
import { Singleton } from "../patronSingleton/singleton";
import { Environment } from "../symbols/enviroment";
import { Error } from "../objetos/error";
const analizador = require("../gramatica/gramatica");

import { Symbol } from "../symbols/symbols"
import { metodo } from "../instrucciones/metodo";
import { Funcion } from "../instrucciones/funcion";
import { Asignar } from "../instrucciones/asignar";
let hash=require('object-hash')

const singleton = Singleton.getInstance();
let env_padre = new Environment(null);
let ast:any;

class ApiController {
  public async funcion1(req: Request, res: Response) {
    try {
      res.json({ msg: "Servidor respondiendo correctamente" });
    } catch (error) {
      res.status(400).send({ msg: "error en funcion 1" });
    }
  }

  public async funcion2(req: Request, res: Response) {
    try {
      let mensaje = req.body.entrada;
      singleton.reset();
      ast = analizador.parse(mensaje);
      env_padre = new Environment(null);



      for (const elemento of ast) {
        try {
          if (elemento instanceof metodo || elemento instanceof Funcion) {
            elemento.ejecutar(env_padre);
          }
        } catch (error) {
          //console.log(error); 
        }
      }


      for (const elemento of ast) {
        try {
          if (!(elemento instanceof metodo || elemento instanceof Funcion)) {
            elemento.ejecutar(env_padre);
          }
        } catch (error) {
          //console.log(error); 
        }
      }
      //console.log(singleton.getErrores());
      //console.log(env_padre.vertablasimbolos_vectores())

      res.json({ salida: singleton.getConsola() });
    } catch (error) {
      res.status(400).send({ msg: "error en funcion 2" });
    }
  }

  public async funcion3(req: Request, res: Response) {
    try {

      let errores: Error[] = singleton.getErrores();

      res.json(errores);
    } catch (error) {
      res.status(400).send({ msg: "error en funcion 3" });
    }
  }

  public async funcion4(req: Request, res: Response) {
    try {
      let simbolos: Symbol[] = env_padre.get_arregloSimbols();
      //console.log(simbolos);
      res.json(simbolos);
    } catch (error) {
      res.status(400).send({ msg: "error en funcion 4" });
    }
  }

  public async funcion5(req: Request, res: Response) {
    try {
      //recorrido para graficar ast
      let grafico="digraph G {\nrankdir=TB\nnode [shape=ellipse,fillcolor=green]\n";
      let cadena=`nodo${hash(ast)}[style=filled, label="ASTPRINCIPAL"]\n`;
      grafico+=cadena;
      for (const elemento of ast) {
        try {
          grafico+=`nodo${hash(ast)}->nodo${hash(elemento)}\n`+elemento.graficar(env_padre);
        } catch (error) {
          //console.log(error); 
        }
      }
      grafico+="\n}";
      //console.log(grafico)
      res.json({"grafica":grafico});
    } catch (error) {
      res.status(400).send({ msg: "error en funcion 4" });
    }
  }

  public async funcion6(req: Request, res: Response) {
    try {
      const instancia=Singleton.getInstance();
      let grafico:string=instancia.get_graficasts();
      res.json({"grafica":grafico});
    } catch (error) {
      res.status(400).send({ msg: "error en funcion 4" });
    }
  }
}

export const apiController = new ApiController();
