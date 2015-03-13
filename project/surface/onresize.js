//////////////////////////////////////////////////
window.addEventListener("resize" , ONRESIZE );
//////////////////////////////////////////////////
function ONRESIZE() {


if (NOMOBILE == 0){
document.getElementById('NINDZICA').width = EKRAN.W()+4;
document.getElementById('NINDZICA').height = EKRAN.H();
}
else{
document.getElementById('NINDZICA').width = EKRAN.W();
document.getElementById('NINDZICA').height = EKRAN.H();
}

 

for (var d=0;d<BUTTONS.length;d++){
BUTTONS[d].RESIZE();
}


console.log("Nikola");


//////////////////////////////////////////////////
}
//////////////////////////////////////////////////