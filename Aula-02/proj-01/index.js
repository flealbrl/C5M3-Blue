const express = require("express");
const app = express();

const port = 3000; // Setando a porta PADRÃO
const filmes = [
    "Matrix", 
    "Vingadores", 
    "Velozes e Furiosos"];

// GET exibe a rota/HOME
app.get("/", (req, res) => {
    res.send("Bem-Vindos ao site lista de Filmes T3C5-M3");
});

//GET do /filmes   (Exibe os filmes cadastrados.)
app.get("/filmes", (req, res) => {
    res.send(filmes);
});

//GET do /filmes/id   (Seleciona o filme pelo ID no final do  .../id)
app.get("/filmes/:id", (req, res) => {
    const id = req.params.id - 1;
    const filmeSelecionado = filmes[id];
    res.send(filmeSelecionado);
});

// Abre o Servidor pela porta definida na const em cima e apresenta um console.info.
app.listen(port, () => {
    console.info(`Servidor rodando em: http://localhost:${port}/`);
});
