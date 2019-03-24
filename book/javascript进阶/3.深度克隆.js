var clone = function(obj) {
    if (typeof obj == 'object') {
        var result = obj instanceof Array ? []: {};
        for(var i in obj) {
            result[i] = clone(obj[i]);
        }
        return result;
    } else {
        return obj;
    }
}

var obj = {
    name: 'hh',
    hh: [1, 2, 3, 5, 6],
    start: {
        hh: {
            name: 'lll'
        }
    },
    hhh: function() {
        console.log('kkk');
    }
}
console.log(clone(obj))


function parse(data) {
    let number = ['零', '一', '二', '三', '四', '五', '六', '七', '八', '九'];
    let unit = [{
        str: '万',
        num: 10000
    },{
        str: '千',
        num: 1000
    },{
        str: '百',
        num: 100
    },{
        str: '十',
        num: 10
    }]
    let result = 0;
    for(var i=0; i< data.length; i++) {
        if(number.indexOf(data[i]) !== 0) {
            let tempNum = number.indexOf(data[i]);
            let tempUnit = 1;
            for(var j=0; j< unit.length; j++) {
                if (unit[j].str == data[i+1]) {
                    tempUnit = unit[j].num;
                    i++;
                }
            }
            result = result + tempNum * tempUnit;
        }
    }
    return result;
    
}

console.log(parse('五万四千零三'));