const express = require('express')
const path = require('path')
const sqlite3 = require('sqlite3');
const basePath = path.join(__dirname);
/*const livros = [
    {
        "titulo": "O Iluminado",
        "subtitulo": "",
        "autor": "Stephen King",
        "genero": "Terror"
    },
    {
        "titulo":"Super Freakonomics",
        "subtitulo": "O Lado Oculto de tudo o que nos afeta",
        "autor": "Steve D. Levitt & Stephen J. Dubner",
        "genero": "Política"
    },
    {
        "titulo": "Tocaia Grande",
        "subtitulo": "A Face Obscura",
        "autor": "Jorge Amado",
        "genero": "Romance"
    }
]*/


// Invocando o express
const app = express()

//Criando/selecionando a base de dados
let db = new sqlite3.Database('livros.db');

//Ler o body como JSON
app.use(
    express.urlencoded({
      extended: true,
    }),
  )
  app.use(express.json());
  app.set('view engine', 'ejs');

  //Landing page
app.get('/', (req,res) => {
    res.render('index');
})

app.get('/livros', (req, res) => {
    db.all('SELECT * FROM livros order by titulo', function(err, livros){
        res.render('livros', {livros: livros})
    })
    
})
app.get('/formlivro', (req, res) => {
    res.sendFile(`${basePath}/formlivro.html`)
})
app.post('/livro', (req, res) => {
    console.log(req.body);
    res.send("Livro Cadastrado");
})

//Arquivos estáticos
app.use(express.static('static'))

app.listen(3000, () => {
    console.log('Aplicação rodando')
})