/*
 * @Date: 2023-03-30 11:27:42
 * @LastEditTime: 2023-03-30 13:14:15
 * @Description: 
 */
/*
 * @lc app=leetcode.cn id=1637 lang=typescript
 *
 * [1637] 两点之间不包含任何点的最宽垂直面积
 *
 * https://leetcode.cn/problems/widest-vertical-area-between-two-points-containing-no-points/description/
 *
 * algorithms
 * Medium (81.02%)
 * Likes:    40
 * Dislikes: 0
 * Total Accepted:    17.4K
 * Total Submissions: 20.5K
 * Testcase Example:  '[[8,7],[9,9],[7,4],[9,7]]'
 *
 * 给你 n 个二维平面上的点 points ，其中 points[i] = [xi, yi] ，请你返回两点之间内部不包含任何点的 最宽垂直区域
 * 的宽度。
 * 
 * 垂直区域 的定义是固定宽度，而 y 轴上无限延伸的一块区域（也就是高度为无穷大）。 最宽垂直区域 为宽度最大的一个垂直区域。
 * 
 * 请注意，垂直区域 边上 的点 不在 区域内。
 * 
 * 
 * 
 * 示例 1：
 * ​
 * 
 * 输入：points = [[8,7],[9,9],[7,4],[9,7]]
 * 输出：1
 * 解释：红色区域和蓝色区域都是最优区域。
 * 
 * 
 * 示例 2：
 * 
 * 
 * 输入：points = [[3,1],[9,0],[1,0],[1,4],[5,3],[8,8]]
 * 输出：3
 * 
 * 
 * 
 * 
 * 提示：
 * 
 * 
 * n == points.length
 * 2 <= n <= 10^5
 * points[i].length == 2
 * 0 <= xi, yi <= 10^9
 * 
 * 
 */

// @lc code=start
function maxWidthOfVerticalArea(points: number[][]): number {
  let max:number = 0
  // 根据x坐标，从小到大排序
  points.sort((a,b) => a[0] - b[0])
  // 循环遍历相邻的x坐标，找出最大值
  for (let i = 1; i < points.length; i++) {
    max = Math.max(points[i][0] - points[i - 1][0], max);
  }
  return max
};
// @lc code=end

