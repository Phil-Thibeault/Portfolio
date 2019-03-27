/**
 * Ce script sert à gérer tout ce qui a rapport avec l'ouverture
 * et la fermeture de la navigation en format mobile
 *
 * @author Philippe Thibeault
 * @version 2019-03-26
 */
$(document).ready(function() {
  //Variables pour l'icône et le checkbox
  const bouton = document.getElementById("burger");
  const nav = document.querySelector(".petitNav");

  //Déterminé si le menu est ouvert
  let isClicked = false;

  //Différents liens de la naviation
  let liensNav = document.getElementsByClassName("fermeNav");

  //Assurer que le bon icône est affiché au départ
  $(bouton).attr("data-before", "");

  //Si l'icône est cliquée
  $(bouton).on("click", function() {
    //Si le nav n'est pas ouvert
    if (!isClicked) {
      //On fait une rotation au bouton, on change l'icône et on ouvre la navigation
      $(bouton).css({ transform: "rotate(180deg)" });
      $(bouton).attr("data-before", "");
      $(nav).css({ left: "0" });
      //Si le nav est ouvert
    } else {
      //On fait une rotation au bouton, on change l'icône et on ferme la navigation
      $(bouton).css({ transform: "rotate(0deg)" });
      $(bouton).attr("data-before", "");
      $(nav).css({ left: "-100%" });
    }
    //Changer l'état d'ouverture/fermeture du nav
    isClicked = !isClicked;

    //Losqu'un des liens est cliqué, on applique une rotation au bouton, on change son icône et on ferme le nav
    for (let i = 0; i < liensNav.length; i++) {
      $(liensNav[i]).on("click", function() {
        console.log("WORKS");
        $(bouton).css({ transform: "rotate(0deg)" });
        $(bouton).attr("data-before", "");
        $(nav).css({ left: "-100%" });
        isClicked = !isClicked;
      });
    }
  });
});
