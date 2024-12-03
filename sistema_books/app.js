const express = require('express')
const path = require('path')
const basePath = path.join(__dirname);

// Invocando o express
const app = express()

//Landing page
app.get('/', (req,res) => {
    res.sendFile(`${basePath}/index.html`)
})

//Arquivos estáticos
app.use(express.static('static'))

app.listen(3000, function (){
    console.log('Aplicação rodando')
})