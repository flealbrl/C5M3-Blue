const express = require('express');
const router = express.Router();
const Musica = require('../models/musicas')


//CREAT
router.post('/add', (req, res) => {
    res.send('Rota ADD');
});

//READ
router.get('/', (req, res) => {
    res.send('Rota READ');
});

//UPDATE
router.put('/update', (req, res) => {
    res.send('Rota UPDADE');
});

//DELETE
router.delete('/delete', (req, res) => {
    res.send('Rota DELETE');
});

module.exports = router;