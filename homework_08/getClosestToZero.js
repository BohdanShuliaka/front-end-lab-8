function getClosestToZero(){
    var ex = Infinity;
    var closest;
    for(var i = 0 in arguments){
         var reg = Math.abs(arguments[i]);
         if(reg < ex){ 
                ex = reg; 
                closest = arguments[i]; 
            }
      }
    return closest;
}