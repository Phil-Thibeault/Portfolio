(function(){
	var leBouton,
		leNav,
		innerNav,
		menuItems,
		navPosition,
		opacity,
		descend;

	window.addEventListener("load", function(){
		leBouton = document.getElementById("nav_mobile");
		leNav = document.getElementById("leNav");
		innerNav = document.getElementById("innerNav");
		menuItems = document.getElementsByClassName("menuItem");
		descend = true;
		opacity = 0.5;

		leBouton.innerHTML = "&#9662;";
		navPosition = -77;

		leBouton.addEventListener("mousedown", changerNav, false);
		menuItems[0].addEventListener("mousedown", changerNav, false);
		menuItems[1].addEventListener("mousedown", changerNav, false);
		menuItems[2].addEventListener("mousedown", changerNav, false);
		menuItems[3].addEventListener("mousedown", changerNav, false);
	}, false);

	function changerNav(){
		console.log(navPosition + " 1");
		if(descend == true){
			descend = false;
			innerNav.style.justifyContent = "space-around";
			leBouton.innerHTML = "&#9650;";
			window.requestAnimationFrame(navDescend);
		}
		else if(descend == false){
			descend = true;
			innerNav.style.justifyContent = "space-around";
			leBouton.innerHTML = "&#9662;";
			window.requestAnimationFrame(navMonte);
		}
	}

	function navDescend(){
		if(navPosition < 10){
			navPosition++;
			if(opacity < 1){
				console.log("opacity- " + opacity);
				opacity += 0.1;
			}
			leNav.style.transform = "translateY(" + navPosition + "vh)";
			innerNav.style.opacity = opacity;
			window.requestAnimationFrame(navDescend);
		}
	}

	function navMonte(){
		if(navPosition > -77){
			navPosition--;
			if(opacity >= 0.5){
				console.log("opacity+ " + opacity);
				opacity -= 0.1;
			}
			leNav.style.transform = "translateY(" + navPosition + "vh)";
			innerNav.style.opacity = opacity;
			window.requestAnimationFrame(navMonte);
		}
	}
})();

function initMap() {
  var magasin = {lat: 45.367118, lng: -73.731849};
  var map = new google.maps.Map(document.getElementById('map'), {
      zoom: 18,
      center: magasin
    });
  var marker = new google.maps.Marker({
    position: magasin,
    map: map
  });
}