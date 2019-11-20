// This document will take care of
// all the mouse over events and shit
function maxResource(resource){
	if (resource == "Wood")
	document.getElementById("maxWood").innerHTML = maxWood;
	else if (resource == "Food")
	document.getElementById("maxFoood").innerHTML = maxFoood;
	
}

function perSecond(resource, upgrade){
	document.getElementById(resource).innerHTML = upgrade.resourcePerSecond;
	
	
}