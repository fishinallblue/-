var obj = {
    name: 'hejun'
}
Function.prototype.bind = function() {
    var self = this;
    var context = [].shift.call(arguments);
    var args = [].slice.call(arguments);
    return function() {
        return self.call(context, [].concat.call(args, [].slice.call(arguments)))
    }
}

var func = function(a,b,c, d) {
    console.log([a,b ,c, d])
    console.log(this.name)

}.bind(obj, 1, 2)

func(3,4)