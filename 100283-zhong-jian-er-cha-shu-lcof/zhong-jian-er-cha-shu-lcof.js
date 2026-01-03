var deduceTree = function(preorder, inorder) {
    if(preorder.length === 0){
        return null
    }
    const dfs = (mid, left, right) => {
        
        if(right - left === 0){
            const node = new TreeNode(preorder[mid])
            return node
        }
        if(right < left){
            return null
        }

        const node = new TreeNode(preorder[mid]);

        const midPreIndex = inorderObj[preorder[mid]];

        node.left = dfs(mid+1, left, midPreIndex - 1);
        const leftRootLen = midPreIndex - left ;

        node.right = dfs(mid+1+leftRootLen, midPreIndex+1, right);
        return node
    }

    const inorderObj = {}
    for(let i = 0; i < inorder.length; i++){
        inorderObj[inorder[i]] = i;
    }
    return dfs(0, 0, preorder.length - 1);
    
};
