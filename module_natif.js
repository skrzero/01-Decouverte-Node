let chemin = path.join(__dirname,'journal.txt'); /* creer une variable contenant le chemin de jounal.txt*/
console.log(chemin);




fs.writeFileSync(chemin_du_fichier,data);/* remplace la donnes du fichier*/
fs.appendFile(chemin,answer); /* ajoute de la donnée au fichier */