// Get the modal
var modal = document.getElementById("contactPopup");

// Get the button that opens the modal
var btn = document.getElementById("contact-button");

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

// When the user clicks on the button, open the modal 
btn.onclick = function() {
  modal.style.display = "flex";
}

// When the user clicks on <span> (x), close the modal
span.onclick = function() {
  modal.style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}





//EMAIL STUFF

function contactClicked() {

	







}



function validateEmail(emailAddress) {

  let regularExpression = /[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+(?:[A-Z]{2}|com|org|net|gov|mil|biz|info|mobi|name|aero|jobs|museum|edu)\b/;

  if (regularExpression.test(emailAddress) == true) {
    return true;
  } else {
    return false;
  }

}


function validateText(text) {
  if (text.length > 3 && text.length < 100) {
    return true;
  } else {
    return false;
  }
}

function validateBody(body) {

	if (body.length > 2 && body.length < 15000) {
		return true;
	} else {
		return false;
	}
}














