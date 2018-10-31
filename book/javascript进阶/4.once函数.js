var once = function(fn) {
    var cont = 0;
    return function() {
        if (cont == 0) {
            fn.apply(this, arguments);
            cont ++;
        }
    }
}

var fn1 = once(function(k) {
    console.log('lll' + k)
})
fn1('dd');
fn1('mm');