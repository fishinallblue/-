// https://leetcode.cn/problems/xx4gT2/
// 2024.11.5
function findKthLargest(arr: number[], k: number): number {
    const swap = (i, j) => {
        const temp = arr[i];
        arr[i] = arr[j];
        arr[j] = temp;
    }
    // 大数往前送
    let res
    const quickSort = (start, end) => {
        if(start <= end) {
            let i = start - 1;
            let j = start;
            const target = Math.floor((start + end) / 2);
            swap(target, end);
            while(j <= end) {
                if (arr[j] >= arr[end]) {
                    i++;
                    swap(i, j);
                }
                j++;
            }
            if (i === k - 1) {
                res = arr[i];
            } else if (i < k - 1) {
                quickSort(i+1, end);
            } else {
                quickSort(start, i -1);
            }
        }
    }
    quickSort(0, arr.length - 1);
    return res;
};