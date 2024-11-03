// 题目描述：https://leetcode.cn/problems/cuyjEf/description/

// 2024.11.3
class Solution {
    arr = [];
    lengthArr = [];
    total = 0;

    constructor(w: number[]) {
        const total = w.reduce((pre, temp) => pre + temp);
        this.total = total;
        let last = 0;
        this.arr = w;
        this.lengthArr = w.map(item => {
            let pre = last;
            last = last + item;
            return pre;
        });
    }

    pickIndex(): number {
        const random = Math.floor(Math.random() * this.total);
        let left = 0;
        let right = this.lengthArr.length - 1;
        let mid = 0;
        while(left <= right) {
            mid = Math.floor((left+ right) / 2);
            if (this.lengthArr[mid] === random) {
                return mid;
            } else if (this.lengthArr[mid] < random) {
                left = mid + 1;
            } else {
                right = mid - 1;
            }
        }
        return right;
    }
}