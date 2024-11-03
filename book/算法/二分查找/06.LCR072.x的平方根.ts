// 题目描述：https://leetcode.cn/problems/nZZqjQ/description/
// 2024.11.3
function minEatingSpeed(piles: number[], h: number): number {
    const canEatAll = (speed) => {
        let totalH = 0;
        for(let i = 0; i< piles.length; i++) {
            totalH = totalH + Math.ceil(piles[i] / speed);
        }
        return totalH <= h
    }
    const max = Math.max(...piles);
    let left = 1;
    let right = max;
    while(left <= right) {
        let mid = Math.floor((left + right) / 2);
        if (canEatAll(mid)) {
            if (!canEatAll(mid -1)) {
                return mid;
            }
            right = mid - 1;
        } else {
            left = mid + 1;
        }
    }
    return left;

};