const express = require('express');
const app = express();

const port = 3000;

app.use(express.json());
// app.use(express.urlencoded()); // via form

app.get('/', (req, res) => {
  res.send('Hello Node!');
});

/* app.post('/salvar', (req, res) => {
  let chapa1 = req.body.chapa1;
  let chapa2 = req.body.chapa2;
  res.send('Olá chapa: ${chapa1.nome} e ${chapa2.nome}');
});
*/

app.post('/salvar', (req, res) => {
  let chapa = req.body.chapa1;
  res.send('Hello Node: ' + chapa.nome);
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
