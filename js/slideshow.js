function hide()
{
	$("#slideshow").fadeOut(500);
}


var timer1 = 0;
var timer2 = 0;

var number = 0;

function setSlide(sNumber)
{
	clearTimeout(timer1);
	clearTimeout(timer2);
	
	number = sNumber - 1;
	
	hide();
	setTimeout("changeSlide()",500);
}
	
function changeSlide()
{
	number++;
	
	if(number > 5)
	{
		number = 1;
	}
	
	if (number == 1)
	{
		var destination = "offer";
		document.getElementById("s1").innerHTML = "<font id=sBold><b>&bull;</b></font>";
		document.getElementById("s2").innerHTML = "&bull;";
		document.getElementById("s3").innerHTML = "&bull;";
		document.getElementById("s4").innerHTML = "&bull;";
		document.getElementById("s5").innerHTML = "&bull;";
	}
	
	if (number == 2)
	{
		var destination = "offer";
		document.getElementById("s1").innerHTML = "&bull;";
		document.getElementById("s2").innerHTML = "<font id=sBold><b>&bull;</b></font>";
		document.getElementById("s3").innerHTML = "&bull;";
		document.getElementById("s4").innerHTML = "&bull;";
		document.getElementById("s5").innerHTML = "&bull;";
	}
	
	if (number == 3)
	{
		var destination = "contact";
		document.getElementById("s1").innerHTML = "&bull;";
		document.getElementById("s2").innerHTML = "&bull;";
		document.getElementById("s3").innerHTML = "<font id=sBold><b>&bull;</b></font>";
		document.getElementById("s4").innerHTML = "&bull;";
		document.getElementById("s5").innerHTML = "&bull;";
	}
	
	if (number == 4)
	{
		var destination = "offer";
		document.getElementById("s1").innerHTML = "&bull;";
		document.getElementById("s2").innerHTML = "&bull;";
		document.getElementById("s3").innerHTML = "&bull;";
		document.getElementById("s4").innerHTML = "<font id=sBold><b>&bull;</b></font>";
		document.getElementById("s5").innerHTML = "&bull;";
	}
	
	if (number == 5)
	{
		var destination = "contact";
		document.getElementById("s1").innerHTML = "&bull;";
		document.getElementById("s2").innerHTML = "&bull;";
		document.getElementById("s3").innerHTML = "&bull;";
		document.getElementById("s4").innerHTML = "&bull;";
		document.getElementById("s5").innerHTML = "<font id=sBold><b>&bull;</b></font>";
	}
	
	//var file = "<a href=" + destination + ".html><div id='slide" + number + "'></div></a>";
	var file = "<div id='slide" + number + "'></div>";
	
	document.getElementById("slideshow").innerHTML = file;
	
	$("#slideshow").fadeIn(500);
	
	timer1 = setTimeout("changeSlide()",5000);
	timer2 = setTimeout("hide()",4500);
	
	
}

