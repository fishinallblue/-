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

// 2024.11.5
function quickSort(arr) {
    const swap = (i, j) => {
        const temp = arr[i];
        arr[i] = arr[j];
        arr[j] = temp;
    }
    const sortInfo = (start, end) => {
        if (start <= end) {
            let i = start - 1;
            let j = start;
            const target = arr[end];
            while(j<=end) {
                if (arr[j] <= target) {
                    i++;
                    swap(i, j);
                }
                j++;
            }
            sortInfo(start, i-1)
            sortInfo(i+1, end);
        }
    }
    sortInfo(0, arr.length - 1)
    return arr;
}
console.log(quickSort([2,5,1,3,4,9,7,8]));