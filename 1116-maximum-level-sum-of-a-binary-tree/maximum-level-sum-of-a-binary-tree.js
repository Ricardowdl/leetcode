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
var maxLevelSum = function(root) {
    let curLevel = [];
    let nextLevel = [root];
    const count = [];
    while(nextLevel.length > 0){
        let sum = 0;
        curLevel = nextLevel;
        nextLevel = [];
        for(const node of curLevel){
            sum = sum + node.val;
            if(node.left){
                nextLevel.push(node.left)
            }
            if(node.right){
                nextLevel.push(node.right)
            }
        }
        count.push(sum)
    }
    console.log('count', count)
    let max = count[0];
    for(const num of count){
        if(num > max){
            max = num
        }
    }
    return count.indexOf(max)+1
};