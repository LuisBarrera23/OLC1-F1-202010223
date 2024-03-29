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

    const {llamadaF} = require('../expresiones/llamadaF');

    const {Sentencia_if} = require('../instrucciones/if');
    const {While} = require('../instrucciones/while');
    const {Dowhile} = require('../instrucciones/dowhile');
    const {For} = require('../instrucciones/for');
    const {metodo} = require('../instrucciones/metodo');
    const {Funcion} = require('../instrucciones/funcion');
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

    const {Break}= require('../instrucciones/break');
    const {Return}= require('../instrucciones/return');

    const {DeclaracionNV}= require('../instrucciones/declaracionNewVector');
    const {DeclaracionV}= require('../instrucciones/declaracionVector');
    const {Tochar}= require('../instrucciones/tochararray');
    const {ModificarVector}= require('../instrucciones/modificarVector');
    const {Pop}= require('../instrucciones/pop');
    const {Splice}= require('../instrucciones/splice');
    const {Ternarioi}= require('../instrucciones/ternarioi');
    const {Graficarts}= require('../instrucciones/graficarts');

    const {AccesoVector}=require('../expresiones/accesoVector');
    const {Length}=require('../expresiones/length');
    const {Indexof}=require('../expresiones/indexof');
    const {Push}=require('../expresiones/push');
    const {TernarioE}=require('../expresiones/ternarioE');
    const {Tolower}=require('../expresiones/tolower');
    const {Toupper}=require('../expresiones/toupper');
    const {Round}=require('../expresiones/round');
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

"break"         {
                    console.log("el lexema encontrado es :"+ yytext); 
                    return 'pr_break';
                } 
"return"         {
                    console.log("el lexema encontrado es :"+ yytext); 
                    return 'pr_return';
                } 
"fun"         {
                    console.log("el lexema encontrado es :"+ yytext); 
                    return 'pr_fun';
                }

"New"           {
                    console.log("el lexema encontrado es :"+ yytext); 
                    return 'pr_new';
                }
"tochararray"   {
                    console.log("el lexema encontrado es :"+ yytext); 
                    return 'pr_tochar';
                }
"length"        {
                    console.log("el lexema encontrado es :"+ yytext); 
                    return 'pr_length';
                } 
"indexof"       {
                    console.log("el lexema encontrado es :"+ yytext); 
                    return 'pr_indexof';
                } 
"push"          {
                    console.log("el lexema encontrado es :"+ yytext); 
                    return 'pr_push';
                }
"pop"          {
                    console.log("el lexema encontrado es :"+ yytext); 
                    return 'pr_pop';
                } 
"splice"          {
                    console.log("el lexema encontrado es :"+ yytext); 
                    return 'pr_splice';
                }
"tolower"          {
                    console.log("el lexema encontrado es :"+ yytext); 
                    return 'pr_tolower';
                } 
"toupper"          {
                    console.log("el lexema encontrado es :"+ yytext); 
                    return 'pr_toupper';
                }  
"round"          {
                    console.log("el lexema encontrado es :"+ yytext); 
                    return 'pr_round';
                }  

