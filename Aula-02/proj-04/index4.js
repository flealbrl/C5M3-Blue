const express = require('express');
const app = express();

const port = 3000;

const games = [
    'GTA San Andreas',
    ' Need For Speed Underground 2',
    ' Combat Arms',
    ' The Sims',
    ' MTA San Andreas',
    ' Euro Truck Simulator 2',
    ' CSGO'
];

const msg = [
    'Bem-Vindo ao TOP 3 Jogos FPS' ,
    'Olá amigos, bem-vindo ao servidor de jogos.',
    'Servidor de jogos para Computador',
    'Este é meu servidor de Jogos',
];

//// FUNCTIONS ////
function randomMinMax(min, max) {
    return Math.floor(Math.random() * (max - min)) + min;
}

function frase(num){
    return msg[num];
}

function game(num){
    return games[num];
}
//// FUNCTIONS ////


// ROTA pra a página padrão HOME. *puxando uma frase aleatória*
app.get('/', (req, res) => {
    res.send(`<h1>${frase(randomMinMax(0,msg.length))}</h1>`);
});

// ROTA para a página games, mostrando a lista de GAMES.
app.get('/games', (req, res) => {
    res.send(`<h2>${games}</h2>`);
});

// ROTA para buscar o game pelo ID.
app.get('/games/:id', (req, res) => {
    const id = req.params.id;
    const game = games[id -1];
    if (id > games.length || id < 1){
        res.send(`<h1>ID Inválido.</h1>`);
    }else {
        res.send(`<h2>${game}</h2>`);
    }
});

// ROTA para uma escolha aleatória pelo JS dos games.
app.get('/escolhejogo', (req, res) => {
    res.send(`<h1>${game(randomMinMax(0,games.length))}</h1>`)
})

// ROTA pra setar como padrão a porta + console.log.
app.listen(port, () => {
    console.info(`App esta rodando em: http://localhost:${port}/`);
});