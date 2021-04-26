document.addEventListener("DOMContentLoaded",bindButtons);

function bindButtons(){
	
	document.getElementById("projectsButton").addEventListener('click',function(event){
		console.log("Clicked for projects");
		window.location.href = "projects.html";
	});
	
	document.getElementById("galleryButton").addEventListener('click',function(event){
		console.log("Clicked for gallery");
		window.location.href = "gallery.html";
	});
	
}