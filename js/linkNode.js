var reverseList = function(head) {
    let idx = 0;
    if (head === null || head.next === null) return head
    let start = head.next;
    while (start.next) {
        console.log('while', start)
        let next = start.next;
        let curr = start
        // 链表的方向反转
        next.next = curr

        // 移动位置
        start = start.next
    }
    head.next = null;
    return start;
};