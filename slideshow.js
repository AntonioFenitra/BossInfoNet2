var images= ["images/1.png","images/2.png","images/3.png","images/4.png","images/5.png","images/6.png","images/7.png"];
//var caption = ["caption for 1","caption for 2","caption for 3","caption for 4","caption for 5","caption for 6","caption for 7"];

var imageNumber = 0;
var imageLength = images.length - 1;

function changeImage(x){
	imageNumber+= x;
	if(imageNumber > imageLength){
		imageNumber=0;
	}
	if (imageNumber<0){
		imageNumber=imageLength;
	}
	document.getElementById("slideshow").src=images[imageNumber];
	//document.getElementById("caption").innerHTML=caption[imageNumber];

	return false;
}

function slideAutomatique() {
	setInterval("changeImage(1)",4000)
}
slideAutomatique() ;