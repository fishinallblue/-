// 1 工厂模式: 用户并不关心创建的过程，所以把创建实例的方法隐藏在工厂中，只是暴露一个传参的接口
// 2 单例模式: 核心就是保证全局只有一个对象可以访问

class Singlten {
    constructor() {

    }
}
Singlten.getInstance = function() {
    let instance;
    return function() {
        if (instance) {
            return instance;
        }
        return new Singlten();
    }
}()

// 适配器模式： 如果两个接口不兼容的话，使用适配器，包装一层实现两个接口的正常协作

// 装饰模式: 不需要改变已有的接口，作用是给对象添加功能。
// 就像我们经常需要给手机戴个保护套防摔一样，不改变手机自身，给手机添加了保护套提供防摔功能。
function readonly(target, key, descriptor) {
    descriptor.writable = false
    return descriptor
}
  
class Test {
    @readonly
    name = 'yck'
}
  
let t = new Test()
// 代理模式
// 发布-订阅模式
// 外观模式