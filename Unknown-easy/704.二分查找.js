/*
 * @lc app=leetcode.cn id=704 lang=javascript
 *
 * [704] 二分查找
 *
 * https://leetcode.cn/problems/binary-search/description/
 *
 * algorithms
 * Easy (54.52%)
 * Likes:    1020
 * Dislikes: 0
 * Total Accepted:    782.4K
 * Total Submissions: 1.4M
 * Testcase Example:  '[-1,0,3,5,9,12]\n9'
 *
 * 给定一个 n 个元素有序的（升序）整型数组 nums 和一个目标值 target  ，写一个函数搜索 nums 中的
 * target，如果目标值存在返回下标，否则返回 -1。
 * 
 * 
 * 示例 1:
 * 
 * 输入: nums = [-1,0,3,5,9,12], target = 9
 * 输出: 4
 * 解释: 9 出现在 nums 中并且下标为 4
 * 
 * 
 * 示例 2:
 * 
 * 输入: nums = [-1,0,3,5,9,12], target = 2
 * 输出: -1
 * 解释: 2 不存在 nums 中因此返回 -1
 * 
 * 
 * 
 * 
 * 提示：
 * 
 * 
 * 你可以假设 nums 中的所有元素是不重复的。
 * n 将在 [1, 10000]之间。
 * nums 的每个元素都将在 [-9999, 9999]之间。
 * 
 * 
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var search = function(nums, target) {
  // 已知数组升序且不重复，寻找目标值
  // 考虑使用二分法求解

  // 写法一，左闭右闭区间
  let left = 0 ,right = nums.length - 1
  // 区间左闭右闭，所以left === right是有意义的 ，所以要用 <= ,即 left <= right
  while(left <= right){
    const middle = parseInt((left + right) / 2)
    // 分析二分查找的一个技巧是：不要出现 else，而是把所有情况用 else if 写清楚，这样可以清楚地展现所有细节
    if (nums[middle] === target) { 
      // 找到目标值
      return middle
    } else if(nums[middle] > target) {
      // 当前这个nums[middle]一定不是target,所以左区间结束位置的下标就是 middle - 1, 即 right = middle - 1
      right = middle - 1
    } else if (nums[middle] < target){
      // 
      left = middle + 1
    }
  }
  return -1
};
// @lc code=end

