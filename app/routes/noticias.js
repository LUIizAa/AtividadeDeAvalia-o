module.exports=function(app){

    //é o caminho/rota para a página notícia
    app.get('/noticia', function(req,res){ 
        const dbConnection=require('../../config/dbConnection');//importação do arquivo do banco de dados
            const connection=dbConnection();
            connection.query('select * from noticias', function(error, result){
                if(error){
                    console.log(error);
                }
                //tem como função mostrar erro caso seja apresentada alguma falha/erro
                res.render('noticias/noticias.ejs',{noticias:result}); //é a resposta da query para o cliente  
            });
    
    });

}; //exportando noticia pra rodar no app