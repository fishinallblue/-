var mult = function() {
    var chache = [];
    return function() {
        var key = [].join.call(arguments);
        if (chache[key]) {
            console.log('我从缓存里面取得')
            return chache[key];
        }

        var a = 1;
        for(var i=0; i< arguments.length; i++) {
            a = a * arguments[i];
        }

        chache[key] = a;
        console.log('不是缓存')
        return a;
    }
}()
mult(1, 2, 3)
mult(1, 2, 3)