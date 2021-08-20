const express = require('express');
const app = express();

const port = 3000;
app.use(express.json());       // Definir para as REQS do Express utilizarem JSON.

const filmes = [
    'Vingadores',
    ' Lobo Solitário',
    ' Os Sem Florestas',
    ' Django',
    ' Velozes e Furiosos',
    ' Taxi',
    ' Operação Babá'
];

const msg = [
    'Bem-Vindo a lista de Filmes T3C5-M3' ,
    'Olá amigos, bem-vindo a lista de filmes',
    'Servidor com Lista de filmes',
    'Este é meu servidor de Filmes',
];

//// FUNCTIONS ////
function randomMinMax(min, max) {
    return Math.floor(Math.random() * (max - min)) + min;
}

function frase(num){
    return msg[num];
}

function filme(num){
    return filmes[num];
}
//// FUNCTIONS ////


// ROTA pra a página padrão HOME. *puxando uma frase aleatória*
app.get('/', (req, res) => {
    res.send(`<h1>${frase(randomMinMax(0,msg.length))}</h1>`);
});

// ROTA para a página FILMES, mostrando a lista de FILMES.
app.get('/filmes', (req, res) => {
    res.send(`<h2>${filmes}</h2>`);
});

// ROTA para buscar o FILME pelo ID.
app.get('/filmes/:id', (req, res) => {
    const id = req.params.id - 1;
    const filme = filmes[id];
    if(!filme) {
        res.send(`<h1>Atenção, Filme não Encontrado</h1>`);
    }
    res.send(`<h1>${filme}</h1>`);
});

// ROTA para uma escolha aleatória pelo JS dos FILMES.
app.get('/filmealeatorio', (req, res) => {
    res.send(`<h2>Seu filmes escolhido aleatoriamente foi:${filme(randomMinMax(0,filmes.length))}</h2>`)
})

// CRIAR - POST
app.post('/filmes', (req, res) => {
    const filme = req.body.filme; // harry potter
    const id = filmes.length;
    filmes.push(filme);

    res.send(`Filme adicionado com sucesso: ${filme}. 
    O ID do filme é ${id+1}`)
});

// UPDATE - PUT
app.put('filmes/:id', (req, res) => {
    const id = req.params.id -1;
    const filme = req.body.filme;
    const nomeAnterior = filmes[id];
    filmes[id] = filme;
    res.send(`Filme anterior: ${nomeAnterior}, atualizado com sucesso para: ${filme}.`)
});

// DELETE - DELETE
app.delete('/filmes/:id', (req, res) => {
    const id = req.params.id -1;
    const filme = filmes[id];
    if(!filme) {
        res.send('Filme não Encontrado');
    }
    delete filmes[id];
    res.send("Filme excluido com sucesso");
});

// ROTA setada padrão a porta + inf. do console.log.
app.listen(port, () => {
    console.info(`App esta rodando em: http://localhost:${port}/`);
});