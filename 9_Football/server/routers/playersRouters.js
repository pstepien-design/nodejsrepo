import { Router } from 'express';
import db from '../database/createConnection.js';
const router = Router();

// const router = express.Router();
/* const players = [
  { id: 1, name: "Messi"},
  { id: 2, name: "Ronaldo"},
  { id: 3, name: "Ronaldhinho"},
]; */

router.get('/api/players', async (req, res) => {
  const players = await db.all('SELECT * FROM players;');
  console.log(players);
  res.send({ data: players });
});

router.post('/api/players', async (req, res) => {
  const {name} = req.body
  const {changes} = ("INSERT INTO PLAYERS (name) VALUES (?)", [name]);
  res.send({ rowsaffected: changes });
});

export default router;
