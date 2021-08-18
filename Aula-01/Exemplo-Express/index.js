const express = require('express');      // Importa o express
const app = express();                   // Inicializa o express

app.get('/', function(req, res){
    res.send('Hello World!')
})

app.get('/blue', function(req,res){
    res.send('<h1>Welcome, Bluemer!</h1>')
})

app.listen(3000)
console.log('Servidor Rodando na Porta 3000')