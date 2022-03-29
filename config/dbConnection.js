const mysql=require('mysql'); //função: importação do módulo mysql

module.exports=function(){
    return mysql.createConnection({
                host: 'localhost',
                user: 'root',
                password: '1234',
                database:'portal_noticias'
            }); // tem como função a criação de uma conexão com o banco de dados portal_noticias
}