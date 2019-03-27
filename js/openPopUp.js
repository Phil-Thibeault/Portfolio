$(document).ready(function() {
  let links = document.getElementsByClassName("openProject");
  const section = document.querySelector(".section6");

  let fenetreOuverte = null;
  let peutFermer = false;

  for (let i = 0; i < links.length; i++) {
    $(links[i]).click(function(e) {
      let src = null;
      e.preventDefault();
      var div = document.createElement("div");
      div.classList.add("popUp");

      switch(i){
        case 0:
        default:
          src = "./media/projets/Thibeault_TP5/html/index.html";
          break;
      }

      var frame = document.createElement("iframe");
      frame.src = src;
      frame.classList.add("frame");
      
      div.appendChild(frame);
      section.appendChild(div);
      fenetreOuverte = div;
    });
  }

  $(document).click(function(e) {
    if(fenetreOuverte !== null && peutFermer == false){
      peutFermer = true;
    }
    else if(peutFermer == true){
      if(e.target.classList[0] != "popUp"){
        section.removeChild(fenetreOuverte);
        fenetreOuverte = null;
        peutFermer = false;
      }
    }
  });
});
