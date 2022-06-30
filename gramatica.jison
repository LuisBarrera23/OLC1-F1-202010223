
%lex
%options case-insensitive
%%

// datos primitivos
[0-9]+("."[0-9]+)
[0-9]+  
[\"]("\\""\""|[^"])*[\"]
[\']([^']|"\\n"|"\\t"|(\\)(\\))?[\']
"true"|"false"

// palabras reservadas
"int"    
"String"
"boolean"   
"double"   
"char"     
"const"
"Print" 
"Println"
"typeof"
"if"
"else"
"void" 
"call"  
"while"
"do" 
"for" 

"break" 
"return" 
"fun"

"New"
"tochararray"
"length" 
"indexof"
"push"
"pop" 
"splice"
"tolower" 
"toupper" 
"round"  

"graficar_ts"
     
 

// reconocimiento de simbolos

";"
","
"." 
":"
"?" 
"{"
"}" 
"("
")" 
"[" 
"]"

"++" 
"+" 
"--"
"-" 
"**" 
"*"
"//".*          {
                    //console.log("comentario de una linea")
                }
[/][*][^*]*[*]+([^/*][^*]*[*]+)*[/]     {} // comentario multiple línea
"/"
"%" 

"==" 
"="
"!="
">=" 
"<=" 
">"
"<"
"||"
"&&" 
"^" 
"!"

[a-zA-ZñÑ][a-zA-Z0-9_ñÑ]*	

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

INIT: INSTRUCCIONES    EOF  
    | EOF {};


INSTRUCCIONES :INSTRUCCIONES INSTRUCCION
              | INSTRUCCION
              ;


INSTRUCCION : DECLARACION                   
            | ASIGNACION                    
            | FUNCION                       
            | BLOQUE                        
            | PRINT                         
            | PRINTLN                       
            | LLAMADA                       
            | METODO                        
            | IF                            
            | WHILE                         
            | DOWHILE                       
            | FOR                           
            | BREAK                         
            | RETURN                        
            | MOD ';'                       
            | DECLARACIONNEWVECTOR          
            | DECLARACIONVECTOR             
            | PUSH                          
            | POP                           
            | SPLICE                        
            | MODIFICACIONVECTOR            
            | TERNARIO                      
            | GRAFICARTS                    
            | error    ';'  { 
                instancia.addError(new Error("Sintactico","Error en produccion de gramatica",@1.first_line,@1.first_column));
                }
            ;

GRAFICARTS: 'pr_graficarts' '(' ')' ';' 
;

TERNARIO: E '?' INSTRUCCIONT ':' INSTRUCCIONT ';'

INSTRUCCIONT: ASIGNACION2                   
            | PRINT2                        
            | PRINTLN2                      
            | LLAMADA2                      
            | MOD                           
            ;

DECLARACIONNEWVECTOR: TIPODATO 'id' '[' ']' '=' 'pr_new' TIPODATO '[' E ']' ';' 
                    | 'pr_const' TIPODATO 'id' '[' ']' '=' 'pr_new' TIPODATO '[' E ']' ';' 
                    | TIPODATO 'id' '[' ']' '=' 'pr_tochar' '(' E ')' ';' 
                    | 'pr_const' TIPODATO 'id' '[' ']' '=' 'pr_tochar' '(' E ')' ';' 
                    | TIPODATO 'id' '[' ']' '[' ']' '=' 'pr_new' TIPODATO '[' E ']' '[' E ']' ';'
                    | 'pr_const' TIPODATO 'id' '[' ']' '[' ']' '=' 'pr_new' TIPODATO '[' E ']' '[' E ']' ';'
                    ;

DECLARACIONVECTOR:TIPODATO 'id' '[' ']' '=' '[' EXPRESIONES ']' ';' 
                |'pr_const' TIPODATO 'id' '[' ']' '=' '[' EXPRESIONES ']' ';'
                | TIPODATO 'id' '[' ']' '[' ']' '=' '[' EXPRESIONES2 ']' ';'
                | 'pr_const' TIPODATO 'id' '[' ']' '[' ']' '=' '[' EXPRESIONES2 ']' ';' 
;

EXPRESIONES2: '[' EXPRESIONES  ']' ',' EXPRESIONES2    
            |'[' EXPRESIONES  ']'       
            ;

EXPRESIONES: E ',' EXPRESIONES    
            |E          
            ;

MODIFICACIONVECTOR: 'id' '[' E ']' '=' E ';'            
                | 'id' '[' E ']' '[' E ']' '=' E ';'    
;

PUSH:'id' '.' 'pr_push' '(' E ')' ';' 
;

POP: 'id' '.' 'pr_pop' '(' ')' ';' 
;

SPLICE: 'id' '.' 'pr_splice' '(' E ',' E ')' ';' 
;

BREAK: 'pr_break' ';'

RETURN: 'pr_return' ';'
        | 'pr_return' E ';' 

WHILE: 'pr_while' '(' E ')' BLOQUE 

FOR: 'pr_for' '(' INICIALIZACION ';' E ';' ACTUALIZACION ')' BLOQUE 
;

INICIALIZACION: TIPODATO 'id' '=' E 
            | 'id' '=' E 
        ;
        
ACTUALIZACION: 'id' '=' E 
            | MOD 
            ;


DOWHILE: 'pr_do' BLOQUE 'pr_while' '(' E ')' ';' 
;

LLAMADA: 'pr_call' 'id' '(' LLPARAMETROS ')' ';' 
;

LLAMADA2: 'pr_call' 'id' '(' LLPARAMETROS ')'  
;

LLPARAMETROS: LLPARAMETRO ',' LLPARAMETROS  
            | LLPARAMETRO 
            |
            ;

LLPARAMETRO: E {$$=$1}
            ;

METODO: 'pr_void' 'id' '(' PARAMETROS ')' BLOQUE 
;

FUNCION:  TIPODATO 'id' '(' PARAMETROS ')' BLOQUE 

TIPODATO:'pr_int'       
        |'pr_string'    
        |'pr_bool'      
        |'pr_double'    
        |'pr_char'      
        ; 

PARAMETROS :PARAMETRO ',' PARAMETROS  
            | PARAMETRO 
            | 
            ;
PARAMETRO:'pr_int' 'id'        
            |'pr_string' 'id'  
            |'pr_bool' 'id'    
            |'pr_double' 'id'  
            |'pr_char' 'id'    
            ; 
BLOQUE: '{' INSTRUCCIONES '}'   
        | '{' '}' {}
    ;

PRINT: 'pr_print' '(' E ')' ';' 
    ;

PRINTLN: 'pr_println' '(' E ')' ';' 
    ;

PRINT2: 'pr_print' '(' E ')'  
    ;

PRINTLN2: 'pr_println' '(' E ')'  
    ;

IF: 'pr_if' '(' E ')' BLOQUEIF ELSE      
    | 'pr_if' '(' E ')' INSTRUCCION ELSE   
;

ELSE: 'pr_else' IF          
    | 'pr_else' BLOQUEIF      
    | 'pr_else' INSTRUCCION 
    |
    ;

BLOQUEIF: '{' INSTRUCCIONES '}'   
        | '{' '}' {$$=null}
    ;

TIPO_DECLARACION:'pr_const' 
                | 
                ; 

DECLARACION : 'pr_const' TIPODATO IDS '=' E ';' 
            | TIPODATO IDS '=' E ';' 
        ;


ASIGNACION: 'id' '=' E ';'
        ;

ASIGNACION2: 'id' '=' E 
        
        ;



IDS:'id' ',' IDS   
    |'id'          
    ;

TYPEOF: 'pr_typeof' '(' E ')' 

TOLOWER: 'pr_tolower' '(' E ')'
TOUPPER: 'pr_toupper' '(' E ')' 
ROUND: 'pr_round' '(' E ')' 

LENGTH: 'pr_length' '(' E ')'
    
MOD: '++' E   
    | E '++'  
    | E '--'  
    |'--' E   
    ;


E: '-' E %prec UMENOS      
|  E '+' E      
|  E '-' E      
|  E '*' E      
|  E '/' E      
|  E '**' E     
|  E '%' E      
|  E '>' E      
|  E '<' E      
|  E '>=' E     
|  E '<=' E     
|  E '==' E     
|  E '!=' E     
|  E '||' E     
|  E '&&' E     
|  E '^' E      
|  '!' E        
| MOD           
|  TYPEOF       
|  TOLOWER      
|  TOUPPER      
|  ROUND        
|  LENGTH       
|  '(' E ')'   
|  F            
| 'id'          
| 'id' '.' 'pr_indexof' '(' E ')' 
| 'id' '.' 'pr_push' '(' E ')' 
|  E '?' E ':' E 
| 'id' '[' E ']' 
| 'id' '[' E ']' '[' E ']' 
| 'id' '(' LLPARAMETROS ')' 
;

F:'tk_entero'   
|'tk_decimal'   
|'tk_cadena'    
|'tk_caracter'  
|'tk_booleano'  
;
