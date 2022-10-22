/*
 * @lc app=leetcode.cn id=367 lang=javascript
 *
 * [367] 有效的完全平方数
 *
 * https://leetcode.cn/problems/valid-perfect-square/description/
 *
 * algorithms
 * Easy (44.83%)
 * Likes:    448
 * Dislikes: 0
 * Total Accepted:    192.4K
 * Total Submissions: 429.1K
 * Testcase Example:  '16'
 *
 * 给定一个 正整数 num ，编写一个函数，如果 num 是一个完全平方数，则返回 true ，否则返回 false 。
 * 
 * 进阶：不要 使用任何内置的库函数，如  sqrt 。
 * 
 * 
 * 
 * 示例 1：
 * 
 * 
 * 输入：num = 16
 * 输出：true
 * 
 * 
 * 示例 2：
 * 
 * 
 * 输入：num = 14
 * 输出：false
 * 
 * 
 * 
 * 
 * 提示：
 * 
 * 
 * 1 
 * 
 * 
 */

// @lc code=start
/**
 * @param {number} num
 * @return {boolean}
 */
var isPerfectSquare = function(num) {
  if (num === 1)  return true
  let left = 1 , right =Math.floor(num / 2)
  while (left <= right) {
    mid = Math.floor( ( left + right )  / 2) 
    if (mid * mid < num) {
      left = mid + 1
    } else if (mid * mid > num) {
      right = mid - 1
    } else {
      return true
    }
  } 
  return false
};
// @lc code=end

