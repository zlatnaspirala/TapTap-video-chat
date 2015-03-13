function ANIMATOR(TYPE_, FrameIndex ,source ,x_ , y_ , w_ , h_ , ID , blink_ , min_ , max_ , step , speed_ , opacity_  ){
if (speed_ !== undefined) {
this.speed = speed_;
this.initial_speed = speed_;
}else {
this.speed = null;
}

if ( blink_ == "yes" ){
this.blink = new harmonic_var(min_ , max_ , step);
}else {
this.blink = null;
}
if(ID === undefined){
var local1=randomIntFromInterval(1,1000);
var local2=randomIntFromInterval(200,600);
this.ID = "ID" + ( local1 + local2 ) + local2*5;
console.log("Animation" + this.ID + " id is generated");
}else {this.ID = ID;}
this.X = x_;
this.Y = y_;
this.W = w_;
this.H = h_;
//constructor - MAKE IMAGE OBJECTS
for(var x=0;x<source.source.length;x++){
window["f_"+this.ID + x] = new Image();
window["f_"+this.ID + x].src = source.source[x];
window["f_"+this.ID + x].onload = function(){App.LOADED_IMAGES_NUMBER++;}
}

this.NUMBERS_OF_FRAMES = source.source.length;
this.TYPE = TYPE_;
if (FrameIndex == null){
this.CURRENT_FRAME = 0;
}else {
this.CURRENT_FRAME = FrameIndex;
}
this.DRAW = function( image_frame , x_ , y_ , w_ , h_ , blink_status){
if (blink_status == "yes"  ) {
SURFACE.globalAlpha = Math.sin(this.blink.get());
}
//##################################################
if (this.TYPE == "DRAW_LOOP") {
if ((x_ || y_ || w_ || h_) ===undefined ){
SURFACE.drawImage( window["f_"+this.ID + image_frame] , this.X  , this.Y , this.W , this.H );
}
else if ((x_ && y_ && w_ && h_ ) !== undefined){
SURFACE.drawImage( window["f_"+this.ID + this.CURRENT_FRAME] , x_  , y_ , w_ , h_ );
}else 
{
//console.log("error in draw loop , class animator " + this.ID + this.CURRENT_FRAME + " <<<<<<<<<<<<<<<<<");
}
if (this.CURRENT_FRAME < this.NUMBERS_OF_FRAMES -1){
if (this.speed ==null) {
this.CURRENT_FRAME++;
}else {
if (this.speed > 0) {
this.speed--;
}else {
this.CURRENT_FRAME++;
this.speed = this.initial_speed;
}
}
}
else{
this.CURRENT_FRAME = 0;
}
}
//##################################################
else if (this.TYPE == "DRAW_FRAME") 
{if ((x_ || y_ || w_ || h_) ===undefined ){
SURFACE.drawImage( window["f_"+this.ID + image_frame] , this.X  , this.Y , this.W , this.H );
}
else if ((x_ && y_ && w_ && h_ ) !== undefined){SURFACE.drawImage( window["f_"+this.ID + image_frame] , x_  , y_ , w_ , h_ );}
else {console.log("error in DRAW_FRAME");}}

SURFACE.globalAlpha = 1;}; 

}