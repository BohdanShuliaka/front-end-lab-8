function getFilteredArray(array, predicate) {
    var secondArray = [];
    forEach(array, function(el){
        if (predicate(el)) {
            secondArray.push(el);
        } 
    });
    return secondArray;
}