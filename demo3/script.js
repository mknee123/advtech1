var  username = "Miranda";
// alert("Hello "+ username);
document.onclick = 
function(evt) { 
	makeOneCircle(evt);
}

function makeOneCircle(){
	evt = (evt || event)//makes all browsers understand the event
	//make a new circle
	var newc = document.createElement("div");
	document.appendChild(newc);
}