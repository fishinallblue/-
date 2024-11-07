// https://leetcode.cn/problems/opLdQZ/description/
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
// 思路：先中序遍历到一个数组里面，然后反向双指针获得节点信息
function findTarget(root: TreeNode | null, k: number): boolean {
   let arr = [];
   const dfs = (root) => {
       if (root) {
           dfs(root.left);
           arr.push(root.val);
           dfs(root.right);
       }
   }
   dfs(root);
   const findSum = () => {
       let start = 0;
       let end = arr.length - 1;
       while (start < end && start >= 0 && end < arr.length) {
           const sum = arr[start] + arr[end];
           if (sum === k) {
               return true;
           } else if (sum > k) {
               end = end - 1;
           } else {
               start = start + 1;
           }
       }
       return false;
   }
   return findSum();
};

// 优化思路：采用哈希表
function findTarget1(root: TreeNode | null, k: number): boolean {
    let arr = [];
    let map = {};
    let res = false;
    const dfs = (root) => {
        if (root) {
            dfs(root.left);
            const target = k - root.val;
            if (map[target]) {
                res = true;
            } else {
                map[root.val] = 1;
                dfs(root.right);
            }
        }
        return false;
    }
    dfs(root);
    return res;
};