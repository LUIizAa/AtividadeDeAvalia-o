const app=require('./config/server.js'); // tem como função a importação do server.js, o qual é um módulo
const rotaHome=require('./app/routes/home.js')(app); //função: importar a página home e executar
const rotaAdmin=require('./app/routes/admin.js')(app); //função: importar a página admin executar
const rotaNoticis=require('./app/routes/noticias.js')(app); //função: importar a página noticias executar

app.listen('3000', function(){//o listen é responsável por cria um servidor na porta 3000;
    console.log('Servidor rodando na porta 3000');
}); //executa o servidor na porta 3000