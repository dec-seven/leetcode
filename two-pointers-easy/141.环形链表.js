/*
 * @LastEditTime: 2022-06-20 16:09:30
 * @Description: 
 */
/*
 * @lc app=leetcode.cn id=141 lang=javascript
 *
 * [141] 环形链表
 */

// @lc code=start
/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

/**
 * @param {ListNode} head
 * @return {boolean}
 */
var hasCycle = function(head) {
    // 定义快慢指针，初始都指向头结点head
    let fast  = head
    let slow = head;
    while (fast && fast.next){
        // 慢指针每次1步
        slow = slow.next;
        // 快指针每次2步 
        fast = fast.next.next;
        //快慢指针相遇，说明含有环
        if (slow == fast) {
            return true;
        }
    }
    return false
};
// @lc code=end

