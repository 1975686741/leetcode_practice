// 编写一个函数来查找字符串数组中的最长公共前缀。

// 如果不存在公共前缀，返回空字符串 ""。

 

// 示例 1：

// 输入：strs = ["flower","flow","flight"]
// 输出："fl"
// 示例 2：

// 输入：strs = ["dog","racecar","car"]
// 输出：""
// 解释：输入不存在公共前缀。

/**
 * @param {string[]} strs
 * @return {string}
 */
var longestCommonPrefix = function(strs) {
    let len = strs.length;
    if (len == 0) {
        return ""
    }
    if (len == 1) {
        return  strs[0]
    }
    let pubstr = strs[0];
    for (let i=1; i<len; i++) {
        let next = strs[i];
        let j=0
        for ( ; j<next.length; j++) {
            if (next[j] != pubstr[j]) {
                pubstr = pubstr.slice(0,j);
                break
            }
        }
       if(strs.includes(pubstr)) {
           pubstr = pubstr.slice(0,j)
       }
    }
    return pubstr;
};
