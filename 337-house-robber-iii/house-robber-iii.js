/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number}
 */
var rob = function(root) {
    const dfs = (node) => {
        if(node === null){
            return [0,0];
        }
        const left = dfs(node.left);
        const right = dfs(node.right);
        const select = node.val + left[1] + right[1]; //选择的情况下，加上当前节点的值和左右子节点不被选择的最大值
        const notSelet = Math.max(left[0], left[1]) + Math.max(right[0], right[1]);
        return [select, notSelet];
    }

    const rootStatus = dfs(root);
    return Math.max(rootStatus[0], rootStatus[1]);
};