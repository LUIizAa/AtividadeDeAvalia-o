module.exports=function(app){

    //caminho/rota para a home do app, ou seja, a página principal
    app.get('/', function(req,res){
        res.render('home/index.ejs')
    })


}//exportação de home para rodar no app