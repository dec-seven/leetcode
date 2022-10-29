/*
 * @lc app=leetcode.cn id=76 lang=javascript
 *
 * [76] 最小覆盖子串
 *
 * https://leetcode.cn/problems/minimum-window-substring/description/
 *
 * algorithms
 * Hard (44.91%)
 * Likes:    2224
 * Dislikes: 0
 * Total Accepted:    361K
 * Total Submissions: 803.5K
 * Testcase Example:  '"ADOBECODEBANC"\n"ABC"'
 *
 * 给你一个字符串 s 、一个字符串 t 。返回 s 中涵盖 t 所有字符的最小子串。如果 s 中不存在涵盖 t 所有字符的子串，则返回空字符串 ""
 * 。
 * 
 * 
 * 
 * 注意：
 * 
 * 
 * 对于 t 中重复字符，我们寻找的子字符串中该字符数量必须不少于 t 中该字符数量。
 * 如果 s 中存在这样的子串，我们保证它是唯一的答案。
 * 
 * 
 * 
 * 
 * 示例 1：
 * 
 * 
 * 输入：s = "ADOBECODEBANC", t = "ABC"
 * 输出："BANC"
 * 
 * 
 * 示例 2：
 * 
 * 
 * 输入：s = "a", t = "a"
 * 输出："a"
 * 
 * 
 * 示例 3:
 * 
 * 
 * 输入: s = "a", t = "aa"
 * 输出: ""
 * 解释: t 中两个字符 'a' 均应包含在 s 的子串中，
 * 因此没有符合条件的子字符串，返回空字符串。
 * 
 * 
 * 
 * 提示：
 * 
 * 
 * 1 
 * s 和 t 由英文字母组成
 * 
 * 
 * 
 * 进阶：你能设计一个在 o(n) 时间内解决此问题的算法吗？
 */

// @lc code=start
/**
 * @param {string} s
 * @param {string} t
 * @return {string}
 */
var minWindow = function(s, t) {
    let l = 0
    let r = 0
    const need = new Map()
    for(let c of t){
        need.set( c,need.has(c) ? need.get(c) + 1 : 1)
    }

    let needType = need.size
    let res = ''
    while(r<s.length){
        let c = s[r]
        if(need.has(c)){
            need.set( c,need.get(c) -1 )
            if( need.get(c) === 0) needType -= 1
        }
        
        while(needType === 0){
            const newRes = s.substring(l,r+1)
            if( !res || newRes.length < res.length ) res = newRes

            const c2 = s[l]
            if(need.has(c2)){
                need.set(c2,need.get(c2) + 1)
                if( need.get(c2) === 1 ) needType += 1
            }
            l += 1
        }
        r += 1
    }
    return res
};

// @lc code=end

