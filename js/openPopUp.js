/**
 * Ce script sert à gérer tout ce qui a rapport avec l'ouverture
 * et la fermeture d'un popUp pour afficher un projet déterminé
 *
 * @author Philippe Thibeault
 * @version 2019-03-26
 */
$(document).ready(function() {
  //Liens qui ouvrent le popup
  let links = document.getElementsByClassName("openProject");
  //parent du popup
  const section = document.querySelector(".section6");

  //Déterminer si la fenêtre est ouvert et si elle peut être fermée
  let fenetreOuverte = null;
  let peutFermer = false;

  for (let i = 0; i < links.length; i++) {
    //Si un lien est cliqué
    $(links[i]).click(function(e) {
      //Assurer que le popUp est vide et empêcher le retour au début de la page
      let src = null;
      e.preventDefault();

      //Créer le popUp
      var div = document.createElement("div");
      div.classList.add("popUp");

      //Aller chercher le bon contenu pour le popUp
      switch (i) {
        case 0:
        default:
          src = "./media/projets/Thibeault_TP5/html/index.html";
          break;
      }

      //Créer un iFrame dans le popUp pour naviguer le projet représenté
      var frame = document.createElement("iframe");
      frame.src = src;
      frame.classList.add("frame");

      //Ajouté le tout au parent
      div.appendChild(frame);
      section.appendChild(div);
      fenetreOuverte = div;
    });
  }

  //Si l'utilisateur clique sur le document
  $(document).click(function(e) {
    //Si le popUp est ouvert et non-fermable, le rendre fermable
    if (fenetreOuverte !== null && peutFermer == false) {
      peutFermer = true;
      //Si le popUp est fermable, le fermer et indiquer qu'il est fermé
    } else if (peutFermer == true) {
      if (e.target.classList[0] != "popUp") {
        section.removeChild(fenetreOuverte);
        fenetreOuverte = null;
        peutFermer = false;
      }
    }
  });
});
