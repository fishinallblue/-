// 缓存代理可以为一些开销大的运算结果提供ఆ时的存ϱ，在下次运算时，如果传递进来的参
// 数跟之前一致，则可以直接返回前面存ϱ的运算结果。

var daili = (function() {
    var cache = [];
    return function() {
        var args = arguments;
        var arg = Array.prototype.join.apply(args);
        for (var i=0; i< cache.length; i++) {
            if (cache[i].key == arg) {
                return cache[i].value;
            }
        }
        var result = 1;
        for (var j=0; j< args.length; j++) {
            result = result * args[j];
        }
        cache.push({
            key: arg,
            value: result
        });
        return result;
    }
})()

console.log(daili(1, 2, 3, 4));
console.log(daili(1, 2, 3, 4));