// 对于defineProperty 理解不足，所以看到以后没有什么思路
var obj = {
    name: 'lll',
    getName: function() {
        return this.name;
    }
}
Object.defineProperty(obj, 'name', {
    //不可枚举不可配置
    enumerable: false,
    writable: false,
    Configurable: false
})

// 使用函数创造的形式
function prokevt () {
    var name = 'kkk';
    this.getName = function() {
        return name;
    }
}