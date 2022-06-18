%{
    const {Literal} = require('../expresiones/literal');
    const {Arithmetic} = require('../expresiones/aritmeticas');
    const {ArithmeticOption} = require('../expresiones/aritmeticOption');
    const {Declaracion} = require('../instrucciones/declaracion');
    const {Type} = require('../symbols/type');
    const {Bloque}= require('../instrucciones/bloque');
    const {Print} = require('../instrucciones/print');
    const {Println} = require('../instrucciones/println');
    const {Acceso}=require('../expresiones/acceso');

    const {Singleton}=require("../patronSingleton/singleton");
    const {Error}=require("../objetos/error");
    const instancia=Singleton.getInstance();
%}

%lex
%options case-insensitive
%%

// datos primitivos
[-]?[0-9]+("."[0-9]+)    {
                                console.log("el lexema encontrado es :"+ yytext) 
                                return 'tk_decimal'
                            }
[-]?[0-9]+                {
                                console.log("el lexema encontrado es :"+ yytext) 
                                return 'tk_entero'
                            }   
[\"]("\\""\""|[^"])*[\"]    {
                                console.log("el lexema encontrado es :"+ yytext) 
                                return 'tk_cadena'
                            }
[\']([^']|"\\n"|"\\t"|(\\)(\\))?[\'] {
                                console.log("el lexema encontrado es :"+ yytext) 
                                return 'tk_caracter'
                            }
"true"|"false"             {
                                console.log("el lexema encontrado es :"+ yytext) 
                                return 'tk_booleano'
                            }

// palabras reservadas
"int"           {
                    console.log("el lexema encontrado es :"+ yytext);
                    return 'pr_int';
                }    
"String"        {
                    console.log("el lexema encontrado es :"+ yytext);
                    return 'pr_string';
                } 
"boolean"       {
                    console.log("el lexema encontrado es :"+ yytext);
                    return 'pr_bool';
                }    
"double"        {
                    console.log("el lexema encontrado es :"+ yytext); 
                    return 'pr_double';
                }   
"char"          {
                    console.log("el lexema encontrado es :"+ yytext);
                    return 'pr_char';
                }     
"const"         {
                    console.log("el lexema encontrado es :"+ yytext); 
                    return 'pr_const';
                }
"Print"         {
                    console.log("el lexema encontrado es :"+ yytext); 
                    return 'pr_print';
                } 
"Println"       {
                    console.log("el lexema encontrado es :"+ yytext); 
                    return 'pr_println';
                } 
 

// reconocimiento de simbolos

";"             {
                    console.log("el lexema encontrado es :"+ yytext); 
                    return ';';
                }
","             {
                    console.log("el lexema encontrado es :"+ yytext); 
                    return ',';
                } 
":"             {
                    console.log("el lexema encontrado es :"+ yytext); 
                    return ':';
                } 
"{"             {
                    console.log("el lexema encontrado es :"+ yytext); 
                    return '{';
                } 
"}"             {
                    console.log("el lexema encontrado es :"+ yytext); 
                    return '}';
                } 
"("             {
                    console.log("el lexema encontrado es :"+ yytext); 
                    return '(';
                } 
")"             {
                    console.log("el lexema encontrado es :"+ yytext); 
                    return ')';
                } 

"++"            {
                    console.log("el lexema encontrado es :"+ yytext); 
                    return '++';
                } 
"+"             {
                    console.log("el lexema encontrado es :"+ yytext); 
                    return '+';
                } 
"--"            {
                    console.log("el lexema encontrado es :"+ yytext); 
                    return '--';
                } 
"-"             {
                    console.log("el lexema encontrado es :"+ yytext); 
                    return '-';
                }  
"**"            {
                    console.log("el lexema encontrado es :"+ yytext); 
                    return '**';
                } 
"*"             {
                    console.log("el lexema encontrado es :"+ yytext); 
                    return '*';
                }
"//".*          {
                    //console.log("comentario de una linea")
                }
