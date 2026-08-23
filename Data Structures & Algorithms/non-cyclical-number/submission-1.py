class Solution:
    def isHappy(self, n: int) -> bool:
        curr = n
        seen = set()

        while True:
            res = 0
            while curr != 0:
                remainder = curr % 10
                curr = curr // 10
                res += pow(remainder, 2)
                        
            if res == 1:
                return True
            elif res in seen:
                # This condition is for cycle
                return False
            
            seen.add(res)
            curr = res

        