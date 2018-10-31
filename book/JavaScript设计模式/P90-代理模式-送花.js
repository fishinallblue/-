var Flower = function () { };
var xiaoming = {
    sendFlower: function (target) {
        var flower = new Flower();
        target.receiveFlower(flower);
    }
};
var B = {
    receiveFlower: function (flower) {
        A.listengoodMood(function(){
            A.receiveFlower(flower);
        })
    }
};
var A = {
    // 回调监听
    listengoodMood: function(fn) {
        setTimeout(function() {
            fn();
        }, 10000)
    },
    receiveFlower: function (flower) {
        console.log('收到花 ' + flower);
    }
};
xiaoming.sendFlower(B);