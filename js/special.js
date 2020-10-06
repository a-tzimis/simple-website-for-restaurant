var toggle = 0;
var numofelements = 18;
var code=" ";

function getGallery(){
	for(i=1; i<=numofelements; i++){
		code += "<a href='gallery/"+i+".jpg'><img src='gallery/"+i+".jpg'></a>";
	}
}

$(window).load(function(){
	getGallery();
	$('#photos').html(code);
});

$(document).ready(function(){
	$('#special').click(function(){
		var target;
		if(window.location.href.indexOf("DE") > -1){
			window.open('specialDE.html',"Today's Special","scrollbars=1", '600', '700');
		}
		else if(window.location.href.indexOf("GR") > -1){
			window.open('specialGR.html',"Today's Special","scrollbars=1", '600', '700');
		}
		else{
			window.open('special.html',"Today's Special","scrollbars=1", '600', '700');
		}
	});
	$('#toggle').click(function(){
		$('#actualform').toggle('fadein');
		if(toggle==0){
			$(this).html('hide');
			toggle=1;
		}
		else if(toggle==1){
			$(this).html('show');
			toggle=0;
		}
	});
	$('#submit').click(function(){
		alert("Your Message has been sent.\nThank you for reaching us!");
	}).prop('disabled', true);
	
	$('#page').click(function(){
		var i;
		if($('#page').html() == "next page"){
			code=" ";
			for(i=1; i<=11; i++){
				code += "<a href='highlights/"+i+".jpg'><img src='highlights/"+i+".jpg'></a>";
			}
			$('#page').html("previous page");
		}
		else{
			code=" ";
			getGallery();
			$('#page').html("next page");
		}
		$('#photos').toggle('fadeout').html(code).toggle('fadein'); 
	});
	
	$('.menuPage').click(function(){
		var id = $(this).attr("id");
		$('#'+ id + ' img').addClass("zoomed");	
	});
});