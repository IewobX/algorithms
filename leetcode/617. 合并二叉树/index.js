// https://leetcode-cn.com/problems/merge-two-binary-trees/

/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root1
 * @param {TreeNode} root2
 * @return {TreeNode}
 */
var mergeTrees = function(root1, root2) {
    let p = root1, q = root2;

    const dfs = () => {
        p.val += q.val;
        if(q.left) {
            if(p.left) {
                p.left.val += q.left.val;
                p = p.left;
                q = q.left;
                dfs();
            } else {
                p.left = q.left;
                return;
            }
        }
        if(q.right) {
            if(p.right) {
                p.right.val += q.right.val;
                p = p.right;
                q = q.right;
                dfs();
            } else {
                p.right = q.right;
                return;
            }
        }
        return;
    }
    dfs();
    return root1;
};