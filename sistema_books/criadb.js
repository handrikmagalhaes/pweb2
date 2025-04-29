const sqlite3 = require('sqlite3').verbose();

let db = new sqlite3.Database('livros.db');

db.run('create table if not exists livros (id INTEGER PRIMARY KEY, titulo TEXT, subtitulo TEXT, autor TEXT, genero TEXT)')
//const dados = db.run('select * from livros');
//console.log(dados);
