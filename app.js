
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


window.onload = function() {
    var screenWidth = window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth;
   
    if (screenWidth < 1000) {
       window.location.href = "tel.html";
    }
   };