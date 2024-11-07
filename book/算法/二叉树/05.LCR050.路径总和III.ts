// https://leetcode.cn/problems/6eUYwP/description/
// 2024.11.3
class TreeNode {
  val: string | number | undefined = undefined;
  left: TreeNode | null = null;
  right: TreeNode | null = null;

  constructor(val: string | number) {
    this.val = val;
  }
}

function pathSum(root: TreeNode | null, targetSum: number): number {
  let count = 0;
  // 获取从头结点开始，值为 targetSum 的路径个数
  const sumInfo = (root, preSum) => {
      if(root) {
          let rootSum = root.val + preSum;
          if (rootSum === targetSum) {
              count = count + 1;
          }
          sumInfo(root.left, rootSum);
          sumInfo(root.right, rootSum);
      }
  }

  const dfs = (root) => {
      if (root) {
          sumInfo(root, 0);
          dfs(root.left);
          dfs(root.right);
      }
  }
  dfs(root);
  return count;
};