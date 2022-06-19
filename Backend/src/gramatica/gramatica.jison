%{
    const {Literal} = require('../expresiones/literal');

    const {Arithmetic} = require('../expresiones/aritmeticas');
    const {ArithmeticOption} = require('../expresiones/aritmeticOption');

    const {Relacional} = require('../expresiones/relacional');
    const {RelacionalOption} = require('../expresiones/relacionalOption');

    const {Logica} = require('../expresiones/logica');
    const {logicaOption} = require('../expresiones/logicaOption');

    const {Modificador} = require('../expresiones/modificador');
    const {modificadorOption} = require('../expresiones/modificadorOption');

    const {Typof} = require('../expresiones/typeof');

    const {Sentencia_if} = require('../instrucciones/if');
    const {While} = require('../instrucciones/while');
    const {Dowhile} = require('../instrucciones/dowhile');
    const {For} = require('../instrucciones/for');
    const {metodo} = require('../instrucciones/metodo');
    const {llamada} = require('../instrucciones/llamada');
    const {Declaracion} = require('../instrucciones/declaracion');
    const {Asignar} = require('../instrucciones/asignar');
    const {Type} = require('../symbols/type');
    const {Bloque}= require('../instrucciones/bloque');
    const {Print} = require('../instrucciones/print');
    const {Println} = require('../instrucciones/println');
    const {Acceso}=require('../expresiones/acceso');

    const {Singleton}=require("../patronSingleton/singleton");
    const {Error}=require("../objetos/error");
    const {Parametro}=require("../objetos/parametro");
    const instancia=Singleton.getInstance();
%}

%lex
%options case-insensitive
%%

// datos primitivos
[0-9]+("."[0-9]+)    {
                                console.log("el lexema encontrado es :"+ yytext) 
                                return 'tk_decimal'
                            }
