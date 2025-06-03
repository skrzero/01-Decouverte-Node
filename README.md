# TP Node.js – Message de Bienvenue en ASCII Art 🎨

Dans ce mini-TP, tu vas créer un petit programme en Node.js qui affiche un message de bienvenue stylisé grâce à l’ASCII Art. Ce sera l'occasion de découvrir comment utiliser `npm` et importer des packages tiers.

## 🧑‍💻 Objectifs

- Initialiser un projet Node.js
- Installer et utiliser un module externe (`figlet`)
- Créer un script qui affiche un message en ASCII Art
- (Bonus) Ajouter de la couleur avec le module `chalk`
- (Bonus 2) Transformer le tout en fonction réutilisable

---

## 📦 Étapes

### 1. Initialiser ton projet Node.js

Dans ton terminal, place-toi dans ton dossier de travail et initialise un nouveau projet Node.js :

```bash
npm init -y
```

### 2. Installer le module `figlet`

Ce module permet de transformer du texte en art ASCII :

```bash
npm install figlet
```

### 3. Créer le fichier `bienvenue.js`

Dans ce fichier, tu vas :

- Importer le module `figlet`
- Créer une variable contenant ton message de bienvenue
- Générer et afficher l’ASCII Art dans le terminal

💡 Astuce : pense à consulter la [doc de figlet sur npm](https://www.npmjs.com/package/figlet)

### 4. Lancer ton programme

Tu peux maintenant lancer ton script avec :

```bash
node bienvenue.js
```

Tu devrais voir ton message en ASCII s’afficher 🎉

---

## ✨ Bonus

### 🎨 Ajouter des couleurs

Pour pimper ton message, installe le module `chalk` :

```bash
npm install chalk
```

Puis utilise-le pour afficher ton message coloré :

```js
const chalk = require('chalk');
console.log(chalk.cyan(data));
```

### 🔁 Créer une fonction réutilisable

Transforme ton code en une fonction qui prend un message en paramètre et l’affiche en ASCII Art :

```js
function afficherAscii(message) {
  figlet(message, (err, data) => {
    if (err) return console.error(err);
    console.log(data);
  });
}
```

Tu peux ensuite appeler :

```js
afficherAscii("Hello World");
```

---

## 🚀 Challenge final

Laisse parler ta créativité :
- Change le message
- Ajoute de la couleur

---

## 🧪 Exemple de rendu

```
  ____  _                 _                     
 |  _ \| |               | |                    
 | |_) | | ___   ___   __| | ___                
 |  _ <| |/ _ \ / _ \ / _` |/ _ \               
 | |_) | | (_) | (_) | (_| |  __/               
 |____/|_|\___/ \___/ \__,_|\___|               
```

---

Happy Coding! 😎
