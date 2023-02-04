// ./index.ts

import express from 'express';
import Codes from 'http-status';

const app = express();

app.use(express.json());

const PORT = 3001;

// A utilização do underline antes de um parâmetro é uma boa prática quando não estamos fazendo o uso do mesmo.
app.get('/', (_req, res) => {
  res.status(Codes.OK).send('Express + TypeScript');
});

app.listen(PORT, () => {
  console.log(`Server is running at http://localhost:${PORT}`);
});