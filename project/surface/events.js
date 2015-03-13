
var GLOBAL_CLICK = {
x : 0 ,
y : 0 ,
};

//------------------------------------
//Check!  is it Mobile or not?
//------------------------------------
if (NOMOBILE == 0)
{
//------------------------------------
//Mobile device
//------------------------------------
	document.addEventListener("touchstart" , function(e) {

	e.preventDefault();
	var touchList = e.changedTouches;
	//alert(e.changedTouches[0].pageX + " " + e.changedTouches[0].pageY);
	GLOBAL_CLICK.x = touchList[0].pageX;
	GLOBAL_CLICK.y = touchList[0].pageY;
	
	CALCULATE_TOUCH_OR_CLICK();
	
	
	AMBIENT_MUSIC.PLAY();
	
	
	} , false);

	document.addEventListener("touchend" , function(e) {

	e.preventDefault();
	var touchList = e.changedTouches;
	//alert(e.changedTouches[0].pageX + " " + e.changedTouches[0].pageY);
	GLOBAL_CLICK.x = touchList[0].pageX;
	GLOBAL_CLICK.y = touchList[0].pageY;
	
	CALCULATE_TOUCH_UP_OR_MOUSE_UP();
	
	} , false);
	
console.log("This is mobile device. Browser : " + BROWSER);
}
else
{
	document.addEventListener("click" , function(e) {

	GLOBAL_CLICK.x = e.clientX;
	GLOBAL_CLICK.y = e.clientY;
	CALCULATE_TOUCH_OR_CLICK();

	
	var KLIKER = new KLIKER_POINT(GLOBAL_CLICK.x,GLOBAL_CLICK.y);
 
	
	} , false);
  
  document.addEventListener("mouseup" , function(e) {

	GLOBAL_CLICK.x = e.clientX;
	GLOBAL_CLICK.y = e.clientY;
 
 
 CALCULATE_TOUCH_UP_OR_MOUSE_UP();
 
   
   
	//CALCULATE_TOUCH_OR_CLICK();
	
	} , false);
  

  ELEMENT("NINDZICA").onmousemove = function(e) {
	GLOBAL_CLICK.x = e.clientX;
	GLOBAL_CLICK.y = e.clientY;
	
	 CALCULATE_TOUCH_MOVE_OR_MOUSE_MOVE();
	
	};
	
  
console.log("This is PC desktop device.");
}

var FULLSCREEN = false;
//%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%
//------------------------------------
//Calculate touch or click event
//------------------------------------
//%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%
function CALCULATE_TOUCH_OR_CLICK(){
 // for rect
 
  if (FULLSCREEN == false) {
  launchIntoFullscreen(document.documentElement);
  FULLSCREEN = true;
  }
  else{
  
 for (var x=0; x<GLOBAL_CONTAINER.length ; x++)
 {

 if (GLOBAL_CONTAINER[x].VISIBLE == true) {
 if ( GLOBAL_CLICK.x > GLOBAL_CONTAINER[x].X  && GLOBAL_CLICK.x < GLOBAL_CONTAINER[x].X  + GLOBAL_CONTAINER[x].W && GLOBAL_CLICK.y > GLOBAL_CONTAINER[x].Y && GLOBAL_CLICK.y < GLOBAL_CONTAINER[x].Y + GLOBAL_CONTAINER[x].H ) {
 
 GLOBAL_CONTAINER[x].EVENTS();
 
 }
 }
 }
 
 
 
//###########################################
// CLICK ON PLAYER ACTION 
//###########################################
 


   for (var x=0;x<BUTTONS.length;x++){
   if ( GLOBAL_CLICK.x > BUTTONS[x].POSITION.x  && GLOBAL_CLICK.x <BUTTONS[x].POSITION.x  + BUTTONS[x].DIMENSIONS.W() && GLOBAL_CLICK.y > BUTTONS[x].POSITION.y && GLOBAL_CLICK.y < BUTTONS[x].POSITION.y + BUTTONS[x].DIMENSIONS.H()  ) {
   BUTTONS[x].TAP()
   }
   else {
   
   }
   } 
 
 
 
 }
 
  
 
 }
 
 
 //%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%//%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%
 // EVENT MOUSE MOVE OR TOUCHMOVE
 //%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%//%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%
 function CALCULATE_TOUCH_MOVE_OR_MOUSE_MOVE() {
 
 
 
    for (var x=0;x<BUTTONS.length;x++){
   if ( GLOBAL_CLICK.x > BUTTONS[x].POSITION.x  && GLOBAL_CLICK.x <BUTTONS[x].POSITION.x  + BUTTONS[x].DIMENSIONS.W() && GLOBAL_CLICK.y > BUTTONS[x].POSITION.y && GLOBAL_CLICK.y < BUTTONS[x].POSITION.y + BUTTONS[x].DIMENSIONS.H()  ) {
   BUTTONS[x].HOVER = true;
   }
   else {
   BUTTONS[x].HOVER = false;
   
   
   }
   }



 
   
 
 }
 //%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%//%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%
 // EVENT MOUSE MOVE OR TOUCHMOVE
 //%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%//%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%
 function CALCULATE_TOUCH_UP_OR_MOUSE_UP() {
 
 
 }