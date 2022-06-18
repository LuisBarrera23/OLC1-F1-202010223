import { Router } from "express";

import { apiController } from "./apiController";

class ApiRoutes {
  public router: Router = Router();

  constructor() {
    this.config();
  }

  config(): void {
    this.router.get("/", apiController.funcion1);
    this.router.post("/ejecutar", apiController.funcion2);
    this.router.get("/errores", apiController.funcion3);
    this.router.get("/simbolos", apiController.funcion4);
  }
}

const apiRoutes = new ApiRoutes();
export default apiRoutes.router;
