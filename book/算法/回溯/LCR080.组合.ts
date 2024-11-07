// https://leetcode.cn/problems/uUsW3B/description/
function combine(n: number, k: number): number[][] {
    let result = [];
    const getAll = (n, k, pick) => {
        if (n > 0) {
            if (k === 0) {
                result.push([...pick]);
            } else if (k === n) {
                let pickArr = [...pick];
                for(let i = 1; i<=k; i++) {
                    pickArr.push(i);
                }
                result.push(pickArr);
            } else if (k < n) {
                getAll(n-1,k, pick)
                pick.push(n);
                getAll(n-1, k-1, pick);
                pick.pop();
            }
        }
    }
    getAll(n, k, []);
    return result;
};