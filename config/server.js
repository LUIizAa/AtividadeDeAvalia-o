const express=require('express'); //tem como função importar o express
const app=express(); //tem como função a execução do express
app.set('view-engine', 'ejs'); //config view-engine ejs
app.set('views', './app/views'); //config novo diretorio da pasta views

module.exports=app; //app sendo exportaado