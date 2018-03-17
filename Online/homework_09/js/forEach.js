function forEach(array, callback) {
    for (var i = 0; i < array.length; i++) {
        var el = array[i];
        callback(el);
    }
}

