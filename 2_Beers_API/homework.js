const express = require('express');
const app = express();
app.use(express.json());

let CURRENT_ID = 3;
const beers = [
  { id: 1, name: 'Tuborg', price: 10 },
  { id: 2, name: 'Carslberg', price: 20 },
  { id: 3, name: 'Svaneke', price: 30 },
];

app.get('/beers', (req, res) => {
  res.send({ Beer: beers });
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
  const foundBeer = beers.find((beer) => beer.id === id);
  foundBeer ? res.send(foundBeer) : res.status(204).send({});
});

app.post('/beers', (req, res) => {
  /*   beers.push({ id: ++CURRENT_ID, name: req.body.name, price: req.body.price });
  res.send('Beer ' + req.body.name + ' was successfully added'); */
  const beerToCreate = req.body;
  beerToCreate.id = ++CURRENT_ID;
  beers.push(beerToCreate);
  res.send('Beer ' + req.body.name + ' was successfully added');
});

app.delete('/beers/:id', (req, res) => {
  /*  let isFound = false;
  for (let beer of beers) {
    if (beer.id == req.params.id) {
      const index = beers.indexOf(beer);
      beers.splice(index, 1);
      isFound = true;
      res.send('Beer ' + beer.name + ' was deleted');
    }
  }
  if (!isFound) {
    res.send('Beer not found');
  } */
  const id = Number(req.params.id);
  const foundBeerIndex = beers.find((beer) => beer.id === id);
  if (foundBeerIndex !== -1) {
    beers.splice(foundBeerIndex, 1);
    res.send({});
  } else {
    res.status(404).send({});
  }
});

app.put('/beers/:id', (req, res) => {
  let isFound = false;
  for (let beer of beers) {
    if (beer.id == req.params.id) {
      const index = beers.indexOf(beer);
      beers.splice(index, 1, {
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
  /* let isFound = false;
  for (let beer of beers) {
    if (beer.id == req.params.id) {
      const index = beers.indexOf(beer);
      if (req.body.name != beer.name) {
        beers.splice(index, 1, {
          id: beer.id,
          name: req.body.name,
          price: beer.price,
        });
      } else if (req.body.price != beer.price) {
        beers.splice(index, 1, {
          id: beer.id,
          name: beer.name,
          price: req.body.price,
        });
      } else if (req.body.price != beer.price && req.body.name != beer.name) {
        beers.splice(index, 1, {
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
  } */
  const foundBeerIndex = beers.findIndex(
    (beer) => beer.id === Number(req.params.id)
  );
  if (foundBeerIndex !== -1) {
    const foundBeer = beers[foundBeerIndex];
    const beerToUpdateWith = req.body;
    const updatedBeer = { ...foundBeer, ...beerToUpdateWith, id: foundBeer.id };
    beers[foundBeerIndex] = updatedBeer;
    req.send({ data: updatedBeer });
  } else {
    res.status(404).send({});
  }
});

app.listen(3005, () => {
  console.log('app is running');
});
