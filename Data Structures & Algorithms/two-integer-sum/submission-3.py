class Solution:
    def twoSum(self, nums: List[int], target: int) -> List[int]:
        indexMap = {}

        for index, num in enumerate(nums):
            indexMap[num] = index

        for index, num in enumerate(nums):
            diff = target - num

            if diff in indexMap and indexMap[diff] != index:
                return [index, indexMap[diff]]