audio = new Audio();
var zas = new Array('audio/hitmarker_2.mp3','audio/hitmarker_2.mp3','audio/hitmarker_2.mp3','audio/hitmarker_2.mp3');

	

i=0;
slimepizza();


function slimepizza(){
i=i+1+Math.round(Math.random()*2);
	//audio.src=(zas[i%4]);
	audio = new Audio(zas[i%4]);
	//Math.floor(Math.random()*4)]);

	audio.currentTime=0.1425;

  audio.play(0);
};