"graficar_ts"          {
                    console.log("el lexema encontrado es :"+ yytext); 
                    return 'pr_graficarts';
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
"."             {
                    console.log("el lexema encontrado es :"+ yytext); 
                    return '.';
                } 
":"             {
                    console.log("el lexema encontrado es :"+ yytext); 
                    return ':';
                }
"?"             {
                    console.log("el lexema encontrado es :"+ yytext); 
                    return '?';
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
"["             {
                    console.log("el lexema encontrado es :"+ yytext); 
                    return '[';
                } 
"]"             {
                    console.log("el lexema encontrado es :"+ yytext); 
                    return ']';
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


INSTRUCCION : DECLARACION                   {$$=$1;}
            | ASIGNACION                    {$$=$1;}
            | FUNCION                       {$$=$1;}
            | BLOQUE                        {$$=$1;}
            | PRINT                         {$$=$1;}
            | PRINTLN                       {$$=$1;}
            | LLAMADA                       {$$=$1;}
            | METODO                        {$$=$1;}
            | IF                            {$$=$1;}
            | WHILE                         {$$=$1;}
            | DOWHILE                       {$$=$1;}
            | FOR                           {$$=$1;}
            | BREAK                         {$$=$1;}
            | RETURN                        {$$=$1;}
            | MOD ';'                       {$$=$1;}
            | DECLARACIONNEWVECTOR          {$$=$1;}
            | DECLARACIONVECTOR             {$$=$1;}
            | PUSH                          {$$=$1;}
            | POP                           {$$=$1;}
            | SPLICE                        {$$=$1;}
            | MODIFICACIONVECTOR            {$$=$1;}
            | TERNARIO                      {$$=$1;}
            | GRAFICARTS                    {$$=$1;}
            | error    ';'  { 
                instancia.addError(new Error("Sintactico","Error en produccion de gramatica",@1.first_line,@1.first_column));
                }
            ;

GRAFICARTS: 'pr_graficarts' '(' ')' ';' {$$=new Graficarts(@1.first_line,@1.first_column);}
;

TERNARIO: E '?' INSTRUCCIONT ':' INSTRUCCIONT ';' {$$=new Ternarioi($1,$3,$5,@1.first_line,@1.first_column);};

INSTRUCCIONT: ASIGNACION2                   {$$=$1;}
            | PRINT2                        {$$=$1;}
            | PRINTLN2                      {$$=$1;}
            | LLAMADA2                      {$$=$1;}
            | MOD                           {$$=$1;}
            ;

DECLARACIONNEWVECTOR: TIPODATO 'id' '[' ']' '=' 'pr_new' TIPODATO '[' E ']' ';' {$$=new DeclaracionNV($2,$1,$7,$9,null,true,1,@1.first_line,@1.first_column)}
                    | 'pr_const' TIPODATO 'id' '[' ']' '=' 'pr_new' TIPODATO '[' E ']' ';' {$$=new DeclaracionNV($3,$2,$8,$10,null,false,1,@1.first_line,@1.first_column)}
                    | TIPODATO 'id' '[' ']' '=' 'pr_tochar' '(' E ')' ';' {$$=new Tochar($2,$1,$8,true,@1.first_line,@1.first_column)}
                    | 'pr_const' TIPODATO 'id' '[' ']' '=' 'pr_tochar' '(' E ')' ';' {$$=new Tochar($3,$2,$9,false,@1.first_line,@1.first_column)}
                    | TIPODATO 'id' '[' ']' '[' ']' '=' 'pr_new' TIPODATO '[' E ']' '[' E ']' ';' {$$=new DeclaracionNV($2,$1,$9,$11,$14,true,2,@1.first_line,@1.first_column)}
                    | 'pr_const' TIPODATO 'id' '[' ']' '[' ']' '=' 'pr_new' TIPODATO '[' E ']' '[' E ']' ';' {$$=new DeclaracionNV($3,$2,$10,$12,$15,false,2,@1.first_line,@1.first_column)}
                    ;

DECLARACIONVECTOR:TIPODATO 'id' '[' ']' '=' '[' EXPRESIONES ']' ';' {$$=new DeclaracionV($2,$1,$7,true,1,@1.first_line,@1.first_column);}
                |'pr_const' TIPODATO 'id' '[' ']' '=' '[' EXPRESIONES ']' ';' {$$=new DeclaracionV($3,$2,$8,false,1,@1.first_line,@1.first_column);}
                | TIPODATO 'id' '[' ']' '[' ']' '=' '[' EXPRESIONES2 ']' ';' {$$=new DeclaracionV($2,$1,$9,true,2,@1.first_line,@1.first_column);}
                | 'pr_const' TIPODATO 'id' '[' ']' '[' ']' '=' '[' EXPRESIONES2 ']' ';' {$$=new DeclaracionV($3,$2,$10,false,2,@1.first_line,@1.first_column);}
;

EXPRESIONES2: '[' EXPRESIONES  ']' ',' EXPRESIONES2    {$5.unshift($2); $$=$5;}
            |'[' EXPRESIONES  ']'         {$$=[$2]}
            ;

EXPRESIONES: E ',' EXPRESIONES    {$3.unshift($1); $$=$3;}
            |E           {$$=[$1]}
            ;

MODIFICACIONVECTOR: 'id' '[' E ']' '=' E ';'            {$$=new ModificarVector($1,$3,null,$6,1,@1.first_line, @1.first_column)}
                | 'id' '[' E ']' '[' E ']' '=' E ';'    {$$=new ModificarVector($1,$3,$6,$9,2,@1.first_line, @1.first_column)}
;

PUSH:'id' '.' 'pr_push' '(' E ')' ';' {$$=new Push($1,$5,@1.first_line, @1.first_column);}
;

POP: 'id' '.' 'pr_pop' '(' ')' ';' {$$=new Pop($1,@1.first_line, @1.first_column);}
;

SPLICE: 'id' '.' 'pr_splice' '(' E ',' E ')' ';' {$$=new Splice($1,$5,$7,@1.first_line, @1.first_column);}
;

BREAK: 'pr_break' ';' {$$=new Break(@1.first_line, @1.first_column);};

RETURN: 'pr_return' ';' {$$=new Return(null,@1.first_line, @1.first_column);}
        | 'pr_return' E ';' {$$=new Return($2,@1.first_line, @1.first_column);} ;

WHILE: 'pr_while' '(' E ')' BLOQUE {$$=new While($3,$5,@1.first_line, @1.first_column);};

FOR: 'pr_for' '(' INICIALIZACION ';' E ';' ACTUALIZACION ')' BLOQUE {$$=new For($3,$5,$7,$9,@1.first_line, @1.first_column);}
;

INICIALIZACION: TIPODATO 'id' '=' E {$$=new Declaracion($2,$1,$4,true,@1.first_line, @1.first_column);}
            | 'id' '=' E {$$=new Asignar($1,$3,@1.first_line, @1.first_column);}
        ;
        
ACTUALIZACION: 'id' '=' E {$$=new Asignar($1,$3,@1.first_line, @1.first_column);}
            | MOD {$$=$1;}
            ;


DOWHILE: 'pr_do' BLOQUE 'pr_while' '(' E ')' ';' {$$=new Dowhile($5,$2,@1.first_line, @1.first_column)}
;

LLAMADA: 'pr_call' 'id' '(' LLPARAMETROS ')' ';' {$$=new llamada($2,$4,@1.first_line, @1.first_column)}
;

LLAMADA2: 'pr_call' 'id' '(' LLPARAMETROS ')'  {$$=new llamada($2,$4,@1.first_line, @1.first_column)}
;

LLPARAMETROS: LLPARAMETRO ',' LLPARAMETROS  {$3.unshift($1); $$=$3;}
            | LLPARAMETRO {$$=[$1];}
            |
            ;

LLPARAMETRO: E {$$=$1}
            ;

METODO: 'pr_void' 'id' '(' PARAMETROS ')' BLOQUE {$$=new metodo($2,$4,$6,@1.first_line, @1.first_column)}
;

FUNCION:  TIPODATO 'id' '(' PARAMETROS ')' BLOQUE {$$=new Funcion($1,$2,$4,$6,@1.first_line, @1.first_column);};

TIPODATO:'pr_int'       {$$=Type.NUMBER}
        |'pr_string'    {$$=Type.STRING}
        |'pr_bool'      {$$=Type.BOOLEAN}
        |'pr_double'    {$$=Type.DOUBLE}
        |'pr_char'      {$$=Type.CHAR}
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

PRINT2: 'pr_print' '(' E ')'  {$$=new Print($3,@1.first_line, @1.first_column);}
    ;

PRINTLN2: 'pr_println' '(' E ')'  {$$=new Println($3,@1.first_line, @1.first_column);}
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
        | '{' '}' {$$=null}
    ;

TIPO_DECLARACION:'pr_const' {$$=false}
                | {$$=true}
                ; 

DECLARACION : 'pr_const' TIPODATO IDS '=' E ';' {$$=new Declaracion($3,$2,$5,false,@1.first_line, @1.first_column);}
            | TIPODATO IDS '=' E ';' {$$=new Declaracion($2,$1,$4,true,@1.first_line, @1.first_column);}
        ;


ASIGNACION: 'id' '=' E ';'
        {
            $$=new Asignar($1,$3,@1.first_line, @1.first_column);
        }
        ;

ASIGNACION2: 'id' '=' E 
        {
            $$=new Asignar($1,$3,@1.first_line, @1.first_column);
        }
        ;



IDS:'id' ',' IDS    {$3.unshift($1); $$=$3;}
    |'id'           {$$=[$1]}
    ;

TYPEOF: 'pr_typeof' '(' E ')' {$$=$3;};

TOLOWER: 'pr_tolower' '(' E ')' {$$=$3;};

TOUPPER: 'pr_toupper' '(' E ')' {$$=$3;};

ROUND: 'pr_round' '(' E ')' {$$=$3;};

LENGTH: 'pr_length' '(' E ')' {$$=$3;};
    
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
|  TOLOWER      {$$= new Tolower($1,@1.first_line, @1.first_column);}
|  TOUPPER      {$$= new Toupper($1,@1.first_line, @1.first_column);}
|  ROUND      {$$= new Round($1,@1.first_line, @1.first_column);}
|  LENGTH       {$$=new Length($1,@1.first_line, @1.first_column);}
|  '(' E ')'    {$$=$2}
|  F            {$$=$1;}
| 'id'          {$$=new Acceso($1,@1.first_line, @1.first_column);}
| 'id' '.' 'pr_indexof' '(' E ')' {$$=new Indexof($1,$5,@1.first_line, @1.first_column);}
| 'id' '.' 'pr_push' '(' E ')' {$$=new Push($1,$5,@1.first_line, @1.first_column);}
|  E '?' E ':' E  {$$=new TernarioE($1,$3,$5, @1.first_line, @1.first_column);}
| 'id' '[' E ']' {$$=new AccesoVector($1,$3,null,1,@1.first_line, @1.first_column);}
| 'id' '[' E ']' '[' E ']' {$$=new AccesoVector($1,$3,$6,2,@1.first_line, @1.first_column);}
| 'id' '(' LLPARAMETROS ')' {$$=new llamadaF($1,$3,@1.first_line, @1.first_column);}
;

F:'tk_entero'   {$$=new Literal($1,Type.NUMBER, @1.first_line, @1.first_column)}
|'tk_decimal'   {$$=new Literal($1,Type.DOUBLE, @1.first_line, @1.first_column)}
|'tk_cadena'    {$$=new Literal($1,Type.STRING, @1.first_line, @1.first_column)}
|'tk_caracter'  {$$=new Literal($1,Type.CHAR, @1.first_line, @1.first_column)}
|'tk_booleano'  {$$=new Literal($1,Type.BOOLEAN, @1.first_line, @1.first_column)}
;
