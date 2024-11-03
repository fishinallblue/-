"use strict";
// 题目描述： https://leetcode.cn/problems/reverse-words-in-a-string/
// https://leetcode.cn/problemsf/fan-zhuan-dan-ci-shun-xu-lcof/description/
/**
 * @param {string} s
 * @return {string}
 */
var reverseWords = function (s) {
    let res = '';
    let temp = '';
    for (i = 0; i < s.length; i++) {
        if (s.charAt(i) === ' ') {
            if (temp !== '') {
                if (res !== '') {
                    res = temp + ' ' + res;
                }
                else {
                    res = temp + res;
                }
                temp = '';
            }
        }
        else {
            temp = temp + s.charAt(i);
        }
    }
    if (temp !== '' && res !== '') {
        return temp + ' ' + res;
    }
    return res || temp;
};
console.log(reverseWords('  hello   word!  '));
// 更简单的的解法
function reverseWords3(s) {
    return s.split(' ').reverse().join(' ');
}
// 剑指 offer 的思路：
// 移除多余空格
// 将整个字符串反转
// 将每个单词反转
// 举个例子，源字符串为："the sky is blue "
// 移除多余空格 : "the sky is blue"
// 字符串反转："eulb si yks eht"
// 单词反转："blue is sky the"
