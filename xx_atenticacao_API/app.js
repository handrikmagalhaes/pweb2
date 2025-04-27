//Imports
require('dotenv').config()
const express = require('express')
const dblite = require('sqlite3')
const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')

const app = express()
app.use(express.json())

//Rotas
app.get('/', (req, res) => (
    res.status(200).json({msg:"Conectado"})
))

//Registrar usuário
app.post('/auth/registra', async(req,res) => {
    const {nome, email, senha, confirmasenha} = req.body
    if (!nome || !email || !senha) {
        return res.status(422).json({msg: "Preencha todos os dados"})
    }
    if (senha != confirmasenha) {
        return res.status(422).json({msg:"As senhas não conferem"})
    }
    return res.status(201).json({msg:"Recurso criado"})
})



app.listen(3000, console.log("Aplicação em http://localhost:3000"))