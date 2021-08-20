const express = require('express');
const app = express();

const port = 3000;    // Setando a porta PADRÃO

/// LISTAS ///
const modeloCar = [
    'Onix',
    ' Siena',
    ' Hilux',
    ' L200'
];

const tipoCar = [
    'Hatch',
    ' Sedan',
    ' Caminhonete'
];

const combustivelCar = [
    'Etanol',
    ' Gasolina',
    ' Diesel',
    ' Flex'
];

const marcaCar = [
    'Chevrolet',
    ' Fiat',
    ' Toyota',
    ' Mitsubishi'
];

const anoCar = [
    '2011',
    ' 2018',
    ' 2021'
];
/// LISTA /// 

// GET que ira exibir a HOME.
app.get('/', (req, res) => {
    res.send(`<h1>Bem-Vindos ao site lista de Filmes T3C5-M3</h1>`);
});

///////// MODELO DE CARROS /////////

// GET que ira exibir os MODELOS DE CARROS.
app.get('/modelocarro', (req, res) => {
    res.send(`<h2>Os modelos dos carros dísponiveis são: ${modeloCar}.</h2>`)
});

app.get('/modelocarro/:id', (req, res) => {
    const id = req.params.id -1;
    const modeloSelecionado = modeloCar[id];
    if(!modeloSelecionado) {
        res.send(`<h2>Atenção, modelo não encontrado</h2>`);
    }
    res.send(`<h2>Modelo selecionado: ${modeloSelecionado}.</h2>`)
})

///////// TIPO CARROS /////////

//GET que ira exibir os TIPOS DE CARROS.
app.get('/tipocarro', (req, res) => {
    res.send(`<h2>Os tipos de carros que temos dísponiveis são: ${tipoCar}.</h2>`)
})

app.get('/tipocarro/:id', (req, res) => {
    const id = req.params.id -1;
    const tipoSelecionado = tipoCar[id];
    if(!tipoSelecionado) {
        res.send(`<h2>Atenção, tipo de carro não encontrado</h2>`);
    }
    res.send(`<h2>Tipo selecionado: ${tipoSelecionado}.</h2>`)
})

///////// TIPO COMBUSIVEL /////////

//GET que ira mostar o TIPO DE COMBUSTIVEl.
app.get('/tipocombustivel', (req, res) => {
    res.send(`<h2>Os tipos de de combustiveis são: ${combustivelCar}.</h2>`)
})

app.get('/tipocombustivel/:id', (req, res) => {
    const id = req.params.id -1;
    const tipoCombustivelSelecionado = combustivelCar[id];
    if(!tipoCombustivelSelecionado) {
        res.send(`<h2>Atenção, tipo de combustível não encontrado</h2>`);
    }
    res.send(`<h2>Tipo de combustível selecionado: ${tipoCombustivelSelecionado}.</h2>`)
})

///////// ANO CARRO /////////

//GET que ira exibier o ANO DOS CARROS.
app.get('/anocarro', (req, res) => {
    res.send(`<h2>Os anos de carros dísponives são: ${anoCar}.</h2>`)
})

app.get('/anocarro/:id', (req, res) => {
    const id = req.params.id -1;
    const anoSelecionado = anoCar[id];
    if(!anoSelecionado) {
        res.send(`<h2>Atenção, ano do carro não encontrado</h2>`);
    }
    res.send(`<h2>Ano do carro selecionado: ${anoSelecionado}.</h2>`)
})

///////// MARCA CARROS /////////

//GET que ira mostar a MARCA DOS CARROS.
app.get('/marcacarros', (req, res) => {
    res.send(`<h2>As marcas dísponiveis de carros são: ${marcaCar}.</h2>`)
})

app.get('/marcacarros/:id', (req, res) => {
    const id = req.params.id -1;
    const marcaSelecionado = marcaCar[id];
    if(!marcaSelecionado) {
        res.send(`<h2>Atenção, marca do carro não encontrado</h2>`);
    }
    res.send(`<h2>Marca do carro selecionado: ${marcaSelecionado}.</h2>`)
})

//// SERVIDOR RODANDO
app.listen(port, () => {
    console.info(`Servidor rodando em: http://localhost:${port}/`)
});