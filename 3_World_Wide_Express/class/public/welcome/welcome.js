console.log('arhhahrhrahr');


fetch('/calculatecooldinosaurs')
  .then((response) => response.json())
  .then((dinosaurs) => {
    console.log(dinosaurs);
  });
