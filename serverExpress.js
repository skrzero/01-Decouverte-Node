const express = require ('express');

const app = express();

app.get ('/',(req,res)=>{
    res.send('bienvenue sur le serveur');
});

app.listen(3000,()=> {
    console.log('serveur lancer port 3000')
});