// Importarea modulului Express.js
const express = require('express');

// Crearea unei instanțe a aplicației Express
const app = express();

// Adaugă middleware pentru a servi fișierele statice (cum ar fi fișierele CSS)
app.use(express.static(__dirname));

//----- Aici se deschid in browser-> site-urile HTML-----:

app.get('/', (req, res) => {
  // Trimiterea fișierului dashboard.html ca răspuns
  res.sendFile(__dirname + '/dashboard.html');
});

//1. Definirea rutei pentru pagina de start
app.get('/test', (req, res) => {
  // Trimiterea fișierului test.html ca răspuns
  res.sendFile(__dirname + '/test.html');
});

app.get('/exercitiul1', (req, res) => {
  // Trimiterea fișierului exercitiul1.html ca răspuns
  res.sendFile(__dirname + '/exercitiul1.html');
});

//------------------------------------------------

// Definirea portului pe care serverul va asculta
const port = 3001;

// Pornirea serverului pe portul specificat
app.listen(port, () => {
  console.log(`Serverul rulează pe portul ${port}`);
});
