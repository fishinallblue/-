// https://leetcode.cn/problems/P5rCT8/
// 2024.11.3
/**
 * Definition for a binary tree node.
 * class TreeNode {
 *     val: number
 *     left: TreeNode | null
 *     right: TreeNode | null
 *     constructor(val?: number, left?: TreeNode | null, right?: TreeNode | null) {
 *         this.val = (val===undefined ? 0 : val)
 *         this.left = (left===undefined ? null : left)
 *         this.right = (right===undefined ? null : right)
 *     }
 * }
 */

function inorderSuccessor(root: TreeNode | null, p: TreeNode | null): TreeNode | null {
  let stack = []
  let get = 0;
  const getNode = (root) => {
      while(root || stack.length) {
          while(root) {
              stack.push(root);
              root = root.left;
          }
          root = stack.pop();
          if (get === 1) {
              return root;
          }
          if (root === p) {
              get = 1;
          }
          root = root.right;
      }
      return null;
  }
  return getNode(root);
};