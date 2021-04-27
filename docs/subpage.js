document.addEventListener("DOMContentLoaded",bindButtons);

function bindButtons(){
	document.getElementById("homeButton").addEventListener('click',function(event){
		console.log("Clicked for home");
		window.location.href = "index.html";
	});	
}