import { Request, Response } from "express";

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
      res.json({ salida: "recibi: " + mensaje });
    } catch (error) {
      res.status(400).send({ msg: "error en funcion 2" });
    }
  }
}

export const apiController = new ApiController();