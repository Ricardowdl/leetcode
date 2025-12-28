var sortList = function(head) {
    // 递归终止条件：链表为空或只有一个节点
    if (!head || !head.next) {
        return head;
    }

    // 1. 使用快慢指针寻找中间节点
    let slow = head;
    let fast = head.next;
    while (fast && fast.next) {
        slow = slow.next;
        fast = fast.next.next;
    }

    // 2. 断开链表，分为两半
    let mid = slow.next;
    slow.next = null;

    // 3. 递归排序左右两部分
    let left = sortList(head);
    let right = sortList(mid);

    // 4. 合并两个有序链表
    return merge(left, right);
};

// 辅助函数：合并两个有序链表
var merge = function(l1, l2) {
    let dummy = new ListNode(0);
    let curr = dummy;

    while (l1 && l2) {
        if (l1.val < l2.val) {
            curr.next = l1;
            l1 = l1.next;
        } else {
            curr.next = l2;
            l2 = l2.next;
        }
        curr = curr.next;
    }

    if (l1) curr.next = l1;
    if (l2) curr.next = l2;

    return dummy.next;
};