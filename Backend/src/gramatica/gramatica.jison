%{

}%
%lex
%options case-insensitive

// datos primitivos
[+|-]*[0-9]+("."[0-9]+)?    return 'tk_decimal'
[+|-]*[0-9]+                return 'tk_entero'
"\"" [^\"]* "\""            return 'tk_cadena'
"'" [^'] "'"                return 'tk_caracter'
"true"|"false"              return 'tk_booleano'

// palabras reservadas
"int"                       return 'pr_int'
"String"                    return 'pr_string'
"boolean"                   return 'pr_bool'
"double"                    return 'pr_double'
"char"                      return 'pr_char'

// reconocimiento de simbolos

";"     return ';' 
"="     return '='
":"     return ':'
"{"     return '{'
"}"     return '}'
"("     return '('
")"     return ')'

"++"    return '++'
"+"     return '+' 
"-"     return '-' 
"**"    return '**'
"*"     return '*' 
"/"     return '/'
"%"     return '%'

"=="    return '=='
"!="    return '!='
">="    return ">="
"<="    return "<="
">"     return '>'
"<"     return '<'
"||"    return '||'
"&&"    return '&&'
"^"     return '^'
"!"     return '!'

[a-zA-ZñÑ][a-zA-Z0-9_ñÑ]*	return 'id';

/* Espacios en blanco */
[ \r\t\s]+                              {}
\n                                      {}
"//".*                                  {}   // comentario simple línea
[/][*][^*]*[*]+([^/*][^*]*[*]+)*[/]     {}   // comentario multiple líneas

<<EOF>>		            return 'EOF'

.   { 
        console.log("error lexico :"+yytext)
        //push para array errores
    }

/lex 

%left '*' '/'
%left '+' '-'

%start INIT

/*
%%

INIT: INSTRUCCIONES    EOF {return $1} ;


INSTRUCCIONES :   INSTRUCCIONES INSTRUCCION { $1.push($2); $$=$1;}
              |   INSTRUCCION               { $$ = [$1] }
              ;


INSTRUCCION : DECLARACION   { $$=$1;} ;

TIPO_DECLARACION: 'pr_const' |'pr_let' | 'pr_var' ; 
TIPODATO_DECLARACION  :  'pr_numero' {$$=$1;}  
                       | 'pr_bool'   {$$=$1;}
                       | 'pr_string' {$$=$1;}
                       ; 

DECLARACION : TIPO_DECLARACION 'id' ':' TIPODATO_DECLARACION '=' E ';' 
            {
                $$= new Declaracion($2,$4,$6,@1.first_line, @1.first_column );
            }
            ;


E: E '+' E  {$$= new Arithmetic($1,$3,ArithmeticOption.MAS, @1.first_line, @1.first_column);}
|  E '-' E  {$$= new Arithmetic($1,$3,ArithmeticOption.MENOS, @1.first_line, @1.first_column);}  
|  E '*' E  {$$= new Arithmetic($1,$3,ArithmeticOption.MULTIPLICACION, @1.first_line, @1.first_column);}
|  E '/' E  {$$= new Arithmetic($1,$3,ArithmeticOption.DIV, @1.first_line, @1.first_column);}
|  F    {$$=$1;}
;

F: expreR_numero   {$$=new Literal($1,Type.NUMBER , @1.first_line, @1.first_column)}
    |expreR_bool   {$$=new Literal($1,Type.BOOLEAN, @1.first_line, @1.first_column)}
    |expreR_cadena {$$=new Literal($1,Type.STRING , @1.first_line, @1.first_column)}
;

*/