//text-change
function textChange(){

	document.getElementById('h2').innerHTML="hello world";
}

// date show
function showDate(){
	document.getElementById('d_h2').innerHTML = Date();
}
// bulb on/off
function bulbOn(){
	document.getElementById('img').src ="images/pic_on.gif";
}
function bulbOff(){
	document.getElementById('img').src ="images/pic_off.gif";
}
// font change
function fontChange(){
	document.getElementById('f_h2').style.fontSize="60px";
}// font color
function fontColor(){
	document.getElementById('c_h2').style.color="red";
}
// show/hide
function show(){
	document.getElementById('s_h2').style.display= "block";
}
function hide(){
	document.getElementById('s_h2').style.display= "none";
	
}
function writeOutput(){
	document.write("hello world");
}