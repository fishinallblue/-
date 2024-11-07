// https://leetcode.cn/problems/pOCWxh/
// 2024.11.3
class TreeNode {
  val: string | number | undefined = undefined;
  left: TreeNode | null = null;
  right: TreeNode | null = null;

  constructor(val: string | number) {
    this.val = val;
  }
}

function pruneTree(root: TreeNode | null): TreeNode | null {
  if (root) {
      root.left = pruneTree(root.left);
      root.right = pruneTree(root.right);
      if (root.val === 0 && !root.left && !root.right) {
          root = null;
      }
  }
  return root;
};