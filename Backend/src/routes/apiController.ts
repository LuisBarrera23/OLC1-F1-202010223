import { Request, Response } from "express";
import { Singleton } from "../patronSingleton/singleton";
import { Environment } from "../symbols/enviroment";
import { Error } from "../objetos/error";
const analizador=require("../gramatica/gramatica");

import { Symbol } from "../symbols/symbols"

const singleton=Singleton.getInstance();
let env_padre = new Environment(null);

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
      let mensaje=req.body.entrada;
      singleton.reset();
      let ast=analizador.parse(mensaje);
      env_padre = new Environment(null);


    



      for (const elemento  of ast) {
        try {
            elemento.ejecutar(env_padre)
        } catch (error) {
            //console.log(error); 
        }
      }
      //console.log(env_padre);
      console.log(singleton.getErrores());
      
      res.json({ salida: singleton.getConsola()});
    } catch (error) {
      res.status(400).send({ msg: "error en funcion 2" });
    }
  }

  public async funcion3(req: Request, res: Response) {
    try {

      let errores:Error[]=singleton.getErrores();

      res.json(errores);
    } catch (error) {
      res.status(400).send({ msg: "error en funcion 3" });
    }
  }

  public async funcion4(req: Request, res: Response) {
    try {
      let simbolos:Symbol[]=env_padre.get_arregloSimbols();
      console.log(simbolos);
      res.json(simbolos);
    } catch (error) {
      res.status(400).send({ msg: "error en funcion 4" });
    }
  }
}

export const apiController = new ApiController();
