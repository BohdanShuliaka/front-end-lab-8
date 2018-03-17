function collectIds(movies) {
    var filtered = getFilteredArray(movies, function(el) {
        return el.rating > 3.0;
    });
    var transformed = getTransformedArray(filtered, function(el) {
        return el.id;
    }); 
    return transformed;
}