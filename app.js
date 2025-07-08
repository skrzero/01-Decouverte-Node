const fs = require('fs')
const readline = require('readline');
const path = require('path');
const chalk = require('chalk');
console.log(chalk.blue('hello word!'));

let chemin = path.join(__dirname,'journal.txt');
console.log(chemin);


const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.question("Votre message : ", (answer) => {
  console.log("Vous avez écrit :", answer);
  fs.writeFileSync(chemin,answer);
  rl.close();
});
fs.appendFile(chemin,answer);



var figlet = require("figlet");

figlet("Hello World!!", function (err, data) {
  if (err) {
    console.log("Something went wrong...");
    console.dir(err);
    return;
  }
  console.log(data);
});

