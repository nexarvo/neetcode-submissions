class Solution {
    /**
     * @param {string} s
     * @return {number}
     */
    lengthOfLongestSubstring(s: string): number {
        let maxLength = 0;
        let l = 0, r = 0;
        let seen = new Set();

        while(r < s.length) {
            if(!seen.has(s[r])) {
                maxLength = Math.max(maxLength, r - l + 1);
                seen.add(s[r]);
                r++;
            }
            else {
                seen.delete(s[l]);
                l++;
            }
        }

        return maxLength;
    }
}
