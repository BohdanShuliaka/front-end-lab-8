function getTransformedArray(array, callback) {
    var newArray = [];
    forEach(array, function(el){
        var result = callback(el);
        newArray.push(result);
    });
    return newArray;
}
