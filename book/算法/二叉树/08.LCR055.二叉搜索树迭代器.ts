// https://leetcode.cn/problems/kTOapQ/
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
class BSTIterator {
    root = null;
    stack = [];
    constructor(root: TreeNode | null) {
        this.root = root;
    }

    next(): number {
        const getNext = () => {
            while(this.root || this.stack.length) {
                while(this.root) {
                    this.stack.push(this.root);
                    this.root = this.root.left;
                }
                this.root = this.stack.pop();
                return this.root.val;
            }
        }
        const val = getNext();
        this.root = this.root.right;
        return val;
    }

    hasNext(): boolean {
        if (this.root || this.stack.length) {
            return true;
        }
        return false;
    }
}