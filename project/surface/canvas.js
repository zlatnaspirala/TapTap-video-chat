//////////////////////////////////////////////////////////////////
SURF = document.getElementById('NINDZICA').getContext('2d');
//////////////////////////////////////////////////////////////////

document.getElementById('NINDZICA').style.position.left = 0;
document.getElementById('NINDZICA').style.position.top = 0;
if (NOMOBILE == 0){
document.getElementById('NINDZICA').width = EKRAN.W()+4;
document.getElementById('NINDZICA').height = EKRAN.H();
}
else {
document.getElementById('NINDZICA').width = EKRAN.W();
document.getElementById('NINDZICA').height = EKRAN.H();
}

//launchIntoFullscreen(document.documentElement);
function launchIntoFullscreen(element) {
  if(element.requestFullscreen) {
    element.requestFullscreen();
  } else if(element.mozRequestFullScreen) {
    element.mozRequestFullScreen();
  } else if(element.webkitRequestFullscreen) {
    element.webkitRequestFullscreen();
  } else if(element.msRequestFullscreen) {
    element.msRequestFullscreen();
  }
}

 
