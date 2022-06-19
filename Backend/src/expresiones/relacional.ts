import { Expression } from "../abstract/expresion";
import { Retorno } from "../abstract/retorno";
import { Singleton } from "../patronSingleton/singleton";
import { Error } from "../objetos/error";
import { Environment } from "../symbols/enviroment";
import { Type } from "../symbols/type";
import { RelacionalOption } from "./relacionalOption";

export class Relacional extends Expression {
  constructor(
    private izquierda: Expression,
    private derecha: Expression,
    private type: RelacionalOption,
    line: number,
    column: number
  ) {
    super(line, column);
  }

  public ejecutar(env: Environment): Retorno {
    let result: Retorno = {
      value: null,
      type: Type.error,
    };
    const instancia=Singleton.getInstance();
    const nodoIzq = this.izquierda.ejecutar(env);
    const nodoDer = this.derecha.ejecutar(env);

    if (this.type == RelacionalOption.MAYOR) {
      if (nodoIzq.type == Type.NUMBER && nodoDer.type == Type.NUMBER) {
        result = {
          value: Number(nodoIzq.value) > Number(nodoDer.value),
          type: Type.BOOLEAN,
        };
      } else if (nodoIzq.type == Type.NUMBER && nodoDer.type == Type.DOUBLE) {
        result = {
          value: Number(nodoIzq.value) > Number(nodoDer.value),
          type: Type.BOOLEAN,
        };
      } else if (nodoIzq.type == Type.NUMBER && nodoDer.type == Type.CHAR) {
        result = {
          value: Number(nodoIzq.value) > Number(nodoDer.value.charCodeAt(0)),
          type: Type.BOOLEAN,
        };
      } else if (nodoIzq.type == Type.DOUBLE && nodoDer.type == Type.NUMBER) {
        result = {
          value: Number(nodoIzq.value) > Number(nodoDer.value),
          type: Type.BOOLEAN,
        };
      } else if (nodoIzq.type == Type.DOUBLE && nodoDer.type == Type.DOUBLE) {
        result = {
          value: Number(nodoIzq.value) > Number(nodoDer.value),
          type: Type.BOOLEAN,
        };
      } else if (nodoIzq.type == Type.DOUBLE && nodoDer.type == Type.CHAR) {
        result = {
          value: Number(nodoIzq.value) > Number(nodoDer.value.charCodeAt(0)),
          type: Type.BOOLEAN,
        };
      } else if (nodoIzq.type == Type.CHAR && nodoDer.type == Type.NUMBER) {
        result = {
          value: Number(nodoIzq.value.charCodeAt(0)) > Number(nodoDer.value),
          type: Type.BOOLEAN,
        };
      } else if (nodoIzq.type == Type.CHAR && nodoDer.type == Type.DOUBLE) {
        result = {
          value: Number(nodoIzq.value.charCodeAt(0)) > Number(nodoDer.value),
          type: Type.BOOLEAN,
        };
      } else if (nodoIzq.type == Type.CHAR && nodoDer.type == Type.CHAR) {
        result = {
          value: Number(nodoIzq.value.charCodeAt(0)) > Number(nodoDer.value.charCodeAt(0)),
          type: Type.BOOLEAN,
        };
      }else{
        throw instancia.addError(new Error("Semantico","tipo de operacion relacional no valida",this.line,this.column));
      }

      



    } else if (this.type == RelacionalOption.MENOR) {
      if (nodoIzq.type == Type.NUMBER && nodoDer.type == Type.NUMBER) {
        result = {
          value: Number(nodoIzq.value) < Number(nodoDer.value),
          type: Type.BOOLEAN,
        };
      } else if (nodoIzq.type == Type.NUMBER && nodoDer.type == Type.DOUBLE) {
        result = {
          value: Number(nodoIzq.value) < Number(nodoDer.value),
          type: Type.BOOLEAN,
        };
      } else if (nodoIzq.type == Type.NUMBER && nodoDer.type == Type.CHAR) {
        result = {
          value: Number(nodoIzq.value) < Number(nodoDer.value.charCodeAt(0)),
          type: Type.BOOLEAN,
        };
      } else if (nodoIzq.type == Type.DOUBLE && nodoDer.type == Type.NUMBER) {
        result = {
          value: Number(nodoIzq.value) < Number(nodoDer.value),
          type: Type.BOOLEAN,
        };
      } else if (nodoIzq.type == Type.DOUBLE && nodoDer.type == Type.DOUBLE) {
        result = {
          value: Number(nodoIzq.value) < Number(nodoDer.value),
          type: Type.BOOLEAN,
        };
      } else if (nodoIzq.type == Type.DOUBLE && nodoDer.type == Type.CHAR) {
        result = {
          value: Number(nodoIzq.value) < Number(nodoDer.value.charCodeAt(0)),
          type: Type.BOOLEAN,
        };
      } else if (nodoIzq.type == Type.CHAR && nodoDer.type == Type.NUMBER) {
        result = {
          value: Number(nodoIzq.value.charCodeAt(0)) < Number(nodoDer.value),
          type: Type.BOOLEAN,
        };
      } else if (nodoIzq.type == Type.CHAR && nodoDer.type == Type.DOUBLE) {
        result = {
          value: Number(nodoIzq.value.charCodeAt(0)) < Number(nodoDer.value),
          type: Type.BOOLEAN,
        };
      } else if (nodoIzq.type == Type.CHAR && nodoDer.type == Type.CHAR) {
        result = {
          value: Number(nodoIzq.value.charCodeAt(0)) < Number(nodoDer.value.charCodeAt(0)),
          type: Type.BOOLEAN,
        };
      }else{
        throw instancia.addError(new Error("Semantico","tipo de operacion relacional no valida",this.line,this.column));
      }
    
    
    
    
    }else if (this.type == RelacionalOption.MAYORIGUAL) {
      if (nodoIzq.type == Type.NUMBER && nodoDer.type == Type.NUMBER) {
        result = {
          value: Number(nodoIzq.value) >= Number(nodoDer.value),
          type: Type.BOOLEAN,
        };
      } else if (nodoIzq.type == Type.NUMBER && nodoDer.type == Type.DOUBLE) {
        result = {
          value: Number(nodoIzq.value) >= Number(nodoDer.value),
          type: Type.BOOLEAN,
        };
      } else if (nodoIzq.type == Type.NUMBER && nodoDer.type == Type.CHAR) {
        result = {
          value: Number(nodoIzq.value) >= Number(nodoDer.value.charCodeAt(0)),
          type: Type.BOOLEAN,
        };
      } else if (nodoIzq.type == Type.DOUBLE && nodoDer.type == Type.NUMBER) {
        result = {
          value: Number(nodoIzq.value) >= Number(nodoDer.value),
          type: Type.BOOLEAN,
        };
      } else if (nodoIzq.type == Type.DOUBLE && nodoDer.type == Type.DOUBLE) {
        result = {
          value: Number(nodoIzq.value) >= Number(nodoDer.value),
          type: Type.BOOLEAN,
        };
      } else if (nodoIzq.type == Type.DOUBLE && nodoDer.type == Type.CHAR) {
        result = {
          value: Number(nodoIzq.value) >= Number(nodoDer.value.charCodeAt(0)),
          type: Type.BOOLEAN,
        };
      } else if (nodoIzq.type == Type.CHAR && nodoDer.type == Type.NUMBER) {
        result = {
          value: Number(nodoIzq.value.charCodeAt(0)) >= Number(nodoDer.value),
          type: Type.BOOLEAN,
        };
      } else if (nodoIzq.type == Type.CHAR && nodoDer.type == Type.DOUBLE) {
        result = {
          value: Number(nodoIzq.value.charCodeAt(0)) >= Number(nodoDer.value),
          type: Type.BOOLEAN,
        };
      } else if (nodoIzq.type == Type.CHAR && nodoDer.type == Type.CHAR) {
        result = {
          value: Number(nodoIzq.value.charCodeAt(0)) >= Number(nodoDer.value.charCodeAt(0)),
          type: Type.BOOLEAN,
        };
      }else{
        throw instancia.addError(new Error("Semantico","tipo de operacion relacional no valida",this.line,this.column));
      }

      



    }else if (this.type == RelacionalOption.MENORIGUAL) {
      if (nodoIzq.type == Type.NUMBER && nodoDer.type == Type.NUMBER) {
        result = {
          value: Number(nodoIzq.value) <= Number(nodoDer.value),
          type: Type.BOOLEAN,
        };
      } else if (nodoIzq.type == Type.NUMBER && nodoDer.type == Type.DOUBLE) {
        result = {
          value: Number(nodoIzq.value) <= Number(nodoDer.value),
          type: Type.BOOLEAN,
        };
      } else if (nodoIzq.type == Type.NUMBER && nodoDer.type == Type.CHAR) {
        result = {
          value: Number(nodoIzq.value) <= Number(nodoDer.value.charCodeAt(0)),
          type: Type.BOOLEAN,
        };
      } else if (nodoIzq.type == Type.DOUBLE && nodoDer.type == Type.NUMBER) {
        result = {
          value: Number(nodoIzq.value) <= Number(nodoDer.value),
          type: Type.BOOLEAN,
        };
      } else if (nodoIzq.type == Type.DOUBLE && nodoDer.type == Type.DOUBLE) {
        result = {
          value: Number(nodoIzq.value) <= Number(nodoDer.value),
          type: Type.BOOLEAN,
        };
      } else if (nodoIzq.type == Type.DOUBLE && nodoDer.type == Type.CHAR) {
        result = {
          value: Number(nodoIzq.value) <= Number(nodoDer.value.charCodeAt(0)),
          type: Type.BOOLEAN,
        };
      } else if (nodoIzq.type == Type.CHAR && nodoDer.type == Type.NUMBER) {
        result = {
          value: Number(nodoIzq.value.charCodeAt(0)) <= Number(nodoDer.value),
          type: Type.BOOLEAN,
        };
      } else if (nodoIzq.type == Type.CHAR && nodoDer.type == Type.DOUBLE) {
        result = {
          value: Number(nodoIzq.value.charCodeAt(0)) <= Number(nodoDer.value),
          type: Type.BOOLEAN,
        };
      } else if (nodoIzq.type == Type.CHAR && nodoDer.type == Type.CHAR) {
        result = {
          value: Number(nodoIzq.value.charCodeAt(0)) <= Number(nodoDer.value.charCodeAt(0)),
          type: Type.BOOLEAN,
        };
      }else{
        throw instancia.addError(new Error("Semantico","tipo de operacion relacional no valida",this.line,this.column));
      }
    
    
    
    
    }else if (this.type == RelacionalOption.IGUALQUE) {
      if (nodoIzq.type == Type.NUMBER && nodoDer.type == Type.NUMBER) {
        result = {
          value: Number(nodoIzq.value) == Number(nodoDer.value),
          type: Type.BOOLEAN,
        };
      } else if (nodoIzq.type == Type.NUMBER && nodoDer.type == Type.DOUBLE) {
        result = {
          value: Number(nodoIzq.value) == Number(nodoDer.value),
          type: Type.BOOLEAN,
        };
      } else if (nodoIzq.type == Type.NUMBER && nodoDer.type == Type.CHAR) {
        result = {
          value: Number(nodoIzq.value) == Number(nodoDer.value.charCodeAt(0)),
          type: Type.BOOLEAN,
        };
      } else if (nodoIzq.type == Type.DOUBLE && nodoDer.type == Type.NUMBER) {
        result = {
          value: Number(nodoIzq.value) == Number(nodoDer.value),
          type: Type.BOOLEAN,
        };
      } else if (nodoIzq.type == Type.DOUBLE && nodoDer.type == Type.DOUBLE) {
        result = {
          value: Number(nodoIzq.value) == Number(nodoDer.value),
          type: Type.BOOLEAN,
        };
      } else if (nodoIzq.type == Type.DOUBLE && nodoDer.type == Type.CHAR) {
        result = {
          value: Number(nodoIzq.value) == Number(nodoDer.value.charCodeAt(0)),
          type: Type.BOOLEAN,
        };
      } else if (nodoIzq.type == Type.CHAR && nodoDer.type == Type.NUMBER) {
        result = {
          value: Number(nodoIzq.value.charCodeAt(0)) == Number(nodoDer.value),
          type: Type.BOOLEAN,
        };
      } else if (nodoIzq.type == Type.CHAR && nodoDer.type == Type.DOUBLE) {
        result = {
          value: Number(nodoIzq.value.charCodeAt(0)) == Number(nodoDer.value),
          type: Type.BOOLEAN,
        };
      } else if (nodoIzq.type == Type.CHAR && nodoDer.type == Type.CHAR) {
        result = {
          value: Number(nodoIzq.value.charCodeAt(0)) == Number(nodoDer.value.charCodeAt(0)),
          type: Type.BOOLEAN,
        };
      }else if (nodoIzq.type == Type.STRING && nodoDer.type == Type.STRING) {
        result = {
          value: nodoIzq.value == nodoDer.value,
          type: Type.BOOLEAN,
        };
      }else if (nodoIzq.type == Type.BOOLEAN && nodoDer.type == Type.BOOLEAN) {
        result = {
          value: nodoIzq.value == nodoDer.value,
          type: Type.BOOLEAN,
        };
      }else{
        throw instancia.addError(new Error("Semantico","tipo de operacion relacional no valida",this.line,this.column));
      }
    
    
    
    
    }else if (this.type == RelacionalOption.DIFERENTEDE) {
      if (nodoIzq.type == Type.NUMBER && nodoDer.type == Type.NUMBER) {
        result = {
          value: Number(nodoIzq.value) != Number(nodoDer.value),
          type: Type.BOOLEAN,
        };
      } else if (nodoIzq.type == Type.NUMBER && nodoDer.type == Type.DOUBLE) {
        result = {
          value: Number(nodoIzq.value) != Number(nodoDer.value),
          type: Type.BOOLEAN,
        };
      } else if (nodoIzq.type == Type.NUMBER && nodoDer.type == Type.CHAR) {
        result = {
          value: Number(nodoIzq.value) != Number(nodoDer.value.charCodeAt(0)),
          type: Type.BOOLEAN,
        };
      } else if (nodoIzq.type == Type.DOUBLE && nodoDer.type == Type.NUMBER) {
        result = {
          value: Number(nodoIzq.value) != Number(nodoDer.value),
          type: Type.BOOLEAN,
        };
      } else if (nodoIzq.type == Type.DOUBLE && nodoDer.type == Type.DOUBLE) {
        result = {
          value: Number(nodoIzq.value) != Number(nodoDer.value),
          type: Type.BOOLEAN,
        };
      } else if (nodoIzq.type == Type.DOUBLE && nodoDer.type == Type.CHAR) {
        result = {
          value: Number(nodoIzq.value) != Number(nodoDer.value.charCodeAt(0)),
          type: Type.BOOLEAN,
        };
      } else if (nodoIzq.type == Type.CHAR && nodoDer.type == Type.NUMBER) {
        result = {
          value: Number(nodoIzq.value.charCodeAt(0)) != Number(nodoDer.value),
          type: Type.BOOLEAN,
        };
      } else if (nodoIzq.type == Type.CHAR && nodoDer.type == Type.DOUBLE) {
        result = {
          value: Number(nodoIzq.value.charCodeAt(0)) != Number(nodoDer.value),
          type: Type.BOOLEAN,
        };
      } else if (nodoIzq.type == Type.CHAR && nodoDer.type == Type.CHAR) {
        result = {
          value: Number(nodoIzq.value.charCodeAt(0)) != Number(nodoDer.value.charCodeAt(0)),
          type: Type.BOOLEAN,
        };
      }else if (nodoIzq.type == Type.STRING && nodoDer.type == Type.STRING) {
        result = {
          value: nodoIzq.value != nodoDer.value,
          type: Type.BOOLEAN,
        };
      }else if (nodoIzq.type == Type.BOOLEAN && nodoDer.type == Type.BOOLEAN) {
        result = {
          value: nodoIzq.value != nodoDer.value,
          type: Type.BOOLEAN,
        };
      }else{
        throw instancia.addError(new Error("Semantico","tipo de operacion relacional no valida",this.line,this.column));
      }
    
    
    
    
    }




    

    return result;
  }
}