function combinationSum2(candidates: number[], target: number): number[][] {
    let res = [];
    const sortArr = candidates.sort((pre, next) => {
        return pre - next;
    });

    const findLastIndex = (sortArr, index) => {
        const temp = sortArr[index];
        let lastIndex = index
        while(sortArr[index] === sortArr[lastIndex] && lastIndex < sortArr.length) {
            lastIndex ++;
        }
        return lastIndex - 1;
    }
    const getAll = (tempArr, index, target) => {
        if (target === 0) {
            res.push(tempArr);
        } else if (target > 0 && index < sortArr.length) {
            const endIndex = findLastIndex(sortArr, index);
            const count = endIndex - index + 1; // 找出跟index数值一样的数有几个
            for(let i =0; i <= count; i++) {
                getAll(tempArr, index + count, target - i * sortArr[index])
                tempArr = [...tempArr, sortArr[index]];
            }
        }
    }
    getAll([], 0, target);
    return res;
};