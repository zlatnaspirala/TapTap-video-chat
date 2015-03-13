

 //-----------------------//-----------------------
 //NIDZA_CHAT RESOURSE IS READY 
 //-----------------------//-----------------------
 
 var NIDZA_CHAT = new NIDZICA();
 
 
 //init draw func
 NIDZA_CHAT.DRAW();
 
 SURF.textAlign = "left";
 
 
 
 
///////////////////


var TYPE_OF_STEAM = new BUTTON( EKRAN.W()/100 * 35 ,EKRAN.H()/100 * 10  , "SELECT STEAM TYPE" , "rgba(226,142,222,1)" , 33, 15 , "18px font_3" );
var TYPE_OF_STEAM1 = new BUTTON( EKRAN.W()/100 * 250 ,EKRAN.H()/100 * 39  , "AUDIO VIDEO CHAT" , "rgba(156,222,222,1)" , 14, 10 , "18px font_3" );
var TYPE_OF_STEAM2 = new BUTTON( EKRAN.W()/100 * 250 ,EKRAN.H()/100 * 39  , "AUDIO VIDEO" , "rgba(156,222,222,1)" , 14, 10, "18px font_3" );
var TYPE_OF_STEAM3 = new BUTTON( EKRAN.W()/100 * 250 ,EKRAN.H()/100 * 39  , "CHAT" , "rgba(156,222,222,1)" , 14, 10 , "18px font_3" );




 
var TYPE_OF_CONN1 = new BUTTON( EKRAN.W()/100 * 250 ,EKRAN.H()/100 * 39  , "MANY TO MANY" , "rgba(156,222,222,1)" , 14, 10 , "18px font_3" );
var TYPE_OF_CONN2 = new BUTTON( EKRAN.W()/100 * 250 ,EKRAN.H()/100 * 39  , "ONE TO ONE" , "rgba(156,222,222,1)" , 14, 10, "18px font_3" );
var TYPE_OF_CONN3 = new BUTTON( EKRAN.W()/100 * 250 ,EKRAN.H()/100 * 39  , "ONE TO MANY" , "rgba(156,222,222,1)" , 14, 10 , "18px font_3" );

 

function TOS (){
TYPE_OF_STEAM1.POSITION.targetX = EKRAN.W()/100 * 25 ;
TYPE_OF_STEAM2.POSITION.targetX = EKRAN.W()/100 * 45 ;
TYPE_OF_STEAM3.POSITION.targetX = EKRAN.W()/100 * 65 ;
}
TYPE_OF_STEAM.TAP = TOS;

 


function SET_STEAM_TYPE_D1(){
ELEMENT("direction").value = "many-to-many";MOVE_NEXT_STEP_2()
}

function SET_STEAM_TYPE_D2(){
ELEMENT("direction").value = "one-to-one";MOVE_NEXT_STEP_2()
}

function SET_STEAM_TYPE_D3(){
ELEMENT("direction").value = "one-to-many";MOVE_NEXT_STEP_2()
}

TYPE_OF_CONN1.TAP = SET_STEAM_TYPE_D1;
TYPE_OF_CONN2.TAP = SET_STEAM_TYPE_D2;
TYPE_OF_CONN3.TAP = SET_STEAM_TYPE_D3;



function SET_STEAM_TYPE_AVD(){
ELEMENT("session").value = "audio+video+data";MOVE_NEXT_STEP_1();
}

function SET_STEAM_TYPE_AV(){
ELEMENT("session").value = "audio+video";MOVE_NEXT_STEP_1();
}

function SET_STEAM_TYPE_D(){
ELEMENT("session").value = "data";MOVE_NEXT_STEP_1();
}


TYPE_OF_STEAM1.TAP = SET_STEAM_TYPE_AVD;
TYPE_OF_STEAM2.TAP = SET_STEAM_TYPE_AV;
TYPE_OF_STEAM3.TAP = SET_STEAM_TYPE_D;

function MOVE_NEXT_STEP_1(){

TYPE_OF_STEAM1.POSITION.targetX = EKRAN.W()/100 * 120;
TYPE_OF_STEAM2.POSITION.targetX = EKRAN.W()/100 * 120;
TYPE_OF_STEAM3.POSITION.targetX = EKRAN.W()/100 * 120;
TYPE_OF_STEAM1.POSITION.targetY = EKRAN.W()/100 * 120;
TYPE_OF_STEAM2.POSITION.targetY = EKRAN.W()/100 * 120;
TYPE_OF_STEAM3.POSITION.targetY = EKRAN.W()/100 * 120;

TYPE_OF_CONN1.POSITION.targetX = EKRAN.W()/100 * 25;
TYPE_OF_CONN2.POSITION.targetX = EKRAN.W()/100 * 45;
TYPE_OF_CONN3.POSITION.targetX = EKRAN.W()/100 * 65;

TYPE_OF_STEAM.TEXT = "CHOOSE DIRECTION";


}


function MOVE_NEXT_STEP_2(){

 
TYPE_OF_CONN1.POSITION.targetX = EKRAN.W()/100 * 125;
TYPE_OF_CONN2.POSITION.targetX = EKRAN.W()/100 * 145;
TYPE_OF_CONN3.POSITION.targetX = EKRAN.W()/100 * 165;



ELEMENT("name_of_session").style.display = "block";
TYPE_OF_STEAM.TEXT = "OPEN YOUR WINDOW";
TYPE_OF_STEAM.TAP = setupNewSession.onclick;


}


var _V_ = [];
function COLLECT_VIDEOS(){

_V_ = document.getElementsByTagName("video");

}










 