// init controller
var controller = new ScrollMagic.Controller();
// create a scene
var contactScene = new ScrollMagic.Scene({
  triggerElement: ".dark",
  triggerHook: 0.78,
  reverse: true
})
  .setClassToggle(".contactContainer", "contactContainerDark")
  .addTo(controller); // assign the scene to the controller

var menuScene = new ScrollMagic.Scene({
  triggerElement: ".dark",
  triggerHook: 0.1,
  reverse: true
})
  .on("leave", darkMenuLeave)
  .on("enter", darkMenuEnter)
  .addTo(controller);

var hamburgerScene = new ScrollMagic.Scene({
  triggerElement: ".dark",
  triggerHook: 0.1,
  reverse: true
})
  .on("leave", darkHamburgerLeave)
  .on("enter", darkHamburgerEnter)
  .addTo(controller);

var logoScene = new ScrollMagic.Scene({
  triggerElement: ".dark",
  triggerHook: 0.05,
  reverse: true
})
  .setClassToggle(".logo", "darkLogo")
  .addTo(controller);

function contactButton() {
  console.log("click");
  // document.getElementById("contactFormContainer").style.display = "flex";

  let form = document.getElementById("contactForm");

  form.style.display = "block";
  console.log(typeof form);
}

function darkMenuEnter() {
  document.getElementById("noteImg").src = "../images/music-note-white.png";
  document.getElementById("bracketImg").src = "../images/brackets-white.png";
}

function darkMenuLeave() {
  document.getElementById("noteImg").src = "../images/music-note-black.png";
  document.getElementById("bracketImg").src = "../images/brackets-black.png";
}

function darkHamburgerLeave() {

	document.getElementById("hamburgerMenu").src = "../images/hamburger-icon-black.png";

	var menuItems = document.getElementsByClassName("black-text");

	
	for (var i = 0; i < menuItems.length; i++) {

		menuItems[i].classList.remove("white-text");



	}
}

function darkHamburgerEnter() {

	document.getElementById("hamburgerMenu").src = "../images/hamburger-icon-white.png";
	
	var menuItems = document.getElementsByClassName("black-text");

	console.log(typeof menuItems);
	
	console.log(menuItems.length);

	for (var i = 0; i < menuItems.length; i++) {

		menuItems[i].classList.add("white-text");



	}
	




}

document.getElementById("menu-hamburger").onclick = function() {
  document.getElementById("dropdown-mobile").style.display = "flex";
};

document.getElementById("dropdown-mobile").onclick = function() {
  document.getElementById("dropdown-mobile").style.display = "none";
};
