const express = require('express');
const app = express();

const port = 3500;          // Selecionar a porta padrão
const games = [             // Lista com os Games.
    'Counter-Strike: Global Offensive',
    'Arma 3',
    'Battlefield 01',
];

// ROTA para cair na página HOME como padrão.
app.get('/', (req, res) => {
    res.send('Top 03 Melhores FPS para Computador')
})

// ROTA para exibier a lista de games na página.
app.get('/games', (req, res) => {
    res.send(games)
})

// ROTA para exiber e buscar apenas o ID de cada games.
app.get('/games/:id', (req,res) => {
    const id = req.params.id - 1;
    const gameSelecionado = games[id]
    res.send(gameSelecionado);
});

// Abre o Servidor pela porta definida na CONST definida na linha 4 acima.
app.listen(port, () => {
    console.info(`Servidor rodando em: http://localhost:${port}/`)
});