
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


/* function redirigerSiPetiteFenetre() {
    if (window.innerWidth < 1000) {
        window.location.href = 'tel.html'; 
    }
}


window.onload = redirigerSiPetiteFenetre;
window.onresize = redirigerSiPetiteFenetre; */
if( /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent) ) {

   window.location.href = "tel.html";

}
