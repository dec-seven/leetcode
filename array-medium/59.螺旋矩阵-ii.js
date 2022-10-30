/*
 * @lc app=leetcode.cn id=59 lang=javascript
 *
 * [59] 螺旋矩阵 II
 *
 * https://leetcode.cn/problems/spiral-matrix-ii/description/
 *
 * algorithms
 * Medium (74.92%)
 * Likes:    854
 * Dislikes: 0
 * Total Accepted:    254.6K
 * Total Submissions: 340.2K
 * Testcase Example:  '3'
 *
 * 给你一个正整数 n ，生成一个包含 1 到 n^2 所有元素，且元素按顺时针顺序螺旋排列的 n x n 正方形矩阵 matrix 。
 * 
 * 
 * 
 * 示例 1：
 * 
 * 
 * 输入：n = 3
 * 输出：[[1,2,3],[8,9,4],[7,6,5]]
 * 
 * 
 * 示例 2：
 * 
 * 
 * 输入：n = 1
 * 输出：[[1]]
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
 * @param {number} n
 * @return {number[][]}
 */
var generateMatrix = function(n) {
  let num = 1;
  const matrix = new Array(n).fill(0).map(() => new Array(n).fill(0));
  let left = 0, right = n - 1, top = 0, bottom = n - 1;
  while (left <= right && top <= bottom) {
      for (let column = left; column <= right; column++) {
          matrix[top][column] = num;
          num++;
      }
      for (let row = top + 1; row <= bottom; row++) {
          matrix[row][right] = num;
          num++;
      }
      if (left < right && top < bottom) {
          for (let column = right - 1; column > left; column--) {
              matrix[bottom][column] = num;
              num++;
          }
          for (let row = bottom; row > top; row--) {
              matrix[row][left] = num;
              num++;
          }
      }
      left++;
      right--;
      top++;
      bottom--;
  }
  return matrix;
};

// @lc code=end

