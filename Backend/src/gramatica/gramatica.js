/* parser generated by jison 0.4.18 */
/*
  Returns a Parser object of the following structure:

  Parser: {
    yy: {}
  }

  Parser.prototype: {
    yy: {},
    trace: function(),
    symbols_: {associative list: name ==> number},
    terminals_: {associative list: number ==> name},
    productions_: [...],
    performAction: function anonymous(yytext, yyleng, yylineno, yy, yystate, $$, _$),
    table: [...],
    defaultActions: {...},
    parseError: function(str, hash),
    parse: function(input),

    lexer: {
        EOF: 1,
        parseError: function(str, hash),
        setInput: function(input),
        input: function(),
        unput: function(str),
        more: function(),
        less: function(n),
        pastInput: function(),
        upcomingInput: function(),
        showPosition: function(),
        test_match: function(regex_match_array, rule_index),
        next: function(),
        lex: function(),
        begin: function(condition),
        popState: function(),
        _currentRules: function(),
        topState: function(),
        pushState: function(condition),

        options: {
            ranges: boolean           (optional: true ==> token location info will include a .range[] member)
            flex: boolean             (optional: true ==> flex-like lexing behaviour where the rules are tested exhaustively to find the longest match)
            backtrack_lexer: boolean  (optional: true ==> lexer regexes are tested in order and for each matching regex the action code is invoked; the lexer terminates the scan when a token is returned by the action code)
        },

        performAction: function(yy, yy_, $avoiding_name_collisions, YY_START),
        rules: [...],
        conditions: {associative list: name ==> set},
    }
  }


  token location info (@$, _$, etc.): {
    first_line: n,
    last_line: n,
    first_column: n,
    last_column: n,
    range: [start_number, end_number]       (where the numbers are indexes into the input string, regular zero-based)
  }


  the parseError function receives a 'hash' object with these members for lexer and parser errors: {
    text:        (matched text)
    token:       (the produced terminal token, if any)
    line:        (yylineno)
  }
  while parser (grammar) errors will also provide these members, i.e. parser errors deliver a superset of attributes: {
    loc:         (yylloc)
    expected:    (string describing the set of expected tokens)
    recoverable: (boolean: TRUE when the parser has a error recovery rule available for this particular error)
  }
*/
var gramatica = (function(){
var o=function(k,v,o,l){for(o=o||{},l=k.length;l--;o[k[l]]=v);return o},$V0=[22,23,24,25,26],$V1=[2,13],$V2=[1,8],$V3=[1,10],$V4=[1,11],$V5=[1,12],$V6=[1,13],$V7=[2,5,12,13,14,18,20,22,23,24,25,26],$V8=[1,27],$V9=[1,31],$Va=[1,33],$Vb=[1,30],$Vc=[1,34],$Vd=[1,35],$Ve=[1,36],$Vf=[1,37],$Vg=[1,38],$Vh=[1,44],$Vi=[1,43],$Vj=[1,45],$Vk=[1,46],$Vl=[1,47],$Vm=[1,48],$Vn=[11,17,31,32,33,34,35,36],$Vo=[11,17,31,32,33,34,36],$Vp=[11,17,33,34,36];
var parser = {trace: function trace () { },
yy: {},
symbols_: {"error":2,"INIT":3,"INSTRUCCIONES":4,"EOF":5,"INSTRUCCION":6,"DECLARACION":7,"BLOQUE":8,"PRINT":9,"PRINTLN":10,";":11,"{":12,"}":13,"pr_print":14,"(":15,"E":16,")":17,"pr_println":18,"TIPO_DECLARACION":19,"pr_const":20,"TIPODATO_DECLARACION":21,"pr_int":22,"pr_string":23,"pr_bool":24,"pr_double":25,"pr_char":26,"IDS":27,"=":28,"id":29,",":30,"-":31,"+":32,"*":33,"/":34,"**":35,"%":36,"F":37,"tk_entero":38,"tk_decimal":39,"tk_cadena":40,"tk_caracter":41,"tk_booleano":42,"$accept":0,"$end":1},
terminals_: {2:"error",5:"EOF",11:";",12:"{",13:"}",14:"pr_print",15:"(",17:")",18:"pr_println",20:"pr_const",22:"pr_int",23:"pr_string",24:"pr_bool",25:"pr_double",26:"pr_char",28:"=",29:"id",30:",",31:"-",32:"+",33:"*",34:"/",35:"**",36:"%",38:"tk_entero",39:"tk_decimal",40:"tk_cadena",41:"tk_caracter",42:"tk_booleano"},
productions_: [0,[3,2],[4,2],[4,1],[6,1],[6,1],[6,1],[6,1],[6,2],[8,3],[9,5],[10,5],[19,1],[19,0],[21,1],[21,1],[21,1],[21,1],[21,1],[7,6],[27,3],[27,1],[16,2],[16,3],[16,3],[16,3],[16,3],[16,3],[16,3],[16,3],[16,1],[16,1],[37,1],[37,1],[37,1],[37,1],[37,1]],
performAction: function anonymous(yytext, yyleng, yylineno, yy, yystate /* action[1] */, $$ /* vstack */, _$ /* lstack */) {
/* this == yyval */

var $0 = $$.length - 1;
switch (yystate) {
case 1:
return $$[$0-1]
break;
case 2:
$$[$0-1].push($$[$0]); this.$=$$[$0-1];
break;
case 3:
this.$=[$$[$0]];
break;
case 4: case 5: case 6: case 7: case 30:
this.$=$$[$0];
break;
case 8:
 
                //get instance
                //meterlo
                //console.log("Error sintactico en la linea"+(yylineno+1)); 
                instancia.addError(new Error("Sintactico","Error en produccion de gramatica",_$[$0-1].first_line,_$[$0-1].first_column));
                
break;
case 9:
this.$=new Bloque($$[$0-1], _$[$0-2].first_line, _$[$0-2].first_column)
break;
case 10:
this.$=new Print($$[$0-2],_$[$0-4].first_line, _$[$0-4].first_column);
break;
case 11:
this.$=new Println($$[$0-2],_$[$0-4].first_line, _$[$0-4].first_column);
break;
case 12:
this.$=false
break;
case 13:
this.$=true
break;
case 14: case 15: case 16: case 17: case 18:
this.$=$$[$0]
break;
case 19:
   //console.log($$[$0-3]); 
            this.$=new Declaracion($$[$0-3],$$[$0-4],$$[$0-1],$$[$0-5],_$[$0-5].first_line, _$[$0-5].first_column);
        
break;
case 20:
$$[$0].unshift($$[$0-2]); this.$=$$[$0];
break;
case 21:
this.$=[$$[$0]]
break;
case 23:
this.$= new Arithmetic($$[$0-2],$$[$0],ArithmeticOption.MAS, _$[$0-2].first_line, _$[$0-2].first_column);
break;
case 24:
this.$= new Arithmetic($$[$0-2],$$[$0],ArithmeticOption.MENOS, _$[$0-2].first_line, _$[$0-2].first_column);
break;
case 25:
this.$= new Arithmetic($$[$0-2],$$[$0],ArithmeticOption.MULTIPLICACION, _$[$0-2].first_line, _$[$0-2].first_column);
break;
case 26:
this.$= new Arithmetic($$[$0-2],$$[$0],ArithmeticOption.DIV, _$[$0-2].first_line, _$[$0-2].first_column);
break;
case 27:
this.$= new Arithmetic($$[$0-2],$$[$0],ArithmeticOption.POT, _$[$0-2].first_line, _$[$0-2].first_column);
break;
case 28:
this.$= new Arithmetic($$[$0-2],$$[$0],ArithmeticOption.MODULO, _$[$0-2].first_line, _$[$0-2].first_column);
break;
case 29:
this.$=$$[$0-1]
break;
case 31:
this.$=new Acceso($$[$0],_$[$0].first_line, _$[$0].first_column);
break;
case 32:
this.$=new Literal($$[$0],Type.NUMBER, _$[$0].first_line, _$[$0].first_column)
break;
case 33:
this.$=new Literal($$[$0],Type.DOUBLE, _$[$0].first_line, _$[$0].first_column)
break;
case 34:
this.$=new Literal($$[$0],Type.STRING, _$[$0].first_line, _$[$0].first_column)
break;
case 35:
this.$=new Literal($$[$0],Type.CHAR, _$[$0].first_line, _$[$0].first_column)
break;
case 36:
this.$=new Literal($$[$0],Type.BOOLEAN, _$[$0].first_line, _$[$0].first_column)
break;
}
},
table: [o($V0,$V1,{3:1,4:2,6:3,7:4,8:5,9:6,10:7,19:9,2:$V2,12:$V3,14:$V4,18:$V5,20:$V6}),{1:[3]},o($V0,$V1,{7:4,8:5,9:6,10:7,19:9,6:15,2:$V2,5:[1,14],12:$V3,14:$V4,18:$V5,20:$V6}),o($V7,[2,3]),o($V7,[2,4]),o($V7,[2,5]),o($V7,[2,6]),o($V7,[2,7]),{11:[1,16]},{21:17,22:[1,18],23:[1,19],24:[1,20],25:[1,21],26:[1,22]},o($V0,$V1,{6:3,7:4,8:5,9:6,10:7,19:9,4:23,2:$V2,12:$V3,14:$V4,18:$V5,20:$V6}),{15:[1,24]},{15:[1,25]},o($V0,[2,12]),{1:[2,1]},o($V7,[2,2]),o($V7,[2,8]),{27:26,29:$V8},{29:[2,14]},{29:[2,15]},{29:[2,16]},{29:[2,17]},{29:[2,18]},o($V0,$V1,{7:4,8:5,9:6,10:7,19:9,6:15,2:$V2,12:$V3,13:[1,28],14:$V4,18:$V5,20:$V6}),{15:$V9,16:29,29:$Va,31:$Vb,37:32,38:$Vc,39:$Vd,40:$Ve,41:$Vf,42:$Vg},{15:$V9,16:39,29:$Va,31:$Vb,37:32,38:$Vc,39:$Vd,40:$Ve,41:$Vf,42:$Vg},{28:[1,40]},{28:[2,21],30:[1,41]},o($V7,[2,9]),{17:[1,42],31:$Vh,32:$Vi,33:$Vj,34:$Vk,35:$Vl,36:$Vm},{15:$V9,16:49,29:$Va,31:$Vb,37:32,38:$Vc,39:$Vd,40:$Ve,41:$Vf,42:$Vg},{15:$V9,16:50,29:$Va,31:$Vb,37:32,38:$Vc,39:$Vd,40:$Ve,41:$Vf,42:$Vg},o($Vn,[2,30]),o($Vn,[2,31]),o($Vn,[2,32]),o($Vn,[2,33]),o($Vn,[2,34]),o($Vn,[2,35]),o($Vn,[2,36]),{17:[1,51],31:$Vh,32:$Vi,33:$Vj,34:$Vk,35:$Vl,36:$Vm},{15:$V9,16:52,29:$Va,31:$Vb,37:32,38:$Vc,39:$Vd,40:$Ve,41:$Vf,42:$Vg},{27:53,29:$V8},{11:[1,54]},{15:$V9,16:55,29:$Va,31:$Vb,37:32,38:$Vc,39:$Vd,40:$Ve,41:$Vf,42:$Vg},{15:$V9,16:56,29:$Va,31:$Vb,37:32,38:$Vc,39:$Vd,40:$Ve,41:$Vf,42:$Vg},{15:$V9,16:57,29:$Va,31:$Vb,37:32,38:$Vc,39:$Vd,40:$Ve,41:$Vf,42:$Vg},{15:$V9,16:58,29:$Va,31:$Vb,37:32,38:$Vc,39:$Vd,40:$Ve,41:$Vf,42:$Vg},{15:$V9,16:59,29:$Va,31:$Vb,37:32,38:$Vc,39:$Vd,40:$Ve,41:$Vf,42:$Vg},{15:$V9,16:60,29:$Va,31:$Vb,37:32,38:$Vc,39:$Vd,40:$Ve,41:$Vf,42:$Vg},o($Vo,[2,22],{35:$Vl}),{17:[1,61],31:$Vh,32:$Vi,33:$Vj,34:$Vk,35:$Vl,36:$Vm},{11:[1,62]},{11:[1,63],31:$Vh,32:$Vi,33:$Vj,34:$Vk,35:$Vl,36:$Vm},{28:[2,20]},o($V7,[2,10]),o($Vo,[2,23],{35:$Vl}),o($Vo,[2,24],{35:$Vl}),o($Vp,[2,25],{31:$Vh,32:$Vi,35:$Vl}),o($Vp,[2,26],{31:$Vh,32:$Vi,35:$Vl}),o([11,17],[2,27],{31:$Vh,32:$Vi,33:$Vj,34:$Vk,35:$Vl,36:$Vm}),o($Vp,[2,28],{31:$Vh,32:$Vi,35:$Vl}),o($Vn,[2,29]),o($V7,[2,11]),o($V7,[2,19])],
defaultActions: {14:[2,1],18:[2,14],19:[2,15],20:[2,16],21:[2,17],22:[2,18],53:[2,20]},
parseError: function parseError (str, hash) {
    if (hash.recoverable) {
        this.trace(str);
    } else {
        var error = new Error(str);
        error.hash = hash;
        throw error;
    }
},
parse: function parse (input) {
    var self = this,
        stack = [0],
        tstack = [], // token stack
        vstack = [null], // semantic value stack
        lstack = [], // location stack
        table = this.table,
        yytext = '',
        yylineno = 0,
        yyleng = 0,
        recovering = 0,
        TERROR = 2,
        EOF = 1;

    var args = lstack.slice.call(arguments, 1);

    //this.reductionCount = this.shiftCount = 0;

    var lexer = Object.create(this.lexer);
    var sharedState = { yy: {} };
    // copy state
    for (var k in this.yy) {
      if (Object.prototype.hasOwnProperty.call(this.yy, k)) {
        sharedState.yy[k] = this.yy[k];
      }
    }

    lexer.setInput(input, sharedState.yy);
    sharedState.yy.lexer = lexer;
    sharedState.yy.parser = this;
    if (typeof lexer.yylloc == 'undefined') {
        lexer.yylloc = {};
    }
    var yyloc = lexer.yylloc;
    lstack.push(yyloc);

    var ranges = lexer.options && lexer.options.ranges;

    if (typeof sharedState.yy.parseError === 'function') {
        this.parseError = sharedState.yy.parseError;
    } else {
        this.parseError = Object.getPrototypeOf(this).parseError;
    }

    function popStack (n) {
        stack.length = stack.length - 2 * n;
        vstack.length = vstack.length - n;
        lstack.length = lstack.length - n;
    }

_token_stack:
    var lex = function () {
        var token;
        token = lexer.lex() || EOF;
        // if token isn't its numeric value, convert
        if (typeof token !== 'number') {
            token = self.symbols_[token] || token;
        }
        return token;
    }

    var symbol, preErrorSymbol, state, action, a, r, yyval = {}, p, len, newState, expected;
    while (true) {
        // retreive state number from top of stack
        state = stack[stack.length - 1];

        // use default actions if available
        if (this.defaultActions[state]) {
            action = this.defaultActions[state];
        } else {
            if (symbol === null || typeof symbol == 'undefined') {
                symbol = lex();
            }
            // read action for current state and first input
            action = table[state] && table[state][symbol];
        }

_handle_error:
        // handle parse error
        if (typeof action === 'undefined' || !action.length || !action[0]) {
            var error_rule_depth;
            var errStr = '';

            // Return the rule stack depth where the nearest error rule can be found.
            // Return FALSE when no error recovery rule was found.
            function locateNearestErrorRecoveryRule(state) {
                var stack_probe = stack.length - 1;
                var depth = 0;

                // try to recover from error
                for(;;) {
                    // check for error recovery rule in this state
                    if ((TERROR.toString()) in table[state]) {
                        return depth;
                    }
                    if (state === 0 || stack_probe < 2) {
                        return false; // No suitable error recovery rule available.
                    }
                    stack_probe -= 2; // popStack(1): [symbol, action]
                    state = stack[stack_probe];
                    ++depth;
                }
            }

            if (!recovering) {
                // first see if there's any chance at hitting an error recovery rule:
                error_rule_depth = locateNearestErrorRecoveryRule(state);

                // Report error
                expected = [];
                for (p in table[state]) {
                    if (this.terminals_[p] && p > TERROR) {
                        expected.push("'"+this.terminals_[p]+"'");
                    }
                }
                if (lexer.showPosition) {
                    errStr = 'Parse error on line '+(yylineno+1)+":\n"+lexer.showPosition()+"\nExpecting "+expected.join(', ') + ", got '" + (this.terminals_[symbol] || symbol)+ "'";
                } else {
                    errStr = 'Parse error on line '+(yylineno+1)+": Unexpected " +
                                  (symbol == EOF ? "end of input" :
                                              ("'"+(this.terminals_[symbol] || symbol)+"'"));
                }
                this.parseError(errStr, {
                    text: lexer.match,
                    token: this.terminals_[symbol] || symbol,
                    line: lexer.yylineno,
                    loc: yyloc,
                    expected: expected,
                    recoverable: (error_rule_depth !== false)
                });
            } else if (preErrorSymbol !== EOF) {
                error_rule_depth = locateNearestErrorRecoveryRule(state);
            }

            // just recovered from another error
            if (recovering == 3) {
                if (symbol === EOF || preErrorSymbol === EOF) {
                    throw new Error(errStr || 'Parsing halted while starting to recover from another error.');
                }

                // discard current lookahead and grab another
                yyleng = lexer.yyleng;
                yytext = lexer.yytext;
                yylineno = lexer.yylineno;
                yyloc = lexer.yylloc;
                symbol = lex();
            }

            // try to recover from error
            if (error_rule_depth === false) {
                throw new Error(errStr || 'Parsing halted. No suitable error recovery rule available.');
            }
            popStack(error_rule_depth);

            preErrorSymbol = (symbol == TERROR ? null : symbol); // save the lookahead token
            symbol = TERROR;         // insert generic error symbol as new lookahead
            state = stack[stack.length-1];
            action = table[state] && table[state][TERROR];
            recovering = 3; // allow 3 real symbols to be shifted before reporting a new error
        }

        // this shouldn't happen, unless resolve defaults are off
        if (action[0] instanceof Array && action.length > 1) {
            throw new Error('Parse Error: multiple actions possible at state: '+state+', token: '+symbol);
        }

        switch (action[0]) {
            case 1: // shift
                //this.shiftCount++;

                stack.push(symbol);
                vstack.push(lexer.yytext);
                lstack.push(lexer.yylloc);
                stack.push(action[1]); // push state
                symbol = null;
                if (!preErrorSymbol) { // normal execution/no error
                    yyleng = lexer.yyleng;
                    yytext = lexer.yytext;
                    yylineno = lexer.yylineno;
                    yyloc = lexer.yylloc;
                    if (recovering > 0) {
                        recovering--;
                    }
                } else {
                    // error just occurred, resume old lookahead f/ before error
                    symbol = preErrorSymbol;
                    preErrorSymbol = null;
                }
                break;

            case 2:
                // reduce
                //this.reductionCount++;

                len = this.productions_[action[1]][1];

                // perform semantic action
                yyval.$ = vstack[vstack.length-len]; // default to $$ = $1
                // default location, uses first token for firsts, last for lasts
                yyval._$ = {
                    first_line: lstack[lstack.length-(len||1)].first_line,
                    last_line: lstack[lstack.length-1].last_line,
                    first_column: lstack[lstack.length-(len||1)].first_column,
                    last_column: lstack[lstack.length-1].last_column
                };
                if (ranges) {
                  yyval._$.range = [lstack[lstack.length-(len||1)].range[0], lstack[lstack.length-1].range[1]];
                }
                r = this.performAction.apply(yyval, [yytext, yyleng, yylineno, sharedState.yy, action[1], vstack, lstack].concat(args));

                if (typeof r !== 'undefined') {
                    return r;
                }

                // pop off stack
                if (len) {
                    stack = stack.slice(0,-1*len*2);
                    vstack = vstack.slice(0, -1*len);
                    lstack = lstack.slice(0, -1*len);
                }

                stack.push(this.productions_[action[1]][0]);    // push nonterminal (reduce)
                vstack.push(yyval.$);
                lstack.push(yyval._$);
                // goto new state = table[STATE][NONTERMINAL]
                newState = table[stack[stack.length-2]][stack[stack.length-1]];
                stack.push(newState);
                break;

            case 3:
                // accept
                return true;
        }

    }

    return true;
}};

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
/* generated by jison-lex 0.3.4 */
var lexer = (function(){
var lexer = ({

EOF:1,

parseError:function parseError(str, hash) {
        if (this.yy.parser) {
            this.yy.parser.parseError(str, hash);
        } else {
            throw new Error(str);
        }
    },

// resets the lexer, sets new input
setInput:function (input, yy) {
        this.yy = yy || this.yy || {};
        this._input = input;
        this._more = this._backtrack = this.done = false;
        this.yylineno = this.yyleng = 0;
        this.yytext = this.matched = this.match = '';
        this.conditionStack = ['INITIAL'];
        this.yylloc = {
            first_line: 1,
            first_column: 0,
            last_line: 1,
            last_column: 0
        };
        if (this.options.ranges) {
            this.yylloc.range = [0,0];
        }
        this.offset = 0;
        return this;
    },

// consumes and returns one char from the input
input:function () {
        var ch = this._input[0];
        this.yytext += ch;
        this.yyleng++;
        this.offset++;
        this.match += ch;
        this.matched += ch;
        var lines = ch.match(/(?:\r\n?|\n).*/g);
        if (lines) {
            this.yylineno++;
            this.yylloc.last_line++;
        } else {
            this.yylloc.last_column++;
        }
        if (this.options.ranges) {
            this.yylloc.range[1]++;
        }

        this._input = this._input.slice(1);
        return ch;
    },

// unshifts one char (or a string) into the input
unput:function (ch) {
        var len = ch.length;
        var lines = ch.split(/(?:\r\n?|\n)/g);

        this._input = ch + this._input;
        this.yytext = this.yytext.substr(0, this.yytext.length - len);
        //this.yyleng -= len;
        this.offset -= len;
        var oldLines = this.match.split(/(?:\r\n?|\n)/g);
        this.match = this.match.substr(0, this.match.length - 1);
        this.matched = this.matched.substr(0, this.matched.length - 1);

        if (lines.length - 1) {
            this.yylineno -= lines.length - 1;
        }
        var r = this.yylloc.range;

        this.yylloc = {
            first_line: this.yylloc.first_line,
            last_line: this.yylineno + 1,
            first_column: this.yylloc.first_column,
            last_column: lines ?
                (lines.length === oldLines.length ? this.yylloc.first_column : 0)
                 + oldLines[oldLines.length - lines.length].length - lines[0].length :
              this.yylloc.first_column - len
        };

        if (this.options.ranges) {
            this.yylloc.range = [r[0], r[0] + this.yyleng - len];
        }
        this.yyleng = this.yytext.length;
        return this;
    },

// When called from action, caches matched text and appends it on next action
more:function () {
        this._more = true;
        return this;
    },

// When called from action, signals the lexer that this rule fails to match the input, so the next matching rule (regex) should be tested instead.
reject:function () {
        if (this.options.backtrack_lexer) {
            this._backtrack = true;
        } else {
            return this.parseError('Lexical error on line ' + (this.yylineno + 1) + '. You can only invoke reject() in the lexer when the lexer is of the backtracking persuasion (options.backtrack_lexer = true).\n' + this.showPosition(), {
                text: "",
                token: null,
                line: this.yylineno
            });

        }
        return this;
    },

// retain first n characters of the match
less:function (n) {
        this.unput(this.match.slice(n));
    },

// displays already matched input, i.e. for error messages
pastInput:function () {
        var past = this.matched.substr(0, this.matched.length - this.match.length);
        return (past.length > 20 ? '...':'') + past.substr(-20).replace(/\n/g, "");
    },

// displays upcoming input, i.e. for error messages
upcomingInput:function () {
        var next = this.match;
        if (next.length < 20) {
            next += this._input.substr(0, 20-next.length);
        }
        return (next.substr(0,20) + (next.length > 20 ? '...' : '')).replace(/\n/g, "");
    },

// displays the character position where the lexing error occurred, i.e. for error messages
showPosition:function () {
        var pre = this.pastInput();
        var c = new Array(pre.length + 1).join("-");
        return pre + this.upcomingInput() + "\n" + c + "^";
    },

// test the lexed token: return FALSE when not a match, otherwise return token
test_match:function(match, indexed_rule) {
        var token,
            lines,
            backup;

        if (this.options.backtrack_lexer) {
            // save context
            backup = {
                yylineno: this.yylineno,
                yylloc: {
                    first_line: this.yylloc.first_line,
                    last_line: this.last_line,
                    first_column: this.yylloc.first_column,
                    last_column: this.yylloc.last_column
                },
                yytext: this.yytext,
                match: this.match,
                matches: this.matches,
                matched: this.matched,
                yyleng: this.yyleng,
                offset: this.offset,
                _more: this._more,
                _input: this._input,
                yy: this.yy,
                conditionStack: this.conditionStack.slice(0),
                done: this.done
            };
            if (this.options.ranges) {
                backup.yylloc.range = this.yylloc.range.slice(0);
            }
        }

        lines = match[0].match(/(?:\r\n?|\n).*/g);
        if (lines) {
            this.yylineno += lines.length;
        }
        this.yylloc = {
            first_line: this.yylloc.last_line,
            last_line: this.yylineno + 1,
            first_column: this.yylloc.last_column,
            last_column: lines ?
                         lines[lines.length - 1].length - lines[lines.length - 1].match(/\r?\n?/)[0].length :
                         this.yylloc.last_column + match[0].length
        };
        this.yytext += match[0];
        this.match += match[0];
        this.matches = match;
        this.yyleng = this.yytext.length;
        if (this.options.ranges) {
            this.yylloc.range = [this.offset, this.offset += this.yyleng];
        }
        this._more = false;
        this._backtrack = false;
        this._input = this._input.slice(match[0].length);
        this.matched += match[0];
        token = this.performAction.call(this, this.yy, this, indexed_rule, this.conditionStack[this.conditionStack.length - 1]);
        if (this.done && this._input) {
            this.done = false;
        }
        if (token) {
            return token;
        } else if (this._backtrack) {
            // recover context
            for (var k in backup) {
                this[k] = backup[k];
            }
            return false; // rule action called reject() implying the next rule should be tested instead.
        }
        return false;
    },

// return next match in input
next:function () {
        if (this.done) {
            return this.EOF;
        }
        if (!this._input) {
            this.done = true;
        }

        var token,
            match,
            tempMatch,
            index;
        if (!this._more) {
            this.yytext = '';
            this.match = '';
        }
        var rules = this._currentRules();
        for (var i = 0; i < rules.length; i++) {
            tempMatch = this._input.match(this.rules[rules[i]]);
            if (tempMatch && (!match || tempMatch[0].length > match[0].length)) {
                match = tempMatch;
                index = i;
                if (this.options.backtrack_lexer) {
                    token = this.test_match(tempMatch, rules[i]);
                    if (token !== false) {
                        return token;
                    } else if (this._backtrack) {
                        match = false;
                        continue; // rule action called reject() implying a rule MISmatch.
                    } else {
                        // else: this is a lexer rule which consumes input without producing a token (e.g. whitespace)
                        return false;
                    }
                } else if (!this.options.flex) {
                    break;
                }
            }
        }
        if (match) {
            token = this.test_match(match, rules[index]);
            if (token !== false) {
                return token;
            }
            // else: this is a lexer rule which consumes input without producing a token (e.g. whitespace)
            return false;
        }
        if (this._input === "") {
            return this.EOF;
        } else {
            return this.parseError('Lexical error on line ' + (this.yylineno + 1) + '. Unrecognized text.\n' + this.showPosition(), {
                text: "",
                token: null,
                line: this.yylineno
            });
        }
    },

// return next match that has a token
lex:function lex () {
        var r = this.next();
        if (r) {
            return r;
        } else {
            return this.lex();
        }
    },

// activates a new lexer condition state (pushes the new lexer condition state onto the condition stack)
begin:function begin (condition) {
        this.conditionStack.push(condition);
    },

// pop the previously active lexer condition state off the condition stack
popState:function popState () {
        var n = this.conditionStack.length - 1;
        if (n > 0) {
            return this.conditionStack.pop();
        } else {
            return this.conditionStack[0];
        }
    },

// produce the lexer rule set which is active for the currently active lexer condition state
_currentRules:function _currentRules () {
        if (this.conditionStack.length && this.conditionStack[this.conditionStack.length - 1]) {
            return this.conditions[this.conditionStack[this.conditionStack.length - 1]].rules;
        } else {
            return this.conditions["INITIAL"].rules;
        }
    },

// return the currently active lexer condition state; when an index argument is provided it produces the N-th previous condition state, if available
topState:function topState (n) {
        n = this.conditionStack.length - 1 - Math.abs(n || 0);
        if (n >= 0) {
            return this.conditionStack[n];
        } else {
            return "INITIAL";
        }
    },

// alias for begin(condition)
pushState:function pushState (condition) {
        this.begin(condition);
    },

// return the number of states currently on the stack
stateStackSize:function stateStackSize() {
        return this.conditionStack.length;
    },
options: {"case-insensitive":true},
performAction: function anonymous(yy,yy_,$avoiding_name_collisions,YY_START) {
var YYSTATE=YY_START;
switch($avoiding_name_collisions) {
case 0:
                                console.log("el lexema encontrado es :"+ yy_.yytext) 
                                return 39
                            
break;
case 1:
                                console.log("el lexema encontrado es :"+ yy_.yytext) 
                                return 38
                            
break;
case 2:
                                console.log("el lexema encontrado es :"+ yy_.yytext) 
                                return 40
                            
break;
case 3:
                                console.log("el lexema encontrado es :"+ yy_.yytext) 
                                return 41
                            
break;
case 4:
                                console.log("el lexema encontrado es :"+ yy_.yytext) 
                                return 42
                            
break;
case 5:
                    console.log("el lexema encontrado es :"+ yy_.yytext);
                    return 22;
                
break;
case 6:
                    console.log("el lexema encontrado es :"+ yy_.yytext);
                    return 23;
                
break;
case 7:
                    console.log("el lexema encontrado es :"+ yy_.yytext);
                    return 24;
                
break;
case 8:
                    console.log("el lexema encontrado es :"+ yy_.yytext); 
                    return 25;
                
break;
case 9:
                    console.log("el lexema encontrado es :"+ yy_.yytext);
                    return 26;
                
break;
case 10:
                    console.log("el lexema encontrado es :"+ yy_.yytext); 
                    return 20;
                
break;
case 11:
                    console.log("el lexema encontrado es :"+ yy_.yytext); 
                    return 14;
                
break;
case 12:
                    console.log("el lexema encontrado es :"+ yy_.yytext); 
                    return 18;
                
break;
case 13:
                    console.log("el lexema encontrado es :"+ yy_.yytext); 
                    return 11;
                
break;
case 14:
                    console.log("el lexema encontrado es :"+ yy_.yytext); 
                    return 30;
                
break;
case 15:
                    console.log("el lexema encontrado es :"+ yy_.yytext); 
                    return ':';
                
break;
case 16:
                    console.log("el lexema encontrado es :"+ yy_.yytext); 
                    return 12;
                
break;
case 17:
                    console.log("el lexema encontrado es :"+ yy_.yytext); 
                    return 13;
                
break;
case 18:
                    console.log("el lexema encontrado es :"+ yy_.yytext); 
                    return 15;
                
break;
case 19:
                    console.log("el lexema encontrado es :"+ yy_.yytext); 
                    return 17;
                
break;
case 20:
                    console.log("el lexema encontrado es :"+ yy_.yytext); 
                    return '++';
                
break;
case 21:
                    console.log("el lexema encontrado es :"+ yy_.yytext); 
                    return 32;
                
break;
case 22:
                    console.log("el lexema encontrado es :"+ yy_.yytext); 
                    return '--';
                
break;
case 23:
                    console.log("el lexema encontrado es :"+ yy_.yytext); 
                    return 31;
                
break;
case 24:
                    console.log("el lexema encontrado es :"+ yy_.yytext); 
                    return 35;
                
break;
case 25:
                    console.log("el lexema encontrado es :"+ yy_.yytext); 
                    return 33;
                
break;
case 26:
                    //console.log("comentario de una linea")
                
break;
case 27:
break;
case 28:
                    console.log("el lexema encontrado es :"+ yy_.yytext); 
                    return 34;
                
break;
case 29:
                    console.log("el lexema encontrado es :"+ yy_.yytext); 
                    return 36;
                
break;
case 30:
                    console.log("el lexema encontrado es :"+ yy_.yytext); 
                    return '==';
                
break;
case 31:
                    console.log("el lexema encontrado es :"+ yy_.yytext); 
                    return 28;
                
break;
case 32:
                    console.log("el lexema encontrado es :"+ yy_.yytext); 
                    return '!=';
                
break;
case 33:
                    console.log("el lexema encontrado es :"+ yy_.yytext); 
                    return '>=';
                
break;
case 34:
                    console.log("el lexema encontrado es :"+ yy_.yytext); 
                    return '<=';
                
break;
case 35:
                    console.log("el lexema encontrado es :"+ yy_.yytext); 
                    return '>';
                
break;
case 36:
                    console.log("el lexema encontrado es :"+ yy_.yytext); 
                    return '<';
                
break;
case 37:
                    console.log("el lexema encontrado es :"+ yy_.yytext); 
                    return '||';
                
break;
case 38:
                    console.log("el lexema encontrado es :"+ yy_.yytext); 
                    return '&&';
                
break;
case 39:
                    console.log("el lexema encontrado es :"+ yy_.yytext); 
                    return '^';
                
break;
case 40:
                    console.log("el lexema encontrado es :"+ yy_.yytext); 
                    return '!';
                
break;
case 41:
                                console.log("el lexema encontrado es :"+ yy_.yytext); 
                                return 29;
                            
break;
case 42:
break;
case 43:
break;
case 44:
break;
case 45:return 5
break;
case 46: 
        //console.log("error lexico:"+yy_.yytext+ " fila: "+yy_.yylloc.first_line+" columna: "+yy_.yylloc.first_column);
        instancia.addError(new Error("Lexico","lexema: "+yy_.yytext+" no coincide con ningun patrón",yy_.yylloc.first_line,yy_.yylloc.first_column+1));
        //push para array errores
    
break;
}
},
rules: [/^(?:[-]?[0-9]+(\.[0-9]+))/i,/^(?:[-]?[0-9]+)/i,/^(?:[\"](\\"|[^"])*[\"])/i,/^(?:[\']([^']|\\n|\\t|(\\)(\\))?[\'])/i,/^(?:true|false\b)/i,/^(?:int\b)/i,/^(?:String\b)/i,/^(?:boolean\b)/i,/^(?:double\b)/i,/^(?:char\b)/i,/^(?:const\b)/i,/^(?:Print\b)/i,/^(?:Println\b)/i,/^(?:;)/i,/^(?:,)/i,/^(?::)/i,/^(?:\{)/i,/^(?:\})/i,/^(?:\()/i,/^(?:\))/i,/^(?:\+\+)/i,/^(?:\+)/i,/^(?:--)/i,/^(?:-)/i,/^(?:\*\*)/i,/^(?:\*)/i,/^(?:\/\/.*)/i,/^(?:[/][*][^*]*[*]+([^/*][^*]*[*]+)*[/])/i,/^(?:\/)/i,/^(?:%)/i,/^(?:==)/i,/^(?:=)/i,/^(?:!=)/i,/^(?:>=)/i,/^(?:<=)/i,/^(?:>)/i,/^(?:<)/i,/^(?:\|\|)/i,/^(?:&&)/i,/^(?:\^)/i,/^(?:!)/i,/^(?:[a-zA-ZñÑ][a-zA-Z0-9_ñÑ]*)/i,/^(?:[/][*][^*]*[*]+([^/*][^*]*[*]+)*[/])/i,/^(?:[ \r\t]+)/i,/^(?:\n)/i,/^(?:$)/i,/^(?:.)/i],
conditions: {"INITIAL":{"rules":[0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31,32,33,34,35,36,37,38,39,40,41,42,43,44,45,46],"inclusive":true}}
});
return lexer;
})();
parser.lexer = lexer;
function Parser () {
  this.yy = {};
}
Parser.prototype = parser;parser.Parser = Parser;
return new Parser;
})();


if (typeof require !== 'undefined' && typeof exports !== 'undefined') {
exports.parser = gramatica;
exports.Parser = gramatica.Parser;
exports.parse = function () { return gramatica.parse.apply(gramatica, arguments); };
exports.main = function commonjsMain (args) {
    if (!args[1]) {
        console.log('Usage: '+args[0]+' FILE');
        process.exit(1);
    }
    var source = require('fs').readFileSync(require('path').normalize(args[1]), "utf8");
    return exports.parser.parse(source);
};
if (typeof module !== 'undefined' && require.main === module) {
  exports.main(process.argv.slice(1));
}
}