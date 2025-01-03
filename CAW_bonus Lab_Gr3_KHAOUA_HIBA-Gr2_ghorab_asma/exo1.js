// 1. Échanger deux variables
let v1 = 10;
let v2 = 20;
[v1, v2] = [v2, v1];
console.log("Après échange:", "v1 =", v1, ", v2 =", v2);  // Affiche: v1 = 20, v2 = 10

// 2. Concatenation de plusieurs tableaux en un seul
const numbers = [1, 2, 3];
const letters = ["a", "b", "c"];
const foods = ["mango", "pecan pie"];
const combinedArray = [...numbers, ...letters, ...foods];
console.log("Tableau combiné:", combinedArray);  // Affiche: [1, 2, 3, "a", "b", "c", "mango", "pecan pie"]

// 3. Décomposer une chaîne en tableau de caractères
const str = "example";
const chars = [...str];
console.log("Tableau de caractères:", chars);  // Affiche: ['e', 'x', 'a', 'm', 'p', 'l', 'e']

// 4. Valeurs de `args` dans différentes situations
function fn(a, b, ...args) {
  console.log("Arguments restants:", args);
}

// Cas a)
fn(1, 2, 3, 'A', 'B', 'C');  // Affiche: Arguments restants: [3, "A", "B", "C"]

// Cas b)
fn(1, 2);  // Affiche: Arguments restants: []

// Cas c)
let x = ['a', 'b', 'c', 'd'];
fn(...x);  // Affiche: Arguments restants: ['c', 'd']
