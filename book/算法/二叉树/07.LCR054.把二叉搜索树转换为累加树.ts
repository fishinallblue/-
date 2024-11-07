// https://leetcode.cn/problems/w6cpku/description/
// 2024.11.4
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
function convertBST(root: TreeNode | null): TreeNode | null {
    let stack = [];
    let pre = 0;
    const getSum = (root) => {
        if (root) {
            getSum(root.right);
            pre = pre + root.val;
            root.val = pre;
            getSum(root.left);
        }
        return null;
    }
    getSum(root);
    return root;
};