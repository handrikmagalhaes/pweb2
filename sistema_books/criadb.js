const sqlite3 = require('sqlite3').verbose();

let db = new sqlite3.Database('petshop.db');

db.run('select * from racas');
