

// app object
var Application = {
name : "broadcast ultimate",
version : 1.00 ,
MAIN_INTERVAL : 10 ,
MODE : "NORMAL",
};

//system globals
window["SURF"] = null;
 
var GLOBAL_CONTAINER = new Array();
var BUTTONS = [];
var AUTO_UPDATE = [];

 var CLEAR_PAUSE = 12;
 
 
 var radius = 0;
var angle = 0;

var spiral_radius = {
delta : 0.1,
v : 1,
status : 0,
UPDATE : function(){
if (this.status == 0 ) {
this.v = this.v + this.delta;
if (this.v > 200) {this.status =1;}
}
else {
this.v = this.v - this.delta;
if (this.v < 0) {this.status =0;}
}


},


};

AUTO_UPDATE.push(spiral_radius);