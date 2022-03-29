const mysql=require('mysql'); //função: importação do módulo mysql

module.exports=function(){
    return mysql.createConnection({
                host: 'localhost',
                user: 'root',
                password: 'ifms',
                database:'portalnoticias'
            }); // tem como função a criação de uma conexão com o banco de dados portal_noticias
}

//servidor criado para o banco de dados