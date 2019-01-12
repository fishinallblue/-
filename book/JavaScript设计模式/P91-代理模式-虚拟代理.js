// 保护代理： 代理B可以帮助A过滤一些请求，比如送花中年龄太大或者没有宝马的
// 这种请求直接在代理B中被拒绝掉，就叫保护代理


// 虚拟代理： 如果new flower是个昂贵的操作，那么可以把new flower交给B处理
// 保证只有在需要的时候，才会执行new flower
// 是最常用的代理模式


// 送花问题的修改
var Flower = function () { };
var xiaoming = {
    sendFlower: function (target) {
        target.receiveFlower();
    }
};
var B = {
    receiveFlower: function () {
        A.listengoodMood(function () {
            var flower = new Flower();
            A.receiveFlower(flower);
        })
    }
};
var A = {
    // 回调监听
    listengoodMood: function (fn) {
        setTimeout(function () {
            fn();
        }, 10000)
    },
    receiveFlower: function (flower) {
        console.log('收到花 ' + flower);
    }
};
xiaoming.sendFlower(B);

// 虚拟代理实现图片预加载
var myImage = (function () {
    var imgNode = document.createElement('img'); 
    document.body.appendChild(imgNode);
    return {
        setSrc: function (src) {
            imgNode.src = src;
        }
    }
})();

// 引入代理
var proxyImage = (function () {
    var img = new Image;
    img.onload = function() {
        myImage.setSrc()
    }
})();

// 虚拟代理实现 惰性加载
var cache = []
var miniConsole = {
    log: function() {
        var args = arguments;
        cache.push(function() {
            return miniConsole.log.apply(miniConsole, args);
        })
    }
}
// 惰性加载 优化后的代码
var handler = function(ev) {
    if (ev.keyCode == 113) {
        var script = document.createElement('script');
        script.onload = function() {
            for (var i=0; i< cache.length; i++) {
                cache[i]();
            }
        }
        script.src = 'dddd';
        document.getElementsByTagName( 'head' )[0].appendChild( script ); 
    }
}