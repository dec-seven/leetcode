/*
 * @lc app=leetcode.cn id=775 lang=javascript
 *
 * [775] 全局倒置与局部倒置
 *
 * https://leetcode.cn/problems/global-and-local-inversions/description/
 *
 * algorithms
 * Medium (45.81%)
 * Likes:    148
 * Dislikes: 0
 * Total Accepted:    19.2K
 * Total Submissions: 39.9K
 * Testcase Example:  '[1,0,2]'
 *
 * 给你一个长度为 n 的整数数组 nums ，表示由范围 [0, n - 1] 内所有整数组成的一个排列。
 * 
 * 全局倒置 的数目等于满足下述条件不同下标对 (i, j) 的数目：
 * 
 * 
 * 0 <= i < j < n
 * nums[i] > nums[j]
 * 
 * 
 * 局部倒置 的数目等于满足下述条件的下标 i 的数目：
 * 
 * 
 * 0 <= i < n - 1
 * nums[i] > nums[i + 1]
 * 
 * 
 * 当数组 nums 中 全局倒置 的数量等于 局部倒置 的数量时，返回 true ；否则，返回 false 。
 * 
 * 
 * 
 * 示例 1：
 * 
 * 
 * 输入：nums = [1,0,2]
 * 输出：true
 * 解释：有 1 个全局倒置，和 1 个局部倒置。
 * 
 * 
 * 示例 2：
 * 
 * 
 * 输入：nums = [1,2,0]
 * 输出：false
 * 解释：有 2 个全局倒置，和 1 个局部倒置。
 * 
 * 
 * 
 * 提示：
 * 
 * 
 * n == nums.length
 * 1 <= n <= 10^5
 * 0 <= nums[i] < n
 * nums 中的所有整数 互不相同
 * nums 是范围 [0, n - 1] 内所有数字组成的一个排列
 * 
 * 
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {boolean}
 */
var isIdealPermutation = function(nums) {
  // 局部倒置 必是 全局倒置
  // 判断 局部倒置 数量 === 全局倒置 数量
  // 判断是否存在非局部倒置
  let n = nums.length, minSuff = nums[n - 1];
  for (let i = n - 3; i >= 0; i--) {
      if (nums[i] > minSuff) {
          return false;
      }
      minSuff = Math.min(minSuff, nums[i + 1]);
  }
  return true;
};
// @lc code=end

