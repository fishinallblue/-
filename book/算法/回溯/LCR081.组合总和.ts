// https://leetcode.cn/problems/Ygoe9J/
function combinationSum(candidates: number[], target: number): number[][] {
    let res = [];
    const getAll = (target, temp, index) => {
        if (target === 0) {
            res.push([...temp]);
        } else if (index < candidates.length && target > 0) {
            temp.push(candidates[index]);
            getAll(target - candidates[index], temp, index);
            temp.pop();
            getAll(target, temp, index + 1);
        }
    }
    getAll(target, [], 0);
    return res;
};