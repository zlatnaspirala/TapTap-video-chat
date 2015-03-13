

//----------------------------------------
function GRADIENT(color1,color2,par1,par2,par3,par4){

var my_gradient=SURF.createLinearGradient(par1,par2,par3,par4);
my_gradient.addColorStop(1,color1);
my_gradient.addColorStop(0,color2);
return my_gradient;

}
//----------------------------------------



//----------------------------------------
//MAKE MOVE WITH NEW TARGET COORDINATE
//----------------------------------------
function MOVEMENT(curentX , curentY , targetX_ , targetY_ , velX_ , velY_ , thrust_){

//parameters
this.x = curentX;
this.y = curentY;
this.targetX = targetX_;
this.targetY = targetY_;
this.velX = velX_;
this.velY = velY_;
this.thrust = thrust_;
this.IN_MOVE = false;
//metod
this.UPDATE = function(){

var tx = this.targetX - this.x,ty = this.targetY - this.y,dist = Math.sqrt(tx*tx+ty*ty),rad = Math.atan2(ty,tx),angle = rad/Math.PI * 180;
this.velX = (tx/dist)*this.thrust;
this.velY = (ty/dist)*this.thrust;
// stop the box if its too close so it doesn't just rotate and bounce
//if (this.IN_MOVE == true){
if(dist > this.thrust*2){
this.x += this.velX;
this.y += this.velY;
}else {
this.x = this.targetX;
this.y = this.targetY;
//this.IN_MOVE = false;

}
//}


};

}
//----------------------------------------
//----------------------------------------

 



function drawRotatedImage(image, x, y, angle , wave) { 
 
	// save the current co-ordinate system 
	// before we screw with it
	SURF.save(); 
 
	// move to the middle of where we want to draw our image
	SURF.translate(x, y);
 
	// rotate around that point, converting our 
	// angle from degrees to radians 
	SURF.rotate(angle * TO_RADIANS);
 
	// draw it up and to the left by half the width
	// and height of the image 
	 
	SURF.drawImage(image, -(wave/2), -(wave/2) ,wave, wave );
	
	//SURF.drawImage(image, -(55/2), -(55/2) ,55, 55 );
 
	// and restore the co-ords to how they were when we began
	SURF.restore(); 
}




///////////////////////////////////////////////////////////
//Keyboard events and func
//////////////////////////////////////////////////////////
function ATACH_KEYBOARD(){

window.addEventListener("keydown", playerControlerKeyDown , false);
window.addEventListener("keyup", playerControlerKeyUp , false);
 
function playerControlerKeyDown(e) {
    switch(e.keyCode) {
        case 15:
            alert("enter")
            break;
        case 38:
        
            break;
        case 39:
       
            break;
        case 40:
      
            break;  
			
    }   
}

function playerControlerKeyUp(e) {
    switch(e.keyCode) {
        case 37:
       
            break;
  
			
    }   
}


}


/////////////////////////////////////
//
/////////////////////////////////////

function CONTROL(keyboard){

this.MOVE_LEFT = false;
this.MOVE_UP = false;
this.MOVE_DOWN = false;
this.MOVE_RIGHT = false;

  



if (keyboard == true){

ATACH_KEYBOARD();

}

}

 


//###################################################
// BUTTON
//###################################################
function BUTTON(initX , initY , text , color_ , W_ , H_ , font_){
this.color = color_;
this.POSITION = new MOVEMENT( initX , initY ,initX , initY  , 0 , 0 , 25)

if (font_ !== 'undefined') {
this.font__ = font_;
}
else {
this.font__ = "20px font_2";

}


if (W_ === 'undefined' || H_ === 'undefined') {

this.DIMENSIONS = {
w : 5 ,
h : 2 , 
W : function(){return EKRAN.W()/100*this.w },
H : function(){return EKRAN.H()/100*this.h},
};

}else{

this.DIMENSIONS = {
w : W_ ,
h : H_ , 
W : function(){return EKRAN.W()/100*this.w },
H : function(){return EKRAN.H()/100*this.h},
};



}




this.TEXT = text;
this.VISIBLE = true;
this.HOVER  = false;
this.UPDATE = function(){
if(this.VISIBLE == true){

SURF.font = this.font__;
SURF.strokeStyle = this.color;

if (this.HOVER == true) {
SURF.lineWidth = 6;
}else{
SURF.lineWidth = 1;
}
 
SURF.shadowBlur=15;
SURF.shadowOffsetX=1;
SURF.shadowOffsetY=1;
SURF.shadowColor="silver";

SURF.strokeRect(this.POSITION.x , this.POSITION.y  ,  this.DIMENSIONS.W(), this.DIMENSIONS.H() );

SURF.lineWidth = 1;
 

SURF.fillStyle = this.color;
SURF.textAlign = "center";
SURF.textBaseline = "middle";

SURF.fillText(this.TEXT , this.POSITION.x +  this.DIMENSIONS.W()/2 , this.POSITION.y + this.DIMENSIONS.H()/2);


SURF.shadowBlur=1;
SURF.shadowOffsetX=0;
SURF.shadowOffsetY=0;
SURF.shadowColor="red";

//
}
};
 this.RESIZE = function(){
 
 if (this.TEXT == "OPEN YOUR WINDOW" || this.TEXT == "SELECT STEAM TYPE" || this.TEXT == "CHOOSE DIRECTION") {
 
 var XX = EKRAN.W()/100 * 35;
 var YY = this.POSITION.y;
 var tXX = this.POSITION.targetX;
 var tYY = this.POSITION.targetY;
 
 this.POSITION = new MOVEMENT( XX , YY , tXX , tYY  , 0 , 0 , 25);
 }
 
 
 
 };


this.TAP = function(){};

BUTTONS.push(this);

}



