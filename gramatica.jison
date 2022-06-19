

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
     
 

// reconocimiento de simbolos

";"             
","              
":"              
"{"              
"}"              
"("              
")"              

"++"            
"+"             
"--"             
"-"               
"**"             
"*"             
"//".*          
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

.   

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
            | BREAK         {$$=$1;}
            | MOD ';'          {$$=$1;}
            | error    ';'  { 
                instancia.addError(new Error("Sintactico","Error en produccion de gramatica",@1.first_line,@1.first_column));
                }
            ;

BREAK: 'pr_break' ';' {$$=new Break(@1.first_line, @1.first_column);};

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

METODO: 'pr_void' 'id' '(' PARAMETROS ')' BLOQUE 

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

IF: 'pr_if' '(' E ')' BLOQUEIF ELSE     
    | 'pr_if' '(' E ')' INSTRUCCION ELSE   
;

ELSE: 'pr_else' IF          
    | 'pr_else' BLOQUEIF     
    | 'pr_else' INSTRUCCION 
    |
    ;

BLOQUEIF: '{' INSTRUCCIONES '}'   
        | '{' '}' {}
    ;

TIPO_DECLARACION:'pr_const' {$$=false}
                | {$$=true}
                ; 

TIPODATO_DECLARACION:'pr_int'       
                    |'pr_string'    
                    |'pr_bool'      
                    |'pr_double'    
                    |'pr_char'     
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
    
MOD: '++' E   
    | E '++'  
    | E '--'  
    |'--' E   
    ;


E: '-' E %prec UMENOS     
|  E '+' E    
|  E '-' E     
|  E '*' E   
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

F:'tk_entero'       
    |'tk_decimal'   
    |'tk_cadena'    
    |'tk_caracter'  
    |'tk_booleano'  
;
