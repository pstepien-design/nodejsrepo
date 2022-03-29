import express from 'express';
const app = express();

/* import cors from 'cors';
app.use(cors()); */
app.use(express.json())
import path from 'path';
app.use(express.static(path.resolve('../client/public')));


import playersRouters from './routers/playersRouters.js';
app.use(playersRouters);


app.get('/', (req, res) => {
  res.send({ message: 'Hello from the server' });
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`App is running on port ${PORT}`);
});
