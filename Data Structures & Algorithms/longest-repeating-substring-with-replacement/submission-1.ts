class Solution {
    /**
     * @param {string} s
     * @param {number} k
     * @return {number}
     */
    characterReplacement(s: string, k: number): number {
        let maxLength = 0;
        let l = 0, r = 0;
        let maxFreq = 0;
        let countMap = new Map();

        while(r < s.length) {
            countMap.set(s[r], (countMap.get(s[r]) || 0) + 1);
            maxFreq = Math.max(maxFreq, countMap.get(s[r]));

            const windowSize = r - l + 1;
            const replacements = windowSize - maxFreq;

            if(replacements > k) {
                countMap.set(s[l], (countMap.get(s[l]) || 0) - 1);
                l++;
            }

            maxLength = Math.max(maxLength, r - l + 1);
            r++;
        }

        return maxLength;
    }
}
