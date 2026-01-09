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
 * @return {TreeNode}
 */
var subtreeWithAllDeepest = function(root) {
    const dfs = (node) => {
        if(!node){
            return [0, node];
        }
 
        const [leftDeep, leftLca] = dfs(node.left);
        const [rightDeep, rightLca] = dfs(node.right);

        if(leftDeep > rightDeep){
            return [leftDeep + 1, leftLca];
        }
        if(rightDeep > leftDeep){
            return [rightDeep + 1, rightLca]
        }

        return [rightDeep + 1, node]
    }

    const [dep, node] = dfs(root);
    return node
};