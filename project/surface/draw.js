/**
Main draw function
*/
//// cg.ctx.globalCompositeOperation = "multiply";
/////////////////////////////////
//draw_00 func
/////////////////////////////////

function CALL(){

 
//btn 
for (var d=0;d<BUTTONS.length;d++){
BUTTONS[d].UPDATE();
BUTTONS[d].POSITION.UPDATE();
}

//simply auto updater
for (var d=0;d<AUTO_UPDATE.length;d++){
AUTO_UPDATE[d].UPDATE();
}



//-----------

NIDZA_CHAT.DRAW();


}


function NIDZICA(){


this.DRAW = function(){

setTimeout(function(){

SURF.fillStyle = 'black';

//SURF.fillRect(0,0,EKRAN.W(),EKRAN.H());

CLEAR_PAUSE--;
if (CLEAR_PAUSE < 0){
SURF.opacity = 0.1;
SURF.fillRect(0,0,EKRAN.W(),EKRAN.H());
CLEAR_PAUSE = -2;
}

SURF.strokeStyle="blue";
SURF.opacity = 1;
SURF.strokeRect(0,1,EKRAN.W()-3,EKRAN.H()-1);

SURF.font = "20px font_2";

SURF.fillText( "App : TapTap chat  Author:Nikola Lukic " , EKRAN.W()/100*15 , 20 );
//SURF.fillText( "credits to : www.MuazKhan.com " , EKRAN.W()/100*15 , 40 );
SURF.fillText( " be free " , EKRAN.W()/100*15 , 40 );

///


 


SURF.lineWidth = INTRANDOM(1,2);
SURF.strokeStyle = "#0096FF"; // blue-ish color
SURF.beginPath();
SURF.save();

SURF.moveTo(EKRAN.W() / 2, EKRAN.W() / 2);

radius = 0;

SURF.strokeStyle = "rgba("+INTRANDOM(222,233)+", 111 , "+INTRANDOM(222,233)+" , 0.1)";

for (var n = 0; n < 110; n++) {

//radius = spiral_radius.v;
radius += 1;

 angle += (Math.PI * 2) / 1150;
 
var x = EKRAN.W() / 2 + radius * Math.cos(angle);
var y = EKRAN.H() / 2 + radius * Math.sin(angle);
SURF.lineTo(x, y);



}

SURF.stroke();

 
SURF.restore();

SURF.moveTo(0, 0);

///



 

  
//-------------------------//-------------------------
CALL(); //  
//-------------------------//-------------------------
},
//-------------------------//-------------------------//-------------------------
Application.MAIN_INTERVAL
//-------------------------//-------------------------//-------------------------
);


};
//-------------------------//-------------------------













/////////////////////////////////
}//end
/////////////////////////////////