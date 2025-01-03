// 1. Fonction setOne pour enlever les valeurs dupliquées
const setOne = (arr) => [...new Set(arr)];
console.log("Sans doublons:", setOne([4, 5, 5, 2, 2, 4, 3, 1, 5, 2]));  // Affiche: [4, 5, 2, 3, 1]

// 2. Fonction getRidOf pour enlever des valeurs spécifiques
const getRidOf = (tab, ...vals) => tab.filter(item => !vals.includes(item));
console.log("Tableau après suppression:", getRidOf(['a', 'b', 'c', 'd', 'e', 'f', 'g'], 'b', 'e', 'x'));  
// Affiche: [ "a", "c", "d", "f", "g" ]


//exécution : node exo3.js