const express = require('express');             // importa express
const mongoose = require('mongoose');           // importa mongoose

const usuarioModel = require('./models/usuario')

// url de coneção -> mongodb://servidor:porta/nome do banco
//                   mongodb://localhost:27017/usuario

mongoose.connect('mongodb://localhost:27017/usuario', {
    useNewUrlParser: true,         // Fazer o db usar novo sistema de Url
    useUnifiedTopology: true,      // Mecanismo de monitoramento do DB
})

const Usuario = mongoose.model("usuario", usuarioModel);

const usuario1 = new Usuario({
    nome: "Fellipe",
    sobrenome: "Leal",
    cpf: "012.345.678.90",
    idade: 2000-12-13,
    senha: "batata123"
})

usuario1.save()
.then(() =>{
    console.log("Usuário Salvo!")})
.catch((err) => {
    console.error(err)})

const app = express();
const port = 3000;

app.get('/', (req, res)=> {
    res.send('Hello Bluemers');
})

app.listen(port, ()=> {
    console.info(`App rodando em http://localhost:${port}`)
})