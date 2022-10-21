/*
 * @lc app=leetcode.cn id=34 lang=javascript
 *
 * [34] 在排序数组中查找元素的第一个和最后一个位置
 *
 * https://leetcode.cn/problems/find-first-and-last-position-of-element-in-sorted-array/description/
 *
 * algorithms
 * Medium (42.28%)
 * Likes:    1963
 * Dislikes: 0
 * Total Accepted:    666.2K
 * Total Submissions: 1.6M
 * Testcase Example:  '[5,7,7,8,8,10]\n8'
 *
 * 给你一个按照非递减顺序排列的整数数组 nums，和一个目标值 target。请你找出给定目标值在数组中的开始位置和结束位置。
 * 
 * 如果数组中不存在目标值 target，返回 [-1, -1]。
 * 
 * 你必须设计并实现时间复杂度为 O(log n) 的算法解决此问题。
 * 
 * 
 * 
 * 示例 1：
 * 
 * 
 * 输入：nums = [5,7,7,8,8,10], target = 8
 * 输出：[3,4]
 * 
 * 示例 2：
 * 
 * 
 * 输入：nums = [5,7,7,8,8,10], target = 6
 * 输出：[-1,-1]
 * 
 * 示例 3：
 * 
 * 
 * 输入：nums = [], target = 0
 * 输出：[-1,-1]
 * 
 * 
 * 
 * 提示：
 * 
 * 
 * 0 <= nums.length <= 10^5
 * -10^9 <= nums[i] <= 10^9
 * nums 是一个非递减数组
 * -10^9 <= target <= 10^9
 * 
 * 
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var searchRange = function(nums, target) {
  // 数组已排序，考虑二分法
  // 使用左闭右闭写法
  // ①先查找第一个target的下标
  // ②再查找第一个大于target的下标
  let ans = [-1, -1];
  const leftIdx = searchIndex(nums, target, true);
  const rightIdx = searchIndex(nums, target, false) - 1;
  // 校验查找到的left和right下标是否符合要求
  // 符合要求返回[left,right]，不符合要求返回[-1,-1]
  if (leftIdx <= rightIdx && rightIdx < nums.length && nums[leftIdx] === target && nums[rightIdx] === target) {
      ans = [leftIdx, rightIdx];
  } 
  return ans;
};

const  searchIndex = function(nums , target ,flag){
  let left = 0, right = nums.length - 1, ans = nums.length;
  while(left <= right){
    const middle = left + Math.floor((right-left) / 2)
    if(nums[middle] > target || (flag && nums[middle] >= target)){
      // flag为true 查找①
      // flag为flase 查找②

      // 在左区间
      right = middle - 1
      ans = middle
    } else {
      left = middle + 1
    }
  }
  return ans
}
// @lc code=end

