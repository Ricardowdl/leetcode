/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
const merge = (left, right) => {
    const node = new ListNode(0);
    let curNode = node;
    while(left && right){
        if(left.val < right.val){
            curNode.next = left;
            left = left.next;
        }else{
            curNode.next = right;
            right = right.next;
        }
        // 关键错误修正：必须移动 curNode 指针
        curNode = curNode.next;
    }

    // 剩余部分直接拼接，不需要循环遍历
    if(left){
        curNode.next = left;
    }
    if(right){
        curNode.next = right;
    }

    return node.next;
}

var sortList = function(head) {
    if(!head || !head.next){
        return head
    }

    // 找中点
    let slow = head;
    let fast = head.next;
    while(fast && fast.next){
        slow = slow.next;
        fast = fast.next.next;
    }
    

    const leftNode = head;
    const rightNode = slow.next;
    slow.next = null;

    const left = sortList(leftNode);
    const right = sortList(rightNode);

    return merge(left, right);

}