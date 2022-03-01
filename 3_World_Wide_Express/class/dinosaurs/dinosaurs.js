const {coolDinosaurs, shittyDinosaurs}= require('./dinosaurs.json')

function amountOfCoolDinosaurs(){
  return coolDinosaurs.length;
}

console.log(amountOfCoolDinosaurs())