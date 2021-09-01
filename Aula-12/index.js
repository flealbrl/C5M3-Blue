const express = require('express');
const app = express();

const Conn = require('./models/conn/conn');

Conn('localhost', 27017, "musicas");

const port = 3000;

const musica = require('./routers/musicas-routes');
app.use('/musicas', musica);


// OPEN SERVIDOR. <--
app.listen(port, () => {
    console.info(`Servidor rodando em http://localhost:${port}.`)
})

