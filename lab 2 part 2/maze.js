window.onload = function() {
    let boundaries = document.querySelectorAll(".boundary");
    let start = document.getElementById("start");
    let end = document.getElementById("end");

    // Exercice 1 et 2 : Tourner les parois en rouge quand la souris les survole
    boundaries.forEach(function(boundary) {
        boundary.onmouseover = function() {
            boundaries.forEach(function(b) {
                b.style.backgroundColor = "red";
            });
        };
    });

    // Exercice 4 : Réinitialiser le labyrinthe au clic sur Start
    start.onclick = function() {
        boundaries.forEach(function(b) {
            b.style.backgroundColor = "#eeeeee";  // Couleur initiale
        });
    };

    // Exercice 3 : Gagner le jeu avec une alerte "You win!"
    end.onmouseover = function() {
        alert("You win!");
    };
};
