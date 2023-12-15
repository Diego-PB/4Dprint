
var couleurdebase = "#0a0c0c"
var couleurhistoire = "#1d322f"

window.addEventListener('scroll', function() {
    var scrollPosition = window.pageYOffset;

    if (scrollPosition > 1200) {
        document.body.style.backgroundColor = couleurhistoire;
    } else {
        document.body.style.backgroundColor = couleurdebase; 
    }
});

// Fonction pour rediriger si la taille de la fenêtre est inférieure à 900 pixels
function redirigerSiPetiteFenetre() {
    if (window.innerWidth < 900) {
        window.location.href = 'tel.html'; // Remplacez 'page.html' par le chemin de votre page de redirection
    }
}

// Attacher la fonction au chargement de la page et au redimensionnement de la fenêtre
window.onload = redirigerSiPetiteFenetre;
window.onresize = redirigerSiPetiteFenetre;