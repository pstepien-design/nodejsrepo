const express = require('express');
const app = express();
app.use(express.json());

let beerId = 4;
const Beers = [
  { id: 1, name: 'Tuborg', price: 10 },
  { id: 2, name: 'Carslberg', price: 20 },
  { id: 3, name: 'Svaneke', price: 30 },
];

app.get('/beers', (req, res) => {
  res.send({ Beer: Beers });
});

/* app.get('/beers/:id', (req, res) => {
  let isFound = false;
    if (beer.id == req.params.id) {
      isFound = true;
      res.send(beer);
    }
  if (!isFound) {
    res.send('Beer not found');
  }
}); */
app.get('/beers/:id', (req, res) => {
  const id = Number(req.params.id);
  const foundBeer = Beers.find((beer) => beer.id === id);
  foundBeer ? res.send(foundBeer) : res.status(204).send({});
});

app.post('/beers', (req, res) => {
  Beers.push({ id: beerId, name: req.body.name, price: req.body.price });
  beerId++;
  res.send('Beer ' + req.body.name + ' was successfully added');
});

app.delete('/beers/:id', (req, res) => {
  /*  let isFound = false;
  for (let beer of Beers) {
    if (beer.id == req.params.id) {
      const index = Beers.indexOf(beer);
      Beers.splice(index, 1);
      isFound = true;
      res.send('Beer ' + beer.name + ' was deleted');
    }
  }
  if (!isFound) {
    res.send('Beer not found');
  } */
  const id = Number(req.params.id);
  const foundBeerIndex = Beers.find((beer) => beer.id === id);
  if (foundBeerIndex !== -1) {
    Beers.splice(foundBeerIndex, 1);
    res.send({});
  } else {
    res.status(404).send({});
  }
});

app.put('/beers/:id', (req, res) => {
  let isFound = false;
  for (let beer of Beers) {
    if (beer.id == req.params.id) {
      const index = Beers.indexOf(beer);
      Beers.splice(index, 1, {
        id: beer.id,
        name: req.body.name,
        price: req.body.price,
      });
      isFound = true;
      res.send('Beer ' + beer.name + ' was edited');
    }
  }
  if (!isFound) {
    res.send('Beer not found');
  }
});
app.patch('/beers/:id', (req, res) => {
  let isFound = false;
  for (let beer of Beers) {
    if (beer.id == req.params.id) {
      const index = Beers.indexOf(beer);
      if (req.body.name != beer.name) {
        Beers.splice(index, 1, {
          id: beer.id,
          name: req.body.name,
          price: beer.price,
        });
      } else if (req.body.price != beer.price) {
        Beers.splice(index, 1, {
          id: beer.id,
          name: beer.name,
          price: req.body.price,
        });
      } else if (req.body.price != beer.price && req.body.name != beer.name) {
        Beers.splice(index, 1, {
          id: beer.id,
          name: req.body.name,
          price: req.body.price,
        });
      }
      isFound = true;
      res.send('Beer ' + beer.name + ' was edited');
    }
  }
  if (!isFound) {
    res.send('Beer not found');
  }
});

app.listen(3005, () => {
  console.log('app is running');
});
