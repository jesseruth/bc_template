function evalutateGame(event) {
	if (event) {
		event.preventDefault();
		const winnerId = "map1"
		console.log(event);
		var resultViewer = document.getElementById("results");
		if (resultViewer) {
			if (winnerId === event.target.id) {
			    resultViewer.innerText = event.target.id + " winner";
			    } else {
			    
			    resultViewer.innerText = event.target.id + " no winner";
			    }
		
		}
		
		console.log(resultViewer)
	}

	console.log( "Evaluating Game!" );
}

$( document ).ready(function() {
	console.log( "ready!" );
	var areaMap = document.getElementsByClassName("area-map");

	var areaMaps = document.getElementsByClassName("area-maps");
	console.log('areaMap', areaMap);
	console.log('areaMaps', areaMaps);


	for (var i = 0; i < areaMaps.length; i++) {
		areaMaps[i].addEventListener("click", evalutateGame);
	}

	evalutateGame();
});
