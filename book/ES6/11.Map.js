// 利用js实现ES6的Map对象
// 利用js实现ES6的Map对象
// 利用js实现ES6的Map对象
// 感觉Map和js的Object对象最大的区别就是，可以使用任意了类型的数据作为key
// 

// 最开始不成熟的想法是，使用两个数组，根据位置存储不同的key和value
// 后来觉得应该直接用对象，存储key 和 value
var Map= function() {
    this.data = [{
        key: 'Map里面的key',
        value: 'Map里面的value'
    }]
}

let map 