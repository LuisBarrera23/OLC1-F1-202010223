
%lex
%options case-insensitive
%%

// datos primitivos
[-]?[0-9]+("."[0-9]+)?    {
                                console.log("el lexema encontrado es :"+ yytext) 
                                return 'tk_decimal'
                            }
[-]?[0-9]+                {
                                console.log("el lexema encontrado es :"+ yytext) 
                                return 'tk_entero'
                            }   
"\""[^\"]*"\""             {
                                console.log("el lexema encontrado es :"+ yytext) 
                                return 'tk_cadena'
                            }
"'"[^']"'"                 {
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
        console.log("error lexico:"+yytext+ " fila: "+yylloc.first_line+" columna: "+yylloc.first_column);
        //push para array errores
    }

/lex 
%left '*' '/'
%left '+' '-'
%start INIT


%%

INIT: INSTRUCCIONES    EOF;


INSTRUCCIONES : INSTRUCCIONES INSTRUCCION
              | INSTRUCCION
              ;


INSTRUCCION : DECLARACION;

TIPO_DECLARACION:'pr_const'| ; 

TIPODATO_DECLARACION:'pr_int'
                    |'pr_string'
                    |'pr_bool'
                    |'pr_double'
                    |'pr_char'
                    ; 

DECLARACION : TIPO_DECLARACION TIPODATO_DECLARACION IDS '=' E ';'
;

IDS: IDS ',' 'id' 
    |'id'
    ;
    

E: E '+' E
|  E '-' E
|  E '*' E
|  E '/' E  
|  F
;

F:'tk_entero'
    |'tk_decimal'
    |'tk_cadena'
    |'tk_caracter'
    |'tk_booleano'
;
