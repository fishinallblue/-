// 函数节流
throttle = function (fn, interval) {
    var timer = null;
    var firstTime = true;
    return function() {
        // 这一步的操作是为了保证使用onresize输入的参数
        var args = arguments,
        __me = this; 
        console.log(args);
        if (timer) {
            return;
        }

        if (firstTime) {
            fn.apply(__me, args); 
            firstTime = false;
        }

        timer = setTimeout(function() {
            clearTimeout(timer);
            timer = null;
            fn.apply(__me, args); 
        }, interval || 500);
    }
};

window.onresize = throttle(function(){
    console.log( 1 );
   }, 500 ); 
