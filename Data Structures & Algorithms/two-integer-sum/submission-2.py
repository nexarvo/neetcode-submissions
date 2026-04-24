class Solution:
    def twoSum(self, nums: List[int], target: int) -> List[int]:
        indexMap = {}

        for i, num in enumerate(nums):
            indexMap[num] = i
        
        for i, num in enumerate(nums):
            diff = target - num
            if diff in indexMap and indexMap[diff] != i:
                return [i, indexMap[diff]]
        