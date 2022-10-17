/*
 * @lc app=leetcode.cn id=611 lang=javascript
 *
 * [611] 有效三角形的个数
 *
 * https://leetcode.cn/problems/valid-triangle-number/description/
 *
 * algorithms
 * Medium (53.72%)
 * Likes:    441
 * Dislikes: 0
 * Total Accepted:    78.5K
 * Total Submissions: 146K
 * Testcase Example:  '[2,2,3,4]'
 *
 * 给定一个包含非负整数的数组 nums ，返回其中可以组成三角形三条边的三元组个数。
 * 
 * 
 * 
 * 示例 1:
 * 
 * 
 * 输入: nums = [2,2,3,4]
 * 输出: 3
 * 解释:有效的组合是: 
 * 2,3,4 (使用第一个 2)
 * 2,3,4 (使用第二个 2)
 * 2,2,3
 * 
 * 
 * 示例 2:
 * 
 * 
 * 输入: nums = [4,2,3,4]
 * 输出: 4
 * 
 * 
 * 
 * 提示:
 * 
 * 
 * 1 <= nums.length <= 1000
 * 0 <= nums[i] <= 1000
 * 
 * 
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number}
 */
var triangleNumber = function(nums) {
  // 三角形：任意两边之和大于第三边
  // 按照升序排列a<=b<=c
  nums = nums.sort(( a , b ) => a - b )
  // 则a+c>b,b+c>a,只需寻找满足a+b>c的即可
  let number = 0
  // 遍历C
  for(let i = 0; i < nums.length ; i++){
    let left = 0, right = i - 1
    while(left < right) {
      // 寻找符合条件的a和b的最大差值
        if (nums[left] + nums[right] > nums[i]) {
          number += right - left
          right--
        } else {
          left++
        }
    }
  }
  return number
};
// @lc code=end

