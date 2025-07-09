const fs = require('fs')
const readline = require('readline');
const path = require('path');
const chalk = require('chalk');


// let chemin = path.join(__dirname,'journal.txt');
// console.log(chemin);


// const rl = readline.createInterface({ /* creer un terminal car de base node js na pas de méthode comme prompt  */
//   input: process.stdin, /* stdin = stardart input*/
//   output: process.stdout /* stdout = standart output*/
// });

// rl.question("Votre message : ", (answer) => {
//   console.log("Vous avez écrit :", answer);
//   fs.writeFileSync(chemin,answer);
//   rl.close();
// });
// fs.appendFile(chemin,answer);



// var figlet = require("figlet");

// figlet("Hello World!!", function (err, data) {
//   if (err) {
//     console.log("Something went wrong...");
//     console.dir(err);
//     return;
//   }
//   console.log(data);
// });


const http = require('http');
const server = http.createServer((req,res)=>{
  res.writeHead(200,{'content-Type': 'text/plain'});
  res.end('cpt');
    if(req.url == "/afec"){
      console.log('vous ete sur le serveur afec');
    } else {
      console.log('autre site');
    };
  
console.log(req.url + req.method);
})
server.listen(3001,()=>{
console.log('ok 3001');

})





