const { coolDinosaurs, shittyDinosaurs } = require('./dinosaurs.json');

function calculateAmountOfCoolDinosaurs() {
  return coolDinosaurs.length;
}

console.log(calculateAmountOfCoolDinosaurs());
