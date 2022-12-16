/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {boolean}
 */
 // 1. 复制链表值到数组列表中。
 // 2. 使用双指针法判断是否为回文。
var isPalindrome = function(head) {
  const vals = [];
  while (head != null) {
      vals.push(head.val)
      head = head.next;
  }
  for (let i=0,j=vals.length-1; i<j; ++i, --j ) {
      if (vals[i] != vals[j])
      return false
  }
  return true;
};
