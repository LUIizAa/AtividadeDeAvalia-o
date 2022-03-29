const app=require('./config/server.js'); // tem como função a importação do server
const rotaHome=require('./app/routes/home.js')(app); //função: importar a página home
const rotaAdmin=require('./app/routes/admin.js')(app); //função: importar a página admin
const rotaNoticis=require('./app/routes/noticias.js')(app); //função: importar a página noticias

app.listen('3000', function(){
    console.log('Servidor rodando na porta 3000');
}); //executa o servidor na porta 3000