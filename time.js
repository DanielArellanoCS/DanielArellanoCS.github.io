function openTab(evt, cityName) {
  // Declare all variables
  var i, tabcontent, tablinks, tabcontentStart;
	
	
	
  // Get all elements with class="tabcontent" and hide them
  tabcontent = document.getElementsByClassName("tabcontent");
  for (i = 0; i < tabcontent.length; i++) {
    tabcontent[i].style.display = "none";
  }
	tabcontentStart = document.getElementsByClassName("tabcontentStart");
  for (i = 0; i < tabcontentStart.length; i++) {
    tabcontentStart[i].style.display = "none";
  }
	
  // Get all elements with class="tablinks" and remove the class "active"
  tablinks = document.getElementsByClassName("tablinks");
  for (i = 0; i < tablinks.length; i++) {
    tablinks[i].className = tablinks[i].className.replace(" active", "");
  }
  

  // Show the current tab, and add an "active" class to the button that opened the tab
  document.getElementById(cityName).style.display = "block";
  evt.currentTarget.className += " active";
}



function demand(resource){
	if (resource == "food"){
		foodReduction = setInterval{
			
		}
		
		
	}
}


