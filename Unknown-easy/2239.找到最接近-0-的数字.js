/*
 * @lc app=leetcode.cn id=2239 lang=javascript
 *
 * [2239] 找到最接近 0 的数字
 *
 * https://leetcode.cn/problems/find-closest-number-to-zero/description/
 *
 * algorithms
 * Easy (54.40%)
 * Likes:    7
 * Dislikes: 0
 * Total Accepted:    9.1K
 * Total Submissions: 16.7K
 * Testcase Example:  '[-4,-2,1,4,8]'
 *
 * 给你一个长度为 n 的整数数组 nums ，请你返回 nums 中最 接近 0 的数字。如果有多个答案，请你返回它们中的 最大值 。
 * 
 * 
 * 
 * 示例 1：
 * 
 * 输入：nums = [-4,-2,1,4,8]
 * 输出：1
 * 解释：
 * -4 到 0 的距离为 |-4| = 4 。
 * -2 到 0 的距离为 |-2| = 2 。
 * 1 到 0 的距离为 |1| = 1 。
 * 4 到 0 的距离为 |4| = 4 。
 * 8 到 0 的距离为 |8| = 8 。
 * 所以，数组中距离 0 最近的数字为 1 。
 * 
 * 
 * 示例 2：
 * 
 * 输入：nums = [2,-1,1]
 * 输出：1
 * 解释：1 和 -1 都是距离 0 最近的数字，所以返回较大值 1 。
 * 
 * 
 * 
 * 
 * 提示：
 * 
 * 
 * 1 <= n <= 1000
 * -10^5 <= nums[i] <= 10^5
 * 
 * 
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number}
 */
 var findClosestNumber = function (nums) {
  let n = nums[0]
  let absn = Math.abs(nums[0])
  for (let i = 1; i < nums.length; i++) {
    if (Math.abs(nums[i]) < absn) {
      n = nums[i]
      absn = Math.abs(nums[i])
    } else if (Math.abs(nums[i]) === absn && nums[i] > 0) {
      n = nums[i]
      absn = n
    }
  }
  return n
};

// @lc code=end

