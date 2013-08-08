console.log("Bot Running...");

/*  BOT PHRASES */

var phrases[] = {
  
  "JQUERY RULES!",
  "PHP RULES!",
  "I LIKE CAKE!"
  
};

var PHRASE_COUNT = 2;

$.get('http://www.random.org/sequences/?min=0&max=2&col=1&format=plain&rnd=new', function(data) {

  		botLoop(data.split("\n"));	
			console.log(data.split("\n"));

});

function botLoop(randomNums){
  
  // Message every thirty minutes
  var i = 0;
  
  setInterval(function(){
    
    $('#input').val(phrases[randomNums[i]]);
    
    if(i != PHRASE_COUNT)
      i++;
    if(i == PHRASE_COUNT)
      i = 0;
      
  }, minutes(1));
}

function minutes(time){
  return time * 60000;
}