[0-9]+                {
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
"typeof"       {
                    console.log("el lexema encontrado es :"+ yytext); 
                    return 'pr_typeof';
                }
"if"            {
                    console.log("el lexema encontrado es :"+ yytext); 
                    return 'pr_if';
                } 
"else"          {
                    console.log("el lexema encontrado es :"+ yytext); 
                    return 'pr_else';
                } 
"void"          {
                    console.log("el lexema encontrado es :"+ yytext); 
                    return 'pr_void';
                }  
"call"          {
                    console.log("el lexema encontrado es :"+ yytext); 
                    return 'pr_call';
                }   
"while"         {
                    console.log("el lexema encontrado es :"+ yytext); 
                    return 'pr_while';
                }
"do"            {
                    console.log("el lexema encontrado es :"+ yytext); 
                    return 'pr_do';
                } 
"for"           {
                    console.log("el lexema encontrado es :"+ yytext); 
                    return 'pr_for';
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
%left '^'
%left '>' '<' '>=' '<=' '==' '!='
%left '+' '-' '++' '--'
%left '*' '/' '%'
%right '!' '**'
%left UMENOS



%start INIT


%%

INIT: INSTRUCCIONES    EOF  {return $1}
    | EOF {};


INSTRUCCIONES :INSTRUCCIONES INSTRUCCION {$1.push($2); $$=$1;}
              | INSTRUCCION {$$=[$1];}
              ;


INSTRUCCION : DECLARACION   {$$=$1;}
            | ASIGNACION    {$$=$1;}
            | BLOQUE        {$$=$1;}
            | PRINT         {$$=$1;}
            | PRINTLN       {$$=$1;}
            | LLAMADA       {$$=$1;}
            | METODO        {$$=$1;}
            | IF            {$$=$1;}
            | WHILE         {$$=$1;}
            | DOWHILE       {$$=$1;}
            | FOR           {$$=$1;}
            | MOD ';'          {$$=$1;}
            | error    ';'  { 
                instancia.addError(new Error("Sintactico","Error en produccion de gramatica",@1.first_line,@1.first_column));
                }
            ;

WHILE: 'pr_while' '(' E ')' BLOQUE {$$=new While($3,$5,@1.first_line, @1.first_column);};

FOR: 'pr_for' '(' INICIALIZACION ';' E ';' ACTUALIZACION ')' BLOQUE {$$=new For($3,$5,$7,$9,@1.first_line, @1.first_column);}
;

INICIALIZACION: TIPODATO_DECLARACION 'id' '=' E {$$=new Declaracion($2,$1,$4,true,@1.first_line, @1.first_column);}
            | 'id' '=' E {$$=new Asignar($1,$3,@1.first_line, @1.first_column);}
        ;
        
ACTUALIZACION: 'id' '=' E {$$=new Asignar($1,$3,@1.first_line, @1.first_column);}
            | MOD {$$=$1;}
            ;


DOWHILE: 'pr_do' BLOQUE 'pr_while' '(' E ')' ';' {$$=new Dowhile($5,$2,@1.first_line, @1.first_column)}
;

LLAMADA: 'pr_call' 'id' '(' LLPARAMETROS ')' ';' {$$=new llamada($2,$4,@1.first_line, @1.first_column)}
;

LLPARAMETROS: LLPARAMETRO ',' LLPARAMETROS  {$3.unshift($1); $$=$3;}
            | LLPARAMETRO {$$=[$1];}
            |
            ;

LLPARAMETRO: E {$$=$1}
            ;

METODO: 'pr_void' 'id' '(' PARAMETROS ')' BLOQUE {$$=new metodo($2,$4,$6,@1.first_line, @1.first_column)}
;

PARAMETROS :PARAMETRO ',' PARAMETROS  {$3.unshift($1); $$=$3;}
            | PARAMETRO {$$=[$1];}
            | 
            ;
PARAMETRO:'pr_int' 'id'        {$$=new Parametro(Type.NUMBER,$2,@1.first_line, @1.first_column);}
            |'pr_string' 'id'   {$$=new Parametro(Type.STRING,$2,@1.first_line, @1.first_column);}
            |'pr_bool' 'id'     {$$=new Parametro(Type.BOOLEAN,$2,@1.first_line, @1.first_column);}
            |'pr_double' 'id'   {$$=new Parametro(Type.DOUBLE,$2,@1.first_line, @1.first_column);}
            |'pr_char' 'id'     {$$=new Parametro(Type.CHAR,$2,@1.first_line, @1.first_column);}
            ; 
BLOQUE: '{' INSTRUCCIONES '}'   {$$=new Bloque($2, @1.first_line, @1.first_column)}
        | '{' '}' {}
    ;

PRINT: 'pr_print' '(' E ')' ';' {$$=new Print($3,@1.first_line, @1.first_column);}
    ;

PRINTLN: 'pr_println' '(' E ')' ';' {$$=new Println($3,@1.first_line, @1.first_column);}
    ;

IF: 'pr_if' '(' E ')' BLOQUEIF ELSE       {$$=new Sentencia_if($3,$5,$6,@1.first_line, @1.first_column);}
    | 'pr_if' '(' E ')' INSTRUCCION ELSE    {$$=new Sentencia_if($3,$5,$6,@1.first_line, @1.first_column);}
;

ELSE: 'pr_else' IF          {$$=$2;}
    | 'pr_else' BLOQUEIF      {$$=$2;}
    | 'pr_else' INSTRUCCION {$$=$2;}
    |
    ;

BLOQUEIF: '{' INSTRUCCIONES '}'   {$$=new Bloque($2, @1.first_line, @1.first_column)}
        | '{' '}' {}
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
ASIGNACION: 'id' '=' E ';'
        {
            $$=new Asignar($1,$3,@1.first_line, @1.first_column);
        }
        ;

IDS:'id' ',' IDS    {$3.unshift($1); $$=$3;}
    |'id'           {$$=[$1]}
    ;

TYPEOF: 'pr_typeof' '(' E ')' {$$=$3};
    
MOD: '++' E   {$$=new Modificador($2,modificadorOption.INCREIZQUIERDA,@1.first_line, @1.first_column);}
    | E '++'  {$$=new Modificador($1,modificadorOption.INCREDERECHA,@1.first_line, @1.first_column);}
    | E '--'  {$$=new Modificador($1,modificadorOption.DECREDERECHA,@1.first_line, @1.first_column);}
    |'--' E   {$$=new Modificador($2,modificadorOption.DECREIZQUIERDA,@1.first_line, @1.first_column);}
    ;


E: '-' E %prec UMENOS      {$$=new Arithmetic($2,$2,ArithmeticOption.NEGACION, @1.first_line, @1.first_column);}
|  E '+' E      {$$= new Arithmetic($1,$3,ArithmeticOption.MAS, @1.first_line, @1.first_column);}
|  E '-' E      {$$= new Arithmetic($1,$3,ArithmeticOption.MENOS, @1.first_line, @1.first_column);}
|  E '*' E      {$$= new Arithmetic($1,$3,ArithmeticOption.MULTIPLICACION, @1.first_line, @1.first_column);}
|  E '/' E      {$$= new Arithmetic($1,$3,ArithmeticOption.DIV, @1.first_line, @1.first_column);}
|  E '**' E     {$$= new Arithmetic($1,$3,ArithmeticOption.POT, @1.first_line, @1.first_column);}
|  E '%' E      {$$= new Arithmetic($1,$3,ArithmeticOption.MODULO, @1.first_line, @1.first_column);}
|  E '>' E      {$$= new Relacional($1,$3,RelacionalOption.MAYOR, @1.first_line, @1.first_column);}
|  E '<' E      {$$= new Relacional($1,$3,RelacionalOption.MENOR, @1.first_line, @1.first_column);}
|  E '>=' E      {$$= new Relacional($1,$3,RelacionalOption.MAYORIGUAL, @1.first_line, @1.first_column);}
|  E '<=' E      {$$= new Relacional($1,$3,RelacionalOption.MENORIGUAL, @1.first_line, @1.first_column);}
|  E '==' E      {$$= new Relacional($1,$3,RelacionalOption.IGUALQUE, @1.first_line, @1.first_column);}
|  E '!=' E      {$$= new Relacional($1,$3,RelacionalOption.DIFERENTEDE, @1.first_line, @1.first_column);}
|  E '||' E     {$$= new Logica($1,$3,logicaOption.OR, @1.first_line, @1.first_column);}
|  E '&&' E     {$$= new Logica($1,$3,logicaOption.AND, @1.first_line, @1.first_column);}
|  E '^' E      {$$= new Logica($1,$3,logicaOption.XOR, @1.first_line, @1.first_column);}
|  '!' E        {$$= new Logica($2,$2,logicaOption.NOT, @1.first_line, @1.first_column);}
| MOD           {$$=$1;}
|  TYPEOF       {$$= new Typof($1,@1.first_line, @1.first_column);}
|  '(' E ')'    {$$=$2}
|  F            {$$=$1;}
| 'id'          {$$=new Acceso($1,@1.first_line, @1.first_column);console.log("desde la gramatica");}
;

F:'tk_entero'       {$$=new Literal($1,Type.NUMBER, @1.first_line, @1.first_column)}
    |'tk_decimal'   {$$=new Literal($1,Type.DOUBLE, @1.first_line, @1.first_column)}
    |'tk_cadena'    {$$=new Literal($1,Type.STRING, @1.first_line, @1.first_column)}
    |'tk_caracter'  {$$=new Literal($1,Type.CHAR, @1.first_line, @1.first_column)}
    |'tk_booleano'  {$$=new Literal($1,Type.BOOLEAN, @1.first_line, @1.first_column)}
;
