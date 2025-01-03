document.addEventListener("DOMContentLoaded", () => {
    // Variable pour l'élément de statut
    const statusElement = document.getElementById("status");
    let isGameActive = false; // Variable pour suivre l'état du jeu

    // -----------------------
    // Exercise 6: On-Page Status Updates
    // -----------------------

    // Fonction pour afficher le message "You win!"
    function showWinMessage() {
        statusElement.textContent = "You win!";
    }

    // Fonction pour afficher le message "You lose!"
    function showLoseMessage() {
        statusElement.textContent = "You lose!";
    }

    // Événement lorsque l'utilisateur atteint la fin du labyrinthe
    document.getElementById("end").addEventListener("mouseover", () => {
        if (isGameActive) {
            showWinMessage(); // Afficher le message de victoire
            isGameActive = false; // Arrêter le jeu
        }
    });

    // Événement pour les murs du labyrinthe
    const boundaries = document.querySelectorAll(".boundary");
    boundaries.forEach(boundary => {
        boundary.addEventListener("mouseover", () => {
            showLoseMessage(); // Afficher le message de perte
            boundary.classList.add("youlose"); // Ajouter une classe pour changer la couleur
            isGameActive = false; // Arrêter le jeu
        });
    });

    // -----------------------
    // Exercise 7: Disallow Cheating
    // -----------------------

    // Événement de clic sur le carré de départ pour commencer le jeu
    document.getElementById("start").addEventListener("click", () => {
        isGameActive = true; // Commencer le jeu
        statusElement.textContent = "Move your mouse through the maze."; // Message initial
        boundaries.forEach(boundary => {
            boundary.classList.remove("youlose"); // Réinitialiser la couleur des murs
        });
    });

    // Événement de mouvement de la souris pour détecter la tricherie
    document.addEventListener("mousemove", (event) => {
        if (isGameActive && !document.getElementById("maze").contains(event.target)) {
            boundaries.forEach(boundary => {
                boundary.classList.add("youlose"); // Changer la couleur des murs
            });
            showLoseMessage(); // Afficher le message de perte
            isGameActive = false; // Arrêter le jeu
        }
    });
});
