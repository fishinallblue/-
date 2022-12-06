// 算法描述： 
// 1. 把 n 个记录看成 n 个长度为 l 的有序子表 
// 2. 进行两两归并使记录关键字有序，得到 n/2 个长度为 2 的有序子表 
// 3. 重复第 2 步直到所有记录归并成一个长度为 n 的有序表为止。


// 5 6 3 1 8 7 2 4
// [5,6,3,1], [8,7,2,4]
// [5,6] [3,1] [8,7] [2,4]
// [5,6] [1,3] [7,8] [2,4]
// [5,6,1,3] [7,8,2,4]
// [1,3,5,6] [2,4,7,8]
// [1,2,3,4,5,6,7,8]

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

// 真的好难啊，不会
// 2022年 12月
// 这个性能差一点，想一想性能好一些的
const sort1 = (arr) => {
    if (arr.length <= 2) {
        if (arr.length === 2) {
            if (arr[0] > arr[1]) {
                const temp = arr[1]
                arr[1] = arr[0]
                arr[0] = temp
            }
        }
        return arr;
    } else {
        let mid = parseInt(arr.length / 2);
        let left = arr.splice(0, mid)
        let right = arr;
        return conbineSort(sort1(left), sort1(right))
    }

} 

const conbineSort = (left, right) => {
    let res = []
    let i = 0; j = 0;
    while(i< left.length && j < right.length) {
        if (left[i] < right[j]) {
            res.push(left[i])
            i++
        } else {
            res.push(right[j])
            j++
        }
    }
    while(i< left.length ) {
        res.push(left[i])
        i++
    }
    while(j< right.length ) {
        res.push(right[j])
        j++
    }
    return res;
}
console.log(sort1([5, 6, 3, 1, 8, 7, 2, 4]))