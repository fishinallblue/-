var clone = function(obj) {
    if (typeof obj == 'object') {
        var result = obj instanceof Array ? []: {};
        for(var i in obj) {
            result[i] = clone(obj[i]);
        }
        return result;
    } else {
        return obj;
    }
}

var obj = {
    name: 'hh',
    hh: [1, 2, 3, 5, 6],
    start: {
        hh: {
            name: 'lll'
        }
    },
    hhh: function() {
        console.log('kkk');
    }
}
console.log(clone(obj))