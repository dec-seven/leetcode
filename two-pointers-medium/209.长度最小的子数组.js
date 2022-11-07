/*
 * @lc app=leetcode.cn id=209 lang=javascript
 *
 * [209] 长度最小的子数组
 *
 * https://leetcode.cn/problems/minimum-size-subarray-sum/description/
 *
 * algorithms
 * Medium (47.72%)
 * Likes:    1426
 * Dislikes: 0
 * Total Accepted:    438K
 * Total Submissions: 918.3K
 * Testcase Example:  '7\n[2,3,1,2,4,3]'
 *
 * 给定一个含有 n 个正整数的数组和一个正整数 target 。
 * 
 * 找出该数组中满足其和 ≥ target 的长度最小的 连续子数组 [numsl, numsl+1, ..., numsr-1, numsr]
 * ，并返回其长度。如果不存在符合条件的子数组，返回 0 。
 * 
 * 
 * 
 * 示例 1：
 * 
 * 
 * 输入：target = 7, nums = [2,3,1,2,4,3]
 * 输出：2
 * 解释：子数组 [4,3] 是该条件下的长度最小的子数组。
 * 
 * 
 * 示例 2：
 * 
 * 
 * 输入：target = 4, nums = [1,4,4]
 * 输出：1
 * 
 * 
 * 示例 3：
 * 
 * 
 * 输入：target = 11, nums = [1,1,1,1,1,1,1,1]
 * 输出：0
 * 
 * 
 * 
 * 
 * 提示：
 * 
 * 
 * 1 
 * 1 
 * 1 
 * 
 * 
 * 
 * 
 * 进阶：
 * 
 * 
 * 如果你已经实现 O(n) 时间复杂度的解法, 请尝试设计一个 O(n log(n)) 时间复杂度的解法。
 * 
 * 
 */

// @lc code=start
/**
 * @param {number} target
 * @param {number[]} nums
 * @return {number}
 */
var minSubArrayLen = function(target, nums) {
    let sum = 0     // 最小子数组的和
    // 最后的结果,子数组一定小于原数组长度，为了便于后面比较，这里取一个大于最大长度的值。
    let result = nums.length + 1  
    let subLen = 0 // 当前子数组长度
    // 滑动窗口
    let start = 0 // 起始位置
    for(let end = 0; end < nums.length; end++) {
        // 开始遍历，即移动窗口终止位置，放大窗口
        // 计算当前窗口内元素的和
        sum += nums[end]
        // 当sum >= target时 , 窗口内有符合要求的数组，存储子数组长度，并开始移动起始位置
        while(sum >= target){
            // 计算出此时子窗口内数组的长度
            subLen = end - start + 1
            // 比较此时子数组长度和result，取小
            result = result > subLen ? subLen : result
            // 子数组和减去当前起始位置的值
            sum  -= nums[start]
            // 开始移动窗口起始位置，即缩小窗口
            start++
        }
    }
    // 最后判断如果result > 原数组长度，则说明没有最小子数组返回长度0,反之返回result
    return result > nums.length ? 0 : result
};
// @lc code=end

