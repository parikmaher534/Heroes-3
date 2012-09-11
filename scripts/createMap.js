Heroes.MapGenerator = (function(mpmodel){
  
  var items     = Heroes.MAP.background,
      itemsLn   = items.length,
      objects   = Heroes.MAP.objects,
      objectsLn = objects.length,
      players   = Heroes.MAP.players,
      resources = Heroes.config.resources,
      el        = null,
      params    = null,
      elCls     = "map-item",
      objCls    = "map-object",
      plCls     = "map-player";
  
  this.createBlock = function(o, cls){
    el = document.createElement("div");
    el.className = cls;
    params = "background-image:url("+resources[o.s]+");width:"+o.w+"px;height:"+o.h+"px;top:"+o.y+"px;left:"+o.x+"px";
    el.setAttribute("style", params);
    Heroes.MAPEL.appendChild(el);
  };
  
  
  
  /**
   * Fill new map by "1"
   */
  ;(function(){
    var prop = 1,
        row  = [],
        size = Heroes.MAP.size;
    for( var i = 0; i < size.height / size.minH; i++ ){
      for( var j = 0; j < size.width / size.minW; j++ ){
        row.push(prop);
      };
      if( row.length >= size.width / size.minW ) {
        mpmodel.push(row);
        row = [];
      };
    };
  }());
  
  
  /**
   * Set rights properties for map model
   */
  this.setPropToMap = function(o){
    var x   = o.x / Heroes.MAP.size.minW,
        row = o.y / Heroes.MAP.size.minH;
        
    if( mpmodel[row][x] != o.p ){
      for( var i = 0; i < o.w / Heroes.MAP.size.minW; i++ ){
        for( var j = 0; j < o.h / Heroes.MAP.size.minH; j++ ){
          mpmodel[row+j][x + i] = o.p;
        };
      };
    };
  };
  
  
  //Set background
  for( var b = 0; b < itemsLn; b++ ){
    this.createBlock(items[b], elCls);
    this.setPropToMap(items[b]);
  };
  
  //Set objects
  for( var o = 0; o < objectsLn; o++ ){
    this.createBlock(objects[o], objCls);
    this.setPropToMap(objects[o]);
  };
  
  //Set players
  for( var p in players ){
    this.createBlock(players[p], plCls);
    this.setPropToMap(players[p]);
  };
  
  console.log(mpmodel);
});
