// 题目描述：https://leetcode.cn/problems/jJ0w9p/description/
// 2024.11.3
function mySqrt(x: number): number {
    if (x === 0 || x === 1) {
        return x; 
    }
    let left = 0;
    let right = x;
    while(left <= right) {
        let mid = Math.floor((left + right) / 2);
        let temp = mid * mid;
        if (temp === x) {
            return mid;
        } else if (temp < x) {
            left = mid + 1;
        } else {
            right = mid - 1;
        }
    }
    return right;
};