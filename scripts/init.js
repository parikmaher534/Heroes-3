//Game initialiation point
Heroes.init = (function(){
  
  //On page load start call modules
  window.addEventListener("load", function(){
      
      //Define const variables
      Heroes.GAMEEL = document.getElementById("Game");
      Heroes.MAPEL  = document.getElementById("Map");
      
      
      //On all resources load
      Heroes.Preload(function(){
          Heroes.MapGenerator();
      });
      
  }, false);
}());


/**
 * Preload all game images
 */
Heroes.Preload = (function(callback){
  var img, 
      res     = Heroes.config.resources,
      resLn   = Object.keys(res).length,
      counter = 0;
      
  for( var i in res ){
    img = new Image();
    img.src = res[i];
    img.onload = (function(){
      counter++;
      if( counter === resLn ) callback();
    })(img, i);
  };
});