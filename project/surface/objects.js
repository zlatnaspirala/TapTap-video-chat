 
var DRAWER = {
ARC  : function (x,y,radius , color , sAngle ,eAngle , ALFA ) {
SURF.globalAlpha = ALFA;
SURF.beginPath()
SURF.arc(x,y,radius,0,Math.PI*2,false)
var grd = SURF.createRadialGradient(x, y, 0 ,    x ,  y , radius);
grd.addColorStop(0, RGB2Color(INTRANDOM(110,150),INTRANDOM(150,160),223));
grd.addColorStop(1, "rgba(32, 45, 21, 0.3)");
SURF.fillStyle = grd;
SURF.closePath()
SURF.fill()
},
};


 


 


 




