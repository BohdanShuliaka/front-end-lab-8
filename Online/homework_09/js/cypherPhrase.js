function cypherPhrase(charactersMap, string) {
    var cypheredPhrase = getTransformedArray(string, function(el) {
        if(charactersMap[el]) {
            return charactersMap[el];
        } else {
            return el;
        }
    });
    return cypheredPhrase.join("");
    
}