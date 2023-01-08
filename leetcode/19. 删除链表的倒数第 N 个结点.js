var removeNthFromEnd = function (head, n) {
  // 判断n是否小于或等于0，其实现实代码中，这里我会报错
  if (!head || !n) return head
  // 快慢指针
  let slow = head
  let quick = head
  let temp = null
  n = n-1
  while(quick && n) {
    quick = quick.next
    n--
  }
  // 判断n是否大于链表的长度，其实现实代码中，这里我会报错
  if (!quick) {
    return head
  }
  while(quick.next) {
    temp = slow
    quick = quick.next
    slow = slow.next
  }
  if (temp) {
    temp.next = slow.next
  } else {
    head = slow.next
  }
  return head
};
