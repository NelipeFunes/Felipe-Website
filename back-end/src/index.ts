// ./index.ts

import express from 'express';
import UserRoute from './routes/User.route';

const app = express();

app.use(express.json());

const PORT = 3001;

// A utilização do underline antes de um parâmetro é uma boa prática quando não estamos fazendo o uso do mesmo.
app.get('/', (_req, res) => {
  res.status(200).send('Express + TypeScript');
});

app.use('/users', UserRoute)

app.listen(PORT, () => {
  console.log(`Server is running at http://localhost:${PORT}`);
});