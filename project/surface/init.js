/** 
created by Nikola Lukic 
nidza.js  >simple javaScript multi use plugin< 
*/




//@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@
//  core code
//@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@

 



//^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^                                
// Local Storage html5
//^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^                                
if (typeof(localStorage) == 'undefined' ) {
alert('RED ALERT:localStorage no suport!Download real internet navigator!');
} else {
try {   
   var LOCALSTORAGE_ROOT = localStorage.getItem("localstorage_root");
        if (LOCALSTORAGE_ROOT == null){
        localStorage.setItem("localstorage_root", "ROOT1");  
        LOCALSTORAGE_ROOT = localStorage.getItem("localstorage_root");
        }
        } catch (e) {
        if (e == QUOTA_EXCEEDED_ERR) {
        alert('Quota exceeded!'); 
        }
}
}
//-----------------------------------------------------------------------------------------------------------------------------------------------------------------------
function createLocalStorage(name,value){
localStorage.setItem(name, value);
}
//-----------------------------------------------------------------------------------------------------------------------------------------------------------------------
//-----------------------------------------------------------------------------------------------------------------------------------------------------------------------
function loadLocalStorage(name){
return localStorage.getItem(name);
}
//-----------------------------------------------------------------------------------------------------------------------------------------------------------------------
//^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^

//^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^                                
// DOM works
//^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^       
//-----------------------------------------------------------------------------------------------------------------------------------------------------------------------
 function removeElement(parentDiv, childDiv){
     if (childDiv == parentDiv) {
     }
     else if (document.getElementById(childDiv)) {     
          var child = document.getElementById(childDiv);
          var parent = document.getElementById(parentDiv);
          parent.removeChild(child);
     }
     else {  
          return false;
     }
}
//-----------------------------------------------------------------------------------------------------------------------------------------------------------------------

//-----------------------------------------------------------------------------------------------------------------------------------------------------------------------
// get element by ID
function E(id) { return document.getElementById(id); };
function ELEMENT(id) { return document.getElementById(id); };
//-----------------------------------------------------------------------------------------------------------------------------------------------------------------------

