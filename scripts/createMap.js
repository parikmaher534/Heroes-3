Heroes.MapGenerator = (function(){
  
  var items     = Heroes.MAP,
      resources = Heroes.config.resources,
      itemsLn   = items.length,
      el        = null,
      params    = null,
      elCls     = "map-item";
  
  this.createBlock = function(o){
    el = document.createElement("div");
    el.className = elCls;
    params = "background-image:url("+resources[o.s]+");width:"+o.w+"px;height:"+o.h+"px;top:"+o.y+"px;left:"+o.x+"px";
    el.setAttribute("style", params);
    Heroes.MAPEL.appendChild(el);
  };
  
  for( var i = 0; i < itemsLn; i++ ){
    this.createBlock(items[i]);
  };
});
