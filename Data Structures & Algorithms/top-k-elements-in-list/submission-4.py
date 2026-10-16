class Solution:
    def topKFrequent(self, nums: List[int], k: int) -> List[int]:
        countMap = {}

        for num in nums: 
            countMap[num] = 1 + countMap.get(num, 0)
        
        sorted_nums = sorted(
            countMap.keys(),
            key=lambda num: countMap[num],
            reverse=True
        )

        return sorted_nums[:k]
        
        