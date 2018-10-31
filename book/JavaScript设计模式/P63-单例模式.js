// 一个比较低效的单例工厂
var ProxySingletonCreateDiv = (function(){
    var instance = null; 
    return function(html) {
        if (instance) {
            return instance;
        }
        instance = new CreateDiv(html);
        return instance;
    }
})();

var CreateDiv = function (html) {
    this.html = html;
    this.init();
};
CreateDiv.prototype.init = function () {
    console.log('llll')
};

     var a = new ProxySingletonCreateDiv( 'sven1' ); 
     var b= new ProxySingletonCreateDiv( 'sven2' );
console.log( a === b );

// 惰性单例:在合适的时候创建对象，并且只创建一个
var getSingle = function() {
    var result;
    return function(fn) {
        return result || (result = fn.apply(this, arguments));
    }
}()