// Récupération de l'élément textarea par son ID
let keylogger = document.getElementById("keylogger");

// Ajout d'un écouteur d'événement pour capturer les frappes de clavier
document.addEventListener("keydown", function(event) {
  // Vérification si la touche enfoncée est une lettre de l'alphabet (a-z)
  if (event.key.match(/[a-z]/i)) {
    // Vérification si le focus est dans le textarea
    if (document.activeElement === keylogger) {
      // Ajout de la lettre deux fois dans le textarea
      keylogger.value += event.key + event.key;
    } else {
      // Ajout de la lettre dans le textarea
      keylogger.value += event.key;
    }
  }
});
function showLetters() {
    let keylogger = document.getElementById("keylogger");
    let letters = keylogger.value;
    
    // Affichage dans une alerte
    alert("Lettres ajoutées : " + letters);
    
    // Affichage dans la console de développement
    console.log("Lettres ajoutées :", letters);
}
  