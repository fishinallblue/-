// 算法描述： 
// 1. 希尔排序是一种插入排序，它是简单插入排序经过改进之后的一个更高效的版本，也称为缩小增量排序
// 希尔排序是把记录按下标的一定增量分组，对每组使用直接插入排序算法排序；
// 随着增量逐渐减少，每组包含的关键词越来越多，当增量减至1时，整个文件恰被分成一组，算法便终止。
// 比如 [8, 9, 1, 7, 2, 3, 5, 4, 6, 0] 初始的增量是  gap=length/2 = 5，也就是分为五组
// 五组分别是[8, 3] [9, 5], [1, 4], [7, 6], [2, 0]
// 组内使用插入排序，变成 [3, 8] [5, 9] [1,4] [6, 7], [0,2]
// [3, 5, 1, 6, 0, 8, 9 ,4, 7 ,2]
// 然后减小增量，gap = gap / 2 ，也就是分成两组
// [3, 1, 0, 9, 7] 和 [5, 6, 8, 4, 2] 组内采用直接插入排序
// 得到 [0, 1, 3, 7, 9] 和 [2, 4, 5, 6, 8]
// [0, 2, 1, 4, 3, 5, 7, 6, 9, 8] 继续对这些数据进行插入排序
// 得到最后结果 test

function merge (arr, start1, end1, start2, end2) {
    var result = [];
    var pos1 = start1;
    var pos2 = start2;
    while(pos1 <= end1 && pos2 <= end2) {
        if (arr[pos1] < arr[pos2]) {
            result.push(arr[pos1]);
            pos1 ++;
        } else {
            result.push(arr[pos2]);
            pos2 ++;
        }
    }
    for(var i=pos1; i<= end1; i++) {
        result.push(arr[i]);
    }
    for(var i=pos2; i<= end2; i++) {
        result.push(arr[i]);
    }
    for(var i = start1; i<= end2; i++) {
        arr[i] = result[i - start1];
    }
    return arr;
}

function mSort($arr, $left, $right) {
 
    if($left < $right) {
        //说明子序列内存在多余1个的元素，那么需要拆分，分别排序，合并
        //计算拆分的位置，长度/2 去整
        var $center = Math.floor(($left+$right) / 2);
        //递归调用对左边进行再次排序：
        mSort($arr, $left, $center);
        //递归调用对右边进行再次排序
        mSort($arr, $center+1, $right);
        //合并排序结果
        merge($arr, $left, $center, $center + 1, $right);
    }
}

function sort(arr) {
    var len = arr.length;//求得数组长度
 
    mSort(arr, 0, len-1);
    return arr;
}
console.log(sort([5, 6, 3, 1, 8, 7, 2, 4]))

// 真的好难啊，不会
