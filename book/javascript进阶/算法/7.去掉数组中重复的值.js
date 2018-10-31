// 去掉数组中重复的值
var info = function(arr) {
    if (!Array.isArray(arr) || arr.length == 1) {
        return arr;
    }
    for(var i=0; i< arr.length - 1; i++) {
        for(var j = i + 1; j< arr.length; j++) {
            if (arr[i] == arr[j]) {
                arr.splice(j, 1);
                j--;
            }
        }
    }
    return arr;
}

var arr = [1,13,24,11,11,14,1,2];
console.log(info(arr));