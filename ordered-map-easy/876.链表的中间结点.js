/*
 * @lc app=leetcode.cn id=876 lang=javascript
 *
 * [876] 链表的中间结点
 *
 * https://leetcode.cn/problems/middle-of-the-linked-list/description/
 *
 * algorithms
 * Easy (70.35%)
 * Likes:    726
 * Dislikes: 0
 * Total Accepted:    325.1K
 * Total Submissions: 462.4K
 * Testcase Example:  '[1,2,3,4,5]'
 *
 * 给定一个头结点为 head 的非空单链表，返回链表的中间结点。
 * 
 * 如果有两个中间结点，则返回第二个中间结点。
 * 
 * 
 * 
 * 示例 1：
 * 
 * 
 * 输入：[1,2,3,4,5]
 * 输出：此列表中的结点 3 (序列化形式：[3,4,5])
 * 返回的结点值为 3 。 (测评系统对该结点序列化表述是 [3,4,5])。
 * 注意，我们返回了一个 ListNode 类型的对象 ans，这样：
 * ans.val = 3, ans.next.val = 4, ans.next.next.val = 5, 以及 ans.next.next.next
 * = NULL.
 * 
 * 
 * 示例 2：
 * 
 * 
 * 输入：[1,2,3,4,5,6]
 * 输出：此列表中的结点 4 (序列化形式：[4,5,6])
 * 由于该列表有两个中间结点，值分别为 3 和 4，我们返回第二个结点。
 * 
 * 
 * 
 * 
 * 提示：
 * 
 * 
 * 给定链表的结点数介于 1 和 100 之间。
 * 
 * 
 */

// @lc code=start
/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var middleNode = function(head) {
  // 定义快慢指针, 同侧出发，初始为head
  let fast = head
  let slow = head
  // 快指针每次2步，慢指针每次1步
  // 快指针到达终点时，慢指针所在位置极为中点
  while (fast && fast.next) {
    fast = fast.next.next
    slow = slow.next    
  }
  // 时间复杂度：O(N)，其中 N 是给定链表的结点数目。
  // 空间复杂度：O(1)，只需要常数空间存放 slow 和 fast 两个指针。
  return slow
};
// @lc code=end

