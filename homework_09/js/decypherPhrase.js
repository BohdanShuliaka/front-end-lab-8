function decypherPhrase(charactersMap, string) { 
    var reverse = Object.keys(charactersMap).reduce(function(obj,key){
        obj[ charactersMap[key] ] = key;
        return obj;
     },{});
    var newCypher = cypherPhrase(reverse, string);
    return newCypher;
}