[/][*][^*]*[*]+([^/*][^*]*[*]+)*[/]     {} // comentario multiple línea
"/"             {
                    console.log("el lexema encontrado es :"+ yytext); 
                    return '/';
                } 
"%"             {
                    console.log("el lexema encontrado es :"+ yytext); 
                    return '%';
                } 

"=="            {
                    console.log("el lexema encontrado es :"+ yytext); 
                    return '==';
                } 
"="             {
                    console.log("el lexema encontrado es :"+ yytext); 
                    return '=';
                } 
"!="            {
                    console.log("el lexema encontrado es :"+ yytext); 
                    return '!=';
                } 
">="            {
                    console.log("el lexema encontrado es :"+ yytext); 
                    return '>=';
                } 
"<="            {
                    console.log("el lexema encontrado es :"+ yytext); 
                    return '<=';
                } 
">"             {
                    console.log("el lexema encontrado es :"+ yytext); 
                    return '>';
                } 
"<"             {
                    console.log("el lexema encontrado es :"+ yytext); 
                    return '<';
                } 
"||"            {
                    console.log("el lexema encontrado es :"+ yytext); 
                    return '||';
                } 
"&&"            {
                    console.log("el lexema encontrado es :"+ yytext); 
                    return '&&';
                } 
"^"             {
                    console.log("el lexema encontrado es :"+ yytext); 
                    return '^';
                } 
"!"             {
                    console.log("el lexema encontrado es :"+ yytext); 
                    return '!';
                } 

[a-zA-ZñÑ][a-zA-Z0-9_ñÑ]*	{
                                console.log("el lexema encontrado es :"+ yytext); 
                                return 'id';
                            }

/* Comentarios */

[/][*][^*]*[*]+([^/*][^*]*[*]+)*[/]     {} // comentario multiple línea
/* Espacios en blanco */
[ \r\t]+            {}
\n                  {}

<<EOF>>		            return 'EOF'

.   { 
        //console.log("error lexico:"+yytext+ " fila: "+yylloc.first_line+" columna: "+yylloc.first_column);
        instancia.addError(new Error("Lexico","lexema: "+yytext+" no coincide con ningun patrón",yylloc.first_line,yylloc.first_column+1));
        //push para array errores
    }

/lex 
%left '||'
%left '&&'
// falta ^
// faltan signos logicos
%left '+' '-'
%left '*' '/' '%'
%right '!'



%start INIT


%%

INIT: INSTRUCCIONES    EOF  {return $1};


INSTRUCCIONES : INSTRUCCIONES INSTRUCCION {$1.push($2); $$=$1;}
              | INSTRUCCION {$$=[$1];}
              ;


INSTRUCCION : DECLARACION   {$$=$1;}
            | BLOQUE        {$$=$1;}
            | PRINT         {$$=$1;}
            | PRINTLN       {$$=$1;}
            | error    ';'  { 
                //get instance
                //meterlo
                //console.log("Error sintactico en la linea"+(yylineno+1)); 
                instancia.addError(new Error("Sintactico","Error en produccion de gramatica",@1.first_line,@1.first_column));
                }
            ;

BLOQUE: '{' INSTRUCCIONES '}'   {$$=new Bloque($2, @1.first_line, @1.first_column)}
    ;

PRINT: 'pr_print' '(' E ')' ';' {$$=new Print($3,@1.first_line, @1.first_column);}
    ;

PRINTLN: 'pr_println' '(' E ')' ';' {$$=new Println($3,@1.first_line, @1.first_column);}
    ;

TIPO_DECLARACION:'pr_const' {$$=false}
                | {$$=true}
                ; 

TIPODATO_DECLARACION:'pr_int'       {$$=$1}
                    |'pr_string'    {$$=$1}
                    |'pr_bool'      {$$=$1}
                    |'pr_double'    {$$=$1}
                    |'pr_char'      {$$=$1}
                    ; 

DECLARACION : TIPO_DECLARACION TIPODATO_DECLARACION IDS '=' E ';'
        {   //console.log($3); 
            $$=new Declaracion($3,$2,$5,$1,@1.first_line, @1.first_column);
        }
        ;

IDS:'id' ',' IDS    {$3.unshift($1); $$=$3;}
    |'id'           {$$=[$1]}
    ;
    

E: '-' E
|E '+' E      {$$= new Arithmetic($1,$3,ArithmeticOption.MAS, @1.first_line, @1.first_column);}
|  E '-' E      {$$= new Arithmetic($1,$3,ArithmeticOption.MENOS, @1.first_line, @1.first_column);}
|  E '*' E      {$$= new Arithmetic($1,$3,ArithmeticOption.MULTIPLICACION, @1.first_line, @1.first_column);}
|  E '/' E      {$$= new Arithmetic($1,$3,ArithmeticOption.DIV, @1.first_line, @1.first_column);}
|  E '**' E     {$$= new Arithmetic($1,$3,ArithmeticOption.POT, @1.first_line, @1.first_column);}
|  E '%' E      {$$= new Arithmetic($1,$3,ArithmeticOption.MODULO, @1.first_line, @1.first_column);}
|  '(' E ')'    {$$=$2}
|  F            {$$=$1;}
| 'id'          {$$=new Acceso($1,@1.first_line, @1.first_column);}
;

F:'tk_entero'       {$$=new Literal($1,Type.NUMBER, @1.first_line, @1.first_column)}
    |'tk_decimal'   {$$=new Literal($1,Type.DOUBLE, @1.first_line, @1.first_column)}
    |'tk_cadena'    {$$=new Literal($1,Type.STRING, @1.first_line, @1.first_column)}
    |'tk_caracter'  {$$=new Literal($1,Type.CHAR, @1.first_line, @1.first_column)}
    |'tk_booleano'  {$$=new Literal($1,Type.BOOLEAN, @1.first_line, @1.first_column)}
;
