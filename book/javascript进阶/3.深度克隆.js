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

// 2024.10.30
function clone1 (o) {
    if (o instanceof RegExp) {
        return new RegExp(o.source, o.flags); // 这个可能记不住
    }
    if (o instanceof Date) {
        return new Date(o);
    }
    if (typeof o === 'function') {
        return function(...args) {
            return o.call(this, ...args);
        }
    }
    if (o === null) {
        return o;
    }
    if (typeof obj !== 'object') return obj;  // 普通常量直接返回
    let newObj = new o.constructor;
    // 如果key 值是symbol的，是没办法被for in 遍历到的
    // 所以要单独处理symbol的情况
    const symbolKeys = Object.getOwnPropertySymbols(o);
    symbolKeys?.forEach?.((key) => {
        newObj[key] = deepClone(obj[key]);
    })

    for(let i in o) {
        if (o.hasOwnProperty(i)) { // 这一步很重要，不要拷贝原型链上面的属性，for in 会自动遍历原型链的
            newO[i] = clone1(o[i]);
        }
    }
    return newO;

}

// 2024.11.21
const deepClone = (temp) => {
    let res;
    if (Array.isArray(temp)) {
        res = []
        for(let i = 0; i< temp.length; i++) {
            res.push(deepClone(temp[i]));
        }
    } else if (temp instanceof Date) {
        return new Date(temp);
    } else if (temp instanceof RegExp) {
        return new RegExp(temp.source, temp.flags);
    } else if (typeof temp === 'function') {
        return function(...args) {
           return temp.call(this, ...args);
        }
    } else if (typeof temp === 'symbol') {
        return Symbol(temp.description);
    } else if (typeof temp === 'object') {
        res = {};
        // 这里总是忘
        const symbolKeys = Object.getOwnPropertySymbols(temp);
        symbolKeys.forEach((symbolKey) => {
            res[symbolKey] = deepClone(temp[symbolKey]);
        })

        for(let i in temp) {
            if (temp.hasOwnProperty(i)) {
                res[i] = deepClone(temp[i]);
            }
        }
    } else {
        return temp;
    }
    return res;
}


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