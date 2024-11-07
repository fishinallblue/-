// 二叉树层序遍历
// 2024.11.3 写出来了，但是这个好像不是回溯，就是单纯的循环
function subsets(nums: number[]): number[][] {
  let result = [[]];
  for(let i=0; i< nums.length; i++) {
      let count = 0;
      while(count < Math.pow(2, i)) {
          const info = result.shift();
          result.push(info);
          result.push([...info, nums[i]]);
          count ++;
      }
  }
  return result;
};

// 思考下怎么用回溯的思想解决问题
function subsets1(nums: number[]): number[][] {
  let result = [];
  let count = 0;
  const dfs = (root, count) => {
      if (count === nums.length) {
          result.push([...root]);
      } else if (count < nums.length) {
          dfs(root, count + 1);
          root.push(nums[count]);
          dfs(root, count + 1);
          root.pop();
      }

  }
  dfs([], 0);
  return result;
};