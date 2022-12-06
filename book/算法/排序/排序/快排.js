// 算法描述：
// 在数据集之中，选择一个元素作为”基准”（pivot）。
// 所有小于”基准”的元素，都移到”基准”的左边；所有大于”基准”的元素，都移到”基准”的右边。
// 这个操作称为分区 (partition)操作，分区操作结束后，基准元素所处的位置就是最终排序后它的位置。
// 对”基准”左边和右边的两个子集，不断重复第一步和第二步，直到所有子集只剩下一个元素为止。

// 5 6 3 1 8 7 2 4
// pivot
// |
// 5 6 3 1 9 7 2 4
// |
// storeIndex

// 5 6 3 1 9 7 2 4//将5同6比较，大于则不更换
// |
// storeIndex

// 3 6 5 1 9 7 2 4//将5同3比较，小于则更换
//   |
//   storeIndex

// 3 6 1 5 9 7 2 4//将5同1比较，小于则不更换
//     |
//    storeIndex
// ...

// 3 6 1 4 9 7 2 5//将5同4比较，小于则更换
//       |
//       storeIndex

// 3 6 1 4 5 7 2 9//将标准元素放到正确位置
//       |
// storeIndex pivot


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
