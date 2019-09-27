function card(){
	var card = document.getElementById("secCard");
	var backgroundImg = document.getElementsByName("chrisCard");
	var imgPath;
	for(var i=0;i<backgroundImg.length;i++){
		if(backgroundImg[i].checked == true){
			imgPath = "url('"+ backgroundImg[i].value+"')";
			card.style.backgroundImage = imgPath;
		}
	}
}