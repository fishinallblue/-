// es6 的类都是通过new来实现的
// 首先，检测一下是否通过new
// 基本的思想就是在外面套上一层判断的函数
// es5 实现class
function _calssCallCheck(sub ,constr) {
    if (!(sub instanceof constr)) {
        throw new Error('必须通过new')
    }
}
function defineProperties(target, props) {
    for(let i=0; i< props.length; i++) {
        Object.defineProperty(target, key,{
            value: props[i].value
        })
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
