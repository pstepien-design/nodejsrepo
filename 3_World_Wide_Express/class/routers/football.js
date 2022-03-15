const { coolDinosaurs, shittyDinosaurs } = require("./dinosaurs.json");

function calculateAmountOfCoolDinosaurs() {
    return coolDinosaurs.length;
}

module.exports = {
    calculateAmountOfCoolDinosaurs: calculateAmountOfCoolDinosaurs
}