/**
 * 
 * Game initialize point
 * 
 */
SmartJ.Event.On("load", SmartJ, function(){
  
  var timer       = new SmartJ.Timer(),
      mapDOM      = document.getElementById("MapBig"),
      smallMapObj = "small-map-obj";
  
  //Create map
  GenerateMap(mapDOM);
  FillMapByObjects();
  
  
  //Start redraw scene for dinamyc objects
  timer.start({
    name: "dynamic-elements-draw",
    action: function(){
      SmartJ.Render.Group(smallMapObj);
    }
  });
});



/**
 * Generate map. Generate static background objects only.
 * @param parent Link to Map dom element 
 */
var GenerateMap = function(parent){
    var bg     = SmartJ_Config.map.background,
        bgLn   = bg.length,
        node   = null,
        px     = "px",
        bgCls  = "map-bg";

    for( var i = 0; i < bgLn; i++ ){
      node = document.createElement("div");
      node.setAttribute("width", bg[i].w + px);
      node.setAttribute("height", bg[i].h + px);
      node.setAttribute("style", "left:"+bg[i].x+";top:"+bg[i].y);
      node.className = bgCls;
      node.innerHTML = "<img src='"+SmartJ_Config.images[bg[i].src]+"' style='width:"+bg[i].w+";height:"+bg[i].h+"'/>";
      parent.appendChild(node);
    };
};


/**
 * Fill map by some static and dinamyc objects( trees etc. )
 */
var FillMapByObjects = function(){
  var obj = SmartJ_Config.map.objects;
  for( var i = 0; i < obj.length; i++ ){
    var sprite = SmartJ.Sprite({
      src: obj[i].src,
      x: obj[i].x,
      y: obj[i].y,
      width: obj[i].w,
      height: obj[i].h,
      sx:0,
      sy:0,
      frames:9,
      speed: 24,
      stage: obj[i].s
    }, obj[i].g);
    
    //Start animate
    sprite.Start();
  };
};