//----------------------------
// 
//----------------------------
function FROM_TO_STEP (v , t , s)
{




}





function KLIKER_POINT (x,y) {

this.radius = 90;
this.radiusI = 1;

this.UPDATE = function(){


 


SURF.beginPath()
SURF.arc(x,y,this.radiusI,0,Math.PI*2,false)
var grd = SURF.createRadialGradient(x, y, 0 ,    x ,  y , this.radius);
grd.addColorStop(0, RGB2Color(INTRANDOM(1,52),INTRANDOM(0,21), 22));
grd.addColorStop(1, "rgba(65,65,165,0.2)");
SURF.fillStyle = grd;
SURF.closePath()
SURF.fill()

SURF.strokeText("#TAP#TAP#" , x,y);

SURF.beginPath()
SURF.arc(x,y, this.radius + 20,0,Math.PI*2,false)
var grd = SURF.createRadialGradient(x, y, 0 ,    x ,  y , this.radius);
grd.addColorStop(0, RGB2Color(INTRANDOM(0,152),INTRANDOM(0,21), 22));
grd.addColorStop(1, "rgba("+INTRANDOM(0,152)+",65,165,0.1)");
SURF.fillStyle = grd;
SURF.closePath()
SURF.fill()





this.radius = this.radius - 2;
this.radiusI++;

if (this.radius < 0){
var cc = AUTO_UPDATE.indexOf(this);
AUTO_UPDATE.splice(cc, 1);

}


};

AUTO_UPDATE.push(this);
}




//@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@
//@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@
//  shadow
//@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@
var SHADOW = {

ENABLE : function(color_ , shadowBlur_ ,  offSetX , offSetY){

SURF.shadowColor = color_;
SURF.shadowBlur = shadowBlur_;
SURF.shadowOffsetX = offSetX;
SURF.shadowOffsetY = offSetY;


},

CLEAR : function(){


SURF.shadowColor = "rgba(0,0,0,0)";
SURF.shadowBlur = 0;
SURF.shadowOffsetX = 0;
SURF.shadowOffsetY = 0;




},




};
//@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@//@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@
//@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@//@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@



// external 
// COMETA STYLE

	var particles = [];
function particle(parent_)
	{
		var n, life, colors;
		//speed.x range = -//speed, life, locatio2.5 to 2.5 
		//speed.y range = -15 to -5 to make it move upwards
		//lets change the Y speed to make it look like a flame
		this.speed = {x: -2.5+Math.random()*5, y: -15+Math.random()*10};
		//location = mouse coordinates
		//Now the flame follows the mouse coordinates
		
		this.parent = parent_;
	 
		//radius range = 10-30
		this.radius = 10+Math.random()*20;
		//life range = 20-30
		this.life = 20+Math.random()*10;
		this.remaining_life = this.life;
		//colors
		this.r = Math.round(Math.random()*INTRANDOM(0,11));
		this.g = Math.round(Math.random()*INTRANDOM(0,33));
		this.b = Math.round(Math.random()*INTRANDOM(0,222));
		
		
		
		
	}
	

	var FIRE_PARTIKULE = {
	
	FLIP : 0 ,
	FLOP : 0 ,
	UPDATE   : function() {
		
		for(var i = 0; i < particles.length; i++)
		{
		try{
			var p = particles[i];
			SURF.beginPath();
			//changing opacity according to the life.
			//opacity goes to 0 at the end of life of a particle
			p.opacity = Math.round(p.remaining_life/p.life*100)/100
			//a gradient instead of white fill
			var gradient = SURF.createRadialGradient(p.location.x, p.location.y, 0, p.location.x, p.location.y, p.radius);
			gradient.addColorStop(0, "rgba("+p.r+", "+p.g+", "+p.b+", "+p.opacity+")");
			gradient.addColorStop(0.5, "rgba("+p.r+", "+p.g+", "+p.b+", "+p.opacity+")");
			gradient.addColorStop(1, "rgba("+p.r+", "+p.g+", "+p.b+", 0)");
			SURF.fillStyle = gradient;
			SURF.arc(p.location.x, p.location.y, p.radius, Math.PI*2, false);
			SURF.fill();
			
			//lets move the particles
			p.remaining_life--;
			p.radius--;
			
			if (this.FLIP == 0){
			p.location.x -= p.speed.x;
			this.FLIP = 1;
			}else{
			p.location.x += p.speed.x;
			this.FLIP = 0;
			}
			
			
			if (this.FLOP == 0){
			p.location.y += p.speed.x;
			this.FLOP = 1;
			}else {
			p.location.y -= p.speed.x;
			this.FLOP = 0;
			}
			
			//regenerate particles
			if(p.remaining_life < 0 || p.radius < 0)
			{
				//a brand new particle replacing the dead one
				particles[i] = new particle(particles[i].parent);
			}
			
			}catch(e){}
		}

		
		},

		
		};
		
		
		//AUTO_UPDATE.push(FIRE_PARTIKULE);
		