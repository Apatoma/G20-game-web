const express = require('express');
const app = express();
const path = require('path');
const bodyParser = require('body-parser');

app.set('view engine', 'ejs');
app.use(express.static(path.join(__dirname, 'public')));
app.use(bodyParser.urlencoded({ extended: false }));

// Rutas
const gameRoutes = require('./controllers/gameController');
app.use('/', gameRoutes);

app.listen(3000, () => {
    console.log('G20 Simulator running on http://localhost:3000');
});
