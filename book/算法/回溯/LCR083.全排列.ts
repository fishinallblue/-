// https://leetcode.cn/problems/VvJkup/
// 用的插入法，跟书上的思路不同
function permute(nums: number[]): number[][] {
    let res = [];
    const getAll = (index, temp) => {
        if (index >= nums.length) {
            res.push([...temp]);
        } else {
            const num = nums[index];
            for(let i = 0; i<= temp.length; i++) {
                temp.splice(i, 0, nums[index]);
                getAll(index + 1, temp);
                temp.splice(i ,1);
            }
        }
    }
    getAll(0, []);
    return res;
};