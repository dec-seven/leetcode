/*
 * @lc app=leetcode.cn id=878 lang=javascript
 *
 * [878] 第 N 个神奇数字
 *
 * https://leetcode.cn/problems/nth-magical-number/description/
 *
 * algorithms
 * Hard (30.29%)
 * Likes:    161
 * Dislikes: 0
 * Total Accepted:    13.5K
 * Total Submissions: 36.7K
 * Testcase Example:  '1\n2\n3'
 *
 * 一个正整数如果能被 a 或 b 整除，那么它是神奇的。
 * 
 * 给定三个整数 n , a , b ，返回第 n 个神奇的数字。因为答案可能很大，所以返回答案 对 10^9 + 7 取模 后的值。
 * 
 * 
 * 
 * 
 * 
 * 
 * 示例 1：
 * 
 * 
 * 输入：n = 1, a = 2, b = 3
 * 输出：2
 * 
 * 
 * 示例 2：
 * 
 * 
 * 输入：n = 4, a = 2, b = 3
 * 输出：6
 * 
 * 
 * 
 * 
 * 提示：
 * 
 * 
 * 1 <= n <= 10^9
 * 2 <= a, b <= 4 * 10^4
 * 
 * 
 * 
 * 
 */

// @lc code=start
/**
 * @param {number} n
 * @param {number} a
 * @param {number} b
 * @return {number}
 */
 const MOD = 1000000007;
 var nthMagicalNumber = function(n, a, b) {
     let l = Math.min(a, b);
     let r = n * Math.min(a, b);
     const c = lcm(a, b);
     while (l <= r) {
         const mid = Math.floor((l + r) / 2);
         const cnt = Math.floor(mid / a) + Math.floor(mid / b) - Math.floor(mid / c);
         if (cnt >= n) {
             r = mid - 1;
         } else {
             l = mid + 1;
         }
     }
     return (r + 1) % MOD;
 }
 
 const lcm = (a, b) => {
     return Math.floor(a * b / gcd(a, b));
 }
 
 const gcd = (a, b) => {
     return b !== 0 ? gcd(b, a % b) : a;
 };

// @lc code=end
