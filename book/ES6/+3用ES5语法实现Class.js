// 首先明确es5和es6 class定义对象的区别

// ① class的构造函数必须使用new进行调用，普通构造函数不用new也可执行。
// ② class不存在变量提升，es5中的function存在变量提升。
// ③ class内部定义的方法不可枚举，es5在prototype上定义的方法可以枚举



// 所以首先，检测一下是否通过new
// es5 实现class
// 1.对new方法进行判定
function _calssCallCheck(sub ,constr) {
    if (!(sub instanceof constr)) {
        throw new Error('必须通过new')
    }
}

function defineProperties(target, props) {
    for(let i=0; i< props.length; i++) {
        var descriptor = props[i]; 
         // 默认不可枚举
        descriptor.enumerable = descriptor.enumerable || false;
        descriptor.value = props[i].value;
        Object.defineProperty(target, key, descriptor)
    }
}

function _creatClass (Constructor, protoPropeties, staticPropeties) {
    if (protoPropeties) {
        defineProperties(Constructor.prototype, protoPropeties)
    }

    if (staticPropeties) {
        defineProperties(Constructor, staticPropeties)
    }
}
let Animal = function() {
    function Animal(type) {
        _calssCallCheck(this, Animal);
        this.type = type;
    }
    // 第一个参数定义哪个类，第二个参数定义共有属性，第三个参数是类上的属性
    _creatClass(Animal, [{
        key: 'eat',
        value: function() {
            console.log('吃')
        }
    }, {
        key: 'drink',
        value: function() {
            console.log('喝')
        }
    }], [{
        key: 'flag',
        value: function() {
            console.log('好玩')
        }
    }]); 
    return Animal;
}()
let animal = new Animal();
function _inherits(subClass, parentClass) {
    subClass.prototype = Object.create(parentClass.prototype, {
        Constructor: {value: subClass}
    });
    subClass.__proto__ = parentClass;
}

let Cat = function(Animal) {
    // 继承公有的方法
    _inherits(Cat, Animal);
    function Cat() {
        _calssCallCheck(this, cat);
        // 实例上的属性已经继承了
        Animal.call(this);
    }
    return Cat;
}(Animal)
let cat = new Cat('哺乳类');
