class Solution {
    /**
     * @param {string} s
     * @return {boolean}
     */
    isValid(s: string): boolean {
        const stack = []
        const closeToOpen = {
            '}': '{',
            ')': '(',
            ']': '['
        }

        for(const bracket of s) {
            if(!closeToOpen[bracket]) {
                stack.push(bracket)
            }
            else {
                const poped = stack.pop();
                if(closeToOpen[bracket] !== poped)
                    return false;
            }
        }

        return stack.length === 0;
    }
}
