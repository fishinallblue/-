// 题目描述：https://leetcode.cn/problems/find-first-and-last-position-of-element-in-sorted-array/description/
// 2024.11.3
function searchRange(nums: number[], target: number): number[] {
    const findFirstOrLast = (first: 0 | 1) => {
        let left = 0;
        let right = nums.length - 1;
        while(left <= right) {
            let mid = Math.floor((left + right) / 2);
            if (nums[mid] === target) {
                if (first === 0) {
                    if (mid === 0 || nums[mid - 1] < nums[mid]) {
                        return mid;
                    }
                    right = mid - 1;
                } else {
                    if (mid === nums.length - 1 || nums[mid + 1] > nums[mid]) {
                        return mid;
                    }
                    left = mid + 1;
                }

            } else if (nums[mid] < target) {
                left = mid + 1;
            } else {
                right = mid - 1;
            }
        }
        return -1;
    }
    return [findFirstOrLast(0), findFirstOrLast(1)];
};