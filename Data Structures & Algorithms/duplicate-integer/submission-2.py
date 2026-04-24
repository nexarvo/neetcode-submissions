class Solution:
    def hasDuplicate(self, nums: List[int]) -> bool:
        countMap = {}

        for value in nums:
            if value in countMap:
                countMap[value] = countMap[value] + 1
                if(countMap[value] >= 2):
                    return True
            else: 
                countMap[value] = 1
        
        return False