// conexão com o mySQL

const mysql = require('mysql2');

const conexao = mysql.createConnection({
    host: 'localhost',
    port: 3306,
    user: 'alyson',
    password: 'rootroot',
    database: 'agenda-petshop'
});

module.exports = conexao;
