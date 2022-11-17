/*
 * @lc app=leetcode.cn id=792 lang=javascript
 *
 * [792] 匹配子序列的单词数
 *
 * https://leetcode.cn/problems/number-of-matching-subsequences/description/
 *
 * algorithms
 * Medium (47.82%)
 * Likes:    307
 * Dislikes: 0
 * Total Accepted:    27.7K
 * Total Submissions: 55.2K
 * Testcase Example:  '"abcde"\n["a","bb","acd","ace"]'
 *
 * 给定字符串 s 和字符串数组 words, 返回  words[i] 中是s的子序列的单词个数 。
 * 
 * 字符串的 子序列 是从原始字符串中生成的新字符串，可以从中删去一些字符(可以是none)，而不改变其余字符的相对顺序。
 * 
 * 
 * 例如， “ace” 是 “abcde” 的子序列。
 * 
 * 
 * 
 * 
 * 示例 1:
 * 
 * 
 * 输入: s = "abcde", words = ["a","bb","acd","ace"]
 * 输出: 3
 * 解释: 有三个是 s 的子序列的单词: "a", "acd", "ace"。
 * 
 * 
 * Example 2:
 * 
 * 
 * 输入: s = "dsahjpjauf", words = ["ahjpjau","ja","ahbwzgqnuk","tnmlanowax"]
 * 输出: 2
 * 
 * 
 * 
 * 
 * 提示:
 * 
 * 
 * 1 <= s.length <= 5 * 10^4
 * 1 <= words.length <= 5000
 * 1 <= words[i].length <= 50
 * words[i]和 s 都只由小写字母组成。
 * 
 * ​​​​
 */

// @lc code=start
/**
 * @param {string} s
 * @param {string[]} words
 * @return {number}
 */
var numMatchingSubseq = function(s, words) {
  let res = 0
  for (const word of words) {
    let left = 0 ; right = 0
    while (right < word.length && left < s.length)  {
      if (s[left] === word[right]) {
        left ++
        right ++
      } else {
        left ++
      }
    }
    if (right === word.length ) {
     res++ 
    }
  }
  return res
};
// @lc code=end

