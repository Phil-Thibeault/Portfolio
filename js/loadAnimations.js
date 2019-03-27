$(document).ready(function() {
  var aTextes = document.getElementsByClassName("fadeIn");
  var aTimelineItems = document.getElementsByClassName("timeline-item");
  var aEmplois = document.getElementsByClassName("conteneurEmploi");
  var aCercles = document.getElementsByClassName("cercles");

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

  var aTextCircles = document.getElementsByClassName("circleText");

  for (var i = 0; i < aTextes.length; i++) {
    $(aTextes[i]).animate(
      {
        color: "rgba(255, 255, 255, 1)"
      },
      "slow"
    );
  }

  $(window).scroll(function() {
    var w = Math.max(
      document.documentElement.clientWidth,
      window.innerWidth || 0
    );
    var horPos2 = Math.floor($("#second").offset().left);
    var horPos4 = Math.floor($("#fourth").offset().left);

    var vertPos2 = Math.floor($("#second").offset().top);
    var vertPos4 = Math.floor($("#fourth").offset().top);

    var horWindowPos = $(window).scrollLeft();
    var vertWindowPos = $(window).scrollTop();

    if (w >= 1024) {
      if (horWindowPos >= horPos2) {
        if ($(".line").css("opacity") == 0) {
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
      if (horWindowPos >= horPos4) {
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
    } else if (w < 1024) {
      if (vertWindowPos >= vertPos2 - vertPos2 / 2) {
        if ($(".line").css("opacity") == 0) {
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
      if (vertWindowPos >= vertPos4) {
        console.log("YES");
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

  function fadeIn(item) {
    $(item).animate({ opacity: 1 }, "fast");
  }

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
        setTimeout(function() {
          fadeInArray(aTextCircles);
        }, 100);
        break;
    }
  }

  function fadeInArray(aText) {
    for (var i = 0; i < aText.length; i++) {
      $(aText[i]).addClass("fadeInText");
    }
  }
});
