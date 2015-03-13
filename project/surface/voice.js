 
 var SPEAKER = {
 
msg : new SpeechSynthesisUtterance(),
msg_enable : true,
 
 SPEAK : function(V){
 
 if (this.msg_enable == true){
 
this.msg_enable = false;
 
var voices = window.speechSynthesis.getVoices();
this.msg.voice = voices[0]; // Note: some voices don't support altering params
this.msg.voiceURI = 'native';
this.msg.volume = 0.5; // 0 to 1
this.msg.rate = 0.7; // 0.1 to 10
this.msg.pitch = 0.5; //0 to 2
this.msg.text = V;
this.msg.lang = 'en-US';

speechSynthesis.speak(this.msg);

}

this.msg.onend = function(e) {

VOICE.msg_enable = true;  
  // console.log('Finished in ' + event.elapsedTime + ' seconds.');
  
};

 
 },
 
 };
 
 
 
 