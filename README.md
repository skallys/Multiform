# Multiform

Créez des maillots génératifs avec P5.js et Three.js. Projet conçu pour le LAB GR+ID à l'Eracom, semestre de printemps 2022.

- [Pré-requis](#pré-requis)
- [Installation](#installation)
- [Utilisez votre propre sketch](#utilisation)
- [Controls](#controls)

## Pré-requis

- [VSCode](https://code.visualstudio.com)
- [Node.js](https://nodejs.org/en/)

## Installation

1. Faites un fork de ce répo et clonez le sur votre machine

2. Ouvrez le dossier téléchargé dans VSCode et ouvrez le terminal

3. Lancez le programme programme avec la commande suivante:

```bash
npm run dev
```

4. Ouvrez votre navigateur à sur [localhost:3000](http://localhost:3000)

## Utilisation

Les sketchs P5.js se trouvent dans le dossier **components/sketches/**. Pour créer un nouveau un sketch, dupliquez un de ceux déjà créés. Le plus simple est **rectangle.js**.

Pour que le système enregistre le fait que vous avez créé un nouveau sketch, il faudra ajouter quelques petites choses.

1. Il faudra donner un autre nom à votre nouveau fichier (évitez les espaces).

2. Il faudra donner une un nouveau nom à la variable qui contient toutes les informations du sketch.

```javascript
import { sketches, sketchWidth } from "../sketches";

const mon_nouveau_sketch = {
    ...
}
```

3. Il faudra donner une nouvelle valeur à la propriété "name" de l'objet. C'est ce nom là qui sera affiché dans le l'élément option nous permettant de passer d'un sketch à un autre.

```javascript
import { sketches, sketchWidth } from "../sketches";

const mon_nouveau_sketch = {
  name: "Mon Nouveau Sketch",
  ...
};
```

4. Le sketch lui-même se trouve dans la propriété sketch de l'objet. Le paramètre de la fonction est le "namespace" de P5. Cela implique que chaque fonction propre à P5.js devra être précédée de ce mot là. Dans mon code, ce mot est toujours "sketch". Dans ce cas, pour utiliser la fonction ellipse, vous devrez écrire **sketch.ellipse()**. Vous pouvez vous référer à la [documentation P5.js](https://p5js.org/reference/).

5. Ajoutez votre sketch à la liste des sketches en référant la variable de votre objet.

```javascript
sketches.push(mon_nouveau_sketch);
```

6. Ajoutez votre sketch au fichier **main.js**

```javascript
import "./components/sketches/mon_nouveau_sketch";
```

## Controls

Vous pouvez ajouter des inputs qui s'affichent au bon endroit en utilisant la fonction

```javascript
createControl(element, label, attributes);
```

**element**: Le premier paramètre est un élément qui vous avez créé au préalable avec la fonction createElement.

**label**: true ou false. Souhaitez-vous afficher les valeurs de l'input?

**attributes**: Objet contenant les attributs de l'élément.
