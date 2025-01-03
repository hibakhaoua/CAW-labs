// 1. Conversion en notation ES2015

// Remplacement de `var` et des fonctions fléchées
const arr = [3, 5, 8];
const plus_one = arr.map(n => n + 1);
console.log("Tableau +1:", plus_one);  // Affiche: [4, 6, 9]

// Fonction `double` en ES2015
const double = (arr) => arr.map(val => val * 2);
console.log("Double des valeurs:", double(arr));  // Affiche: [6, 10, 16]

// Déstructuration d'objet
const obj = {
  numbers: {
    a: 1,
    b: 2
  }
};
const { a, b } = obj.numbers;
console.log("Valeurs déstructurées:", "a =", a, ", b =", b);  // Affiche: a = 1, b = 2

// Fonction `add` en notation ES2015
const add = (a, b) => {
  a = a === 0 ? 0 : a || 10;
  b = b === 0 ? 0 : b || 10;
  return a + b;
};

console.log("Addition:", add(5, 0));  // Exemple d'affichage: 5
console.log("Addition:", add(undefined, 3));  // Exemple d'affichage: 13

//exécution : node exo2.js