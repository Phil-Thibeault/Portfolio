/**
 * Ce script sert à gérer tout ce qui a rapport avec les animation
 * contrôlés par le défilement dans la page
 *
 * @author Philippe Thibeault
 * @version 2019-03-26
 */
$(document).ready(function() {
  //Aller chercher les /l/ments de la ligne de temps (éducation)
  var aTimelineItems = document.getElementsByClassName("timeline-item");

  //Tous les cercles affichés dans les compétences
  var first = document.getElementsByClassName("firstCircle");
  var second = document.getElementsByClassName("secondCircle");
  var third = document.getElementsByClassName("thirdCircle");
  var fourth = document.getElementsByClassName("fourthCircle");
  var fifth = document.getElementsByClassName("fifthCircle");
  var sixth = document.getElementsByClassName("sixthCircle");
  var seventh = document.getElementsByClassName("seventhCircle");
  var eigth = document.getElementsByClassName("eigthCircle");
  var ninth = document.getElementsByClassName("ninthCircle");
  var tenth = document.getElementsByClassName("tenthCircle");

  //Le texte affiché dans les compétences
  var aTextCircles = document.getElementsByClassName("circleText");

  //Faire un "fade in" sur la page
  $("body").animate(
    {
      color: "rgba(255, 255, 255, 1)"
    },
    "slow"
  );

  //Losqu'il y a un défilement
  $(window).scroll(function() {
    //Largeur de la page
    var w = Math.max(
      document.documentElement.clientWidth,
      window.innerWidth || 0
    );
    //Positions horizontales des éléments à atteindre
    var horPos2 = Math.floor($("#second").offset().left);
    var horPos4 = Math.floor($("#fourth").offset().left);

    //Positions verticales des éléments à atteindre
    var vertPos2 = Math.floor($("#second").offset().top);
    var vertPos4 = Math.floor($("#fourth").offset().top);

    //Distance défilée horizontalement et verticalement
    var horWindowPos = $(window).scrollLeft();
    var vertWindowPos = $(window).scrollTop();

    //Si la page est en grand écran (scroll horizontal)
    if (w >= 1024) {
      //Si on atteint la ligne de temps
      if (horWindowPos >= horPos2) {
        if ($(".line").css("opacity") == 0) {
          //Faire apparaitre la ligne de temps graduellement et chaque élément un à la suite de l'autre
          $(".line").addClass("active");
          setTimeout(function() {
            fadeIn(aTimelineItems[0]);
          }, 100);
          setTimeout(function() {
            fadeIn(aTimelineItems[1]);
          }, 1500);
          setTimeout(function() {
            fadeIn(aTimelineItems[2]);
          }, 2400);
        }
      }
      //Si on atteint les compétences
      if (horWindowPos >= horPos4) {
        //Faire apparaitre les cercles en ordre, des premiers aux dixièmes
        FadeInCircles(1);
        setTimeout(function() {
          FadeInCircles(2);
        }, 100);
        setTimeout(function() {
          FadeInCircles(3);
        }, 200);
        setTimeout(function() {
          FadeInCircles(4);
        }, 300);
        setTimeout(function() {
          FadeInCircles(5);
        }, 400);
        setTimeout(function() {
          FadeInCircles(6);
        }, 500);
        setTimeout(function() {
          FadeInCircles(7);
        }, 600);
        setTimeout(function() {
          FadeInCircles(8);
        }, 700);
        setTimeout(function() {
          FadeInCircles(9);
        }, 800);
        setTimeout(function() {
          FadeInCircles(10);
        }, 900);
      }
      //Si la page est en petit écran (scroll vertical)
    } else if (w < 1024) {
      //Si on atteint la ligne de temps
      if (vertWindowPos >= vertPos2 - vertPos2 / 2) {
        if ($(".line").css("opacity") == 0) {
          //Faire apparaitre la ligne de temps graduellement et chaque élément un à la suite de l'autre
          $(".line").addClass("active");
          setTimeout(function() {
            fadeIn(aTimelineItems[0]);
          }, 100);
          setTimeout(function() {
            fadeIn(aTimelineItems[1]);
          }, 1500);
          setTimeout(function() {
            fadeIn(aTimelineItems[2]);
          }, 2400);
        }
      }
      //Si on atteint les compétences
      if (vertWindowPos >= vertPos4) {
        //Faire apparaitre les cercles en ordre, des premiers aux dixièmes
        FadeInCircles(1);
        setTimeout(function() {
          FadeInCircles(2);
        }, 100);
        setTimeout(function() {
          FadeInCircles(3);
        }, 200);
        setTimeout(function() {
          FadeInCircles(4);
        }, 300);
        setTimeout(function() {
          FadeInCircles(5);
        }, 400);
        setTimeout(function() {
          FadeInCircles(6);
        }, 500);
        setTimeout(function() {
          FadeInCircles(7);
        }, 600);
        setTimeout(function() {
          FadeInCircles(8);
        }, 700);
        setTimeout(function() {
          FadeInCircles(9);
        }, 800);
        setTimeout(function() {
          FadeInCircles(10);
        }, 900);
      }
    }
  });

  //Fonction qui fait apparaitre graduellement les éléments de la ligne de temps
  function fadeIn(item) {
    $(item).animate({ opacity: 1 }, "fast");
  }

  //Fonction qui fait apparaitre les cercles selon le array dans lequel ils se trouvent
  function FadeInCircles(number) {
    switch (number) {
      case 1:
        for (var i = 0; i < first.length; i++) {
          $(first[i]).addClass("fadeInCircle");
        }
        break;
      case 2:
        for (var i = 0; i < second.length; i++) {
          $(second[i]).addClass("fadeInCircle");
        }
        break;
      case 3:
        for (var i = 0; i < third.length; i++) {
          $(third[i]).addClass("fadeInCircle");
        }
        break;
      case 4:
        for (var i = 0; i < fourth.length; i++) {
          $(fourth[i]).addClass("fadeInCircle");
        }
        break;
      case 5:
        for (var i = 0; i < fifth.length; i++) {
          $(fifth[i]).addClass("fadeInCircle");
        }
        break;
      case 6:
        for (var i = 0; i < sixth.length; i++) {
          $(sixth[i]).addClass("fadeInCircle");
        }
        break;
      case 7:
        for (var i = 0; i < seventh.length; i++) {
          $(seventh[i]).addClass("fadeInCircle");
        }
        break;
      case 8:
        for (var i = 0; i < eigth.length; i++) {
          $(eigth[i]).addClass("fadeInCircle");
        }
        break;
      case 9:
        for (var i = 0; i < ninth.length; i++) {
          $(ninth[i]).addClass("fadeInCircle");
        }
        break;
      case 10:
        for (var i = 0; i < tenth.length; i++) {
          $(tenth[i]).addClass("fadeInCircle");
        }
        //Lorsqu'on affiche les derniers cercles, afficher le texte
        setTimeout(function() {
          fadeInArray(aTextCircles);
        }, 100);
        break;
    }
  }

  //Fonction qui fait afficher les titres des compétences
  function fadeInArray(aText) {
    for (var i = 0; i < aText.length; i++) {
      $(aText[i]).addClass("fadeInText");
    }
  }
});
