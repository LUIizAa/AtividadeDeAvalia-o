module.exports=function(app){
    
    //rota para a página formulário de inclusão de notícia
    app.get('/formularioinclusaonoticia', (req, res)=>{
        res.render('admin/form_add_noticia.ejs')
    })


} //exportando admin pra rodar no app

// a "/" para nós, em termos de url significa localhost 3000

//paramêtros são separados por vírgula, podendo ser objeto, podendo ser vetor

//primeiro parametro é '/formularioinclusaonoticia' e o segundo é (req, res)=>{ res.render('admin/form_add_noticia.ejs')})

//primeira rota da pasta routes, rota é um caminho para uma funcionalidade

//os elementos post, get, delete são utilizados para a indicação de rota