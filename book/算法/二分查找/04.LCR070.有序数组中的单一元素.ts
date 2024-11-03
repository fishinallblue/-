// 题目描述：https://leetcode.cn/problems/skFtm2/description/
// 2024.11.1
// 想法：跟书上思路不同，我是根据当前参数的奇偶性做的
// 正常情况如果是偶数，那么跟在偶数后面的那个奇数值一定相同，如果不同，就表示前面有那个唯一数，如果相同，表示后面有那个唯一数
function singleNonDuplicate(nums: number[]): number {
    let left = 0;
    let right = nums.length - 1;
    while(left < right) {
        let mid = Math.floor((left + right) / 2);
        if (mid % 2 === 0) {
            if (nums[mid] === nums[mid + 1]) {
                left = mid + 2;
            } else {
                right = mid;
            }
        } else {
            if (nums[mid] === nums[mid - 1]) {
                left = mid + 1;
            } else {
                right = mid;
            }
        }
    }
    return nums[left];
};