/*
 * @lc app=leetcode.cn id=844 lang=javascript
 *
 * [844] 比较含退格的字符串
 *
 * https://leetcode.cn/problems/backspace-string-compare/description/
 *
 * algorithms
 * Easy (48.57%)
 * Likes:    536
 * Dislikes: 0
 * Total Accepted:    168.7K
 * Total Submissions: 347.4K
 * Testcase Example:  '"ab#c"\n"ad#c"'
 *
 * 给定 s 和 t 两个字符串，当它们分别被输入到空白的文本编辑器后，如果两者相等，返回 true 。# 代表退格字符。
 * 
 * 注意：如果对空文本输入退格字符，文本继续为空。
 * 
 * 
 * 
 * 示例 1：
 * 
 * 
 * 输入：s = "ab#c", t = "ad#c"
 * 输出：true
 * 解释：s 和 t 都会变成 "ac"。
 * 
 * 
 * 示例 2：
 * 
 * 
 * 输入：s = "ab##", t = "c#d#"
 * 输出：true
 * 解释：s 和 t 都会变成 ""。
 * 
 * 
 * 示例 3：
 * 
 * 
 * 输入：s = "a#c", t = "b"
 * 输出：false
 * 解释：s 会变成 "c"，但 t 仍然是 "b"。
 * 
 * 
 * 
 * 提示：
 * 
 * 
 * 1 <= s.length, t.length <= 200
 * s 和 t 只含有小写字母以及字符 '#'
 * 
 * 
 * 
 * 
 * 进阶：
 * 
 * 
 * 你可以用 O(n) 的时间复杂度和 O(1) 的空间复杂度解决该问题吗？
 * 
 * 
 */

// @lc code=start
/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var backspaceCompare = function(s, t) {
  let sIndex = s.length - 1 , sSkip = 0 , sRes = ''
  let tIndex = t.length - 1 , tSkip = 0 , tRes = ''
  while (sIndex >= 0 || tIndex >= 0) {
    while (sIndex >= 0) {
      if (s[sIndex] === '#') {
        sSkip ++
      } else  if (sSkip > 0) {
        sSkip --
      } else {
        sRes = s[sIndex] + sRes
      }
      sIndex--
    }
    while (tIndex >= 0) {
      if (t[tIndex] === '#') {
        tSkip ++
      } else if (tSkip > 0){
        tSkip --
      } else {
        tRes = t[tIndex] + tRes
      }
      tIndex --
    }
  }
  return sRes === tRes
};
// @lc code=end

backspaceCompare("xywrrmp","xywrrmu#p")