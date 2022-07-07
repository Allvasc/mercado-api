/* eslint-disable linebreak-style */
import express from 'express';

const app = express();
const port = 5000;

app.get('/', (req, res) => {
  res.send('Hello world!! mudou');
});

app.listen(port, () => {
  console.log(`O servidor está rodando na porta ${port}`);
});
