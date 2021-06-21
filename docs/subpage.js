document.addEventListener("DOMContentLoaded",bindButtons);

function bindButtons(){
	document.getElementById("homeButton").addEventListener('click',function(event){
		console.log("Clicked for home");
		window.location.href = "index.html";
	});	
}

function bindButtons(){
	document.getElementById("backButton").addEventListener('click',function(event){
		console.log("Clicked for back");
		window.location.href = "projects.html";
	});	
}

var coll = document.getElementsByClassName("collapsible");
var i;

for (i = 0; i < coll.length; i++) {
  coll[i].addEventListener("click", function() {
    this.classList.toggle("active");
    var content = this.nextElementSibling;
    if (content.style.maxHeight) {
      content.style.maxHeight = null;
    } else {
      content.style.maxHeight = content.scrollHeight + "px";
    }
  });
}