import { Type } from "../symbols/type";

export class Parametro{
    constructor(public tipo:Type,public id:string,public line:number,public column:number){}
}