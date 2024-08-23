const input = require('sync-input');

    let name = (input());
    let surname = (input());
    let message = (input());

  console.log("Enter number of repeats:");
  let number = (input());
  for(let i = 0; i < number; i++){
    console.log(`This is ${name} ${surname} and ${message}`);
  }
