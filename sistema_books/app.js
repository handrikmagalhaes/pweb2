const express = require('express')
const path = require('path')
const basePath = path.join(__dirname);

// Invocando o express
const app = express()

//Ler o body como JSON
app.use(
    express.urlencoded({
      extended: true,
    }),
  )

  //Landing page
app.get('/', (req,res) => {
    res.sendFile(`${basePath}/index.html`)
})

//Arquivos estáticos
app.use(express.static('static'))

app.listen(3000, () => {
    console.log('Aplicação rodando')
})