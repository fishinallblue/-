// 算法描述： 直接从待排序数组中选择一个最小（或最大）数字，放入新数组中

// [1] 5 6 3  8 7 2 4 
// [1,2] 5 6 3  8 7  4 
// [1,2,3] 5 6  8 7 2 4 
// [1,2,3,4] 5 6 8 7
// [1,2,3,4,5] 6  8 7 
// [1,2,3,4,5,6] 8 7  
// [1,2,3,4,5,6,7] 8  
// [1,2,3,4,5,6,7,8]

function sort(arr) { 
    var result = [];
    while(arr.length >= 1) {
        var min = arr[0];
        var pos = 0;
        for(var i=0; i< arr.length; i++) {
            if (arr[i] < min) {
                min = arr[i];
                pos = i;
            }
        }
        var temp = arr.splice(pos, 1);
        result.push(temp[0]);
    }
    return result;
}
console.log(sort([5, 6, 3, 1, 8, 7, 2, 4]))

