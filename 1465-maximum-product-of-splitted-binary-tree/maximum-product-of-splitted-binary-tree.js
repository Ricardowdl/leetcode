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
var maxProduct = function(root) {
    const SumArr = []; // 每个子树的总和
    const dfs = (node) => {
        if(node === null){
            return 0
        }
        let treeSum = 0;
        const leftSum = dfs(node.left);
        const rightSum = dfs(node.right);
        treeSum = leftSum + rightSum + node.val
        SumArr.push(treeSum)
        return treeSum;
    }
    dfs(root)
    console.log('SumArr', SumArr)

    SumArr.sort((a,b)=> b - a)
    // SumArr的第一是树的和
    const rootSum = SumArr[0];
    SumArr.shift();
    let res = 0;
    for(const sum of SumArr){
        res = Math.max(res , (rootSum - sum) * sum);
    }

    return Number(BigInt(res) % 1000000007n);
};