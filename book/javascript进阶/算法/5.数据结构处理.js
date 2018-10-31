// 样例数据
 var data = {
    name: 'jack',
    child: [
        { name: 'jack1' },
        {
            name: 'jack2',
            child: [{
                name: 'jack2-1',
                child: { name: 'jack2-1-1' }
            }, {
                name: 'jack2-2'
            }]
        },
        {
            name: 'jack3',
            child: { name: 'jack3-1' }
        }
    ]
}
var result = [];
var infoChange = function(data) {
    if (data) {
        if (Array.isArray(data.child)) {
            for(var i = 0; i < data.child.length; i++) {
                infoChange(data.child[i]);
            }

            if (data.child.length >= 2) {
                result.push(data.name);
            }
        }
    }
}
infoChange(data)
console.log(result)