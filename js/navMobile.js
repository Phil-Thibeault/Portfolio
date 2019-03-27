$(document).ready(function() {
  const bouton = document.getElementById("burger");
  const nav = document.querySelector(".petitNav");
  let isClicked = false;

  let liensNav = document.getElementsByClassName("fermeNav");

  $(bouton).attr("data-before", "");

  $(bouton).on("click", function() {
    if (!isClicked) {
      $(bouton).css({ transform: "rotate(180deg)" });
      $(bouton).attr("data-before", "");
      $(nav).css({ left: "0" });
    } else {
      $(bouton).css({ transform: "rotate(0deg)" });
      $(bouton).attr("data-before", "");
      $(nav).css({ left: "-100%" });
    }
    isClicked = !isClicked;

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
