class Solution {
    /**
     * @param {string} s
     * @return {number}
     */
    maxLengthBetweenEqualCharacters(s: string): number {
        const firstIdx = new Map();
        const lastIdx = new Map();
        let res = -1;

        for (let i = 0; i < s.length; i++) {
            if (!firstIdx.has(s[i])) {
                firstIdx.set(s[i], i);
            } else {
                lastIdx.set(s[i], i);
            }
        }

        for (const [char, _] of lastIdx) {
            res = Math.max(res, lastIdx.get(char) - firstIdx.get(char) - 1);
        }

        return res;
    }
}
