const express = require('express');
const app = express();

const port = 3000;

const games = [
    'GTA San Andreas',
    'Need For Speed Underground',
    'Minecraft',
    'The Sims',
    'Mortal kombat',
    'SuperMarioWorld',
    'Bomberman',
    "Just Dance",
    "Call of Duty",
];

const msgInicio = [
    'Bem-Vindo ao TOP 3 Jogos FPS',
    'Olá amigos, bem-vindo ao servidor de jogos.',
    'Servidor de jogos para Computador',
    'Este é meu servidor de Jogos',
];

function randomMinMax(min, max) {
    return Math.floor(Math.random() * (max - min)) + min;
}

function frase(num){
    return msgInicio[num];
}
console.log(frase(randomMinMax(0,3)));

const msg = "teste"
//GET / home
app.get('/',(req, res) => {
    res.send(`<h1>${frase(randomMinMax(0,3))}</h1>`);
});

games.forEach(function (item, indice){
    console.log(item, indice);
});


app.listen(port, () => {
    console.info(`App esta rodando em: http://localhost:${port}/`);
});