//variables requeridas para inicializar la app
var express=require("express");
var morgan= require("morgan");
var app=express();

//inicilizando y detalle de que usara la app
app.use(morgan('dev'));
app.use(express.json());
app.use(express.urlencoded({extended:true}));

app.listen(8080,function () {
    console.log("Servidor inicializado correctamente");
})


app.get("/",function(req,res) {
    res.json({mensaje:"prueba servidor"});
})

app.get("/texto",function(req,res){
    res.send('esta funcion sirve para enviar texto desde el servidor');
})

app.post("/post",function(req,res){
    var recibido=req.body.valor;
    res.json({recibi:recibido});
})