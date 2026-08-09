# Definition for singly-linked list.
# class ListNode:
#     def __init__(self, val=0, next=None):
#         self.val = val
#         self.next = next

class Solution:
    def addTwoNumbers(self, l1: Optional[ListNode], l2: Optional[ListNode]) -> Optional[ListNode]:
        sum1 = 0 
        sum2 = 0
        n = 0
        while l1:
            sum1 += l1.val * pow(10, n)
            l1 = l1.next
            n += 1
        
        n = 0
        while l2:
            sum2 += l2.val * pow(10, n)
            l2 = l2.next
            n += 1
        
        resultSum = sum1 + sum2

        num = resultSum % 10
        curr = head = ListNode(num)
        resultSum = resultSum // 10

        while resultSum:
            num = resultSum % 10
            curr.next = ListNode(num)
            resultSum = resultSum // 10
            curr = curr.next


        return head


        

        