//-----------------------------------------------------------------------------------------------------------------------------------------------------------------------
// dettect browser 
var NOMOBILE = 0;
var HREFF = "none";
function DETECTBROWSER(){
var HREFTXT;
var NAV = navigator.userAgent;var gecko,navIpad,operatablet,navIphone,navFirefox,navChrome,navOpera,navSafari,navandroid,mobile,navMozilla;  
gecko=NAV.match(/gecko/gi);
navOpera=NAV.match(/opera/gi); 
operatablet=NAV.match(/Tablet/gi); 
navIpad=NAV.match(/ipad/gi); 
navIphone=NAV.match(/iphone/gi);        
navFirefox = NAV.match(/Firefox/gi);
navMozilla = NAV.match(/mozilla/gi);
navChrome = NAV.match(/Chrome/gi);
navSafari = NAV.match(/safari/gi);
navandroid = NAV.match(/android/gi);
mobile = NAV.match(/mobile/gi);  
//alert(NAV);
var TYPEOFANDROID = 0;

 var mobile = (/iphone|ipad|ipod|android|blackberry|mini|windows\sce|palm/i.test(navigator.userAgent.toLowerCase()));
              if (mobile) {
                  var userAgent = navigator.userAgent.toLowerCase();
                  if ((userAgent.search("android") > -1) && (userAgent.search("mobile") > -1))
                         document.write("ANDROID MOBILE")
                   else if ((userAgent.search("android") > -1) && !(userAgent.search("mobile") > -1))
                                          // document.write("<b>:ANDROID TABLET:")
                           TYPEOFANDROID = 1;                              
              }
                          else {NOMOBILE=1;  }
             // else
                //  alert("NO MOBILE DEVICE DETECTED"); 
  //  FIREFOX za android 
 if(navFirefox && navandroid && TYPEOFANDROID == 0){HREFF = "mobile_firefox_android"; HREFTXT = "You using mobile FireFox on android,GO TO PLAY NOW!"; }
 
  //  FIREFOX za android T
 if(navFirefox && navandroid && TYPEOFANDROID == 1){HREFF = "mobile_firefox_android_tablet"; HREFTXT = "You using mobile FireFox on android TABLET,GO TO PLAY NOW!"; }
 
 // OPERA ZA ANDROID
 if(navOpera && navandroid){HREFF = "opera_mobile_android"; HREFTXT = "You using opera mobile browser on android ,GO TO PLAY NOW!"; }// provera 
 
 // OPERA ZA ANDROID TABLET
 if(navOpera && navandroid && operatablet){HREFF = "opera_mobile_android_tablet"; HREFTXT = "You using opera mobile browser on android TABLET!, GO TO PLAY NOW!"; }// provera 

//  safari mobile za IPHONE - i  safari mobile za IPAD i CHROME za IPAD 
  if(navSafari){
  var Iphonesafari = NAV.match(/iphone/gi);     
  if (Iphonesafari){HREFF = "safari_mobile_iphone"; HREFTXT = "You using safari mobile browser on IPHONE device, Go to play!"; }  // OK
 else if (navIpad){ HREFF = "safari_mobile_ipad"; HREFTXT = "You using mobile safari on IPAD +chrome suport !"; }   //OK
 else if (navandroid){ HREFF = "Android native navigator"; HREFTXT = "> Android native navigator: NO SUPORT for HTML5!";  }   }

  // TEST CHROME 
 if(navChrome &&  navSafari  && navMozilla){HREFF = "mobile_chrome_android_tablet"; HREFTXT = "You using mobile chrome browser on android tablet, GO TO PLAY NOW!"; }
 
 if(navChrome && TYPEOFANDROID == 0 ){HREFF = "chrome_desktop"; HREFTXT = "You using  chrome browser on desktop, GO TO PLAY NOW!"; }
 
 if(navMozilla && NOMOBILE==1 && gecko && navFirefox){HREFF = "#"; HREFTXT = "You using FF on desktop, GO TO PLAY NOW!"; } 
 
 //
 if( navOpera && TYPEOFANDROID == 0 && !mobile){HREFF = "opera"; HREFTXT = "You using  OPERA browser on desktop, GO TO PLAY NOW!"; }
 
  
 
}
//&&&

DETECTBROWSER();


//^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^                                
// XML works
//^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
//-----------------------------------------------------------------------------------------------------------------------------------------------------------------------
function readXML(path){
if (window.XMLHttpRequest) {xmlhttpGA=new XMLHttpRequest();}
xmlhttpGA.open("GET",path,false);  
xmlhttpGA.send();
xmlDocGA=xmlhttpGA.responseXML;
return xmlDocGA;
}
//-----------------------------------------------------------------------------------------------------------------------------------------------------------------------

//^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^                                
// Array works
//^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
//-----------------------------------------------------------------------------------------------------------------------------------------------------------------------
function removeItem(arr){
    var what, a= arguments, L= a.length, ax;
    while(L> 1 && arr.length){
        what= a[--L];
        while((ax= arr.indexOf(what))!= -1){
            arr.splice(ax, 1);
        }
    }
    return arr;
}
   // removeA(arrayNAME,'-delete-all-value-');
//-----------------------------------------------------------------------------------------------------------------------------------------------------------------------


//^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^                                
// Iphone html5 works
//^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
//-----------------------------------------------------------------------------------------------------------------------------------------------------------------------
function HABonTouch(){
 document.addEventListener( 'touchstart', iphoneHideAddressBarOnTouch , false ); 
 }
//-----------------------------------------------------------------------------------------------------------------------------------------------------------------------
 
function iphoneHideAddressBarOnTouch(){
     window.scrollTo(0,1);
}
  
  
  
