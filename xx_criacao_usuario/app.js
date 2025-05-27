//Imports
//require('dotenv').config()
const express = require('express')
const bcrypt = require('bcrypt')
const db = require('./db')
//const jwt = require('jsonwebtoken')

//Middlewares
const app = express()
app.use(express.json())
app.use(express.urlencoded({ extended: false }));
app.set('view engine', 'ejs')


//Rotas
app.get('/', (req, res) => (
    res.render('login')
))

app.get('/register', (req,res) => {
    res.render('register')
})

app.post('/register', async (req,res) => {
    const { usuario, senha, confirmasenha, nome, email } = req.body
    if (senha != confirmasenha){
        res.send("<h1>Senhas diferentes!!</h1>")
    }
    const senhacrypt = await bcrypt.hash(senha, 12)
    const sql = 'INSERT INTO users (usuario, senha, nome, email) values (?,?,?,?)'
    db.run(sql, [usuario, senhacrypt, nome, email], (err) => {
        if (err) {
            res.send(`Erro ao inserir usuario: ${err}`)
        }
        res.redirect("/login")
    })
})

app.get('/login', (req, res) => {
    res.render('login')
})

app.post('/login', (req, res) => {
    const { usuario, senha } = req.body
    const sql = 'SELECT * FROM users WHERE usuario = ?'
    db.get(sql, [usuario], async (err, user) => {
        if (err || !user){
            res.send('<h1>Usuário não encontrado!!</h1>')
        }
        const valid = await bcrypt.compare(senha, user.senha)

        if (!valid) {
            res.send("<h1>Senha Incorreta</h1>")
        }
        res.cookie('senha',user.senha).render('dashboard', {user})
    })
})


app.listen(3000, console.log("Aplicação em http://localhost:3000"))