// 找出数组中最大的差值
function biggest (arr) {
    if (!Array.isArray(arr) || arr.length <=1) {
        return 0;
    }
    var max = Math.max.apply(Math, arr);
    var min = Math.min.apply(Math, arr);
    return max - min;
}