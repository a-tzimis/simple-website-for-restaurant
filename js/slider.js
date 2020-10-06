$(document).ready(function(){
	$('#right').click(function(){
		slideImageRight();	
	});
	$('#left').click(function(){
		slideImageLeft();	
	});
	
	var images=Array();
	var i, curIndex = -1;
	
	for(i = 1; i<=11; i++){
   		images.push("highlights/"+i+".jpg");
	}
	//First Run
	if(curIndex == -1){
		curIndex++;
		$('#current').attr('src', images[curIndex]);
	}
	intervalID = setInterval(slideImageRight, 4000);
	function slideImageRight(){
		if(curIndex > (images.length-1)){
			curIndex = 0;
		}
		$('#current').attr('src', images[curIndex]);
		curIndex++;
		restartTimer();
	}
	function slideImageLeft(){
		curIndex--;
		if(curIndex < 0){
			curIndex = (images.length-1);
		}
		$('#current').attr('src', images[curIndex]);
		restartTimer();
	}

	function restartTimer(){
		if(intervalID){
			clearInterval(intervalID)
		}
		intervalID = setInterval(slideImageRight, 4000);
	}	
});