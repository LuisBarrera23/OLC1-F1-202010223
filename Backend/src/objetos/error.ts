export class Error{
    constructor(public tipo:string,public descripcion:string,public line:number,public column:number){}
}