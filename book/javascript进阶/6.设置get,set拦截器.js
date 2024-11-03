// 对于defineProperty 理解不足，所以看到以后没有什么思路
var obj = {
    name: 'lll',
    getName: function() {
        return this.name;
    }
}

// es5 的方式设置拦截器
Object.defineProperty(obj, 'name', {
    get: function() {
        console.log('get');
    },
    set: function(name) {
        console.log('set');
    }
});

// es6的方式设置拦截器 => proxy 仔细看proxy的书籍
obj.name;
obj.name = 'hhh';

