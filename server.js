// Importování modulu Express
const express = require('express');

// Vytvoření instance aplikace Express
const app = express();

// Nastavení portu, na kterém bude server poslouchat
const port = 8080;

// Middleware pro poskytování statických souborů ze složky 'public'
app.use(express.static('public'));

// Nastavení cesty pro hlavní stránku (index.html)
app.get('/', (req, res) => {
    // Odeslání souboru index.html, který se nachází v aktuální složce (__dirname)
    res.sendFile(__dirname + '/index.html');
});

// Spuštění serveru na definovaném portu
app.listen(port, () => {
    console.log(`Server běží na http://localhost:${port}`);
});
