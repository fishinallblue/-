// https://leetcode.cn/problems/3Etpl5/description/
// 2024.11.3
class TreeNode {
  val: string | number | undefined = undefined;
  left: TreeNode | null = null;
  right: TreeNode | null = null;

  constructor(val: string | number) {
    this.val = val;
  }
}

function sumNumbers(root: TreeNode | null): number {
  if (!root) {
      return 0;
  }
  let allSums = 0;
  const sumInfo = (root, val) => {
      if (root) {
          const newVal = val * 10 + root.val;
          if (!root.left && !root.right) {
              allSums = allSums + newVal;
          } else {
              sumInfo(root.left, newVal);
              sumInfo(root.right, newVal);
          }
      }
  }
  sumInfo(root, 0)
  return allSums;
};