//^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^                                
// JS objects
//^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
//-----------------------------------------------------------------------------------------------------------------------------------------------------------------------
 
 
 var EKRAN = {
 W : function(){return window.innerWidth},
 H : function(){return window.innerHeight},
 };
 
 
//-----------------------------------------------------------------------------------------------------------------------------------------------------------------------
  function RANDOM_(min, max) {
    return Math.random() * (max - min) + min;
}

 function INTRANDOM(min,max)
{
    return Math.floor(Math.random()*(max-min+1)+min);
}

 
 

 function RGB2Color(r,g,b)
  {
    return '#' + byte2Hex(r) + byte2Hex(g) + byte2Hex(b);
  }
  
   function byte2Hex(n)
  {
    var nybHexString = "0123456789ABCDEF";
    return String(nybHexString.substr((n >> 4) & 0x0F,1)) + nybHexString.substr(n & 0x0F,1);
  }
  
var TO_RADIANS = Math.PI/180; 

  
   function makeColorGradient(frequency1, frequency2, frequency3,
                             phase1, phase2, phase3,
                             center, width, len)
  {
    if (center == undefined)   center = 128;
    if (width == undefined)    width = 127;
    if (len == undefined)      len = 50;

    for (var i = 0; i < len; ++i)
    {
       var red = Math.sin(frequency1*i + phase1) * width + center;
       var grn = Math.sin(frequency2*i + phase2) * width + center;
       var blu = Math.sin(frequency3*i + phase3) * width + center;
       return  RGB2Color(red,grn,blu);
    }
  }
  
  
function WAVE_VALUE(){
this.SIN_CORE = function(x , a ){
    var amplitude = a; // wave amplitude
    var period = x/this.speed; // period (one cycle)
    var freq = 5; // frequency or w
    var phase = 0; // phase angle
    //var f = freq / 2 * Math.PI;window.innerHeight
    //Asin(wt);
    return Math.abs(amplitude * Math.sin(freq * 2 * Math.PI * period));
};
this.speed = 1.001;
this.dotX = 0.0;
this.dotY = 0.0;
this.GIVE_ME = function(a , step ){
 if(this.dotX > 990){
        this.dotX = 0;
    }else{
        this.dotX += step;
        this.dotY = this.SIN_CORE(this.dotX , a);
    }
return this.dotY;
};
}





  
//-----------------------------------------------------------------------------------------------------------------------------------------------------------------------
//
            //detect if IE document mode is lower that version 8
            if (navigator.appName == 'Microsoft Internet Explorer')
            {
                if(document.documentMode == 7){
                             alert(document.documentMode + "NO SUPORT FOR HTML5!try document mode 9.");
                                // document.documentMode = "9";
                                 //alert(document.documentMode + " ovo je document.documentMode");
                }
            } 
                        
//-----------------------------------------------------------------------------------------------------------------------------------------------------------------------
 
 function GETAJAX(PHPFILE,DIVHAND)
{ if (window.XMLHttpRequest) {xmlHttp=new XMLHttpRequest();}
  xmlHttp.onreadystatechange = function()
  {
    if(xmlHttp.readyState == 4)
    {
      document.getElementById(DIVHAND).innerHTML = xmlHttp.responseText;
    }
  }
  xmlHttp.open("GET", PHPFILE, true); 
  xmlHttp.send(null);
}
////////#########################################
 function AJAX(PHPFILE, PARA,DIVHAND)
{ if (window.XMLHttpRequest) {xmlHttp=new XMLHttpRequest();}
  xmlHttp.onreadystatechange = function()
  {
    if(xmlHttp.readyState == 4)
    {
      document.getElementById(DIVHAND).innerHTML = xmlHttp.responseText;
    }
  }
  var P_ =PHPFILE + PARA;
  xmlHttp.open("GET", P_ , true); 
  xmlHttp.send(null);
}

//@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@
// end of core
//@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@

//@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@
//high level object
//@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@
 







