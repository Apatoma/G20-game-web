const express = require('express');
const router = express.Router();

// Página principal
router.get('/', (req, res) => {
    res.render('index');
});

// Inicio del juego
router.get('/game', (req, res) => {
    const countries = ['USA', 'China', 'Germany', 'India'];  // Lista de países del G20 (expandir según sea necesario)
    res.render('game', { countries });
});

// Elección de país y preparación del juego
router.post('/select-country', (req, res) => {
    const country = req.body.country;
    res.render('game', { selectedCountry: country });
});

module.exports = router;
